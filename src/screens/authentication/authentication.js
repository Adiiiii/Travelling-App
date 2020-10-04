import 'react-native-gesture-handler';
import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FaIcons from 'react-native-vector-icons/Feather';
import SlIcons from 'react-native-vector-icons/SimpleLineIcons';
import styles from './authentication.style';

// assets if any
import { home2 } from '../../assets/index';
import screenNames from '../../constants/screenNames';
import { THEMECOLOR, DULLBLACK } from '../../constants/colors';

const Authentication = ({ navigation }) => {
  const [isLoginScreen, setIsLoginScreen] = React.useState(false);
  const buttonLabel = isLoginScreen ? 'Login' : 'Signup';
  const authMessage = isLoginScreen ? (
    <Text style={styles.loginMessage}>
      {'Already Registered? Tap '}
      <Text onPress={() => setIsLoginScreen(false)} style={styles.loginCTA}>
        {'here '}
      </Text>
      to Signup
    </Text>
  ) : (
    <Text style={styles.loginMessage}>
      {'Deja-vu? Tap '}
      <Text onPress={() => setIsLoginScreen(true)} style={styles.loginCTA}>
        {'here '}
      </Text>
      to login
    </Text>
  );

  const handleLogin = () => {
    navigation.navigate(screenNames.TAB);
  };

  const handleRegistration = () => {
    console.log('WIP');
  };

  const handleAuth = () => {
    if (isLoginScreen) {
      handleLogin();
    } else {
      handleRegistration();
    }
  };
  return (
    <View style={styles.container}>
      <ImageBackground blurRadius={3} source={home2} style={styles.image}>
        <View>
          <View style={styles.content}>
            <View style={styles.greeting}>
              <View style={styles.greetingText}>
                <Text style={styles.heading}>
                  {isLoginScreen ? 'Hello' : 'Hey there'}
                </Text>
                <Text style={styles.heading}>
                  {isLoginScreen ? 'Traveller' : 'Lets Sign you up!'}
                </Text>
              </View>
              <SlIcons color={THEMECOLOR} name="note" size={40} />
            </View>
            {/* SignIn/SignUp Form */}
            <View style={styles.form}>
              {/* Email */}
              {!isLoginScreen && (
                <View style={styles.inputWrapper}>
                  <Text style={styles.label}>Email</Text>
                  <View style={styles.inputwithIcon}>
                    <MaterialIcons
                      color={DULLBLACK}
                      name="email-outline"
                      size={20}
                      textContentType="email"
                    />
                    <TextInput multiline={false} style={styles.textInput} />
                  </View>
                </View>
              )}

              {/* UserName */}
              <View style={styles.inputWrapper}>
                <Text style={styles.label}>Username</Text>
                <View style={styles.inputwithIcon}>
                  <FaIcons color={DULLBLACK} name="user" size={20} />
                  <TextInput
                    multiline={false}
                    style={styles.textInput}
                    textContentType="username"
                  />
                </View>
              </View>
              {/* Password */}
              <View style={styles.inputWrapper}>
                <Text style={styles.label}>Password</Text>
                <View style={styles.inputwithIcon}>
                  <MaterialIcons
                    color={DULLBLACK}
                    name="key-outline"
                    size={20}
                  />
                  <TextInput
                    secureTextEntry={true}
                    multiline={false}
                    style={styles.textInput}
                    textContentType="password"
                  />
                </View>
              </View>
            </View>
            <TouchableOpacity onPress={handleAuth}>
              <View style={styles.btns}>
                <Text style={styles.buttonText}>{buttonLabel}</Text>
              </View>
            </TouchableOpacity>
            {authMessage}
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Authentication;
