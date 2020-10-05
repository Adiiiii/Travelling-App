import { StyleSheet } from 'react-native';
import { PUREWHITE, DULLBLACK } from '../../constants/colors';

const Styles = StyleSheet.create({
  loaderWrapper: {
    width: '80%',
    borderRadius: 30,
    paddingLeft: 12,
    backgroundColor: PUREWHITE,
    top: 0,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  loaderText: { fontSize: 20, color: DULLBLACK },
  loaderAnimation: { width: 100 },
  modal: { justifyContent: 'flex-start' },
});

export default Styles;
