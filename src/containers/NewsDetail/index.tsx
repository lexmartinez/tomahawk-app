import React from 'react'
import { Component } from 'react'
import { BaseView } from '../../components'

export default class NewsDetail extends Component <NewsDetailProps> {

    constructor(props: NewsDetailProps) {
        super(props)
    }

    componentDidMount() {

    }

    render() {
        return (
            <BaseView title={'News Detail'}>
            </BaseView>
        )
    }

}
