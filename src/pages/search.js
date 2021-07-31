import React, { useState } from 'react';
import Link from 'next/link'

import { useAppData } from '../context/state'
import useSearch from '../hooks/useSearch'


const Search = () => {
	const [all] = useAppData()

	const getSearchResults = useSearch()
	const [results, setResults] = useState([])

	console.log(all.searchResults)

	let searchInput = ''

	const captureChange = (e) => {
		searchInput = e.target.value
	}

	const searchSubmit = () => {
		getSearchResults(searchInput)
	}
	//TODO: use tiles here to map through the results
	return (
		<>
			<div>
				Search for a keyword
				<input onChange={(e) => captureChange(e)} />
				<button onClick={searchSubmit}>Search</button>
				{JSON.stringify(all.searchResults)}


			</div>
			<Link href="/">
				<a>← Back to home</a>
			</Link>
		</>
	);
};

export default Search;