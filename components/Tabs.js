import React, { Component } from 'react';
import { Platform, Text, View, StyleSheet, Dimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import Thirth from './tabs/Thirth';
import First from './tabs/First';
import Second from './tabs/Second';


const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

type Props = {};
export default class Tabs extends Component<Props> {
    state = {
        index: 0,
        routes: [
          { key: 'first', title: 'First' },
          { key: 'second', title: 'Second' },
          { key: 'thirt', title: 'Thirth' },
        ],
      };

    render() {
        return (
            <TabView
                navigationState={this.state}
                renderScene={SceneMap({
                    first: First,
                    second: Second,
                    thirt: Thirth,
                })}
                onIndexChange={index => this.setState({ index })}
                initialLayout={{ width: Dimensions.get('window').width }}
            />
        );
    }
}
