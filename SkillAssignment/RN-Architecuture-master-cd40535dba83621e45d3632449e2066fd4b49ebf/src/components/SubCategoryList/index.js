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
  FlatList
} from 'react-native';

import {useSelector} from 'react-redux';

const {height,width} = Dimensions.get('window');

const dataList = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Sub Category 1',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Sub Category 2',
  }
];

function SubCategory(props) {
  const authReducer = useSelector(state => state.authReducer);
  const {onPressProductTab} = props;
  const {isLoading} = authReducer;
  return (
    <View style={{ flex: 0.8, paddingBottom: 0,marginTop:0 }}>
            <Text style={{marginTop: 0, fontSize: 24, textAlign: 'center'}}>Sub Categories</Text>

        <FlatList
          // style={{ marginBottom: 20 }}
          data={dataList}
          contentContainerStyle={{
            alignItems: 'center', paddingBottom: 1
          }}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() => {
                onPressProductTab();
              }}
              style={[
                {
                  backgroundColor: 'white',
                  paddingHorizontal: 16,
                  paddingVertical: 8,
                  width: (width - 48) / 2.1,
                  height: (width - 48) / 2.5,
                },
                index % 2 == 0
                  ? { marginRight: 8, marginTop: 16 }
                  : { marginLeft: 8, marginTop: 16 },
              ]}>
              <View
                style={{
                  flex: 0.8,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image source={item.logo} resizeMode="contain" />
              </View>
              <Text
                style={{
                  alignSelf: 'center',
                  color: 'red',
                }}>
                {item.title}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
  );
}


export default SubCategory = React.memo(SubCategory);
