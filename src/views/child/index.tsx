import React, { useState } from 'react';
import { ConfigProvider, DatePicker, message, Button } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import './index.css';

function Child(props) {
  const [date, setDate] = useState(null);
  const handleChange = (value) => {
    message.info(`您选择的日期是: ${value ? value.format('YYYY年MM月DD日') : '未选择'}`);
    setDate(value);
  };

  return (
    <div>
      <ConfigProvider locale={zhCN}>
        <Button type="primary" onClick={() => props.changeName()}>
          ant-design按钮
        </Button>
        --{props.name}==
        <DatePicker onChange={handleChange} />
      </ConfigProvider>
    </div>
  );
}

export default Child;
