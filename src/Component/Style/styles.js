import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container :{
        flex: 1,
        justifyContent: 'center',
        alignItem: 'center',
        marginLeft: '5%'
    },
    headingText: {
        // flex:1,
        fontSize: 30,
        fontWeight: 'bold',
    },
    textColor: {
        fontSize: 50,
        fontWeight: 100,
    },
    button : {
        backgroundColor: 'blue',
        width: '90%',
        border: 100,
        borderColor: 'black',
        borderRadius: 10,
    },
    buttonText: {
        fontSize: 20,
        color: '#ffffff',
        padding: 10,
        fontWeight: 'bold'
    }
}
)


export default styles;