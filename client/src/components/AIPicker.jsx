import React from 'react'
import CustomButton from './CustomButton'

const AIPicker = ({prompt, setPrompt , generatingImg , handleSubmit}) => {
  return (
    <div className='aipicker-container'>
       <textarea 
        placeholder='Ask AI ....'
        rows={5}
        value={prompt}
        onChange={(e)=> setPrompt(e.target.value)}
        className='aipicker-textarea'
       />

       <div className='flex flex-wrap gap-3'>
        { generatingImg? (
         <CustomButton 
           type="outline"
           title="Asking AI ...."
           customStyles="text-s"
         /> 
        ):
        (

          <>
          <CustomButton
           type="outline"
           title="Generate Logo"
           customStyles="text-xs"
           handleClick={() => handleSubmit('logo')}
          />

          <CustomButton
           type="filled"
           title="Generate Shirt Texture"
           customStyles="text-xs"
           handleClick={() => handleSubmit('full')}
          />

          </>
        )

        }

       </div>
    </div>
  )
}

export default AIPicker