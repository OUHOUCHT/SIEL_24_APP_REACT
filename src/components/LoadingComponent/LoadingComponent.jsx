import React from 'react';
import { Spinner } from 'react-bootstrap';
import './LoadingComponent.css'; // Import your CSS file for styling

const LoadingComponent = ({titl}) => {
  return (
    <div className="loading-overlay">
      <div className="loading-container">
        <Spinner animation="border" role="status" variant="light" />
        <p className='mt-3 msg-loading_'>العملية جارية ...</p>
      </div>
    </div>
  );
};

export default LoadingComponent;
