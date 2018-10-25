import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as homeActions from '../../action/home';

type Props = {};
class MineHome extends Component<Props> {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>主页-home</Text>
        <Text>initCount: {this.props.home.initCount}</Text>

        <TouchableOpacity
          onPress={() => {
            this.props.navigator.push({
              screen: 'nextpage',
              title: '下一页',
              passProps: {
                passData: 'baiyunfei'
              }
            })
          }}
        >
          <Text>跳转到NextPage</Text>
        </TouchableOpacity>
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


function mapStateToProps(state) {
  return {
    home: state.home
  }
}

function mapDispatchToProps(dispatch) {
  return {
    homeActions: bindActionCreators(homeActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MineHome);