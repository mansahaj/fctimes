import React, { useState } from 'react';
import './content.css';
import Modal from 'react-modal';
import { pdfFiles, PdfFile } from './pdfFiles.ts';

// Set the modal app element
Modal.setAppElement('#root');

interface PdfFile {
  title: string;
  file: string;
  preview: string;
}

const Content: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);

  const isSmallScreen = window.innerWidth <= 600; // Detect small screens

  const openPdf = (file: string) => {
    if (isSmallScreen) {
      // Open in a new tab for small screens
      window.open(file, '_blank');
    } else {
      // Open in modal for larger screens
      setSelectedPdf(file);
      setModalOpen(true);
    }
  };

  const closeModal = () => {
    setSelectedPdf(null);
    setModalOpen(false);
  };

  return (
    <div>
      <div className="logo">
        <img src="pictures/fatehcare_sign.jpeg" alt="Logo" />
      </div>

      <div className="news-collection">
        {pdfFiles.map((pdf, index) => (
          <div
            key={index}
            className="news-item"
            onClick={() => openPdf(pdf.file)}
          >
            <img src={pdf.preview} alt={pdf.title} className="news-preview" />
            <p>{pdf.title}</p>
          </div>
        ))}
      </div>

      {/* Modal for larger screens */}
      {!isSmallScreen && (
        <Modal
          isOpen={modalOpen}
          onRequestClose={closeModal}
          style={{
            content: {
              width: '80%',
              height: '80%',
              padding: 0,
              margin: 'auto',
              border: 'none',
              overflow: 'hidden',
            },
            overlay: { backgroundColor: 'rgba(0, 0, 0, 0.8)' },
          }}
        >
          {selectedPdf && (
            <div className="modal-content">
              <iframe
                src={selectedPdf}
                title="PDF Viewer"
                width="100%"
                height="100%"
                style={{ border: 'none' }}
              />
              <button className="close-btn" onClick={closeModal}>
                Close
              </button>
            </div>
          )}
        </Modal>
      )}
    </div>
  );
};

export default Content;
