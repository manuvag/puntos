import { StyleSheet, Dimensions } from 'react-native'
import MapView, { Marker } from 'react-native-maps'

const INITIAL_REGION = {
  latitude: 20.6736,
  longitude: -103.344,
  latitudeDelta: 5,
  longitudeDelta: 0.5,
}

export default ({ onLongPress, puntos, pointsFilter }) => {
  return (
    <MapView
      initialRegion={INITIAL_REGION}
      style={styles.map}
      onLongPress={onLongPress}
    >
      {pointsFilter && puntos.map(x => 
        <Marker
          coordinate={x.coordinate}
          title={x.name}
          key={x.name}
        />  
      )}
    </MapView>
  )
}

const styles = StyleSheet.create({
  map: {
    height: Dimensions.get('window').height - 150,
    width: Dimensions.get('window').width,
  }
})
