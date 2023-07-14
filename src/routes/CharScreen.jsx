import React from "react";
import { useParams } from "react-router-dom";
import CharSheet from "../componentes/CharSheet";
import GoBackButton from "../componentes/GoBackButton";
import Header from "../componentes/Header";

function CharScreen() {

   const { game, char } = useParams();

   const charDatassArr = JSON.parse(sessionStorage.getItem(`ff${game}-chars`));
   const charData = charDatassArr.filter((item) => item.name === char).pop();

   return (
      <>
         <Header />

         <div className="container">
            <h1>{ char } - FF{ game.toUpperCase() }</h1>

            <CharSheet
               name={ char }
               image={ require('../assets/characters/' + 
                  game + '/' + char.replace(' ', '-') + '.png')
                  || 
                  charData.pictures[0].url }
               age={ charData.age }
               gender={ charData.gender }
               height={ charData.height }
               race={ charData.race }
               description={ charData.description } />
            
            <GoBackButton pageBefore={ `/team/${game}` } />
         </div>
      </>
   );
}

export default CharScreen;