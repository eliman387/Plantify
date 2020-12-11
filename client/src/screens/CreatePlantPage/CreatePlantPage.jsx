import React, { useState } from 'react';
import './CreatePlantPage.css'

function CreatePlantPage(props) {
  const [formData, setFormData] = useState({
      common_name: '',
      botanical_name: '',
      picture: '',
      size: '',
      difficulty_level: '',
      light: '',
      pet_friendly: ''      
   
  })

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
          props.handleCreate(formData);
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
  )
}

export default CreatePlantPage;