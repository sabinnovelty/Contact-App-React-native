import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Platform, PermissionsAndroid, Permission } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Callout, Polygon, Circle } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

function handleOnPress() {
    console.log('call onpress function called')
    return (<Text>Its an amazin place</Text>)
}
const Map = () => {
    const [locations, setLocations] = useState(null)

    // requestPermission = async () => {
    //     const granted = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
    //     if (granted) {
    //         console.log('You can access the fine location')
    //     } else {
    //         console.log('Access fine location permission denied')
    //     }
    // }

    useEffect(() => {


        const locateCurrentLocation = async () => {
            const granted = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
            if (granted) {
                console.log('You can access the fine location')
            } else {
                console.log('Access fine location permission denied')
            }
            Geolocation.getCurrentPosition(
                position => {
                    console.log('CUrrent position', position)
                    setLocations(position.coords)
                    // setLocations([...position.coords])
                }
            )
        }
        locateCurrentLocation()
        // console.log('navigator object', geolocation)
        // function findCordinates() {
        //     geolocation.getCurrentPosition(position => {
        //         const location = JSON.stringify(position);
        //         console.log('current location', location)
        //     })
        // }
        // findCordinates();
    }, [])
console.log('locaton state',locations)
    if (!locations) {
        return null;
    } 
    return (
        <View>
          <MapView
            style={styles.map}
            showsUserLocation={true}
            provider="google"
            initialRegion={{longitude:locations.longitude , latitude:locations.latitude, latitudeDelta: 0.0922,
                   longitudeDelta: 0.0421,}}
          >
          <Marker
            coordinate={{longitude:locations.longitude , latitude:locations.latitude}}
          >
          <Callout onPress={()=><View><Text>Call out on press test</Text></View>}><Text>New York</Text></Callout>
          </Marker>
          </MapView>

        </View>
    )
};

const styles = StyleSheet.create({
    map: {
        ...StyleSheet.absoulteFillObject,
        height:400,
        width:400
    }
})

export default Map;
// Note:
    // Callout : inside callout we can have any component like image that defines place
    // -inside marker we can insert image to define that location
// <MapView
//          ref={MapView => (this.MapView = MapView)}
//          style={styles.map}
//          initialRegion={this.state.region}
//          loadingEnabled = {true}
//          loadingIndicatorColor="#666666"
//          loadingBackgroundColor="#eeeeee"
//          moveOnMarkerPress = {false}
//          showsUserLocation={true}
//          showsCompass={true}
//          showsPointsOfInterest = {false}
//          provider="google">
//          {this.state.markers.map((marker:any)  => (  
//               <MapView.Marker
//                 key={marker.id}
//                 coordinate={marker.coordinate}
//                 title={marker.title}
//                 description={marker.description}
//               />
//          }
//       </MapView>


// <MapView
// ref={MapView => (this.MapView = MapView)}
// style={styles.map}
// zoomEnabled={true}
// loadingEnabled={true}
// zoomControlEnabled={true}

// initialRegion={{
//     latitude: 37.78825,
//     longitude: -122.4324,
//     latitudeDelta: 0.0922,
//     longitudeDelta: 0.0421,
// }}
// >
// <Circle
//     center={{ latitude: 37.78825, longitude: -122.4324 }}
//     radius={1000}
//     fillColor={'rgba(100, 200, 300, 0.5)'}
// />
// {
//     locations.length > 0 ? locations.map((x, i) => {
//         return (
//             <Marker
//                 draggable
//                 key={i}
//                 title={'San Francisco'}
//                 coordinate={{
//                     latitude: x.lat,
//                     longitude: x.lon
//                 }}
//             ><Callout onPress={() => handleOnPress()}></Callout></Marker>
//         )
//     }) : null
// }

// </MapView>