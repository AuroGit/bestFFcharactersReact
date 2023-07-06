import React from "react";
import '../stylesheets/CharacterButton.css';

function CharacterButton({ name, src, id, num }) {
   return (
      <li id={ id } className="char" key={ id }>
         <div className="char-img">
            <img src={ src } alt={ name } />
         </div>

         <a href={`/character?char=${name}&num=${num}`}
            className="char-link">
            <h2>{ name }</h2>
         </a>
      </li>
   );
}

export default CharacterButton;