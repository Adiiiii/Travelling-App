import React from 'react';
import Modal from 'react-native-modal';
import LottieView from 'lottie-react-native';
import { SafeAreaView, View, Text } from 'react-native';
import Styles from './loader.style';
const Loader = ({ visible, message = 'Loading' }) => {
  return (
    <Modal
      style={Styles.modal}
      isVisible={visible}
      animationIn="slideInUp"
      animationOut="slideOutUp">
      <SafeAreaView>
        <View style={Styles.loaderWrapper}>
          <Text style={Styles.loaderText}>{message}</Text>
          <LottieView
            autoSize={false}
            style={Styles.loaderAnimation}
            source={require('../../assets/Animations/loader.json')}
            autoPlay
            loop
          />
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default Loader;
