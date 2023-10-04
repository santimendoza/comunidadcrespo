import React from 'react';
import Button from 'react-bootstrap/Button';
import FormInput from './FormInput/FormInput';

import imgComunidad from './image-comunidad.jpeg';
import whatsappIcon from './whastapp_icon.svg';
import './App.css';
import axios from 'axios';

function App() {
  const [formValues, setFormValues] = React.useState({});
  const [submitState, setSubmitState] = React.useState('idle');

  const handleInputChange = (event) => {
    if (event.target) {
      let {name, value} = event.target;
      if (name === 'age') {
        value = parseInt(value, 10);
      }
      setFormValues({...formValues, [name]: value});
    }
  };

  const onSubmit = async () => {
    setSubmitState('loading');

    // axios request
    try {
      await axios.post(
        'https://api.airtable.com/v0/apptD48A7RX2RzM1R/tblSJrtx1vpbpkffT',
        {
          fields: {
            Name: formValues.name,
            Phone: formValues.phone,
            Edad: formValues.age,
          },
        },
        {
          headers: {
            Authorization:
              'Bearer pathT5OLNj8b86osO.d4a82c61e235bdcdf0163f668d853db466482a7eacf6f000623832a348daf3f1',
          },
        },
      );
    } catch (error) {
      setSubmitState('error');
    }

    setFormValues({});
    setSubmitState('success');
  };

  return (
    <div className="App">
      {submitState === 'success' && (
        <div className="whatsapp-container">
          <a href="https://chat.whatsapp.com/DMGhen6VjHM26NaR3Bk7ds">
            <img src={whatsappIcon} alt="Whatsapp Group" />
          </a>
          <div className="whatsapp-message">
            <h2>Únete a la Comunidad de Crespo en Whatsapp</h2>
            <a href="https://chat.whatsapp.com/DMGhen6VjHM26NaR3Bk7ds">
              Click aquí para ir al grupo de Whatsapp
            </a>
          </div>
        </div>
      )}
      {submitState !== 'success' && (
        <div className="form-container">
          <div className="form-title">
            <h1>¡Bienvenido a la Comunidad de Crespo!</h1>
            <p>Dejános tus datos para poder estar en contacto y cuidarte</p>
          </div>
          <div className="content-container">
            <div className="img-container">
              <img src={imgComunidad} alt="Comunidad de Crespo" />
            </div>
            <div className="form-container">
              <FormInput
                type="text"
                label="Nombre completo"
                name="name"
                required
                onChange={handleInputChange}
              />
              <FormInput
                type="text"
                label="Celular"
                name="phone"
                required
                onChange={handleInputChange}
              />
              <FormInput
                type="number"
                label="Edad"
                name="age"
                required
                onChange={handleInputChange}
              />
              <Button
                className="submit-button"
                onClick={onSubmit}
                disabled={submitState === 'loading'}
              >
                Enviar
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
