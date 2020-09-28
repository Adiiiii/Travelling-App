import { StyleSheet, Dimensions } from 'react-native';
import { JUSTBLACK, PUREWHITE, THEMECOLOR, BESTGRAY } from '../../constants/colors';
const fontfamily = Platform.OS === 'ios' ? 'Verdana' : 'Roboto';


const styles = StyleSheet.create({
    screenWrapper: {
        flex: 1,
        backgroundColor: PUREWHITE,
        paddingHorizontal: 20
    },
    header: {
        flexDirection: "row",
        marginTop: 20,
        marginBottom: 30,
        justifyContent: "space-between"
    },
    discover: {
        marginBottom: 20,
    },
    discoverHeading: {
        fontSize: 26,
        fontWeight: "700"
    },
    category: {
        paddingRight: 24,
        marginTop: 16,
        marginBottom: 20,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    categoryTab: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    category_item: {
        fontWeight: "500",
        fontSize: 16,
        color: BESTGRAY
    },
    categoryImage: {
        width: 200,
        height: 300,
        marginRight: 50,
        borderRadius: 15,
    },
    dot: {
        width: 8,
        height: 8,
        backgroundColor: THEMECOLOR,
        borderRadius: 4,
        marginTop: 4
    },
    active: {
        color: THEMECOLOR
    }
});

export default styles;