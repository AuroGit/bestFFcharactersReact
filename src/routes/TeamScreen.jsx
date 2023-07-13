import React from "react";
import { Link } from "react-router-dom";
import useGetData from '../hooks/useGetData';

import Preloader from "../componentes/Preloader";
import CharacterButton from "../componentes/CharacterButton";
import GoBackButton from "../componentes/GoBackButton";
import Header from "../componentes/Header";
import '../stylesheets/TeamScreen.css';

function TeamScreen() {

   // const num = new URLSearchParams(window.location.hash.split('?')[1]).get('num');
   // const { characters, loading } = useGetData(num);

   return (
      <>
         <Header />
         <h1>Team</h1>
         <Link to='/character'>Ir a Character</Link>
         {
            // loading ? <Preloader /> :
            // <ul className="char-list">
            //    {
            //       characters?.map((item, index) => {
            //          return (
            //             <CharacterButton
            //                id={ index }
            //                key={ index }
            //                name={ item.name }
            //                num={ num }
            //                src={ require('../assets/characters/' + 
            //                   num + '/' + item.name.replace(' ', '-') + '.png')
            //                   || 
            //                   item.pictures[0].url } />
            //          );
            //       })
            //    }
            // </ul>
         }

         <GoBackButton />
      </>
   );
}

export default TeamScreen;