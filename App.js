// import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [ list, setList ] = useState([]);
  const [ showInput, setShowInput ] = useState(false);

  const onAddGoalHandler = (goalText) => {
    setList(newList => [...newList, {text: goalText, id: Math.random().toString()}]);
  }

  const onDeleteGoalHandler = (id) => {
    setList(newList => newList.filter(item => item.id !== id));
  }

  const onShowInput = () => {
    setShowInput(true);
  }

  const onHideInput = () => {
    setShowInput(false);
  }
  
  return (
    <>
      <StatusBar style='light'></StatusBar>
      <View style={styles.appContainer} >
        {/* input */}
        {/* <View style={styles.inputContainer}>
          <TextInput style={styles.inputField}  value={value} onChangeText={onChangeInput}
            placeholder='Adicione Nova Tarefa'/>
          <Button disabled={!value} title='Adicionar' onPress={onClickBtn} />
        </View> */}
        <Button title='Adicionar Tarefas' color={'#5e0acc'} onPress={onShowInput} />
        <GoalInput visible={showInput} onCancel={onHideInput} onAddGoalHandler={onAddGoalHandler}></GoalInput>
        {/* list */}
        <View style={styles.listContainer} >
          <Text style={styles.listTitle}>Lista de Tarefas</Text>
          {/* <ScrollView style={styles.scrollList}> */}
          <FlatList data={list} alwaysBounceVertical={false} 
            keyExtractor={(item, index) => item.id}
            ListEmptyComponent={<Text style={styles.emptyText}>Lista vazia. Adicione novos itens.</Text>}
            renderItem={
              itemData => 
              <GoalItem id={itemData.item.id} text={itemData.item.text} 
              onDeleteItem={onDeleteGoalHandler}></GoalItem>
            }
            />
            {/* {list.map(item => */
              // <View style={styles.listItem} key={item}> 
              //   <Text style={styles.listItemText}>{item}</Text>
              // </View>
            /* )} */}
          {/* </ScrollView> */}
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1
  },
  listContainer: {
    flex: 5,
    flexDirection: 'column',
    marginTop: 8
  },
  listTitle: {
    fontSize: 20,
    fontWeight: 'bold', color: 'white'
  }, 
  emptyText: {
    color: 'white'
  }
});


