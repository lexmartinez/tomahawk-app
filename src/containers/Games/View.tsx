import React from 'react'
import { Component } from 'react'
import { Animated, View, StatusBar, Text } from 'react-native'
import { PacmanIndicator } from 'react-native-indicators'
import { Actions } from 'react-native-router-flux'
import { Colors } from '../../config/Constants'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { GameListItem } from '../../components'
import { hp } from '../../config/Utils'
import style from './style'
import ParallaxScrollView from 'react-native-parallax-scroll-view'
import Search from 'react-native-search-box'

export default class Games extends Component <GamesProps, GamesState> {

    constructor(props: GamesProps) {
        super(props)

        this.state = {
            page: 0
        }

        this.renderForeground = this.renderForeground.bind(this)
        this.renderStickyHeader = this.renderStickyHeader.bind(this)
        this.nextPage = this.nextPage.bind(this)
        this.init = this.init.bind(this)
        this.onCancel = this.onCancel.bind(this)
        this.onChangeText = this.onChangeText.bind(this)
    }

    init() {
        const { getGames } = this.props
        this.setState({page: 0})
        getGames(this.state.page)
    }

    componentDidMount() {
        this.init()
    }

    nextPage() {
        const { page, query } = this.state
        const { loading, getGames } = this.props
        if (!loading) {
            getGames(page + 1, query)
            this.setState({ page: page + 1 })
        }
    }

    onCancel() {
        this.init()
    }

    onChangeText(query: string) {
        if (query.length > 3) {
            const { getGames } = this.props
            this.setState({query, page: 0})
            getGames(this.state.page, query)
        }
    }
    renderForeground() {
        return (
            <View key={'parallax-header'} style={ style.parallaxHeader }>
                <View style={{flexDirection: 'row'}}>
                    <Text style={ style.parallaxText }>
                        Games
                    </Text>
                </View>
                <View style={ style.line }/>
            </View>
        )
    }

    renderStickyHeader() {
        return (
            <View key={'sticky-header'} style={style.stickyHeader}>
                <Search ref={'search_box'} backgroundColor={Colors.secondary_red}
                    cancelButtonTextStyle={style.cancelButtonTextStyle}
                    searchIconCollapsedMargin={30}
                    searchIconExpandedMargin={12}
                    placeholderExpandedMargin={27}
                    onCancel={this.onCancel}
                    onChangeText={this.onChangeText}
                    inputStyle={style.inputStyle}
                />
            </View>
        )
    }

    detailView(game: any) {
        Actions.gameDetail({game})
    }

    render() {

        const { games, loading } = this.props
        const { query, page } = this.state

        return (
            <ParallaxScrollView
            headerBackgroundColor={Colors.white}
            stickyHeaderHeight={ hp('11%') + getStatusBarHeight() }
            parallaxHeaderHeight={ hp('17%') }
            backgroundSpeed={10}
            renderScrollComponent={() => <Animated.ScrollView
                onScrollEndDrag={this.nextPage}
                style={{backgroundColor: Colors.white}}/>}
            renderForeground={this.renderForeground}
            renderStickyHeader={this.renderStickyHeader}>
                    <StatusBar backgroundColor={Colors.black_20} translucent={true} barStyle={'dark-content'}/>
                    <View style={style.view}>
                    {loading && page === 0  &&
                    <View style={style.loading}>
                        <PacmanIndicator color={Colors.secondary_red} animating={loading} size={hp('10%')}/>
                    </View>
                }
                {
                    games && games.map((game: any) =>
                        game.id ?
                        <GameListItem game={game} key={`${game.id}${game.slug}`}
                            onPress={() => {this.detailView(game)}}></GameListItem>
                        : undefined
                    )
                }
                    </View>
            </ParallaxScrollView>
        )
    }

}
