
import * as React from 'react';
import { View, Text, LogBox, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './components/LoginScreen';
import ReportScreen from './components/ReportScreen';
import DashboardScreen from './components/DashboardScreen';
import ProfileScreen from './components/ProfileScreen';
import ReportDetailsScreen from './components/ReportDetailsScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconFont from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

LogBox.ignoreAllLogs();

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
function ReportScreenStack({ navigation }) {

  return (
    <Stack.Navigator initialRouteName="ReportScreen">

      <Stack.Screen
        name="ReportScreen"
        component={ReportScreen}
        options={{
          title: '', 
          headerShown: false,
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          
          headerStyle: {
            borderBottomWidth: 0,
            backgroundColor: '#410e68',
            
          },
          headerShadowVisible: true,
          headerShadowVisible: true,
          headerLeft: () => (
            <TouchableOpacity style={{ paddingRight: 10 }} onPress={() =>
              navigation.navigate('LoginScreen')
            }>
              <Icon name="chevron-circle-left" size={25} color="white"/>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <IconFont name="bars" size={20} color="white" onPress={() => alert('We can add drawer navigation here')} />
          ),
        }}
      />
       <Stack.Screen
        name="ReportDetailsScreen"
        component={ReportDetailsScreen}
        options={{
          title: '', 
          headerShown: false,
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerStyle: {
            borderBottomWidth: 0,
            backgroundColor: '#410e68',
            
          },
          headerShadowVisible: true,
          headerShadowVisible: true,
          headerLeft: () => (
            <TouchableOpacity style={{ paddingRight: 10 }} onPress={() =>
              navigation.navigate('ReportScreen')
            }>
              <Icon name="chevron-circle-left" size={25} color="white"/>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <IconFont name="bars" size={20} color="white" onPress={() => alert('We can add drawer navigation here')} />
          ),
        }}
      />
    </Stack.Navigator>
  );
}
function Home() {
  return (
    <Tab.Navigator initialRouteName="Audit Reports" 
   
    screenOptions={{ headerShown: true,tabBarStyle: {height: 60,}, }}>
      <Tab.Screen
        name="Dashboard"
        listeners={{
          tabPress: e => {
            e.preventDefault();
          },
        }}
        options={{
         
          tabBarActiveTintColor: "#dadada",
          tabBarInactiveTintColor: "#dadada",
          headerShown: true,
          tabBarIcon: ({ focused }) => (
            
            <View style={{ justifyContent: "center", alignItems: "center" ,}}>
            <MaterialCommunityIcons name="view-dashboard-outline" color="#dadada" size={30}/>
          </View>
          ),
          unmountOnBlur: true,
        }}
        component={DashboardScreen} />
      <Tab.Screen
        name="Audit Reports"
        listeners={{
          tabPress: e => {
            e.preventDefault();
          },
        }}
        options={{
         headerTintColor:"#410e68",
          headerStyle:{
            backgroundColor:"#410e68",
            borderBottomRightRadius:10,
            borderBottomLeftRadius:10
          },
          tabBarActiveTintColor: "#dadada",
          tabBarInactiveTintColor: "#dadada",
          headerShown: true,
          headerLeft: () => (
            <TouchableOpacity style={{ paddingLeft: 20 }} onPress={() => alert('We can add Back button navigation')}>
              <Icon name="chevron-circle-left" size={30} color="white"/>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <IconFont name="bars" style={{ paddingRight: 20 }} size={25} color="white" onPress={() => alert('We can add drawer navigation here')} />
          ),
          tabBarIcon: ({ focused }) => (
            <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Icon name="file-text-o" color="#dadada" size={25}/>
          </View>

          ),
          unmountOnBlur: true,
        }}
        component={ReportScreenStack} />
      <Tab.Screen
        name="Profile"
        listeners={{
          tabPress: e => {
            e.preventDefault();
          },
        }}
        options={{
          tabBarActiveTintColor: "#dadada",
          tabBarInactiveTintColor: "#dadada",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Icon name="user-o" color="#dadada" size={25}/>
          </View>

          ),
          unmountOnBlur: true,
        }}
        component={ProfileScreen} />
    </Tab.Navigator>
  );
}
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LoginScreen"
          options={{
            headerShown: false
          }}
          component={LoginScreen} />
        <Stack.Screen
          name="Home"
          options={{
            headerShown: false
          }}
          component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;