import React, { Component } from 'react'
import PageHeader from '../template/pageHeader'

export default class todo extends Component {
    render() {
        return (
            <div>
                <PageHeader name='Tasks' small='register' />
            </div>
        )
    }
}
