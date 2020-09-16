/* eslint-disable module-resolver/use-alias */
import AppActions from '../../actions/appActions';
import Constants from '../../constants';
import React, {Component, lazy} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {manageComponentStats} from '../../actions/componentStats';
import withLoadingScreen from './../../hoc/withLoadingScreen';
import axiosConfig from '../../utils/AxiosConfig';
import authReducer from '../../reducers/auth';
import {
  ActivityIndicator,
  Dimensions,
  Image,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  Platform,
  FlatList
} from 'react-native';

const Dashboard = lazy(() => import('../../components/Dashboard'));
const {height,width} = Dimensions.get('window');


class DashBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {data: ''};
    axiosConfig
      .get(
        'https://mean.stagingsdei.com:6047/category/pagination?perPage=10&page=1',
      )
      .then(response => {
        //console.log('------------------');
        //console.log(response.data.data.data);
        const responseData = response.data.data.data;
        this.setState({data: responseData});
        console.log(this.state.data);
      });
  }
  componentDidMount() {
    this.props.manageComponentStats(
      this.props.componentId,
      'Home',
      this.props.componentStats,
    );
    console.log('testtttt');
    
  }

  render() {
    return (
    <View style={{ flex: 0.8, paddingBottom: 0,marginTop:0 }}>
            <Text style={{marginTop:70, fontSize:24, textAlign: 'center'}}>Product List</Text>
        <FlatList
          // style={{ marginBottom: 20 }}
          data={this.state.data}
          contentContainerStyle={{
            alignItems: 'center', paddingBottom: 1
          }}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item._id}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() => {
                this._onPressProductTab()
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
                <Image 
                style= {{width:90, height:90}}
                source={{uri: item.icon}}
                 resizeMode="contain" 
                 />
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
    /*
    return (
      <View style={Styles.homeContainer}>
        <Dashboard onPressProductTab={this._onPressProductTab} />
      </View>
    );*/
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


/*
const mapStateToProps = ({productReducer}) => ({
  isLoading: productReducer.isLoading,
  responseData: productReducer.responseData,
});
*/
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
