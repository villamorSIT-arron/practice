import React, { useState } from 'react';
import axios from 'axios';
import './UploadFile.css';
const UploadFile = ({ onFlashcardsGenerated }) => {
const [file, setFile] = useState(null);
const handleFileChange = (e) => {
setFile(e.target.files[0]);
};
const handleUpload = async () => {
if (!file) return;
const formData = new FormData();
formData.append('file', file);
try {
const response = await axios.post('http://localhost:5000/upload', formData, {
headers: {
'Content-Type': 'multipart/form-data',
},
});
onFlashcardsGenerated(response.data);
} catch (error) {
console.error('Error uploading file', error);
}
};
return (
<div className="upload-container">

<input type="file" onChange={handleFileChange} />
<button onClick={handleUpload} className="upload-btn">
Upload File
</button>
</div>
);
};
export default UploadFile;