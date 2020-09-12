import React, { useState, useEffect } from 'react';

import { uploadImage } from 'api';

import Icon from 'components/Icon';

const ImageUpload = ({ clipboardFile = null }) => {
  // local states
  const [fileName, setFileName] = useState('No file chosen!');
  const [file, setFile] = useState('');
  const [imgUrl, setImgUrl] = useState(null);
  const [imgTag, setImgTag] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState('');
  const [copiedText, setCopiedText] = useState(null);

  // handle change function for image selection
  const handleChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
      setFile(e.target.files[0]);
    }
  };

  // submit function for the submit event for image
  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);
    const formData = new FormData();
    formData.append('image', file);
    const data = await uploadImage(formData);
    if (!data.err) {
      setImgUrl(data.image.url);
      setImgTag(
        `<img src="${data.image.url}" alt="${fileName ? fileName : ''}" />`
      );
    } else {
      setUploadError(data.err);
    }
    setUploading(false);
  };

  // Copy text to the navigator
  const copyText = (text) =>
    navigator.clipboard.writeText(text).then(() => setCopiedText(text));

  useEffect(() => {
    if (clipboardFile) {
      setFile(clipboardFile);
      clipboardFile.name ? setFileName(clipboardFile.name) : setFileName('');
    }
  }, [clipboardFile]);

  return (
    <>
      {!imgUrl && !uploadError ? (
        <>
          {clipboardFile ? (
            <p className='paste-img-msg'>
              Do you want to upload the copied image?
            </p>
          ) : (
            <>
              <label htmlFor='file-upload' className='custom-file-upload'>
                Choose an Image
              </label>
              <input id='file-upload' type='file' onChange={handleChange} />
              file: {fileName}
            </>
          )}
          {file && (
            <button
              id='upload-file-button'
              type='submit'
              className='flex justify-center'
              disabled={uploading}
              onClick={handleSubmit}
            >
              {!uploading ? (
                <>
                  <Icon name='upload' /> Upload and Get link
                </>
              ) : (
                <>
                  <div id='loading'></div>Uploading
                </>
              )}
            </button>
          )}
        </>
      ) : !uploadError ? (
        <div className='image-details'>
          <h2>Image successfully uploaded!</h2>
          <br />
          <span>Image name:</span>
          <p>
            {fileName}
            <span
              className='copy-text'
              onClick={() => copyText(fileName)}
              title='copy name'
            >
              {fileName === copiedText ? 'Copied!' : 'Copy'}
            </span>
          </p>
          <span>Image Url:</span>
          <p className='image-url'>
            {imgUrl}
            <span
              className='copy-text'
              onClick={() => copyText(imgUrl)}
              title='copy url'
            >
              {imgUrl === copiedText ? 'Copied!' : 'Copy'}
            </span>
          </p>
          <span>Image Tag</span>
          <p className='img-tag'>
            {imgTag}
            <span
              className='copy-text'
              onClick={() => copyText(imgTag)}
              title='copy name'
            >
              {imgTag === copiedText ? 'Copied!' : 'Copy'}
            </span>
          </p>
        </div>
      ) : (
        <div className='upload-error'>
          <h2>Error while uploading :-(</h2>
          <p className='error-message'>{uploadError}</p>
        </div>
      )}
    </>
  );
};
export default ImageUpload;
