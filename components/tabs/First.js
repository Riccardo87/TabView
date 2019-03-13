import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import AnimateNumber from 'react-native-animate-number'
import uuid from 'uuid'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const apiFake = [
  {
    mainpoints:
    [
  {id: uuid(), name: 'Points', value: 777},
  {id: uuid(), name: 'Classes', value: 6},
  {id: uuid(), name: 'Calories', value: 75},
    ]
  },
  {
  pass: [
    {id: uuid(), name: 'power', value: 8},
    {id: uuid(), name: 'Agility', value: 6},
    {id: uuid(), name: 'Stamina', value: 5},
    {id: uuid(), name: 'Speed', value: 9},
  ]
},
{
  bbfm:
  [
    {id: uuid(), name: 'Boost', value: 7},
    {id: uuid(), name: 'Brave', value: 4},
    {id: uuid(), name: 'Past', value: 5},
    {id: uuid(), name: 'nighty', value: 6},
  ]
}
];

type Props = {};
export default class First extends Component<Props> {
  render() {
    return (
      <View>
      <Text>xxxx</Text>
      <AnimateNumber value={100} countBy={1} />
      </View>
    );
  }
}