/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, SafeAreaView, ScrollView, Alert } from 'react-native';
import LottieView from 'lottie-react-native';

const ComingSoon = () => {
  return (
    <ScrollView>
      <SafeAreaView>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <LottieView
            style={{ width: '100%', height: '100%' }}
            autoSize={true}
            onAnimationFinish={() => Alert.alert('wohoo')}
            source={require('../../assets/Animations/comingSoon.json')}
            autoPlay
            loop
          />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default ComingSoon;
