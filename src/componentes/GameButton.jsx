import React from "react";
import { Link } from "react-router-dom";
import '../stylesheets/GameButton.css';

function GameButton({ game }) {
   
   return (
      <div className="game-btn">
         <img 
            src={ require(`../assets/logos/final-fantasy-${game}-logo.png`) }
            alt={ `Final Fantasy ${game} Logo` } />
         <hr className="separador" />
         
         <Link className="button" to={`/team/${game}`}>
            VER PERSONAJES
         </Link>
      </div>
   );
}

export default GameButton;