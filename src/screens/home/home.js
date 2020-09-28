import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

import styles from './home.style';

// assets if any
import { home2, NavLogo } from '../../assets/index';
import screenNames from '../../constants/screenNames';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground blurRadius={3} source={home2} style={styles.image}>
        <SafeAreaView style={styles.logoWrapper}>
          <NavLogo style={styles.logo} />
        </SafeAreaView>
        <View>
          <View style={styles.content}>
            <View>
              <Text style={styles.heading}>
                We know that you wanna travel and travel !
              </Text>
              <Text style={styles.subheading}>
                just leave it to us and we will make your travelling life easier
                and affordable. yes you need to worry about nothing
              </Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate(screenNames.TAB)}>
            <View style={styles.btns}>
              <Text style={styles.buttonText}>Get Started</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Home;
