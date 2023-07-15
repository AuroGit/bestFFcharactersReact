import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useGetData from '../hooks/useGetData';

import Preloader from "../componentes/Preloader";
import CharacterButton from "../componentes/CharacterButton";
import GoBackButton from "../componentes/GoBackButton";
import Header from "../componentes/Header";
import '../stylesheets/TeamScreen.css';

function TeamScreen() {

   const { game } = useParams();
   const { characters, loading } = useGetData(game);

   // useEffect(() => {}, [game]);

   useEffect(() => window.scrollTo(0, 0), []);

   return (
      <>
         <Header />
         {
            loading ? <Preloader /> : 
            <ul className="char-list">
               {
                  characters?.map((item, index) => {
                     return (
                        <CharacterButton
                           id={ index }
                           key={ index }
                           name={ item.name }
                           game={ game }
                           src={ require('../assets/characters/' + 
                              game + '/' + item.name.replace(' ', '-') + '.png')
                              || 
                              item.pictures[0].url }
                        />
                     );
                  })
               }
            </ul>
         }

         <GoBackButton pageBefore='/'/>
      </>
   );
}

export default TeamScreen;