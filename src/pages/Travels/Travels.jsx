import React from 'react'
import { Polaroid } from '../../components'
import BridgePic from '../../assets/WilliamsburgBridge.jpg'

const Travels = () => {
  return (
    <div className='Travels'>
      Pictures from travels
      <Polaroid img={BridgePic} desc="The Williamsburg Bridge"/>
    </div>
  )
}

export default Travels