/* eslint-disable module-resolver/use-alias */
import AppActions from '../../actions/appActions';
import {manageComponentStats} from '../../actions/componentStats';
import {getUsers} from '../../actions/sampleActions';

import {ThemeContext} from '../../hoc/withRedux';
import Constants from '../../constants';
import React, {Component, lazy} from 'react';
import {Alert, StatusBar, StyleSheet, View, Text} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators, compose} from 'redux';
import {goHome, goToAuth} from '../../config/navigation';

const ProductDetailComponent = lazy(() =>
  import('../../components/ProductDetail'),
);

class ProductDetail extends Component {
  // Assign a contextType to read the current theme context.
  // React will find the closest theme Provider above and use its value.
  // In this example, the current theme is "dark".
  static contextType = ThemeContext;

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.manageComponentStats(
      this.props.componentId,
      'ProductDetail',
      this.props.componentStats,
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <ProductDetailComponent />
      </View>
    );
  }
}

const mapStateToProps = ({authReducer}) => ({
  isLoggedIn: authReducer.isLoggedIn,
  isLoading: authReducer.isLoading,
});

const mapDispatchToProps = dispatch => ({
  AppActions: bindActionCreators(AppActions, dispatch),
  manageComponentStats: bindActionCreators(manageComponentStats, dispatch),
  getUsers: bindActionCreators(getUsers, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductDetail);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Constants.Colors.White,
  },
});
