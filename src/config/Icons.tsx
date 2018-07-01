import React from 'react'
import { Colors } from './Constants'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export const Tabs = {
    news: (props:any)=>
      (<Icon name={'newspaper'} size={27} color={props.focused ? Colors.primary_red : Colors.primary_grey} />),
    games: (props:any)=>
      (<Icon name={'google-controller'} size={27} color={props.focused ? Colors.primary_red : Colors.primary_grey} />),
    genres: (props:any)=>
      (<Icon name={'layers'} size={27} color={props.focused ? Colors.primary_red : Colors.primary_grey} />),
    search: (props:any)=>
      (<Icon name={'magnify'} size={27} color={props.focused ? Colors.primary_red : Colors.primary_grey} />),
  }