import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Alert,
    ScrollView,
    FlatList,
    BackHandler
} from 'react-native';
import Loader from "../utilities/Loader";
import { useIsFocused } from '@react-navigation/native';
import * as APIS from '../utilities/Api';
import { ReportsScreenStyles ,ReportsDetailsScreenStyles} from '../utilities/styles';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function (props) {
    const isFocused = useIsFocused();
    return <ReportDetailsScreen {...props} isFocused={isFocused} />;
}
class ReportDetailsScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loaded: "",
            loading: "",
            reportDetails: this.props.route.params.item,
        };
    }
    handleBackButton = () => {
        this.props.navigation.navigate("ReportScreen");
        return true;
      }
   
    openReportDetails = () => {
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
            <View style={ReportsScreenStyles.mainView}>
                <Loader loading={this.state.loading} />
                <View style={ReportsScreenStyles.heading}>
                <Text style={ReportsScreenStyles.headingText}>Task Details</Text>
                <Text style={ReportsDetailsScreenStyles.headingSubText}>ID:- {this.state.reportDetails.id}</Text>
                <Text style={ReportsDetailsScreenStyles.headingSubText}>Name:- {this.state.reportDetails.name}</Text>
                <Text style={ReportsDetailsScreenStyles.headingSubText}>Email:- {this.state.reportDetails.email}</Text>
                <Text style={ReportsDetailsScreenStyles.headingSubText}>Gender:- {this.state.reportDetails.gender}</Text>
                
                <Text style={ReportsDetailsScreenStyles.headingSubText}>Status:- {this.state.reportDetails.status == "active" ? <Text style={[ReportsScreenStyles.headingSubText,{color:"#6da938"}]}>Active</Text> : <Text style={[ReportsScreenStyles.headingSubText,{color:"#d24d4e"}]}>Inactive</Text>}</Text>

                </View>
            </View>
        );
    }
} 