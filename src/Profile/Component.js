import React from 'react'
import propTypes from 'prop-types'

const Data = ({data:{ fullname , bio , profession}, children }) => {
    return (
        <div>
            <h2>{fullname}</h2>
            <h3>{bio}</h3>
            <h4>{profession}</h4>
            {children}
        </div>
    )
}

export default Data
