import React from 'react';
const IconButton = ({text, className, onClick}) => {
  return (
    <button 
      className={className}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
export default IconButton;