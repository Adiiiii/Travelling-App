import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native';
import styles from './discover.style';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import FastImage from 'react-native-fast-image'

// data
import data from '../../data';

// assets
import { walk } from '../../assets/index';


const Discover = ({ navigation }) => {
    const [categoryIndex, setCategoryIndex] = useState(0);
    const isActive = (index) => categoryIndex === index;
    const { screenWrapper, header, discover, discoverHeading,
        category, categoryTab, category_item, categoryImage, dot, active
    } = styles;
    return (
        <ScrollView style={screenWrapper}>

            {/* HEADER */}
            <SafeAreaView>
                <View style={header}>
                    <MaterialIcons name="menu" size={30} onPress={() => navigation.navigate('Home')}></MaterialIcons>
                    <MaterialIcons name="face-profile" size={30}></MaterialIcons>
                </View>
            </SafeAreaView>

            {/* discover tab */}
            <View style={discover}>
                <Text style={discoverHeading}>
                    Discover
                </Text>
                <View style={category}>
                    <TouchableOpacity onPress={() => setCategoryIndex(0)} style={categoryTab}>
                        <Text style={[category_item, isActive(0) && active]}>Experiences</Text>

                        {isActive(0) && <View style={[dot]}></View>}
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => setCategoryIndex(1)} style={categoryTab}>
                        <Text style={[category_item, isActive(1) && active]}>Places</Text>
                        {isActive(1) && <View style={[dot]}></View>}
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => setCategoryIndex(2)} style={categoryTab}>
                        <Text style={[category_item, isActive(2) && active]}>Housings</Text>
                        {isActive(2) && <View style={[dot]}></View>}
                    </TouchableOpacity>
                </View>
                <ScrollView horizontal={true} >
                    {data.map(destination => <FastImage key={destination.description} source={{ uri: destination.imageUrl }} style={categoryImage}></FastImage>)}
                </ScrollView>

            </View>
        </ScrollView>
    );
}

export default Discover;