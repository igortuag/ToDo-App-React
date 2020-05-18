import React from 'react'

export default props => (
    <div role='Form' className='todoForm'>
        <div className='col-xs-12 col-sm-9 col-md-10'>
            <input iid="description" className='form-control' placeholder='Add some task' />
        </div>

        <div className='col-xs-12 col-sm-9 col-md-10'>
            <button className='btn btn-primary'>
                <i className='fa fa-plus '/>
            </button>
        </div>
    </div>
)