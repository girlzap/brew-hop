import React, { useState } from 'react';
import Link from 'next/link'

import { useAppData } from '../context/state'
import useSearch from '../hooks/useSearch'

import {Tile} from '../components'

const Search = () => {
	const [{searchResults}] = useAppData()

	const getSearchResults = useSearch()

	let searchInput = ''

	const captureChange = (e) => {
		searchInput = e.target.value
	}

	const searchSubmit = () => {
		getSearchResults(searchInput)
	}

	return (
		<>
			<div>
				<h1>Search for Breweries</h1>
				<Link href="/">
					<a>← Back to home</a>
				</Link>
				<section className='search'>
					<label 
						htmlFor="search-input" 
						aria-labelledby="search-input"
					>
						Search for a keyword:
					</label>
					<input 
						onChange={(e) => captureChange(e)} 
						id="search-input" 
						name="search-input"
					/>

					<button onClick={searchSubmit}>
						Search
						</button>
					</section>

				<section className="tiles">
					<div className={'tilesContainer'}>
						{searchResults?.map((breweryEntry) => {
							return <Tile key={breweryEntry.id} tileData={breweryEntry} />
						})}
					</div>
				</section>

			</div>

		</>
	);
};

export default Search;