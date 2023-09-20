import { Pressable, StyleSheet, Text, View } from "react-native";

const GoalItem = (props) => {

    const { text, onDeleteItem, id } = props;

    return (
        <View style={styles.listItem}> 
            <Pressable onPress={onDeleteItem.bind(this, id)} 
                android_ripple={{color: '#210644'}}
                style={({pressed}) => pressed && styles.pressedItem}>
                <Text style={styles.listItemText}>{text}</Text>
            </Pressable>
        </View>
    )
}

export default GoalItem;

const styles = StyleSheet.create({
    listItem: {
        margin: 8,
        backgroundColor: '#5e0acc',
        color: 'white',
        borderRadius: 6,
        borderWidth: 1,
        textTransform: 'capitalize'
    },
    pressedItem: {
        opacity: 0.5
    },
    listItemText: {
        color: 'white',
        margin: 8
    }
});
  
  
  