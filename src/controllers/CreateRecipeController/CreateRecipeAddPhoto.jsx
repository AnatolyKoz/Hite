import React, {useState, useEffect} from 'react';


import {ReactComponent as ImgError} from '../../varibalse/svgs/img-error.svg';
import {ReactComponent as ImgAdd} from '../../varibalse/svgs/img-uploads.svg';
import {ReactComponent as ImgUploads} from '../../varibalse/svgs/add-img.svg';

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
  return <>  <input type='file' className="CreateRecipe__uploadphoto"
    onChange={onSelectFile} id="CreateRecipe_upload"/>
  <label htmlFor="CreateRecipe_upload" className="CreateRecipe__uploadphoto-label">
    {
      {
        'UPLOAD': <ImgUploads className="CreateRecipe__uploadphoto-label-icon"/>,
        'CORRECT': <img src={preview} alt="Food"
          onError={() => setStatusPhoto(statuses.ERROR)}
          className="CreateRecipe__img"/>,
        'ADD': <ImgAdd className="CreateRecipe__uploadphoto-label-icon"/>,
        'ERROR': <ImgError className="CreateRecipe__uploadphoto-label-icon"/>,
      }[statusFhoto]
    }
  </label>
  </>;
};

export default AddPhoto;
