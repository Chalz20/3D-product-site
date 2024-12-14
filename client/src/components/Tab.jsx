import React from 'react'
import { useSnapshot } from 'valtio'
import state from '../store';
import {Tooltip as ReactTooltip} from 'react-tooltip';

const Tab = ({ tab, isFilterTab , isActiveTab , handleClick }) => {
  const snap = useSnapshot(state);

  const activeStyles = isFilterTab && isActiveTab ?
   {backgroundColor: snap.color , opacity: 0.5 } : 
   {backgroundColor: 'transparent', opacity: 1}

  // Helper function to get tooltip content
const getTooltipContent = (tabName) => {
  
   switch (tabName) {
     case "colorpicker":
       return "Choose the color for the shirt"
     case "filepicker":
       return "Choose an image to include as logo for the shirt" 
     case "aipicker":
        return "Ask AI to help you generate logo" 
     case "logoShirt":
       return "Toggle on/off the shirt logo"
     case "stylishShirt":
       return "Toggle on/off the full shirt texture"
     default :
      return null    
   }
};

  return (
    <div
     key={tab.name}
     className={`tab-btn ${isFilterTab ? 'rounded-full glassmorphism' : 'rounded-4'}`}
     style={activeStyles}
     onClick={handleClick}
     data-tooltip-id="tooltip"
     data-tooltip-content={getTooltipContent(tab.name)} // Tooltip content
    >

      <img
       src={tab.icon}
       alt={tab.name}
       className={`${isFilterTab ? 'w-2/3 h-2/3' : 'w-11/12 h-11/12 object-contain' }`}
      />

      {/* ReactTooltip Component */}
      <ReactTooltip
        id="tooltip" 
        place="top" 
        type="dark" 
        effect="solid" 
      />
 
    </div>
  )
}

export default Tab