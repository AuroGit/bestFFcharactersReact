import React from "react";
import { Link } from "react-router-dom";
import '../stylesheets/GameButton.css';

function GameButton({ handleClick, num }) {
   
   return (
      <div className="game-btn">
         <img 
            src={ require(`../assets/logos/final-fantasy-${num}-logo.png`) }
            alt={ `Final Fantasy ${num} Logo` } />
         <hr className="separador" />
         <button>
            <Link to='/team'>
               VER PERSONAJES
            </Link>
         </button>
      </div>
   );
}

export default GameButton;