import { useState } from "react";
import { Button, Image, Modal, StyleSheet, TextInput, View } from "react-native";

const GoalInput = (props) => {

    const { onAddGoalHandler, visible, onCancel } = props;

    const [ value, setValue ] = useState('');

    const onChangeInput = (value) => {
        setValue(value);
    }

    const onPressBtn = () => {
        onAddGoalHandler(value);
        onCancel();
    }

    return (
        <Modal visible={visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image style={styles.imageStyle} source={require('../assets/images/goal.png')} />
                <TextInput style={styles.inputField}  value={value} onChangeText={onChangeInput}
                    placeholder='Adicione Nova Tarefa'/>
                <View style={styles.buttonContainer}>
                    <Button disabled={!value} title='Adicionar' color={'#5e0acc'} onPress={onPressBtn} />
                    <Button title='Cancelar' color={'red'} onPress={onCancel} />
                </View>
            </View>
        </Modal>
    );
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
      flexDirection: 'column',
      padding: 16,
      columnGap: 10,
      alignItems: 'stretch',
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#311b6b'
    },
    inputField: {
        borderColor: '#e4d0ff',
        borderWidth: 1,
        borderRadius: 5,
        color: '#120438',
        padding: 16,
        backgroundColor: '#e4d0ff'
    },
    buttonContainer: {
        flexDirection: 'row',
        columnGap: 10,
        justifyContent: 'center',
        marginTop: 16
    },
    imageStyle: {
        height: 100, 
        width: 100,
        alignSelf: 'center',
        marginBottom: 16
    }
  });