import { useAppData } from '../context/state'


const useType = () => {
	const [, dispatch] = useAppData()

	const getTypeResults = (type) => {

		fetch('https://api.openbrewerydb.org/breweries?by_type=' + type)
			.then((response) => response.json())
			.then((data) => {

				dispatch({
					type: 'SET_TYPE',
					value: data
				})
			})
			.catch((error) => {
				console.error(error.message);
				console.warn("There was an error fetching the brewery by type data.");
			});

	}

	return getTypeResults
}

export default useType