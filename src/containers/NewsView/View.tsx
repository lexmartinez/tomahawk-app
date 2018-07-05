import React from 'react'
import { Component } from 'react'
import { BaseView } from '../../components'

export default class NewsView extends Component <NewsProps, NewsState> {

    constructor(props: NewsProps) {
        super(props)
    }

    componentDidMount() {
        this.props.getNews()
    }

    render() {
        return (
            <BaseView title={'News'}>
            </BaseView>
        )
    }

}
