import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function EditPlantPage(props) {
  const [formData, setFormData] = useState({
    plant: {
      common_name: "",
      botanical_name: "",
      picture: "",
      size: "",
      difficulty_level: "",
      light: "",
      pet_friendly: ""
    }
  })
  const { id } = useParams();

  useEffect(() => {
    const populateForm = () => {
      const plantInfo = props.plants?.find(plant => plant.id === Number(id));
      setFormData({
        common_name: plantInfo.common_name,
        botanical_name: plantInfo.botanical_name,
        picture: plantInfo.picture,
        size: plantInfo.size,
        difficulty_level: plantInfo.difficulty_level,
        light: plantInfo.light,
        pet_friendly: plantInfo.pet_friendly
      })
    }
    if (props.plants.length) {
      populateForm();
    }
  }, [props.plants])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }
  return (
    <div className="create-container">
      <div>
        <h3 className="create-title">Add Plant to Library</h3>
      </div>
      <div className="create-form">
        <form onSubmit={(e) => {
          e.preventDefault();
          props.handleUpdate(id, formData);
        }}>
          <div className="input-name">
            <input
              type='text'
              name='common_name'
              placeholder='Common Name'
              value={formData.common_name}
              onChange={handleChange}
            />
          </div>
          <div className="input-position">
            <input
              type='text'
              placeholder='Botanical Name'
              name='botanical_name'
              value={formData.botanical_name}
              onChange={handleChange}
            />
          </div>
          <div className="input-position">
            <input
              type='text'
              placeholder='Picture of Plant'
              name='picture'
              value={formData.picture}
              onChange={handleChange}
            />
          </div>
          <div className="input-position">
            <input
              type='text'
              placeholder='Size of Plant'
              name='size'
              value={formData.size}
              onChange={handleChange}
            />
          </div>
          <div className="input-position">
            <input
              type='text'
              placeholder='Difficulty of Plant'
              name='difficulty_level'
              value={formData.difficulty_level}
              onChange={handleChange}
            />
          </div>
          <div className="input-position">
            <input
              type='text'
              placeholder='Light Requirements'
              name='light'
              value={formData.light}
              onChange={handleChange}
            />
          </div>
          <div className="input-position">
            <input
              type='text'
              placeholder='Pet Friendly ?'
              name='pet_friendly'
              value={formData.pet_friendly}
              onChange={handleChange}
            />
          </div>
          <div>
            <button className="view-boro-button">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditPlantPage;