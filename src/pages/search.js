import React, { useState } from 'react';
import Link from 'next/link'

import { useAppData } from '../context/state'
import useSearch from '../hooks/useSearch'

import Tile from '../components/tile/tile'


const Search = () => {
	const [state] = useAppData()

	const getSearchResults = useSearch()

	console.log(state.searchResults)

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
				{state.searchResults?.slice(0, 12).map((breweryEntry) => {
					return <Tile key={breweryEntry.id} tileData={breweryEntry} />
				})}


			</div>
			<Link href="/">
				<a>← Back to home</a>
			</Link>
		</>
	);
};

export default Search;