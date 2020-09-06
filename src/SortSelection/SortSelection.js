import React from 'react';
import {Select} from 'antd';
import {ArrowDownOutlined, ArrowUpOutlined} from '@ant-design/icons';
import sortMapping from './sortMapping.json';
import style from './SortSelection.module.css';

const SortSelection = ({sortChange}) => {
  const { Option } = Select;

  return (
    <Select
      defaultValue={`${sortMapping[0].name.toLowerCase()}-${sortMapping[0].sortDirection}`}
      onChange={value => sortChange(value)}
    >
      {
        sortMapping.map(item => (
          <Option
            key={`${item.name.toLowerCase()}-${item.sortDirection}`}
            value={`${item.name.toLowerCase()}-${item.sortDirection}`}
          >
            <span className={style.icon}>
              {item.sortDirection === 'asc' ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
            </span>
            {item.name}
          </Option>
        ))
      }
    </Select>
  );
};

export default SortSelection;
