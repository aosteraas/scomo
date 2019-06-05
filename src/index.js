import React from 'react';

export default function Scomo(props) {
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
  return (
    <div style={style}>
      <div style={talkStyle}>How good's that?</div>
      <img src={props.imgsrc} width={props.imgwidth || 320} alt="asd" />
    </div>
  );
}
