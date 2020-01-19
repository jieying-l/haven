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
            fillColor="#rgba(128,191,255,0.5)"
          />
          </MapView>
        </View>
    );
  };
}

SettingsScreen.navigationOptions = {
  title: 'Haven / Current Location',
};

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
