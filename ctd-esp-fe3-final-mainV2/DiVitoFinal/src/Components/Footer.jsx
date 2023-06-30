import React from 'react'
import { ContextGlobal } from './utils/global.context'


const Footer = () => {
  const { state } = React.useContext(ContextGlobal);
  return (
    <footer className={`footer ${state.theme}`}>
        <p>Powered by</p>
        <img src="./public/images/DH.png" alt='DH-logo' />
        <img src="./public/images/ico-facebook.png" alt='facebook'/>
        <img src="./images/ico-instagram.png" alt='instagram'/>
        <img src="./images/ico-tiktok.png" alt='tiktok'/>
        <img src="./images/ico-whatsapp.png" alt='whatsapp'/>
    </footer>
  )
}

export default Footer