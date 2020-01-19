import React from 'react';

import { Text, View, StyleSheet } from 'react-native';

import Radar from 'react-native-radar';
import { render } from 'react-dom';
import MapView, { Marker, Callout, ProviderPropType, Polygon, Circle } from 'react-native-maps';
import flagImg from 'C:\\Users\\Stephanie\\haven\\assets\\images\\flag-blue.png';


// export default function SettingsScreen() {
export default class SettingsScreen extends React.Component {
  constructor(props) {
    super(props);
    // const [status, setStatus] = React.useState("Loading...");
    
  }
  state = { latitude: null, longitude: null};
  
  componentDidMount() {
    console.log("it mounting");
    Radar.setUserId("1");
    Radar.requestPermissions(true);
    Radar.trackOnce().then(async (result) => {
      await this.setState(result.location);
      console.log(result);
      console.log(this.state);
      console.log(this.state.latitude);
      // do something with result.location, result.events, result.user.geofences
    }).catch((err) => {
      // optionally, do something with err
      console.log(err);
    })

  };
  
  // useEffect(()=>{
  //   Radar.setUserId("1");
  //   Radar.requestPermissions(true);
  //   // Radar.getPermissionsStatus().then((status) => {
  //   //   setStatus(status);
  //   //   // do something with status
  //   // });
  //   Radar.trackOnce().then((result) => {
  //     setStatus(result.location);
  //     console.log(result);
  //     console.log(status)
  //     // do something with result.location, result.events, result.user.geofences
  //   }).catch((err) => {
  //     // optionally, do something with err
  //   });
  // }, []);
  // return (
  // <Text>{status}</Text>);

  // getLocation() {
  //   }

  render() {
    if(!this.state.longitude){
      return <View><Text>Loading...</Text></View>
    }
    
    return (
     <View>
       <Text>{this.state.latitude}</Text>
       <Text>line 2</Text>
       <Text>hi we're here</Text>
       <Text>line 2</Text>
       <Text>hi we're here</Text>
       <Text>line 2</Text>
       <Text>hi we're here</Text>
       <Text>line 2</Text>
       <Text>hi we're here</Text>
       <Text>line 2</Text>
       <Text>hi we're here</Text>
       <Text>line 2</Text>
       <Text>hi we're here</Text>
       <Text>line 2</Text>
       <Text>hi we're here</Text>
       <Text>line 2</Text>
       <Text>hi we're here</Text>
       <Text>line 2</Text>
       <Text>hi we're here</Text>
       <Text>line 2</Text>
       <Text>hi we're here</Text>
       <Text>line 2</Text>
       <Text>hi we're here</Text>
       <Text>line 2</Text>
       <Text>hi we're here</Text>
       <Text>line 2</Text>
       <Text>hi we're here</Text>
       <Text>line 2</Text>
       <Text>hi we're here</Text>
       <Text>line 2</Text>
       <Text>hi we're here</Text>
       <Text>line 2</Text>
       <Text>hi we're here</Text>
       <Text>line 2</Text>
       <Text>hi we're here</Text>
       <Text>line 2</Text>

      <MapView
          provider={"google"}
          style={styles.map}
          initialRegion={{
            latitude: this.state.latitude,
            longitude: this.state.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
          onPress={this.onMapPress}
          loadingEnabled
          loadingIndicatorColor="#666666"
          loadingBackgroundColor="#eeeeee"   
        >
          <Marker
            coordinate={{
              latitude: this.state.latitude,
              longitude: this.state.longitude,
            }}
            centerOffset={{ x: 0, y: 0 }}
            anchor={{ x: 0.69, y: 1 }}
            // image={flagImg}
          ></Marker>
          <Circle
            center={{
              latitude: 43.47296086337492,
              longitude: -80.53938946589909,
            }}
            radius={300}
            strokeWidth={2}
            strokeColor="#3399ff"
            fillColor="#80bfff"
          />
          {/* <Polygon
              // key={polygon.id}
              coordinates={{latitude: 43.47296086337492, longitude: -80.53938946589909},
                           {latitude: 43.47353701775392, longitude: -80.54095587596379},
                           {latitude: 43.4733112281788, longitude: -80.54095587596379},
                           {latitude: 43.472984221091714, longitude: -80.54118118152104},
                           {latitude: 43.47250149311015, longitude: -80.54077348575078},
                           {latitude: 43.472275699666184, longitude: -80.54020485743962},
                           {latitude: 43.4723146296305, longitude: -80.5395182119318},
                           {latitude: 43.47296086337492, longitude: -80.5395182119318}
                          }
              // holes={polygon.holes}
              strokeColor="#F00"
              fillColor="rgba(255,0,0,0.5)"
              strokeWidth={1}
            /> */}
          </MapView>
        </View>
    );
  };
}
//     return (

//         // <Text>{status}</Text>
//   //       <MapView
//   //         initialRegion={{
//   //         latitude: 37.78825,
//   //         longitude: -122.4324,
//   //         latitudeDelta: 0.0922,
//   //         longitudeDelta: 0.0421,
//   //         }}
//   //         style={styles.map}
//   // />
        
      

//     );
//   // React.useEffect(() => {
    
//   // }, [])

//   // SettingsScreen.navigationOptions = {
//   //   title: 'app.json',
//   // };
  
// }


const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
