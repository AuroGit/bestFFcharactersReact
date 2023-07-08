import { useState, useEffect } from 'react';
import whitelist from '../data/whitelist.json';

const url = 'https://www.moogleapi.com/api/v1/characters/search?origin=';

const useGetData = (search)=> {console.log(search);
	const [loading, setLoading] = useState(false);
	const [characters, setCharacters] = useState(null);

	console.log('Cargando FF' + search.toUpperCase());

	useEffect(()=> {
		setLoading(true);

		if (sessionStorage.getItem(`ff${search}-chars`)) {
			setCharacters(JSON.parse(sessionStorage.getItem(`ff${search}-chars`)));
			setLoading(false);
			console.log("Cargados desde SessionStorage");
		} else {
			let item = whitelist.filter(item => item.entrega === search);
		
			fetch(url + search).then(res => res.json()).then(data => {
				let finalData = data.filter(dataItem => 
					item[0].whitelist.join().includes(dataItem.name))
					setCharacters(finalData);
					sessionStorage.setItem(`ff${search}-chars`, JSON.stringify(finalData));
					console.log("Cargados desde Moogle API");
			}).catch(err=>console.log(err)).finally(() => setLoading(false));
		}
	}, [search]);

	return {characters, loading};
};

export default useGetData;