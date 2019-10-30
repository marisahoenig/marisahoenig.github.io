import React from 'react'
import './SnapshotDescription.css'

const SnapshotDescription = ({ desc }) => {
    return (
        <div className="SnapshotDescription">
            <h1>{desc}</h1>
        </div>
    )
}

export default SnapshotDescription