import React, { useState } from 'react';
import './content.css';
import Modal from 'react-modal';
import { pdfFiles, PdfFile } from './pdfFiles.ts';

// Set the modal app element
Modal.setAppElement('#root');

const Content: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);

  const isSmallScreen = window.innerWidth <= 600;

  const openPdf = (file: string) => {
    if (isSmallScreen) {
      window.open(file, '_blank');
    } else {
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

      {!isSmallScreen && (
        <Modal
          isOpen={modalOpen}
          onRequestClose={closeModal}
          style={{
            content: {
              width: '80%',
              top: '10%', // Keep the top position fixed
              bottom: '5%', // Increase the height from the bottom
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
                src={selectedPdf} // Hides the toolbar
                title="PDF Viewer"
              />
            </div>
          )}
        </Modal>
      )}
    </div>
  );
};

export default Content;
