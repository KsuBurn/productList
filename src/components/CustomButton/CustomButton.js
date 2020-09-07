import React from 'react';
import {Button} from 'antd';

const CustomButton = ({type, title, icon, onClick, name}) => {
  return (
    <Button
      name={name}
      type={type}
      icon={icon}
      onClick={onClick}
    >
      {title}
    </Button>
  );
};

export default CustomButton;
