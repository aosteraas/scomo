import * as React from 'react';

const style: React.CSSProperties = {
  position: 'fixed',
  right: 0,
  bottom: -110,
};

const getStyle = (that?: string): React.CSSProperties => {
  const bottom = that ? 0 : -110;
  return {
    ...style,
    bottom: bottom,
  };
};

const talkStyle = {
  position: 'relative',
  padding: '1.6rem',
  background: '#404040',
  color: '#f9f9f9',
  borderRadius: '0.5575rem',
};

const getTalkStyle = (that?: string) => {
  const display = that ? 'block' : 'none';
  return {
    ...talkStyle,
    position: 'relative' as 'relative',
    display,
  };
};

const closeStyle = {
  position: 'absolute' as 'absolute',
  right: '0.6rem',
  top: '50%',
  transform: 'translateY(-50%)',
  // fontWeight: 'bolder',
  cursor: 'pointer',
};

interface Props {
  imgsrc: string;
  imgwidth: number;
  imgalt?: string;
}

export default function Scomo(props: Props) {
  const { imgsrc, imgwidth, imgalt } = props;

  const [that, setThat] = React.useState<string>('');

  React.useEffect(() => {
    document.addEventListener('mouseup', handleThat);
    return () => document.removeEventListener('mouseup', handleThat);
  });

  function handleThat() {
    if (document.getSelection !== null) {
      return;
    }
    let selection: string = document.getSelection
      ? // @ts-ignore
        document.getSelection().toString()
      : // @ts-ignore
        document.selection.createRange().toString();
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
