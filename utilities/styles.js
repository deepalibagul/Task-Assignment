import { StyleSheet, Dimensions, Platform, NativeModules } from 'react-native';

const widthMobile = Dimensions.get('window').width
const LoginScreenStyles = StyleSheet.create({
  image:{
width:150,
height:150,
marginBottom:50
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "white"
  },
  inputContainer: {
    borderColor: '#dadada',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    borderWidth: 1,
    width: 300,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    flex: 1,
  },
  inputIcon: {
  
    marginLeft: 15,
    justifyContent: 'center'
  },
  inputHeader: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginBottom: 10,
    width: 300,
    backgroundColor: 'transparent'
  },
  btnText: {
    color: "#747474",
    fontSize: 16
  },
  btnForgotPassword: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginBottom: 50,
    width: 300,
    backgroundColor: 'transparent'
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 300,
    borderRadius: 10,
    backgroundColor: "#410e68",
  },
  loginText: {
    color: 'white',
    fontWeight: "bold",
    fontSize: 18
  },
})
const ReportsScreenStyles = StyleSheet.create({
  mainView:{
    flex: 1, 
    backgroundColor: "white" ,
     paddingTop:20,
     paddingHorizontal:15
  },
  heading:{
    marginHorizontal:20,
     marginVertical:5,
  },
  headingText:{
    color: '#49196e',
    fontWeight: "bold",
    fontSize: 24,
    marginBottom:10
  },
  headingSubText:{
    color: '#a29fa0',
    fontSize: 18,
    marginBottom:5
  },
  subContainer: {
    backgroundColor: "#f5f5f5",
    margin: 20,
    padding: 20,
    borderRadius: 10
  },
  id: {
    color: '#49196e',
    fontWeight: "bold",
    fontSize: 18,
    paddingLeft:5
  },
  name: {
    fontWeight: "bold",
    fontSize: 20,
    paddingLeft:5
  },
  text: {
    fontSize: 14,
    paddingVertical: 5
  },
})
const ReportsDetailsScreenStyles = StyleSheet.create({
  headingSubText:{
  // color: '#a29fa0',
  fontSize: 18,
  marginBottom:5
}
})
export {
  LoginScreenStyles,
  ReportsScreenStyles,
  ReportsDetailsScreenStyles
}