import { useState } from 'react';

function setObjectValues(object, value) {
  return JSON.parse(JSON.stringify(object).replace(/""/g, value));
}

function useInputsValidation(initialState, validate, handleDispatch) {
  const [values, setValues] = useState(initialState);
  const [isTouched, setIsTouched] = useState(
    setObjectValues(initialState, false)
  );
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;

    setValues((preValues) => {
      const newValues = { ...preValues, [name]: value.trim() };
      setErrors(validate(newValues, isTouched));
      return newValues;
    });
  };

  const handleBlur = (event) => {
    const { name } = event.target;

    setIsTouched((preValues) => {
      const newValues = { ...preValues, [name]: true };
      setErrors(validate(values, newValues));
      return newValues;
    });
  };

  const handleReset = () => {
    setValues(initialState);
    setIsTouched(setObjectValues(initialState, false));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const allTouched = setObjectValues(initialState, true);
    setIsTouched(allTouched);
    const errors = validate(values, allTouched);
    setErrors(errors);

    if (Object.keys(errors).length > 0) return null;

    handleDispatch();
    handleReset();
  };

  return {
    values,
    isTouched,
    errors,
    handleChange,
    handleBlur,
    handleReset,
    handleSubmit,
  };
}

export default useInputsValidation;
