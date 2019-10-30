import React from 'react'
import './Snapshot.css'

const Snapshot = ({ img }) => {
    return (
        <div className="Snapshot">
            <img alt="Williamsburg Bridge" src={img} />
        </div>
    )
}

export default Snapshot