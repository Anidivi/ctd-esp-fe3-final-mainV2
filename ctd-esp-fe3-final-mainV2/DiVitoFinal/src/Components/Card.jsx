import React from "react";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";
import faviconIcon from '../../public/images/favicon.ico';

const Card = ({ name, username, id }) => {
  const { state } = useContext(ContextGlobal);
  const [showNotification, setShowNotification] = useState(false);

  const addFav = () => {
    const favDentista = { name, username, id };
    const storedDentistas = JSON.parse(localStorage.getItem("favDentistas")) || [];
    storedDentistas.push(favDentista);
    localStorage.setItem("favDentistas", JSON.stringify(storedDentistas));
    setShowNotification(true);
    // Aquí iría la lógica para agregar la Card al localStorage
  };

  return (
    <div className={`card ${state.theme}`}>
      <img src="./public/images/doctor.jpg" alt="Doctor" style={{width:'100%'}}/>
      <p>{name}</p>
      <p>{username}</p>
      

      <Link className="detalle" to={`/dentista/${id}`}>Ver detalle</Link>
      {/* No debes olvidar que la Card a su vez sirve como Link hacia la página de detalle */}

      {/* Además, deberás integrar la lógica para guardar cada Card en el localStorage */}
      <button onClick={addFav} className="favButton"><img src={faviconIcon} alt="Favicon" /></button>
      {showNotification && <p>Favorito agregado.</p>}
    </div>
  )
};

export default Card;