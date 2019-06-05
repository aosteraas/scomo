import React, { useState, useEffect } from 'react';

const style = {
  position: 'fixed',
  right: 0,
  bottom: 0
};

const talkStyle = {
  position: 'relative',
  padding: '1.6rem',
  background: '#404040',
  color: '#f9f9f9',
  borderRadius: '0.5575rem'
};

export default function Scomo(props) {
  const { imgsrc, imgwidth, imgalt } = props;

  const [that, setThat] = useState('that');

  useEffect(() => {
    document.addEventListener('mouseup', handleThat);
    return () => document.removeEventListener('mouseup', handleThat);
  });

  function handleThat() {
    let selection = document.getSelection
      ? document.getSelection().toString()
      : document.selection.createRange().toString();
    setThat(selection);
  }

  return (
    <div style={style}>
      <div style={talkStyle}>How good's {that}?</div>
      <img src={imgsrc} width={imgwidth || 320} alt={imgalt} />
    </div>
  );
}
