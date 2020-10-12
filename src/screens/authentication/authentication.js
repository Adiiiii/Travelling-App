import 'react-native-gesture-handler';
import React from 'react';
import { firebase } from '../../firebase/config';

import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons2 from 'react-native-vector-icons/MaterialIcons';
import ImagePicker from 'react-native-image-picker';
import FaIcons from 'react-native-vector-icons/Feather';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './authentication.style';
import Loader from '../../components/loader/loader';

// assets if any
import { home2 } from '../../assets/index';
import screenNames from '../../constants/screenNames';
import { THEMECOLOR, DULLBLACK } from '../../constants/colors';

const Authentication = ({ navigation }) => {
  const [isLoginScreen, setIsLoginScreen] = React.useState(false);
  const [userName, setUserName] = React.useState('');
  const [email, setEmail] = React.useState(false);
  const [password, setPassword] = React.useState(false);
  const [focusedInput, SetFocusedInput] = React.useState('');
  const buttonLabel = isLoginScreen ? 'Login' : 'Signup';
  const [isloaderVisible, setIsLoaderVisible] = React.useState(false);
  const [image, setImage] = React.useState();
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

  const selectImage = () => {
    ImagePicker.showImagePicker({}, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        Alert.alert('Image Picked');
        setImage(response.data);
        // Create a root reference
      }
    });
  };
  const handleOnBlur = (target, value) => {
    SetFocusedInput('');
    switch (target) {
      case 'username':
        setUserName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        console.log('Woooo ! this should not have been possible!!');
    }
  };
  const handleLogin = () => {
    if (!(email && password)) {
      Alert.alert('you missed the mandatory fields !');
      return;
    }
    setIsLoaderVisible(true);
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => navigation.navigate(screenNames.TAB))
      .catch((error) => Alert.alert('error logging in', error))
      .finally(() => setIsLoaderVisible(false));
  };

  const handleRegistration = async () => {
    if (email && password && userName) {
      try {
        setIsLoaderVisible(true);
        const response = await firebase
          .auth()
          .createUserWithEmailAndPassword(email, password);
        const user = response.user;
        if (image) {
          const storageRef = firebase.storage().ref();
          const imageName = `${userName}-profile.jpg`;
          const imageRef = storageRef.child(imageName);
          const snapshot = await imageRef.putString(image, 'base64');
          const photoURL = await snapshot.ref.getDownloadURL();
          // @todo : check if firesbase allows this in one api call
          await user.updateProfile({
            displayName: userName,
            photoURL,
          });
        }

        setIsLoginScreen(true);
      } catch (err) {
        console.warn('Error while registration, ', err);
      } finally {
        setIsLoaderVisible(false);
      }
    } else {
      Alert.alert('Fill the form up buddy');
    }
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
      <Loader visible={isloaderVisible} message="Talking to server..." />
      <ImageBackground blurRadius={3} source={home2} style={styles.image}>
        <View>
          <View style={styles.content}>
            <KeyboardAwareScrollView
              extraScrollHeight={-80}
              keyboardShouldPersistTaps="always">
              <View style={styles.greeting}>
                <View style={styles.greetingText}>
                  <Text style={styles.heading}>
                    {isLoginScreen ? 'Hello' : 'Hey there'}
                  </Text>
                  <Text style={styles.heading}>
                    {isLoginScreen ? 'Traveller' : 'Lets Sign you up!'}
                  </Text>
                </View>
                <MaterialIcons2
                  color={THEMECOLOR}
                  onPress={selectImage}
                  name="add-a-photo"
                  size={48}
                />
              </View>
              {/* SignIn/SignUp Form */}

              <View style={styles.form}>
                {/* Email */}
                <View style={styles.inputWrapper}>
                  <Text style={styles.label}>Email</Text>
                  <View style={styles.inputwithIcon}>
                    <MaterialIcons
                      color={focusedInput === 'email' ? THEMECOLOR : DULLBLACK}
                      name="email-outline"
                      size={20}
                      textContentType="email"
                    />
                    <TextInput
                      multiline={false}
                      style={styles.textInput}
                      onEndEditing={(event) =>
                        handleOnBlur('email', event.nativeEvent.text)
                      }
                      onFocus={() => SetFocusedInput('email')}
                    />
                  </View>
                </View>
                {/* UserName */}
                {!isLoginScreen && (
                  <View style={styles.inputWrapper}>
                    <Text style={styles.label}>Username</Text>
                    <View style={styles.inputwithIcon}>
                      <FaIcons
                        color={
                          focusedInput === 'username' ? THEMECOLOR : DULLBLACK
                        }
                        name="user"
                        size={20}
                      />
                      <TextInput
                        multiline={false}
                        style={styles.textInput}
                        onEndEditing={(event) => {
                          handleOnBlur('username', event.nativeEvent.text);
                        }}
                        onFocus={() => SetFocusedInput('username')}
                        textContentType="username"
                      />
                    </View>
                  </View>
                )}
                {/* Password */}
                <View style={styles.inputWrapper}>
                  <Text style={styles.label}>Password</Text>
                  <View style={styles.inputwithIcon}>
                    <MaterialIcons
                      color={
                        focusedInput === 'password' ? THEMECOLOR : DULLBLACK
                      }
                      name="key-outline"
                      size={20}
                    />
                    <TextInput
                      secureTextEntry={true}
                      multiline={false}
                      style={styles.textInput}
                      textContentType="password"
                      onEndEditing={(event) =>
                        handleOnBlur('password', event.nativeEvent.text)
                      }
                      onFocus={() => SetFocusedInput('password')}
                    />
                  </View>
                </View>
              </View>
            </KeyboardAwareScrollView>
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
