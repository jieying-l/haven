import React from 'react';

import { Text } from 'react-native';

import Radar from 'react-native-radar';
import { render } from 'react-dom';
import MapView from 'react-native-maps';


export default function SettingsScreen() {
  const [status, setStatus] = React.useState("Loading...");
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  React.useEffect(()=>{
    Radar.setUserId("1");
    Radar.requestPermissions(true);
    // Radar.getPermissionsStatus().then((status) => {
    //   setStatus(status);
    //   // do something with status
    // });
    Radar.trackOnce().then((result) => {
      setStatus("result.location.longtitude");
      console.log(result)
      // do something with result.location, result.events, result.user.geofences
    }).catch((err) => {
      // optionally, do something with err
    });
  }, [])
  // return (
  // <Text>{status}</Text>);
  // render() {
    
  // }
    return (

        // <Text>{status}</Text>
        <MapView
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
    }}
  />

    );
  // React.useEffect(() => {
    
  // }, [])

  // SettingsScreen.navigationOptions = {
  //   title: 'app.json',
  // };
  
}




