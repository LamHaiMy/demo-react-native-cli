import React from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import { FlatList } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get('window');
class ListItems extends React.Component {

  _renderItemImg(item) {
    return <View style={styles.cardItem}>
              <Image style={styles.imgCustom} source={{uri: item.imageUrl}}/>
              <View style={styles.cardContent}>
                <Text style={styles.blueText}>Citizen</Text>
                <Text style={styles.titleImg}>{item.productName}</Text>
                <Text style={styles.subTitle}>{item.subTitle}</Text>
                <View style={styles.action}>
                  <Text style={styles.new}>New</Text>
                  <Text>$39.99</Text>
                </View>
              </View>
            </View>
  }
  render = () => {
    return (
      <View style={styles.container}>
        <FlatList
          ItemSeparatorComponent={() => <View style={{width: 10}}></View>}
          renderItem={({item}) => this._renderItemImg(item)}
          data={this.props.listData}
          keyExtractor={item => item.id}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width
  },
  titleImg: {
    fontSize: 20,
    paddingTop: 8,
    color: 'grey',
    fontWeight: 'bold'
  },
  cardItem: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginBottom: 10,
    marginLeft: 15,
    marginRight: 15,
    shadowOffset:{  width: 10,  height: 10,  },
    shadowColor: 'black',
    shadowOpacity: 1.0,
    elevation: 1,
    padding: 15,
    borderRadius: 5
  },
  imgCustom: {
    width: 120,
    height: 120,
  },
  cardContent: {
    backgroundColor: 'white',
    width: width - 175,
    paddingLeft: 10
  },
  blueText: {
    color: 'blue',
    paddingTop: 5,
  },
  subTitle: {
    color: 'grey'
  },
  action: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 20
  },
  new: {
    backgroundColor: 'green',
    color: 'white',
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 6,
    paddingRight: 6,
    borderRadius: 8,
    fontSize: 11
  }
})

function mapStateToProps(state) {
  return {
    textTest: state.testText,
    listData: state.listItem,
  };
}
export default connect(mapStateToProps)(ListItems);