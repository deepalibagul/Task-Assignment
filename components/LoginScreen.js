
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  Alert,
  ScrollView,
  FlatList,
  BackHandler
} from 'react-native';
import Loader from "../utilities/Loader";
import { useIsFocused } from '@react-navigation/native';
import * as APIS from '../utilities/Api';
import { LoginScreenStyles } from '../utilities/styles';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function (props) {
  const isFocused = useIsFocused();
  return <LoginScreen {...props} isFocused={isFocused} />;
}
class LoginScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loaded: "",
      loading: "",
    };
  }
  handleBackButton = () => {
    Alert.alert(
      'Exit App',
      'Exiting the application?', [{
        text: 'Cancel',
        onPress: console.log('Cancel Pressed'),
        style: 'cancel'
      }, {
        text: 'OK',
        // onPress: () => BackHandler.exitApp(this.logoutUser()),
        onPress: () => BackHandler.exitApp(),
      },], {
      cancelable: false
    }
    )
    return true;
  }
  onLogin = () => {
    this.props.navigation.navigate("Home");
  }
  render() {
    const { isFocused } = this.props;
    if (isFocused == true && this.state.loaded == false) {
      BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    }
    else if (isFocused == false) {
      this.state.loaded = false;
      BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);

    }
    return (
      <View style={LoginScreenStyles.container}>
        <Loader loading={this.state.loading} />
        <Image style={LoginScreenStyles.image} source={require("../images/book.png")} />

        <View style={LoginScreenStyles.inputHeader}>
          <Text style={LoginScreenStyles.btnText}>E- Mail Address</Text>
        </View>
        <View style={LoginScreenStyles.inputContainer}>
          <Icon name="envelope-o" size={20} color="#dadada" style={LoginScreenStyles.inputIcon}/>
          <TextInput style={LoginScreenStyles.inputs}
            keyboardType="email-address"
            underlineColorAndroid='transparent'
            onChangeText={(email) => this.setState({ email })} />
        </View>
        <View style={LoginScreenStyles.inputHeader}>
          <Text style={LoginScreenStyles.btnText}>Password</Text>
        </View>
        <View style={LoginScreenStyles.inputContainer}>
        <Icon name="lock" size={20} color="#dadada" style={LoginScreenStyles.inputIcon}/>
          <TextInput style={LoginScreenStyles.inputs}
            secureTextEntry={true}
            underlineColorAndroid='transparent'
            onChangeText={(password) => this.setState({ password })} />
        </View>

        <TouchableOpacity style={LoginScreenStyles.btnForgotPassword} >
          <Text style={LoginScreenStyles.btnText}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[LoginScreenStyles.buttonContainer]} onPress={() => this.onLogin()}>
          <Text style={LoginScreenStyles.loginText}>Login</Text>
        </TouchableOpacity>


      </View>
    );
  }
}
