import React from 'react'

const Error = ({ error }) => {
    return (
        <div className='text-center mt-4'>
            <div class="alert alert-danger" role="alert">
                {error}

            </div>
        </div>
    )
}

export default Error