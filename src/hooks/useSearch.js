import { useAppData } from '../context/state'


const useSearch = () => {
	const [, dispatch] = useAppData()

	const getSearchResults = (term) => {

		fetch('https://api.openbrewerydb.org/breweries/search?query=' + term)
			.then((response) => response.json())
			.then((data) => {

				dispatch({
					type: 'SET_SEARCH',
					value: data
				})
			})
			.catch((error) => {
				console.error(error.message);
				alert("There was an error fetching the data");
			});

	}

	return getSearchResults
}

export default useSearch