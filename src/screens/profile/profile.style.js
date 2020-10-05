import { StyleSheet, Dimensions } from 'react-native';
import { PUREWHITE, BESTGRAY } from '../../constants/colors';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingVertical: 60,
    height: height / 2,
    paddingHorizontal: 50,
    borderWidth: 2,
    borderColor: PUREWHITE,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: PUREWHITE,
    position: 'relative',
  },
  profilePic: {
    width: 100,
    height: 100,
    backgroundColor: BESTGRAY,
    position: 'absolute',
    left: width / 2,
    borderRadius: 20,
    transform: [{ translateX: '-50%' }, { translateY: '-50%' }],
  },
  backgroundGradient: { flex: 1, justifyContent: 'flex-end' },
  username: {
    alignSelf: 'center',
    marginTop: 8,
    fontSize: 20,
  },
  logout: { position: 'absolute', right: 24, top: 12 },
});
export default styles;
