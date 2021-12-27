import React, {useState, useEffect} from 'react';


import {ReactComponent as ImgError} from '../../config/svgs/img-error.svg';
import {ReactComponent as ImgAdd} from '../../config/svgs/img-uploads.svg';
import {ReactComponent as ImgUploads} from '../../config/svgs/add-img.svg';

import './AddPhoto.scss';

const statuses = {
  ERROR: 'ERROR',
  CORRECT: 'CORRECT',
  ADD: 'ADD',
  UPLOAD: 'UPLOAD',
};


const AddPhoto = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();
  const [statusFhoto, setStatusPhoto] = useState();
  useEffect(() => {
    if (!selectedFile) {
      setStatusPhoto(statuses.ADD);
      return;
    }
    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);
    setStatusPhoto(statuses.CORRECT);
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e) => {
    setSelectedFile(e.target.files[0]);
  };
  return <>  <input type='file' className="AddPhoto__uploadphoto"
    onChange={onSelectFile} id="AddPhoto_upload"/>
  <label htmlFor="AddPhoto_upload" className="AddPhoto__uploadphoto-label">
    {
      {
        'UPLOAD': <ImgUploads className="AddPhoto__uploadphoto-label-icon"/>,
        'CORRECT': <img src={preview} alt="Food"
          onError={() => setStatusPhoto(statuses.ERROR)}
          className="AddPhoto__img"/>,
        'ADD': <ImgAdd className="AddPhoto__uploadphoto-label-icon"/>,
        'ERROR': <ImgError className="AddPhoto__uploadphoto-label-icon"/>,
      }[statusFhoto]
    }
  </label>
  </>;
};


export default AddPhoto;
