import React from 'react';
import Card from 'react-bootstrap/Card';
import imgComunidad from './image-comunidad.jpeg';
import whatsappIcon from './whastapp_icon.svg';
import './App.css';

function App() {
  const WHATSAPP_GROUP_URL = 'https://chat.whatsapp.com/DMGhen6VjHM26NaR3Bk7ds';

  const links = [
    {
      name: 'Whatsapp Group',
      url: WHATSAPP_GROUP_URL,
      image: whatsappIcon,
    },
    {
      name: '¡Dejanos tus datos!',
      url: 'https://forms.gle/gns5YLxwQMXREH3B6',
    },
  ];

  return (
    <div className="App">
      <div className="header">
        <img src={imgComunidad} alt="" />
        <h1>Comunidad de Crespo</h1>
      </div>
      <div className="links">
        {links.map((link) => {
          return (
            <a
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="link-anchor"
            >
              <Card body className="link-card">
                {link.image && <img src={link.image} alt={link.name} />}
                {link.name}
              </Card>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default App;
