import React, { useState, useEffect } from 'react';
import { Text, View, Alert } from 'react-native';
import Gradient from 'react-native-linear-gradient';
import { THEMECOLOR } from '../../constants/colors';
import styles from './profile.style';
import IonicIcons from 'react-native-vector-icons/Ionicons';
import { firebase } from '../../firebase/config';
// import { navigation } from '@react-navigation/native';
import screenNames from '../../constants/screenNames';
import Loader from '../../components/loader/loader';

const Profile = ({ navigation }) => {
  const [isloaderVisible, setIsLoaderVisible] = useState(false);
  var user = firebase.auth().currentUser;
  const logMeOut = () => {
    setIsLoaderVisible(true);
    firebase
      .auth()
      .signOut()
      .then(function () {
        navigation.navigate(screenNames.HOME);
      })
      .catch(function (error) {
        console.log('error', error);
        Alert.alert('Oops! something went wrong!');
      })
      .finally(() => setIsLoaderVisible(false));
  };
  return (
    <>
      <Loader visible={isloaderVisible} message="Logging you out..." />
      <Gradient
        colors={[THEMECOLOR, '#E18B66']}
        style={styles.backgroundGradient}>
        <View style={styles.content}>
          {/* @todo: replace with image component */}
          <View style={styles.profilePic} />
          <IonicIcons
            name="md-exit-outline"
            size={30}
            style={styles.logout}
            onPress={() => logMeOut()}
          />

          <Text style={styles.username}>{user?.displayName || ''}</Text>
        </View>
      </Gradient>
    </>
  );
};
export default Profile;
