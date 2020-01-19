import React from 'react';

import { Text } from 'react-native';

import Radar from 'react-native-radar';


export default function SettingsScreen() {
  const [status, setStatus] = React.useState("Loading...");
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  React.useEffect(()=>{
    Radar.getPermissionsStatus().then((status) => {
      setStatus(status);
      // do something with status
    });
  }, [])
  return (<Text>{status}</Text>);
}

SettingsScreen.navigationOptions = {
  title: 'app.json',
};
