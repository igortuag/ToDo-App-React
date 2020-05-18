import React from 'react'
import Grid from  '../template/grid'
import IconButton from '../template/iconButton'

export default props => (
    <div role='Form' className='todoForm'>

        <Grid cols='12 9 10'>
            <input iid="description" className='form-control' placeholder='Add some task' />
        </Grid>

        <Grid cols='12 3 2'>
            <IconButton style='primary' icon='plus' />
        </Grid>
    </div>
)