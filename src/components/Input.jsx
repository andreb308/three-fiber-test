import React from 'react';


export default function Input({ title, setTitle, textVisibility, setTextVisibility }) {

return (
    <div style={{ position: 'absolute', zIndex: 1 }}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      <button
        onClick={() => {
          setTextVisibility(!textVisibility);
        }}
      >
        Toggle Text
      </button>
    </div>  
    )
  } 