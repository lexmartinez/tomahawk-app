import React from 'react'
import { Component } from 'react'
import { BaseView, MessageView } from '../../components'
import { Colors } from '../../config/Constants'
import { Global } from '../../config/Icons'
import { imageURI, dateFormat } from '../../config/Utils'
import { TouchableHighlight, View, Image, Text } from 'react-native'
import { Actions } from 'react-native-router-flux'
import style from './style'
import { PacmanIndicator } from 'react-native-indicators'
import { hp } from '../../config/Utils'
import { NEWS_PLACEHOLDER } from '../../config/Constants'
export default class News extends Component <NewsProps> {

    constructor(props: NewsProps) {
        super(props)
        this.detailView = this.detailView.bind(this)
    }

    componentDidMount() {
        this.props.getNews()
    }

    detailView(item: any) {
        Actions.newsDetail(item)
    }

    render() {
        return (
            <BaseView title={'News'}>
                {this.props.loading &&
                    <View style={style.loading}>
                        <PacmanIndicator color={Colors.secondary_red} animating={this.props.loading} size={hp('10%')}/>
                    </View>
                }
                {
                    this.props.error ?
                    <MessageView icon={Global.error} text={'Something went wrong'}
                        title={'Oops!'} action={this.props.getNews} buttonText={'Try Again'}/> :
                    this.props.news.map((item) =>
                        <TouchableHighlight style={style.item} underlayColor={Colors.black_20}
                            key={item.uid} onPress={() => this.detailView(item)}>
                            <View style={style.container}>
                                <Image source={{uri: imageURI(item.image, NEWS_PLACEHOLDER)}}/>
                                <View style={style.dateContainer}>
                                    <Text style={style.date}>{dateFormat(item.published_at)}</Text>
                                    <Text style={style.author}>{item.author}</Text>
                                </View>
                                <View style={style.titleContainer}>
                                    <Text style={style.title}>{item.title}</Text>
                                </View>
                            </View>
                        </TouchableHighlight>
                    )
                }
            </BaseView>
        )
    }

}
