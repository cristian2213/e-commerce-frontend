import React from 'react';

function InputError(props) {
  return (
    <div className={props.className}>
      <p>{props.msg}</p>
    </div>
  );
}

export default InputError;
