import React from 'react';

import { Text, View, StyleSheet } from 'react-native';

import Radar from 'react-native-radar';
import { render } from 'react-dom';
import MapView, { Marker, Callout, ProviderPropType } from 'react-native-maps';


// export default function SettingsScreen() {
export default class SettingsScreen extends React.Component {
  constructor(props) {
    super(props);
    // const [status, setStatus] = React.useState("Loading...");
    
  }
  state = { };
  
  componentDidMount() {
    Radar.setUserId("1");
    Radar.requestPermissions(true);

    Radar.trackOnce().then((result) => {
      setStatus(result.location);
      console.log(result);
      console.log(status)
      // do something with result.location, result.events, result.user.geofences
    }).catch((err) => {
      // optionally, do something with err
    });
  };
  
  // React.useEffect(()=>{
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
  render() {
    
    return (
     <View>
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
       <Text>hi we're here</Text>
       <Text>line 2</Text>

      <MapView
          provider={"google"}
          style={styles.map}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          onPress={this.onMapPress}
          loadingEnabled
          loadingIndicatorColor="#666666"
          loadingBackgroundColor="#eeeeee"
        
        ></MapView>
        <Marker
            coordinate={{
              latitude: 40,
              longitude: -120,
            }}
            centerOffset={{ x: -18, y: -60 }}
            anchor={{ x: 0.69, y: 1 }}
            // image={flagImg}
          />
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
