import { StyleSheet, Dimensions, StatusBar } from "react-native";
const { width, height } = Dimensions.get('window')
export const reviewStyles = StyleSheet.create({
    reviewHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 4,
        height: 80,
        borderColor: '#ddd',
        borderWidth: 0.5,
        borderRadius: 2,
        backgroundColor: '#fff',
        margin: 2,
        marginBottom: 8,
        paddingHorizontal: '4%',
    },
    reviewFilterText: {
        fontSize: 20,
        fontWeight: 'bold',
        minWidth: width / 3,
        borderBottomColor: '#000',
        borderBottomWidth: 1,
        marginVertical: 2,
    },
    reviewStarContainer: {
        padding: 4,
        borderColor: '#ddd',
        borderWidth: 0.5,
        backgroundColor: '#fff',
        borderRadius: 2,
        margin: 2,
        paddingHorizontal: '4%',
        marginTop: 2,
    },
    starBtn: {
        width: 60,
        borderColor: '#ddd',
        borderRadius: 2,
        borderWidth: 0.8,
        marginHorizontal: 4,
        justifyContent: 'center',
    },
    starPress: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 4,
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight
    }
})