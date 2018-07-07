import React from 'react'
import { Component } from 'react'
import { BaseView } from '../../components'
import { Colors } from '../../config/Constants'
import { TouchableHighlight, View, Text } from 'react-native'
import style from './style'
import { PacmanIndicator } from 'react-native-indicators'
import { hp } from '../../config/Utils'
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
                    <View style={style.loading}>
                        <PacmanIndicator color={Colors.secondary_red} animating={this.props.loading} size={hp('10%')}/>
                    </View>
                }
                {
                    (this.props.categories || []).map((item) =>
                        <TouchableHighlight style={style.item} key={item.slug}>
                            <View style={style.itemView}>
                                <Text style={style.itemText} numberOfLines={1}
                                    ellipsizeMode={'tail'}
                                >{item.name}</Text>
                            </View>
                            </TouchableHighlight>
                    )
                }
            </BaseView>
        )
    }

}
