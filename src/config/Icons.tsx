import React from 'react'
import { Colors } from './Constants'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { hp } from './Utils'

export const Tabs = {
  about: (props: any) =>
  (<Icon name={'json'} size={hp('4%')} color={props.focused ? Colors.white : Colors.black_55} />),
  games: (props: any) =>
    (<Icon name={'google-controller'} size={hp('4%')} color={props.focused ? Colors.white : Colors.black_55} />),
  genres: (props: any) =>
    (<Icon name={'layers'} size={hp('4%')} color={props.focused ? Colors.white : Colors.black_55} />),
  news: (props: any) =>
    (<Icon name={'newspaper'} size={hp('4%')} color={props.focused ? Colors.white : Colors.black_55} />)
}

export const Global = {
  error: () => (<Icon name={'bomb'} size={hp('30%')} color={Colors.grey_50} />),
}
