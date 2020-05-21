import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import { add, ChangeDescription, search, clear } from './todoActions'

class todoForm extends Component {
    constructor(props) {
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    keyHandler(e) {
        const {add, clear, search, description } = this.props
        if (e.key === 'Enter') {
            e.shiftKey ? search() : add(description)
        } else if (e.key === 'Escape') {
            clear()
        }
    }


    componentWillMount() {
        this.props.search()
    }

    render() {
        const {add, search, description } = this.props
        return (
            <div role='Form' className='todoForm' >

                <Grid cols='12 9 10'>
                    <input id="description" className='form-control'
                        placeholder='Add some task'
                        onChange={this.props.ChangeDescription}
                        onKeyUp={this.keyHandler}
                        value={this.props.description}
                    />
                </Grid>

                <Grid cols='12 3 2'>
                    <IconButton style='primary' icon='plus' onClick={() => add(description)} />
                    <IconButton style='info' icon='search' onClick={() => search()} />
                    <IconButton style='default' icon='close' onClick={this.props.clear} />
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = state => ({ description: state.todo.description })
const mapDispatchToProps = dispatch =>
    bindActionCreators({ add, ChangeDescription, search, clear }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(todoForm)