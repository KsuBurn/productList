import React from 'react';
import {Input} from 'antd';

const InputField = ({inputSearchValue, inputValue}) => {

  const handleChange = (event) => {
    inputSearchValue(event.target.value);
  };

  return (
    <Input
      value={inputValue}
      onChange={handleChange}
    />
  );
};

export default InputField;
