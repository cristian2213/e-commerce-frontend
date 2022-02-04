import { useState, useCallback } from 'react';

function useInput(validateInput, errorClass) {
  const [enteredValue, setEnteredValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const inputIsValid = validateInput(enteredValue); // true | false
  const hasError = !inputIsValid && isTouched;

  let typeError;
  if (hasError && enteredValue.length > 0) typeError = 'validation';
  if (hasError && enteredValue.length === 0) typeError = 'required';

  const handleInputChange = (event) => {
    setEnteredValue(event.target.value);
  };

  const handleInputBlur = () => {
    setIsTouched(true);
  };

  const handleInputReset = () => {
    setEnteredValue('');
    setIsTouched(false);
  };

  const setInput = useCallback((value) => {
    setIsTouched(true);
    setEnteredValue(value);
  }, []);

  return {
    value: enteredValue,
    isValid: inputIsValid,
    inputValidation: { type: typeError, hasError },
    handleIChange: handleInputChange,
    handleIBlur: handleInputBlur,
    handleIReset: handleInputReset,
    setInput,
  };
}

export default useInput;
