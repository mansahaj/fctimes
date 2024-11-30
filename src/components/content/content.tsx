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

      <div className="about-section">
        <h1>Welcome to Fatehcare Times: A New Voice for Our Shared Communities</h1>
        <div className="about-content">
          <p>Dear Readers,</p>
          <p>It is with immense pride and excitement that we introduce the first edition of Fatehcare Times—a newspaper created to serve as the voice of our shared communities. In these pages, we bring together stories, insights, and discussions from across the many diverse and vibrant groups that make up our world. We are here to celebrate what makes each of us unique and, more importantly, to explore the ties that unite us all.</p>
          
          <h2>A Platform for Every Voice in Our Shared Communities</h2>
          <p>Fatehcare Times was born from the belief that when communities come together, we become more resilient, understanding, and connected. Our goal is to highlight the many perspectives and experiences that shape our shared lives, giving a voice to everyone from local changemakers to everyday heroes. Through this newspaper, we aim to foster deeper connections and bridge the gaps between different groups, emphasizing the importance of unity in diversity.
          In every issue, we will bring forward the stories that matter most—stories of courage, hope, and compassion. Our coverage will span local news, cultural events, and inspiring profiles that shine a light on individuals and groups who are making a difference. By highlighting stories that touch every part of our shared communities, we hope to provide a source of knowledge and inspiration, while encouraging empathy and collaboration.</p>
          
          <h2>Our Vision for Thriving Shared Communities</h2>
          <p>At Fatehcare Times, we envision a network of shared communities bound by understanding, support, and mutual respect. This newspaper is more than a publication; it is a collective effort to build bridges and create spaces for meaningful conversations.</p>
          
          <h2>An Invitation to Join Our Journey</h2>
          <p>As we embark on this journey, we invite each and every one of you to be a part of Fatehcare Times. Whether you are a reader, a contributor, or someone with a story to share, this newspaper is a platform for your voice.</p>
          
          <div className="signature">
            <p>With gratitude,</p>
            <p>Harjas Singh Popli</p>
            <p>Editor-in-Chief</p>
            <p>Fatehcare Times</p>
          </div>
        </div>
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
