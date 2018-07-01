import React from 'react'
import { Colors } from './Constants'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export const Tabs = {
    news: (props:any)=>
      (<Icon name={'newspaper'} size={27} color={props.focused ? Colors.white : Colors.black_55} />),
    games: (props:any)=>
      (<Icon name={'google-controller'} size={27} color={props.focused ? Colors.white : Colors.black_55} />),
    genres: (props:any)=>
      (<Icon name={'layers'} size={27} color={props.focused ? Colors.white : Colors.black_55} />),
    search: (props:any)=>
      (<Icon name={'magnify'} size={27} color={props.focused ? Colors.white : Colors.black_55} />),
  }