import React from 'react'
import CustomButton from './CustomButton'

const FilePicker = ({file, setFile , readFile , closeEditorTab}) => {
  return (
    <div className='filepicker-container'>
      <div className='flex-1 flex flex-col'>
        <input
         id='file-upload'
         type='file'
         accept='image/*'
         onChange={(e) => setFile(e.target.files[0])}
        
        />
        <label htmlFor='file-upload' className='filepicker-label'>
          Click to upload Image
        </label>

        <p className='mt-3 text-gray-500 text-s text-center truncate'>
          {file === '' ? 'No file selected': file.name}
        </p>

      </div>

      <div className='mt-4 flex flex-wrap gap-3'>
        <CustomButton
         type="outline"
         title="Set as logo"
         handleClick={()=>readFile('logo')}
         customStyles='text-sm font-bold'
        />

       <CustomButton
         type="filled"
         title="Set as shirt texture"
         handleClick={()=>readFile('full')}
         customStyles='text-sm font-bold'
        />

       <button 
       className='px-5 py-1.5 flex-1 rounded-md text-white bg-red-500 hover:bg-red-600 text-sm font-bold'
       onClick={()=>closeEditorTab()}
       >Close</button>
      
        </div>
    </div>
  )
}

export default FilePicker