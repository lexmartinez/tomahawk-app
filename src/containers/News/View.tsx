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
export default class News extends Component <NewsProps, NewsState> {

    constructor(props: NewsProps) {
        super(props)
        this.state = {
            page: 0
        }
        this.detailView = this.detailView.bind(this)
        this.firstPage = this.firstPage.bind(this)
        this.nextPage = this.nextPage.bind(this)
    }

    componentDidMount() {
        this.firstPage()
    }

    detailView(item: any) {
        Actions.newsDetail(item)
    }

    firstPage() {
        const { loading, getNews } = this.props
        if (!loading) {
            getNews(0)
            this.setState({ page: 0})
        }
    }

    nextPage() {
        const { page } = this.state
        const { loading, getNews } = this.props
        if (!loading) {
            getNews(page + 1)
            this.setState({ page: page + 1 })
        }
    }

    render() {
        const { loading, error, getNews, news } = this.props
        const { page } = this.state
        return (
            <BaseView title={'News'} onScrollEndDrag={this.nextPage}>
                {loading && page === 0  &&
                    <View style={style.loading}>
                        <PacmanIndicator color={Colors.secondary_red} animating={loading} size={hp('10%')}/>
                    </View>
                }
                {
                    error ?
                    <MessageView icon={Global.error} text={'Something went wrong'}
                        title={'Oops!'} action={getNews} buttonText={'Try Again'}/> :
                    news.map((item) =>
                        <TouchableHighlight style={style.item} underlayColor={Colors.black_20}
                            key={item.uid} onPress={() => this.detailView(item)}>
                            <View style={style.container}>
                                <Image source={{uri: imageURI(item.image, NEWS_PLACEHOLDER)}} style={style.image}/>
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
