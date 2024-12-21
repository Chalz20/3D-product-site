import React from 'react'
import { SketchPicker } from 'react-color'
import { useSnapshot } from 'valtio'

import state from '../store'
import CustomButton from './CustomButton'

const ColorPicker = ( {closeEditorTab}) => {
  const snap = useSnapshot(state)

  return (
    <div className='absolute left-full ml-3'>
      <SketchPicker
        color={snap.color}
        disableAlpha
        onChange={(color) => state.color = color.hex}
       />

       <button 
       className='px-5 py-1.5 flex-1 rounded-md text-white bg-red-500 hover:bg-red-600 text-sm mt-2 font-bold'
       onClick={()=>closeEditorTab()}
       >Close</button>



    </div>
  )
}

export default ColorPicker