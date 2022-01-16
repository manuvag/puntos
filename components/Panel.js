import { StyleSheet, Button, View } from 'react-native'


export default ({ onPressLeft, textLeft, togglePointsFilter }) => {
  return (
    <View style={styles.panel}>
      <Button title={textLeft} onPress={onPressLeft}></Button>
      <Button title="Mostrar/Ocultar" onPress={togglePointsFilter}></Button>
    </View>
  )
}

const styles = StyleSheet.create({
  panel: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
