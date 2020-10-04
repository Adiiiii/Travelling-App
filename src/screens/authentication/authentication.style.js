import { StyleSheet, Platform } from 'react-native';
import {
  PUREWHITE,
  THEMECOLOR,
  JUSTBLACK,
  MEDIUMGRAY,
  DULLBLACK,
} from '../../constants/colors';
const fontfamily = Platform.OS === 'ios' ? 'Verdana' : 'Roboto';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },
  logoWrapper: {
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    alignSelf: 'center',
  },
  content: {
    paddingVertical: 60,
    paddingHorizontal: 50,
    borderWidth: 2,
    borderColor: PUREWHITE,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: PUREWHITE,
  },
  text: {
    color: 'grey',
    fontSize: 30,
    fontWeight: 'bold',
  },
  greeting: {
    marginBottom: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  heading: {
    color: DULLBLACK,
    fontFamily: fontfamily,
    fontSize: 20,
    fontWeight: '400',
    letterSpacing: 0.8,
  },
  subheading: {
    color: PUREWHITE,
    fontSize: 14,
    marginBottom: 50,
    fontFamily: fontfamily,
  },
  btns: {
    backgroundColor: THEMECOLOR,
    paddingVertical: 22,
    borderRadius: 50,
    width: '80%',
    alignSelf: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: PUREWHITE,
    fontWeight: '600',
    fontSize: 16,
    fontFamily: fontfamily,
  },
  textInput: { flex: 1, paddingLeft: 4 },
  inputWrapper: { marginBottom: 24 },
  inputwithIcon: {
    flexDirection: 'row',
    width: '100%',
    borderColor: THEMECOLOR,
    borderBottomWidth: 1,
    paddingBottom: 4,
  },
  label: {
    color: MEDIUMGRAY,
    marginBottom: 8,
  },
  loginMessage: { alignSelf: 'center', marginTop: 12, color: DULLBLACK },
  loginCTA: {
    color: THEMECOLOR,
    borderBottomColor: THEMECOLOR,
    borderBottomWidth: 1,
  },
});
export default styles;
