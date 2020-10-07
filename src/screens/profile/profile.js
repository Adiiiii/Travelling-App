import React, { useState } from 'react';
import { Text, View, Alert } from 'react-native';
import FastImage from 'react-native-fast-image';
import ImagePicker from 'react-native-image-picker';
import Gradient from 'react-native-linear-gradient';
import { THEMECOLOR } from '../../constants/colors';
import styles from './profile.style';
import IonicIcons from 'react-native-vector-icons/Ionicons';
import { firebase } from '../../firebase/config';
// import { navigation } from '@react-navigation/native';
import screenNames from '../../constants/screenNames';
import Loader from '../../components/loader/loader';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Profile = ({ navigation }) => {
  const [isloaderVisible, setIsLoaderVisible] = useState(false);
  var user = firebase.auth().currentUser;

  const selectImage = () => {
    ImagePicker.showImagePicker({}, async (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        Alert.alert('Image Picked');
        try {
          setIsLoaderVisible(true);
          const storageRef = firebase.storage().ref();
          const imageName = `${user.displayName}-profile.jpg`;
          const imageRef = storageRef.child(imageName);
          const snapshot = await imageRef.putString(response.data, 'base64');
          const photoURL = await snapshot.ref.getDownloadURL();
          await user.updateProfile({
            photoURL,
          });
        } catch (err) {
          console.warn(err);
        } finally {
          setIsLoaderVisible(false);
        }
      }
    });
  };

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
          {/* <View style={styles.profilePic} /> */}
          <FastImage
            style={styles.profilePic}
            source={{ uri: user?.photoURL }}
            onPress={() => selectImage()}>
            <TouchableOpacity
              style={styles.imageWrapper}
              onPress={() => selectImage()}
            />
          </FastImage>
          <IonicIcons
            name="md-exit-outline"
            size={30}
            style={styles.logout}
            onPress={() => logMeOut()}
          />

          <Text style={styles.username}>{user?.displayName || ''}</Text>
          <Text style={styles.email}>{user?.email || ''}</Text>
        </View>
      </Gradient>
    </>
  );
};
export default Profile;
