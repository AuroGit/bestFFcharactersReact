import React from "react";
import { Link } from "react-router-dom";
import '../stylesheets/CharacterButton.css';

function CharacterButton({ name, src, id, game }) {
   return (
      <li id={ id } className="char" key={ id }>
         <div className="char-img">
            <img src={ src } alt={ name } />
         </div>

         <Link 
            to={`/character/${game}/${name}`}
            className="char-link">
            <h2>{ name }</h2>
         </Link>
      </li>
   );
}

export default CharacterButton;