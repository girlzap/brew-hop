import { createContext, useContext, useEffect, useReducer } from 'react'

const AppContext = createContext()

//TODO: include ready state value

//reducer
const AppDataReducer = (state, action) => {
	let newState = state
	switch (action.type) {
		case 'SET_COORDS':
			newState = { ...newState, coords: action.value }
			break
		case 'SET_FEATURED':
			newState = { ...newState, featured: action.value }
			break
		case 'SET_SEARCH':
			newState = { ...newState, searchResults: action.value }
			break
		case 'SET_TYPE':
			newState = { ...newState, typeResults: action.value }
			break
	}
	return newState
}

const AppWrapper = ({ children }) => {

	const appDataInitState = {
		featured: null,
		coords: null,
		searchResults: null,
		typeResults: null
	}

	const [state, dispatch] = useReducer(AppDataReducer, appDataInitState)

	useEffect(() => {
		const setPosition = (position) => {
			dispatch({
				type: 'SET_COORDS',
				value: { lat: (position.coords.latitude), long: (position.coords.longitude) }
			})
		}

		navigator.permissions.query({ name: 'geolocation' }).then(function (result) {
			// ['granted', 'prompt', 'denied']

			if (result.state === 'granted') {

				navigator.geolocation.getCurrentPosition(setPosition)
			} else {
				console.warn("Broswer is blocking location services. Featuring a brewery in Massachusetts.")
			}
		});
	}, [])

	useEffect(() => {
		let apiType = 'https://api.openbrewerydb.org/breweries'
		if (state.coords) {
			apiType = 'https://api.openbrewerydb.org/breweries?by_dist=' + state.coords.lat + ',' + state.coords.long
		} else {
			apiType = 'https://api.openbrewerydb.org/breweries?by_state=massachusetts'
		}
		fetch(apiType)
			.then((response) => response.json())
			.then((data) => {
				let randomBrewery = Math.floor(Math.random() * (data.length - 1))

				dispatch({
					type: 'SET_FEATURED',
					value: data[randomBrewery]
				})
			})
			.catch((error) => {
				console.error(error.message);
				console.warn("There was an error fetching the featured brewery.");
			});
	}, [state.coords])

	return <AppContext.Provider value={[state, dispatch]}>{children}</AppContext.Provider>
}

const useAppData = () => useContext(AppContext)

export { AppWrapper, useAppData, AppContext }
