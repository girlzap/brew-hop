import { useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'

import { useAppData } from '../context/state'
import useType from '../hooks/useType'

import {Tile, BreweryDetails} from '../components'

import styles from '../styles/Home.module.css'

//TODO: add layout to simplify the back button on search and details pages

export default function Home() {
	const [{featured, typeResults}] = useAppData()
	const getTypeResults = useType()

	useEffect(()=>{
		getTypeResults('micro')
	}, [])

	const typeSelection = (option) => {
		getTypeResults(option)
	}

	let breweryTypes = ['micro', 'nano', 'regional', 'brewpub', 'planning', 'contract', 'proprietor']

	return (
		<div className={styles.container}>
			<Head>
				<title>Brew Hop</title>
				<meta name="description" content="Search and find details about local breweries." />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1>Brew Hop</h1>
				<section className='search'>
					Have something in mind?
					<Link href="/search">
						<a className={styles.searchButton}>Search</a>
					</Link>
				</section>

				<section className='featured'>
					<h2>Featured Brewery</h2>
					<BreweryDetails detailData={featured} />
				</section>

				<section className='tiles'>
					Select a brewery type
					<div className={styles.types}>
						{breweryTypes.map((type) => (
							<div
								className={styles.typeItem}
								key={type}
								onClick={() => typeSelection(type)}
							>
								{type}
							</div>
						))}
					</div>
					<div className='tilesContainer'>
						{typeResults?.slice(0,12).map((breweryEntry)=>{
							return <Tile key={breweryEntry.id} tileData={breweryEntry} />
						})}

					</div>
				</section>
			</main>

		</div>
	)
}
