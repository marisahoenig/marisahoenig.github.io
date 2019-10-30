import React from 'react'
import './Polaroid.css'
import { Snapshot } from '../'
import { SnapshotDescription }  from '../'

const Polaroid = ({img, description}) => {
    return (
        <div className="Polaroid">
            <Snapshot img={img}/>
            <SnapshotDescription description={description}/>
        </div>
    )
}

export default Polaroid