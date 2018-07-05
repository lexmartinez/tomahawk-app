import React from 'react'
import { Component } from 'react'
import { BaseView } from '../../components'

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
            </BaseView>
        )
    }

}
