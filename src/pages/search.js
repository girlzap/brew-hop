import React from 'react';
import Image from 'next/image'

import { useAppData } from '../context/state'
import useSearch from '../hooks/useSearch'

import { Layout, Tile } from '../components'

const Search = () => {
	const [{ searchResults }] = useAppData()

	const getSearchResults = useSearch()

	let searchInput = ''

	const captureChange = (e) => {
		searchInput = e.target.value
	}

	const searchSubmit = () => {
		getSearchResults(searchInput)
	}

	return (
		<Layout search>
			<h1>Search for Breweries</h1>
			<section className='search'>

				<input
					onChange={(e) => captureChange(e)}
					id="search-input"
					name="search-input"
					placeholder="Enter search term"
				/>

				<button onClick={searchSubmit} className="search-btn">
					<Image
						src="../arrow-right.svg"
						alt="Search arrow"
						width={50}
						height={50}
					/>
				</button>

			</section>

			<section className="tiles">
				<div className={'tilesContainer'}>
					{searchResults?.map((breweryEntry) => {
						return <Tile key={breweryEntry.id} tileData={breweryEntry} />
					})}
				</div>
			</section>
		</Layout>
	);
};

export default Search;