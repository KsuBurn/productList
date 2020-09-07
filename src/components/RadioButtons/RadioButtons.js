import React from 'react';
import {Radio} from 'antd';

const RadioButtons = ({buttonsArr, activeButton, onChange}) => {
  const menuIcon = (iconName) => {
    const icons = require('@ant-design/icons');
    let Icon = icons[iconName]
    return <Icon />
  };

  return (
    <Radio.Group value={activeButton} onChange={onChange}>
      {
        buttonsArr.map((item, index) => (
          <Radio.Button value={item.name} key={index}>
            {menuIcon(item.icon)}
            {item.title}
          </Radio.Button>
        ))
      }
    </Radio.Group>
  );
};

export default RadioButtons;
