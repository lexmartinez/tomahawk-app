import React from 'react'
import { Component } from 'react'
import { BaseView } from '../../components'

export default class GamesView extends Component <GamesProps, GamesState> {

    constructor(props: GamesProps) {
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
