import React from "react";
import '../stylesheets/GameButton.css';

function GameButton({ handleClick, num }) {
   
   return (
      <div className="game-btn">
         <img 
            src={ require(`../assets/logos/final-fantasy-${num}-logo.png`) }
            alt={ `Final Fantasy ${num} Logo` } />
         <hr className="separador" />
         <button onClick={() => handleClick(num)}>
            VER PERSONAJES
         </button>
      </div>
   );
}

export default GameButton;