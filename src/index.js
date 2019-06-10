import React, { useState, useEffect } from 'react';

const style = {
  position: 'fixed',
  right: 0,
  bottom: -110
};

const getStyle = that => {
  const bottom = that ? 0 : -110;
  return {
    ...style,
    bottom
  };
};

const talkStyle = {
  position: 'relative',
  padding: '1.6rem',
  background: '#404040',
  color: '#f9f9f9',
  borderRadius: '0.5575rem'
};

const getTalkStyle = that => {
  const display = that ? 'block' : 'none';
  return {
    ...talkStyle,
    display
  };
};

const closeStyle = {
  position: `absolute`,
  right: `0.6rem`,
  top: `50%`,
  transform: `translateY(-50%)`,
  fontWeight: `bolder`,
  cursor: `pointer`
};

export default function Scomo(props) {
  const { imgsrc, imgwidth, imgalt } = props;

  const [that, setThat] = useState('');

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
    <div style={getStyle(that)}>
      <div style={getTalkStyle(that)}>
        How good's {that}?{' '}
        <div style={closeStyle} onClick={() => setThat('')}>
          X
        </div>{' '}
      </div>
      <img src={imgsrc} width={imgwidth || 320} alt={imgalt} />
    </div>
  );
}
