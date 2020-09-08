/* eslint-disable module-resolver/use-alias */
import AppActions from '../../actions/appActions';
import Constants from '../../constants';
import React, {Component, lazy} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {manageComponentStats} from '../../actions/componentStats';
import withLoadingScreen from './../../hoc/withLoadingScreen';

const Dashboard = lazy(() => import('../../components/Dashboard'));

class DashBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {isLoading: true};
  }
  componentDidMount() {
    this.props.manageComponentStats(
      this.props.componentId,
      'Home',
      this.props.componentStats,
    );
    console.log('Hellooooo')
    fetch('https://mean.stagingsdei.com:6047/category/pagination?perPage=10&page=1')
    .then(response => response.json())
    .then((responseJson) => {
        console.log('getting data from fetch', responseJson)
        setTimeout(() => {
            this.setState({
                //loading: false,
                //dataSource: responseJson
            })
        }, 2000)

    })
    .catch(error => console.log(error))
  }

  render() {
    return (
      <View style={Styles.homeContainer}>
        <Dashboard onPressProductTab={this._onPressProductTab} />
      </View>
    );
  }

  _onPressProductTab = () => {
    let {componentId} = this.props;
    this.props.AppActions.pushToParticularScreenWithCustomOptions(
      componentId,
      'SubCategoryList',
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

const MyDash = withLoadingScreen('small')(DashBoard); // Using a common HOC for loading component
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
