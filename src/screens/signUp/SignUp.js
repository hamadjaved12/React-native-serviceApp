/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from "react";
import {View,Text,TouchableOpacity,Image,TextInput,Modal} from "react-native";
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {AppInput, AppBtn, NavHeader, Loading} from '../../components';
import {
    widthPercentageToDP as w,
    heightPercentageToDP as h,
  } from 'react-native-responsive-screen';
 




export class SignUp extends React.Component {

  
  sendData = (param, param2) => {
    console.warn('This is param =    ' + param);
    console.warn('This is param2=   ' + param2);
  };
  // sendData2 = SignIn => {
  //   console.warn('Sign In= ' + SignIn);
  // };
  // createUser = () => {
  //   this.showLoading(true);
  //   setTimeout(() => {
  //     this.showLoading(false);
  //   }, 3000);
  //   //   if (
  //   //     this.state.name === '' ||
  //   //     this.state.email === '' ||
  //   //     this.state.password === ''
  //   //   ) {
  //   //     alert('All fields are required');
  //   //   } else {
  //   //     alert('All ok');
  //   //   }
  //   // };
  //   // if (this.state.name === '')
  //   // {alert('name are required');}
  //   //  else {
  //   //   if (this.state.email === '')
  //   // {alert(' email are required');
  //   // }}

  //   //   else{
  //   //   if(this.state.password === '')
  //   //   {
  //   //     alert('password is inviled');
  //   //   }else{
  //   //
  //   //   alert('All ok');
  //   // }
  //   // };
  //   // const res = validator.validate(this.state.email);

  //   this.state.name === ''
  //     ? alert('Name is required')
  //     : // : !res
  //     res === false
  //     ? alert('Invalid Email')
  //     : this.state.password.length < 8
  //     ? alert('Password must contain 8 characters')
  //     : this.state.phone.length < 11
  //     ? alert('Invalid Phone number')
  //     : this.signUp();

  //   // AsyncStorage.setItem('userData', JSON.stringify(data), () => {
  //   //   Alert.alert(
  //   //     'Alert....',
  //   //     'Your account have been created successfully please Sign in',
  //   //     [
  //   //       {
  //   //         text: 'No',
  //   //       },
  //   //       {text: 'Yes', onPress: () => this.setState({modalVisible: true})},
  //   //     ],
  //   //   );
  //   // }
  //   // );
  // };

  signUp = () => {
    this.showLoading(true);
    const params = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      phone: this.state.phone,
    };
    axiosInstance
      // .post(baseUrl + 'users/signUp', params)
      .then(res => {
        this.showLoading(false);

        const data = res.data;
        if (data.status === '200') {
          alert(data.msg);
        } else {
          alert(data.msg);
        }
      })
      .catch(err => {
        this.showLoading(false);

        console.warn(err.message);
      });
  };

 

  showLoading = value => {
    this.setState({visible: value});
  };

  render() {
    return (
      <View
        style={{
          // backgroundColor: '#fad',
          flex: 1,
        }}>
        <Loading visible={this.state.visible} />
        <NavHeader title={'SignUp'} />
        <KeyboardAwareScrollView
          contentContainerStyle={{
            flexGrow: 2,
          }}>
          <View
            style={{
              height: '18%',
              // width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                // backgroundColor: '#faf',
                height: 140,
                width: 140,
              }}>
              <Image
                // source={{
                //   uri: '',
                // }}
                // source={require('../../asserts/user.jpg')}
                style={{
                  resizeMode: 'contain',
                  height: '80%',
                  width: '80%',
                }}
              />
            </View>
          </View>

          {/* {Bottom View} */}
          <View
            style={{
              height: 400,
              // backgroundColor: 'red',
              padding: 20,
            }}>
            <AppInput
              ic={'ios-person'}
              onChangeText={txt => this.setState({name: txt})}
              placeholder={'Name'}
            />
            <AppInput
              ic={'ios-mail'}
              onChangeText={txt => this.setState({email: txt})}
              placeholder={'Email'}
              st={{
                marginTop: 10,
                marginBottom: 10,
              }}
            />
            <AppInput
              ic={'ios-call'}
              onChangeText={txt => this.setState({phone: txt})}
              placeholder={'Phone'}
              st={{
                marginBottom: 10,
              }}
              maxLength={11}
            />
            <View
              style={{
                height: 55,
                // backgroundColor: '#faf',
                flexDirection: 'row',
                borderWidth: 0.5,
                borderRadius: 10,
              }}>
              <View
                style={{
                  height: '100%',
                  width: '15%',
                  // backgroundColor: '#aaf',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRightWidth: 0.5,
                }}>
                <Ionicons name={'lock-closed'} size={20} color={'red'} />
              </View>
              <View
                style={{
                  height: '100%',
                  width: '75%',
                  // backgroundColor: '#faf',
                }}>
                <TextInput
                  onChangeText={txt => this.setState({password: txt})}
                  style={{
                    height: '100%',
                    width: '100%',
                    padding: 10,
                  }}
                  placeholder={'Password'}
                  secureTextEntry={this.state.secureTxt}
                />
              </View>
              {this.state.password !== '' ? (
                <TouchableOpacity
                  onPress={() =>
                    this.setState({secureTxt: !this.state.secureTxt})
                  }
                  style={{
                    height: '100%',
                    width: '10%',
                    // backgroundColor: '#aaf',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Ionicons
                    name={
                      this.state.secureTxt ? 'eye-outline' : 'eye-off-outline'
                    }
                    size={20}
                    color={'red'}
                  />
                </TouchableOpacity>
              ) : null}
            </View>

            {/* create Account */}
            <View
              style={{
                marginTop: 40,
                width: '100%',
                alignItems: 'center',
              }}>
              <View
                style={{
                  // backgroundColor: '#faf',
                  marginTop: 18,
                  width: '100%',
                  alignItems: 'center',
                }}>
                <AppBtn
                  onPress={() => this.createUser()}
                  txt={'Create Account'}
                />
              </View>
            </View>
          </View>
          <View
            style={{
              // backgroundColor: '#faf',
              height: 100,
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                marginTop: 5,
              }}>
              Already have an account?{'  '}
            </Text>
            <TouchableOpacity
              onPress={() => {
                this.setState({modalVisible: true});
              }}>
              <Text
                style={{
                  color: 'red',
                  fontSize: 18,
                  fontWeight: 'bold',
                  textDecorationLine: 'underline',
                }}>
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
       
      </View>
    );
  }
}