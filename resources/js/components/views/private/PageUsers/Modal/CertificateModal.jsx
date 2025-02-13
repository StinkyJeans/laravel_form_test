// CertificateModal.jsx
import React from 'react';

const CertificateModal = ({ isOpen, onClose, certificate }) => {
  if (!isOpen) return null;

  const modalOverlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const modalContentStyle = {
    background: 'white',
    padding: '20px',
    borderRadius: '8px',
    width: '80%',
    maxWidth: '600px',
  };

  const closeButtonStyle = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    fontSize: '20px',
    border: 'none',
    background: 'none',
    cursor: 'pointer',
  };

  const certificateContentStyle = {
    marginTop: '20px',
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>X</button>
        <h2>Certificate of Appreciation</h2>
        <div className="certificate-content">
          <p>Thank you for participating in the testing of the website. This certificate is awarded to <strong>{certificate?.recipientName}</strong> for their valuable contribution.</p>
          <p>{certificate?.description}</p>
          <p>Date: {certificate?.date}</p>
        </div>
      </div>
    </div>
  );
};

export default CertificateModal;
