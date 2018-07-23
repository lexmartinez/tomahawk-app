import React from 'react'
import { Component } from 'react'
import { BaseView } from '../../components'
export default class CategoryDetail extends Component <CategoryDetailProps, CategoryDetailState> {

    constructor(props: CategoryDetailProps) {
        super(props)
        this.state = {
        }
    }
    render() {
        const { category } = this.props
        return (
            <BaseView title={category.name} back={true}>
            </BaseView>
        )
    }

}
