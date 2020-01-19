import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';

import MapView, {
  Polygon,
  ProviderPropType,
} from 'react-native-maps';

import Radar from 'react-native-radar';

import { MonoText } from '../components/StyledText';

export default class PolygonCreator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      region: {
        latitude: 40,
        longitude: -80,
        latitudeDelta: 0.1,
        longitudeDelta: 0.1,
      },
      polygons: [],
      editing: null,
      creatingHole: false,
    };
  }

  // componentDidMount() {
  //   console.log("it mounting");
  //   Radar.setUserId("1");
  //   Radar.requestPermissions(true);
  //   Radar.trackOnce().then(async (result) => {
  //     await this.setState(result.location);
  //     console.log(result);
  //     console.log(this.state);
  //     console.log(this.state.latitude);
  //     // do something with result.location, result.events, result.user.geofences
  //   }).catch((err) => {
  //     // optionally, do something with err
  //     console.log(err);
  //   })
  // };

  finish() {
    const { polygons, editing } = this.state;
    this.setState({
      polygons: [...polygons, editing],
      editing: null,
      creatingHole: false,
    });
  }

  // createHole() {
  //   const { editing, creatingHole } = this.state;
  //   if (!creatingHole) {
  //     this.setState({
  //       creatingHole: true,
  //       editing: {
  //         ...editing,
  //         holes: [...editing.holes, []],
  //       },
  //     });
  //   } else {
  //     const holes = [...editing.holes];
  //     if (holes[holes.length - 1].length === 0) {
  //       holes.pop();
  //       this.setState({
  //         editing: {
  //           ...editing,
  //           holes,
  //         },
  //       });
  //     }
  //     this.setState({ creatingHole: false });
  //   }
  // }

  onPress(e) {
    const { editing, creatingHole } = this.state;
    if (!editing) {
      this.setState({
        editing: {
          //id: id++,
          coordinates: [e.nativeEvent.coordinate],
          holes: [],
        },
      });
    } else {
      this.setState({
        editing: {
          ...editing,
          coordinates: [...editing.coordinates, e.nativeEvent.coordinate],
        },
      });
      console.log(this.state.polygons.coordinates);
    } 
  }

  render() {
    const mapOptions = {
      scrollEnabled: true,
    };

    if (this.state.editing) {
      mapOptions.scrollEnabled = false;
      mapOptions.onPanDrag = e => this.onPress(e);
    }

    console.log(this.state.polygons);
    return (
      <View style={styles.container}>
        <MapView
          provider={this.props.provider}
          style={styles.map}
          // mapType={MAP_TYPES.HYBRID}
          initialRegion={this.state.region}
          onPress={e => this.onPress(e)}
          {...mapOptions}
        >
          {this.state.polygons.map(polygon => (
            <Polygon
              key={polygon.id}
              coordinates={polygon.coordinates}
              holes={polygon.holes}
              strokeColor="#F00"
              fillColor="rgba(255,0,0,0.5)"
              strokeWidth={1}
            />
          ))}
          {this.state.editing && (
            <Polygon
              key={this.state.editing.id}
              coordinates={this.state.editing.coordinates}
              holes={this.state.editing.holes}
              strokeColor="#000"
              fillColor="rgba(255,0,0,0.5)"
              strokeWidth={1}
            />
          )}
        </MapView>
        <View style={styles.buttonContainer}>
          {/* {this.state.editing && (
            <TouchableOpacity
              onPress={() => this.createHole()}
              style={[styles.bubble, styles.button]}
            >
              <Text>
                {this.state.creatingHole ? 'Finish Hole' : 'Create Hole'}
              </Text>
            </TouchableOpacity>
          )} */}
          {this.state.editing && (
            <TouchableOpacity
              onPress={() => this.finish()}
              style={[styles.bubble, styles.button]}
            >
              <Text>Finish</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  }
}

PolygonCreator.propTypes = {
  provider: ProviderPropType,
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  bubble: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
  },
  latlng: {
    width: 200,
    alignItems: 'stretch',
  },
  button: {
    width: 80,
    paddingHorizontal: 12,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    backgroundColor: 'transparent',
  },
});

PolygonCreator.navigationOptions = {
  title: 'Haven / Set Boundary',
};

// function DevelopmentModeNotice() {
//   if (__DEV__) {
//     const learnMoreButton = (
//       <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
//         Learn more
//       </Text>
//     );

//     return (
//       <Text style={styles.developmentModeText}>
//         Development mode is enabled: your app will be slower but you can use
//         useful development tools. {learnMoreButton}
//       </Text>
//     );
//   } else {
//     return (
//       <Text style={styles.developmentModeText}>
//         You are not in development mode: your app will run at full speed.
//       </Text>
//     );
//   }
// }

// function handleLearnMorePress() {
//   WebBrowser.openBrowserAsync(
//     'https://docs.expo.io/versions/latest/workflow/development-mode/'
//   );
// }

// function handleHelpPress() {
//   WebBrowser.openBrowserAsync(
//     'https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes'
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   developmentModeText: {
//     marginBottom: 20,
//     color: 'rgba(0,0,0,0.4)',
//     fontSize: 14,
//     lineHeight: 19,
//     textAlign: 'center',
//   },
//   contentContainer: {
//     paddingTop: 30,
//   },
//   welcomeContainer: {
//     alignItems: 'center',
//     marginTop: 10,
//     marginBottom: 20,
//   },
//   welcomeImage: {
//     width: 100,
//     height: 80,
//     resizeMode: 'contain',
//     marginTop: 3,
//     marginLeft: -10,
//   },
//   getStartedContainer: {
//     alignItems: 'center',
//     marginHorizontal: 50,
//   },
//   homeScreenFilename: {
//     marginVertical: 7,
//   },
//   codeHighlightText: {
//     color: 'rgba(96,100,109, 0.8)',
//   },
//   codeHighlightContainer: {
//     backgroundColor: 'rgba(0,0,0,0.05)',
//     borderRadius: 3,
//     paddingHorizontal: 4,
//   },
//   getStartedText: {
//     fontSize: 17,
//     color: 'rgba(96,100,109, 1)',
//     lineHeight: 24,
//     textAlign: 'center',
//   },
//   tabBarInfoContainer: {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     ...Platform.select({
//       ios: {
//         shadowColor: 'black',
//         shadowOffset: { width: 0, height: -3 },
//         shadowOpacity: 0.1,
//         shadowRadius: 3,
//       },
//       android: {
//         elevation: 20,
//       },
//     }),
//     alignItems: 'center',
//     backgroundColor: '#fbfbfb',
//     paddingVertical: 20,
//   },
//   tabBarInfoText: {
//     fontSize: 17,
//     color: 'rgba(96,100,109, 1)',
//     textAlign: 'center',
//   },
//   navigationFilename: {
//     marginTop: 5,
//   },
//   helpContainer: {
//     marginTop: 15,
//     alignItems: 'center',
//   },
//   helpLink: {
//     paddingVertical: 15,
//   },
//   helpLinkText: {
//     fontSize: 14,
//     color: '#2e78b7',
//   },
// });
