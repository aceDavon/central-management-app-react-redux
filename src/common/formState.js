import * as React from 'react';

const FormState = (initialValue = null) => {
  const [value, setValue] = React.useState(initialValue);

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  return {
    value,
    setValue,
    handleChange,
  };
};

export default FormState;
