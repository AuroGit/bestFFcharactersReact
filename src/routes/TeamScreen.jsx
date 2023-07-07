import React from "react";
import useGetData from '../hooks/useGetData';
import Preloader from "../componentes/Preloader";
import CharacterButton from "../componentes/CharacterButton";
import GoBackButton from "../componentes/GoBackButton";
import '../stylesheets/TeamScreen.css';
import { dynPath } from '../App';

function TeamScreen() {

   const num = new URLSearchParams(window.location.search).get('num');
   const {characters, loading} = useGetData(num);

   return (
      <>
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
                           num={ num }
                           src={ require('../assets/characters/' + 
                              num + '/' + item.name.replace(' ', '-') + '.png')
                              || 
                              item.pictures[0].url } />
                     );
                  })
               }
            </ul>
         }

         <GoBackButton pageBefore={ dynPath + '/' } />
      </>
   );
}

export default TeamScreen;