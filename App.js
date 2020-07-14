/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useRef} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import store from './source/Redux/store';
import { Provider } from 'react-redux';
import ListItems from './source/Views/ListItems'
import { TabView, SceneMap } from 'react-native-tab-view';
const { width } = Dimensions.get('window');
const initialLayout = { width: Dimensions.get('window').width };
const FirstRoute = () => (
  <View style={[styles.body, { backgroundColor: '#ff4081' }]} />
);

const SecondRoute = () => (
  <View style={[styles.body, { backgroundColor: '#673ab7' }]} />
);

const ThirdRoute = () => (
  <Provider store={store}>
    <ListItems></ListItems>
  </Provider>
);

const App: () => React$Node = () => {

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Grid' },
    { key: 'second', title: 'List 1' },
    { key: 'thỉrd', title: 'List 2' },
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    thỉrd: ThirdRoute,
  });

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.body} >
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={initialLayout}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
});

export default App;
