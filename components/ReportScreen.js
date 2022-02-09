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
    BackHandler,
    TextInput,
    RefreshControl
} from 'react-native';
import Loader from "../utilities/Loader";
import { useIsFocused } from '@react-navigation/native';
import * as APIS from '../utilities/Api';
import { ReportsScreenStyles } from '../utilities/styles';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function (props) {
    const isFocused = useIsFocused();
    return <ReportScreen {...props} isFocused={isFocused} />;
}
class ReportScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loaded: "",
            loading: "",
            search: "",
            reportDetails: [],
            reportDetailsData: [],
            reportDetailsSearch: [],
            refreshing: false
        };
    }
    handleBackButton = () => {
        this.setState({ search: "" })
        this.props.navigation.navigate("LoginScreen");
        return true;
    }
    getReportDetails = () => {
        this.setState({ loading: true, loaded: true })
        fetch(APIS.BASEURL, {
            method: 'GET',
            headers: new Headers({
                "content-type": "application/json",
                "Accept": "application/json",
            }),
        })
            .then(function (response) {
                return response.json();
            })
            .then((result) => {

                this.setState({ loading: false })
                this.setState({ reportDetails: result.data, reportDetailsData: result.data, reportDetailsSearch: result.data })
            })
            .catch((error) => {
                console.error(error);
            });
    }
    openReportDetails = (item) => {
        this.setState({ search: "" })
        this.props.navigation.navigate("ReportDetailsScreen", { item });
    }
    searchFilterFunction = (text) => {

        let reportData = this.state.reportDetailsSearch
        if (text) {
            const newData = reportData.filter(
                function (item) {
                    const itemData = item.name
                        ? item.name.toUpperCase()
                        : 'not found'.toUpperCase();
                    const textData = text.toUpperCase();
                    return itemData.indexOf(textData) > -1;
                });
            this.setState({ reportDetails: newData, search: text })
        }
        else {
            this.setState({ reportDetails: this.state.reportDetailsData, search: text })
        }
    };
    onRefresh = () => {
        debugger
        this.setState({ refreshing: true }, () => {
            this.getReportDetails()
            setTimeout(() => { this.setState({ refreshing: false }) }, 2000)
            // wait(2000).then(() => {this.setState({refreshing: false})});
        })


    }
    render() {
        const { isFocused } = this.props;
        if (isFocused == true && this.state.loaded == false) {
            this.getReportDetails()
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
                    <Text style={ReportsScreenStyles.headingText}>Tasks</Text>
                    <TextInput style={ReportsScreenStyles.headingSubText}
                        onChangeText={(text) => this.searchFilterFunction(text)}
                        onClear={(text) => this.searchFilterFunction('text')}
                        value={this.state.search}
                        placeholder="Search Results"
                    />
                </View>
                <FlatList
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={() => { this.onRefresh() }}
                        />
                    }
                    data={this.state.reportDetails}
                    keyExtractor={(item) => {
                        return item.id;
                    }}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity onPress={() => this.openReportDetails(item)} style={ReportsScreenStyles.subContainer}>
                                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                    <View>

                                        <Text style={ReportsScreenStyles.id}>#{item.id}</Text>
                                    </View>
                                    <View>
                                        {
                                            item.status == "active" ?
                                                <Icon name="check-circle" size={30} color="#6da938" />
                                                :
                                                <Icon name="times-circle" size={30} color="#d24d4e" />
                                        }

                                    </View>
                                </View>
                                <View style={{ marginVertical: 5 }}>
                                    <Text style={ReportsScreenStyles.name}>{item.name}</Text>
                                </View>
                                <View style={{ flexDirection: "row" }}>
                                    <View style={{ flexBasis: "25%" }}>
                                        <Text style={ReportsScreenStyles.text}>E- Mail ID:</Text>
                                    </View>
                                    <View style={{ flexBasis: "75%" }}>
                                        <Text style={ReportsScreenStyles.text}>  {item.email}</Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: "row" }}>
                                    <View style={{ flexBasis: "30%" }}>
                                        <Text style={[ReportsScreenStyles.text, { paddingLeft: 12 }]}>Gender:</Text>
                                    </View>
                                    <View style={{ flexBasis: "25%" }}>
                                        {
                                            item.gender == "male" ?
                                                <Text style={ReportsScreenStyles.text}>  Male</Text>
                                                :
                                                <Text style={ReportsScreenStyles.text}>  Female</Text>
                                        }

                                    </View>
                                    <View style={{ flexBasis: "45%", justifyContent: "flex-end", alignItems: "flex-end" }}>
                                        <Text style={ReportsScreenStyles.text}>Status: {item.status == "active" ? <Text style={[ReportsScreenStyles.text, { color: "#6da938" , fontWeight:"bold"}]}>Active</Text> : <Text style={[ReportsScreenStyles.text, { color: "#d24d4e", fontWeight:"bold" }]}>Inactive</Text>}</Text>
                                    </View>
                                    {/* <View style={{ flexBasis: "50%", justifyContent: "flex-end", alignItems: "flex-end" }}>
                                        <Text style={ReportsScreenStyles.text}>Status: <Text style={[ReportsScreenStyles.text, { color: item.status == "active" ? "#6da938" : "#d24d4e" }]}>{item.status}</Text></Text>
                                    </View> */}
                                </View>

                            </TouchableOpacity>
                        )
                    }} />
            </View>
        );
    }
}