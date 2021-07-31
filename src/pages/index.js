import { useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'

import { useAppData } from '../context/state'
import useType from '../hooks/useType'
import Tile from '../components/tile/tile'
import BreweryDetails from '../components/breweryDetails/breweryDetails'

import styles from '../styles/Home.module.css'


//TODO: add layout to simplify the back button on search and details pages

export default function Home() {
	const [state] = useAppData()
	const getTypeResults = useType()

	useEffect(()=>{
		getTypeResults('micro')
	}, [])

	const typeSelection = (option) => {
		getTypeResults(option)
	}

	let pubTypes = ['micro', 'nano', 'regional', 'brewpub', 'planning', 'contract', 'proprietor']

	return (
		<div className={styles.container}>
			<Head>
				<title>Brew Hop</title>
				<meta name="description" content="Search and find details about local breweries." />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<section className={styles.search}>
					Have something in mind?
					<Link href="/search">
						<a className={styles.searchButton}>Search</a>
					</Link>
				</section>

				<section className={styles.featured}>
					<BreweryDetails detailData={state.featured} />
				</section>

				<section className={styles.tiles}>
					Select a brewery type
					<div className={styles.types}>
						{pubTypes.map((type) => (
							<div
								className={styles.typeItem}
								key={type}
								onClick={() => typeSelection(type)}
							>
								{type}
							</div>
						))}
					</div>
					<div className={styles.tilesContainer}>
						{state.typeResults?.slice(0,12).map((breweryEntry)=>{
							return <Tile key={breweryEntry.id} tileData={breweryEntry} />
						})}

					</div>
				</section>
			</main>

		</div>
	)
}
