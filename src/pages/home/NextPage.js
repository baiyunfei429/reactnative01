import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
// import * as homeActions from '../../action/home'


type Props = {};
class NextPage extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  static navigatorStyle = {
    tabBarHidden: true,
  }

  componentDidMount() {
    console.log('props', this.props)
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text>This is NextPage</Text>
        <Text>{this.props.passData}</Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ccc',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default NextPage;