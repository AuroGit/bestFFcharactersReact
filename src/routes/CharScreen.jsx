import React from "react";
import CharSheet from "../componentes/CharSheet";
import GoBackButton from "../componentes/GoBackButton";

function CharScreen() {

   const num = new URLSearchParams(window.location.search).get('num');
   const charName = new URLSearchParams(window.location.search).get('char');

   const charsArr = JSON.parse(sessionStorage.getItem(`ff${num}-chars`));
   const char = charsArr.filter(char => char.name === charName);

   return (
      <div className="container">
         <h1>{ char[0].name } - FF{ num.toUpperCase() }</h1>

         <CharSheet
            name={ char[0].name }
            image={ require('../assets/characters/' + 
               num + '/' + char[0].name.replace(' ', '-') + '.png')
               || 
               char[0].pictures[0].url }
            age={ char[0].age }
            gender={ char[0].gender }
            height={ char[0].height }
            race={ char[0].race }
            description={ char[0].description } />
         
         <GoBackButton pageBefore={ '/team' + window.location.search } />
      </div>
   );
}

export default CharScreen;