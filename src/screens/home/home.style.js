import {StyleSheet, Dimensions} from 'react-native';
import {JUSTBLACK, PUREWHITE,THEMECOLOR} from '../../constants/colors';
const fontfamily = Platform.OS === 'ios' ? 'Verdana' : 'Roboto';


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "space-between",
    },
    logoWrapper: {
      flex: 1,
      justifyContent:  "center",
    },
    logo: {
      alignSelf: "center"
    },
    text: {
      color: "grey",
      fontSize: 30,
      fontWeight: "bold"
    },
    heading : {
      color : PUREWHITE,
      fontFamily: fontfamily,
      fontSize: 30,
      marginBottom: 20
    },
    subheading: {
      color : PUREWHITE,
      fontSize: 14,
      marginBottom: 50,
      fontFamily: fontfamily,
  
    },
    btns : {
      backgroundColor: THEMECOLOR,
      paddingVertical: 25,
      borderRadius: 15,
      alignItems: 'center',
    },
    buttonText: {
      color: PUREWHITE,
      fontWeight: '600',
      fontSize: 16,
      fontFamily: fontfamily,
  
    }
  });
export default styles;  