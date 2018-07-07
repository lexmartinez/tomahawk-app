import React from 'react'
import { Component } from 'react'
import { BaseView } from '../../components'
import { Colors } from '../../config/Constants'
import { FlatList, Text, TouchableHighlight, View, ActivityIndicator } from 'react-native'

export default class CategoriesView extends Component <CategoriesProps, CategoriesState> {

    constructor(props: CategoriesProps) {
        super(props)
    }

    componentDidMount() {
        this.props.getCategories()
    }

    render() {
        return (
            <BaseView title={'Categories'}>
                {this.props.loading &&
                    <View>
                        <ActivityIndicator color={Colors.secondary_red} animating={this.props.loading} size={'large'}/>
                    </View>
                }
            <FlatList
                data={this.props.categories}
                renderItem={({item, separators}) => (
                    <TouchableHighlight
                      onShowUnderlay={separators.highlight}
                      onHideUnderlay={separators.unhighlight}>
                      <View style={{backgroundColor: 'white'}}>
                        <Text>{item.name}</Text>
                      </View>
                    </TouchableHighlight>
                  )}
                />
            </BaseView>
        )
    }

}
