/* eslint-disable module-resolver/use-alias */
import AppActions from '../../../actions/appActions';
import {manageComponentStats} from '../../../actions/componentStats';
import {getUsers} from '../../../actions/sampleActions';

import {ThemeContext} from '../../../hoc/withRedux';
import Constants from '../../../constants';
import React, {Component, lazy} from 'react';
import {Alert, StatusBar, StyleSheet, View, Text} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators, compose} from 'redux';
import {goHome, goToAuth} from '../../../config/navigation';
import axiosConfig from '../../../utils/AxiosConfig';
import constants from '../../../constants';
//import {UIActivityIndicator} from 'react-native-indicators';


const SignInComponent = lazy(() => import('../../../components/Auth/SignIn'));

class SignIn extends Component {
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
      'Login',
      this.props.componentStats,
    );
  }

  
  _onPressLogin = (email, password) => {
    console.log(email, password, 'email, password');
    const postData = {
      email: email,
      password: password,
      role: '4',
    };

    axiosConfig
    .post(
      'https://mean.stagingsdei.com:6047/user/login',{email: email,password: password,role: '4'}
    )
    .then(response => {
      console.log('------------------');
      console.log(response.data);
      const responseData = response.data.data.data;
      this.setState({data: responseData});
      console.log(this.state.data);
      goHome();
    })
    
  };

  _onPressRegister = () => {
    let {componentId} = this.props;
    this.props.AppActions.pushToParticularScreenWithCustomOptions(
      componentId,
      'Register',
      {},
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <SignInComponent onLogin={this._onPressLogin} onRegister={this._onPressRegister} />
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

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Constants.Colors.White,
  },
});
