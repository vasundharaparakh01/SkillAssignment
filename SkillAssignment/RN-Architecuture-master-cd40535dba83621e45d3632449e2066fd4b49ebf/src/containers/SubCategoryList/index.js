/* eslint-disable module-resolver/use-alias */
import AppActions from '../../actions/appActions';
import Constants from '../../constants';
import React, {Component, lazy} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {manageComponentStats} from '../../actions/componentStats';
import withLoadingScreen from './../../hoc/withLoadingScreen';

const SubCategoryList = lazy(() => import('../../components/SubCategoryList'));

class SubCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {isLoading: true};
  }
  componentDidMount() {
    this.props.manageComponentStats(
      this.props.componentId,
      'SubCategory',
      this.props.componentStats,
    );
  }

  render() {
    return (
      <View style={Styles.homeContainer}>
        <SubCategoryList onPressProductTab={this._onPressProductTab} />
      </View>
    );
  }

  _onPressProductTab = () => {
    let {componentId} = this.props;
    this.props.AppActions.pushToParticularScreenWithCustomOptions(
      componentId,
      'ProductDetail',
      {},
    );
  };
}

const mapStateToProps = ({authReducer}) => ({
  isLoading: authReducer.isLoading,
});

const mapDispatchToProps = dispatch => ({
  AppActions: bindActionCreators(AppActions, dispatch),
  manageComponentStats: bindActionCreators(manageComponentStats, dispatch),
});

const MyDash = withLoadingScreen('small')(SubCategory); // Using a common HOC for loading component
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyDash);

const Styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  homeView: {flex: 0.8, justifyContent: 'center', alignItems: 'center'},
  headerTitleContainer: {
    flex: 0.6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitleTxt: {
    color: Constants.Colors.White,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
