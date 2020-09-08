/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable module-resolver/use-alias */
import React, {useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
  Platform,
  ScrollView,
} from 'react-native';
import {useSelector} from 'react-redux';

const {height} = Dimensions.get('window');

function Register(props) {
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

  const authReducer = useSelector(state => state.authReducer);
  const {onLogin, isLoggedIn, onRegister } = props;
  const {isLoading} = authReducer;
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        paddingHorizontal: 20,
      }}>

<Text style={{marginTop: 20, fontSize: 24, textAlign: 'center'}}>Registration</Text>

      <Text style={{marginTop: 50, fontSize: 24, color: 'dodgerblue'}}>First Name</Text>
        <TextInput
        style={{marginTop: 10, fontSize: 20,borderBottomWidth: 1}}
        value={fName}
        placeholder="eg: Kevin "
        keyboardType="email-address"
        underlineColorAndroid="transparent"
        onChangeText={fName => setFName(fName)}
      /> 

      <Text style={{marginTop: 20, fontSize: 24, color: 'dodgerblue'}}>Last Name</Text>
        <TextInput
        style={{marginTop: 10, fontSize: 20,borderBottomWidth: 1}}
        value={lName}
        placeholder="eg: Steve"
        keyboardType="email-address"
        underlineColorAndroid="transparent"
        onChangeText={lName => setLName(lName)}
      /> 

      <Text style={{marginTop: 20, fontSize: 24, color: 'dodgerblue'}}>Email</Text>
      <TextInput
        style={{marginTop: 10, fontSize: 20,borderBottomWidth: 1}}
        value={email}
        placeholder="example@gmail.com"
        keyboardType="email-address"
        underlineColorAndroid="transparent"
        onChangeText={email => setEmail(email)}
      />

      <Text style={{marginTop: 20, fontSize: 24, color: 'dodgerblue'}}>Password</Text>
        <TextInput
        style={{marginTop: 10, fontSize: 20,borderBottomWidth: 1}}
        value={password}
        placeholder="************"
        secureTextEntry={true}
        underlineColorAndroid="transparent"
        onChangeText={password => setPassword(password)}
      />

      <Text style={{marginTop: 20, fontSize: 24, color: 'dodgerblue'}}>Role</Text>
        <TextInput
        style={{marginTop: 10, fontSize: 20,borderBottomWidth: 1}}
        value={role}
        placeholder=""
        underlineColorAndroid="transparent"
        onChangeText={role => setRole(role)}
      />

<Text style={{marginTop: 20, fontSize: 24, color: 'dodgerblue'}}>Phone</Text>
      <TextInput
        style={{marginTop: 10, fontSize: 20,borderBottomWidth: 1}}
        value={phone}
        placeholder=""
        keyboardType="phone-pad"
        underlineColorAndroid="transparent"
        onChangeText={phone => setPhone(phone)}
      />

<Text style={{marginTop: 20, fontSize: 24, color: 'dodgerblue'}}>Address</Text>
      <TextInput
        style={{marginTop: 10, fontSize: 20,borderBottomWidth: 1}}
        value={address}
        placeholder=""
        underlineColorAndroid="transparent"
        onChangeText={address => setAddress(address)}
      />

<Text style={{marginTop: 20, fontSize: 24, color: 'dodgerblue'}}>City</Text>
      <TextInput
        style={{marginTop: 10, fontSize: 20,borderBottomWidth: 1}}
        value={city}
        placeholder=""
        underlineColorAndroid="transparent"
        onChangeText={city => setCity(city)}
      />

<Text style={{marginTop: 20, fontSize: 24, color: 'dodgerblue'}}>State</Text>
      <TextInput
        style={{marginTop: 10, fontSize: 20,borderBottomWidth: 1}}
        value={state}
        placeholder=""
        underlineColorAndroid="transparent"
        onChangeText={state => setState(state)}
      />

<Text style={{marginTop: 20, fontSize: 24, color: 'dodgerblue'}}>Country</Text>
      <TextInput
        style={{marginTop: 10, fontSize: 20,borderBottomWidth: 1}}
        value={country}
        placeholder=""
        underlineColorAndroid="transparent"
        onChangeText={country => setCountry(country)}
      />

<Text style={{marginTop: 20, fontSize: 24, color: 'dodgerblue'}}>Zip</Text>
      <TextInput
        style={{marginTop: 10, fontSize: 20,borderBottomWidth: 1}}
        value={zip}
        placeholder=""
        underlineColorAndroid="transparent"
        onChangeText={zip => setZip(zip)}
      />
      
      <TouchableOpacity
        style={{
          height: 52,
          backgroundColor: 'dodgerblue',
          marginTop: 50,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={() => onRegister()}>
        <Text style={{fontSize: 24, color: 'white'}}>Register</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
export default Register = React.memo(Register);
