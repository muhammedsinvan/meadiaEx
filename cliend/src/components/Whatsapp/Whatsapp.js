import React from 'react';
import './Whatsapp.css';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ReactWhatsapp from 'react-whatsapp';

const Whatsapp = () => {
  return (
    <div className='whatsapp-container'>
        <ReactWhatsapp className='whatsapp-react' number="+91 9656123466" message="Hello, I have a question about https://www.exmedia.in/">
        <WhatsAppIcon  className='whatsapp-icon'/>
        <text>Message Us</text>
        </ReactWhatsapp>
        
      </div>
  )
}

export default Whatsapp