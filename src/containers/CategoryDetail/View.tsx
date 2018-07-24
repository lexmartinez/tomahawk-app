import React from 'react'
import { Component } from 'react'
import { BaseView } from '../../components'
import { View, Text } from 'react-native'
import { PacmanIndicator } from 'react-native-indicators'
import { Colors } from '../../config/Constants'
import { hp } from '../../config/Utils'
import style from './style'
export default class CategoryDetail extends Component <CategoryDetailProps, CategoryDetailState> {

    constructor(props: CategoryDetailProps) {
        super(props)
        this.state = {
            page: 0
        }
        this.nextPage = this.nextPage.bind(this)
    }

    componentDidMount() {
        const { getCategoryGames, category } = this.props
        this.setState({page: 0})
        getCategoryGames(category.id, this.state.page)
    }

    nextPage() {
        const { page } = this.state
        const { loading, category, getCategoryGames } = this.props
        if (!loading) {
            getCategoryGames(category.id, page + 1)
            this.setState({ page: page + 1 })
        }
    }
    render() {
        const { category, games, loading } = this.props
        const { page } = this.state
        return (
            <BaseView title={category.name} back={true}  onScrollEnd={this.nextPage}>
                {loading && page === 0  &&
                    <View style={style.loading}>
                        <PacmanIndicator color={Colors.secondary_red} animating={loading} size={hp('10%')}/>
                    </View>
                }
                {
                    games && games.map((item: any) =>
                    <Text key={item.id}>{item.name}</Text>
                    )
                }
            </BaseView>
        )
    }

}
