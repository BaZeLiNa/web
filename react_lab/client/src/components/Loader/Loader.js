import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import './Loader.css';

const Loader = () => {
  return (
    <div className="loader-container">
      <LoadingOutlined className="loader-icon" spin />
    </div>
  );
};

export default Loader;
