import React from 'react';

export default function char(props) {
  const style = {
    display: 'inline-block',
    padding: '16px',
    margin: '16px',
    border: '1px solid black',
    textAligh: 'center'
  };
  return (
    <div style={style} onClick={props.delete}>
      {props.character}
    </div>
  )
}
