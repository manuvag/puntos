import { Text, TextInput, View, StyleSheet } from 'react-native'

export default ({ title, ...rest }) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>{title}</Text>
      <TextInput {...rest} style={styles.input}/>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper:{
    height: 100,
  },
  title: {
    fontSize: 20,
    marginBottom: 5
  },
  input: {
    backgroundColor: 'transparent',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    height: 50
  }
})

