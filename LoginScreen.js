import * as React from 'react';
import {StyleSheet , Text, View, TouchableOpacity, Alert, Image} from 'react-native';
import firebase from 'firebase';
import { TextInput } from 'react-native-gesture-handler';
 
export default class LoginScreen extends React.Component{
    constructor(){
        super()
        this.state={
            emailId:'',
            password:'',
        }
    }
    render(){
        return(
            <View style={styles.container}>
        <TextInput 
        style={styles.InputBox}
        placeholder={'Enter Email Id'}
        onChangeText={(text)=>{
            this.setState({
                emailId:text
            })

            }}
            value={this.state.emailId}
            />
              <TextInput 
        style={styles.InputBox}
        placeholder={'Enter password'}
        secureTextEntry={true}
        onChangeText={(text)=>{
            this.setState({
                password:text
            })

            }}
            value={this.state.password}
            />
            <View>
                <TouchableOpacity
                style={styles.button}
                onPress={()=>{
                    var email =this.state.emailId
                    var password = this.state.password
                    firebase.auth().signInWithEmailAndPassword(email,password)
                    .then(()=>{
                        this.props.navigation.navigate("WriteScreen")
                    })
                    .catch(error=>{
                        var errorCode = error.Code
                        var errorMessage = error.Message
                        return Alert.alert("Sign in correctly")
                    })
                }}>

                </TouchableOpacity>
            </View>
            </View>
        )
    }
}
const styles = Stylesheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      }

  
})