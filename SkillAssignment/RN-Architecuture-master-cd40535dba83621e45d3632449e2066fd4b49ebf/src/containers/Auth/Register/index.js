/* eslint-disable module-resolver/use-alias */
import AppActions from '@actions/appActions';
import {manageComponentStats} from '@actions/componentStats';
import {ThemeContext} from '@hoc/withRedux';
import React, {Component, lazy} from 'react';
import {Alert, StatusBar, StyleSheet, View, Text} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators, compose} from 'redux';
import {goHome, goToAuth} from '@config/navigation';
import axiosConfig from '../../../utils/AxiosConfig';

const RegisterComponent = lazy(() =>
  import('../../../components/Auth/Register'),
);

class Register extends Component {
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
      'Signup',
      this.props.componentStats,
    );
  }

  /*
    const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [zip, setZip] = useState('');

  */
  _onPressSignup = (fName,lName,email, password,role,phone,address,city,state,country,zip) => {
    /*
    let requestPayload = {
      email: email,
      password: password,
    };
    this.props.AuthActions.signup(requestPayload);
    */

  axiosConfig
  .post(
    'https://mean.stagingsdei.com:6047/user/register',{firstname:fName,lastname:lName,email: email,password: password,role: role,phone:phone,address:address,city:city,state:state,country:country,zip:zip}
  )
  .then(response => {
    console.log('------------------');
    console.log(response.data);
    const responseData = response.data.data.data;
    this.setState({data: responseData});
    console.log(this.state.data);
    goHome();
  });
  };

  render() {
    return (
      <View style={styles.container}>
        <RegisterComponent onRegister={this._onPressSignup} />
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
