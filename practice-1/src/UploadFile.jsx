import React from 'react';
import './UploadFile.css';

const UploadFile = ({ onFlashcardsGenerated }) => {

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    let text = '';

    try {
      if (file.type === 'application/pdf') {
        const arrayBuffer = await file.arrayBuffer();
        const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;

        for (let i = 1; i <= pdf.numPages; i++) {
          const page = await pdf.getPage(i);
          const content = await page.getTextContent();
          text += content.items.map(item => item.str).join(' ') + '\n';
        }

      } else if (
        file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' ||
        file.type === 'application/msword'
      ) {
        const arrayBuffer = await file.arrayBuffer();
        const result = await mammoth.extractRawText({ arrayBuffer });
        text = result.value;

      } else {
        text = await file.text(); // fallback for txt
      }

      // Split into flashcards: try both ',' and ':' as separators
      const flashcards = text
        .split('\n')
        .map(line => {
          let parts = line.split(',');
          if (parts.length < 2) parts = line.split(':');
          if (parts.length < 2) return null;
          return { question: parts[0].trim(), answer: parts[1].trim() };
        })
        .filter(card => card !== null);

      if (flashcards.length === 0) {
        alert('No valid question-answer pairs found. Please format your file correctly.');
        return;
      }

      onFlashcardsGenerated(flashcards);

    } catch (error) {
      console.error('Error reading file:', error);
      alert('Failed to process the file. Make sure it is a valid TXT, PDF, or Word document.');
    }
  };

  return (
    <div className="upload-file">
      <label htmlFor="file-upload" className="upload-label">
        Upload Flashcards (.txt, .pdf, .docx)
      </label>
      <input
        id="file-upload"
        type="file"
        accept=".txt,.pdf,.doc,.docx"
        onChange={handleFileUpload}
        className="file-input"
      />
    </div>
  );
};

export default UploadFile;