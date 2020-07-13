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
import { createStore } from 'redux';
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
const defaulState = {
  listItem: [
    {
      id: 1,
      imageUrl: 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png',
      productName: 'ABC product',
      subTitle: 'Limited sub',
      detailLink: 'link detail'
    },
    {
      id: 2,
      imageUrl: 'https://homepages.cae.wisc.edu/~ece533/images/arctichare.png',
      productName: 'ABC product',
      subTitle: 'Limited sub',
      detailLink: 'link detail'
    },
    {
      id: 3,
      imageUrl: 'https://homepages.cae.wisc.edu/~ece533/images/boat.png',
      productName: 'ABC product',
      subTitle: 'Limited sub',
      detailLink: 'link detail'
    },
    {
      id: 4,
      imageUrl: 'https://www.gstatic.com/webp/gallery/1.jpg',
      productName: 'ABC product',
      subTitle: 'Limited sub',
      detailLink: 'link detail'
    },
    {
      id: 5,
      imageUrl: 'https://homepages.cae.wisc.edu/~ece533/images/pool.png',
      productName: 'ABC product',
      subTitle: 'Limited sub',
      detailLink: 'link detail'
    },
    {
      id: 6,
      imageUrl: 'https://www.gstatic.com/webp/gallery/5.jpg',
      productName: 'ABC product',
      subTitle: 'Limited sub',
      detailLink: 'link detail'
    },
    {
      id: 7,
      imageUrl: 'https://www.gstatic.com/webp/gallery/4.jpg',
      productName: 'ABC product',
      subTitle: 'Limited sub',
      detailLink: 'link detail'
    },
    {
      id: 8,
      imageUrl: 'https://www.gstatic.com/webp/gallery/1.jpg',
      productName: 'ABC product',
      subTitle: 'Limited sub',
      detailLink: 'link detail'
    },
    {
      id: 9,
      imageUrl: 'https://www.gstatic.com/webp/gallery/3.jpg',
      productName: 'ABC product',
      subTitle: 'Limited sub',
      detailLink: 'link detail'
    },
  ],
};
const reducer = (state = defaulState, action) => {
  // if(action.type === CHANGE) return {value: state.value + 1}
  return state;
};

const store = createStore(reducer);

const myState = store.getState();
export default App;
