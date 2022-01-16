import { useState } from 'react'
import { StyleSheet, View, Button } from 'react-native';
import { Map, Modal, Panel, Input, List } from './components'


export default function App() {
  const [puntos, setPuntos] = useState([])
  const [puntoTemp, setPuntoTemp] = useState({})
  const [visibility, setVisibility] = useState(false)
  const [visibilityFilter, setVisibilityFilter] = useState('new_punto')
  const [pointsFilter, setPointsFilter] = useState(true)
  const [nombre, setNombre] = useState('')

  const handleLongPress = ({ nativeEvent }) => {
    setVisibilityFilter('new_punto')
    setPuntoTemp(nativeEvent.coordinate)
    setVisibility(true)
  }

  const handleChangeText = text => {
    setNombre(text)
  }

  const handleSubmit = () => {
    const newPunto = { coordinate: puntoTemp, name: nombre }
    setPuntos(puntos.concat(newPunto))
    setVisibility(false)
    setNombre('')
  }

  const handleLista = () => {
    setVisibilityFilter('all_puntos')
    setVisibility(true)
  }

  const togglePointsFilter = () => setPointsFilter(!pointsFilter)

  console.log(puntos)
  return (
    <View style={styles.container}>
      <Map onLongPress={handleLongPress} puntos={puntos} pointsFilter={pointsFilter}/>     
      <Panel onPressLeft={handleLista} textLeft='Lista' togglePointsFilter={togglePointsFilter}/>
      <Modal visibility={visibility}>
        {visibilityFilter === 'new_punto'
            ?
              <View style={styles.form}>
                <Input 
                  title="Nombre" 
                  placeholder="Nombre del Punto" 
                  onChangeText={handleChangeText}
                />
                <Button
                  title="Aceptar"
                  onPress={handleSubmit}
                />
              </View>
              :
              <List puntos={puntos} closeModal={() => setVisibility(false)}/>
        }
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    padding: 15,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
})
