import React from 'react'
import { Component } from 'react'
import { BaseView } from '../../components'

export default class GamesView extends Component <any, GamesViewState> {

    constructor(props: any) {
        super(props)
    }

    componentDidMount() {
        this.props.getGames()
    }

    render() {
        return (
            <BaseView title={'Games'}>
            </BaseView>
        )
    }

}
