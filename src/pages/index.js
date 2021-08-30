import { useEffect, useState } from 'react'

import { useAppData } from '../context/state'
import useType from '../hooks/useType'

import { Layout, Tile, BreweryDetails } from '../components'

import styles from '../styles/Home.module.css'

export default function Home() {
	const [{ featured, typeResults }] = useAppData()
	const getTypeResults = useType()

	const [type, setType] = useState('micro')

	useEffect(() => {
		getTypeResults(type)
	}, [])

	const typeSelection = (option) => {
		setType(option)
		getTypeResults(option)
	}

	let breweryTypes = ['micro', 'nano', 'regional', 'brewpub', 'planning', 'contract', 'proprietor']

	return (
		<Layout home>
			<section className={styles.featured}>
				<h5>Featured Brewery</h5>
				<BreweryDetails detailData={featured} />
			</section>

			<section className='tiles'>
				Select a brewery type
				<div className={styles.types}>
					{breweryTypes.map((typeOption) => (
						<div
							className={(type === typeOption) ? styles.typeItem && styles.active : styles.typeItem}
							key={typeOption}
							onClick={() => typeSelection(typeOption)}
						>
							{typeOption}
						</div>
					))}
				</div>
				<div className='tilesContainer'>
					{typeResults?.slice(0, 12).map((breweryEntry) => {
						return <Tile key={breweryEntry.id} tileData={breweryEntry} />
					})}
				</div>
			</section>
		</Layout>
	)
}
