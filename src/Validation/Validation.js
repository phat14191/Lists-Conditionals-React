import React from 'react';

export default function Validation( props ) {

  let validationMessage = 'Text is long enough'

  if (props.inputLength <= 5) {
    validationMessage = 'Text is short'
  }

  return (

    <div>
      {
        <p>{validationMessage}</p>
        // props.inputLength > 5 ?
        //   <p>Text long enough</p> :
        //   <p>Text is too short</p>
      }

    </div>
  )
}
