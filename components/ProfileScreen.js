
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
} from 'react-native';
import Loader from "../utilities/Loader";
import { useIsFocused } from '@react-navigation/native';
import * as APIS from '../utilities/Api';
import { LoginScreenStyles } from '../utilities/styles';
export default function (props) {
  const isFocused = useIsFocused();
  return <ProfileScreen {...props} isFocused={isFocused} />;
}
class ProfileScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loaded: "",
      loading: "",
    };
  }
 
  render() {
    const { isFocused } = this.props;
    if (isFocused == true && this.state.loaded == false) {

    }
    else if (isFocused == false) {
      this.state.loaded = false;
    }
    return (
      <View style={LoginScreenStyles.container}>
   <Text>Profile Screen</Text>

      </View>
    );
  }
}
