import React from 'react'
import './Polaroid.css'
import { Snapshot } from '../'
import { SnapshotDescription }  from '../'

const Polaroid = ({img, desc}) => {
	return (
		<div className="Polaroid">
			<Snapshot img={img}/>
			<SnapshotDescription desc={desc}/>
		</div>
	)
}

export default Polaroid