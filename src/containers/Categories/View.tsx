import React from 'react'
import { Component } from 'react'
import { BaseView, MessageView } from '../../components'
import { Colors } from '../../config/Constants'
import { Global } from '../../config/Icons'
import { TouchableHighlight, View, Text } from 'react-native'
import style from './style'
import { PacmanIndicator } from 'react-native-indicators'
import { hp } from '../../config/Utils'
import { Actions } from 'react-native-router-flux'

export default class Categories extends Component <CategoriesProps> {

    constructor(props: CategoriesProps) {
        super(props)
        this.categoryDetail = this.categoryDetail.bind(this)
    }

    componentDidMount() {
        this.props.getCategories()
    }

    categoryDetail(category: any) {
        Actions.genresDetail({category})
    }

    render() {
        const { loading, error, getCategories, categories } = this.props
        return (
            <BaseView title={'Categories'}>
                {loading &&
                    <View style={style.loading}>
                        <PacmanIndicator color={Colors.secondary_red} animating={loading} size={hp('10%')}/>
                    </View>
                }
                {
                    error ?
                    <MessageView icon={Global.error} text={'Something went wrong'}
                        title={'Oops!'} action={getCategories} buttonText={'Try Again'}/> :
                    categories.map((item) =>
                        <TouchableHighlight underlayColor={Colors.black_20} style={style.item}
                            key={`${item.slug}${item.id}`}
                            onPress={() => {this.categoryDetail(item)}}>
                            <View style={style.itemView}>
                                <Text style={style.itemText} numberOfLines={1}
                                    ellipsizeMode={'tail'}>{item.name}</Text>
                            </View>
                        </TouchableHighlight>
                    )
                }
            </BaseView>
        )
    }

}
