/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable module-resolver/use-alias */
import Constants from '@constants';
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

function ProductDetail(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const authReducer = useSelector(state => state.authReducer);
  const {onLogin, isLoggedIn,onRegister} = props;
  const {isLoading} = authReducer;
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        paddingHorizontal: 100,
      }}>
      <Text style={{marginTop: 20, fontSize: 24, textAlign: 'center'}}>Product Detail</Text>
    </ScrollView>
  );
}
export default ProductDetail = React.memo(ProductDetail);
