// import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [ list, setList ] = useState([]);
  const [ value, setValue ] = useState('');

  const onClickBtn = () => {
    setList(newList => [...newList, value]);
    setValue('');
  }

  const onChangeInput = (value) => {
    setValue(value);
  }
  
  return (
    <View style={styles.appContainer} >
      {/* input */}
      <View style={styles.inputContainer}>
        <TextInput style={styles.inputField}  value={value} onChangeText={onChangeInput}
          placeholder='Adicione Nova Tarefa'/>
        <Button disabled={!value} title='Adicionar' onPress={onClickBtn} />
      </View>
      {/* list */}
      <View style={styles.listContainer} >
        <Text style={styles.listTitle}>Lista de Tarefas</Text>
        <ScrollView style={styles.scrollList}>
          {list.map(item =>
            <View style={styles.listItem} key={item}> 
              <Text style={styles.listItemText}>{item}</Text>
            </View>
          )}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 4,
    columnGap: 10,
    alignItems: 'center',
    marginBottom: 24,
    borderBottomColor: '#cccccc',
    borderBottomWidth: 1,
    flex: 1
  },  
  inputField: {
    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius: 5,
    flex: 1,
    padding: 5
  },
  listContainer: {
    flex: 5,
    flexDirection: 'column'
  },
  listTitle: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  scrollList: {
    flex: 1
  },
  listItem: {
    margin: 8,
    padding: 8,
    backgroundColor: '#5e0acc',
    color: 'white',
    borderRadius: 6,
    borderWidth: 1,
    textTransform: 'capitalize'
  },
  listItemText: {
    color: 'white'
  }
});


