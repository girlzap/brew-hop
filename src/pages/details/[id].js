import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import {BreweryDetails, Tile} from '../../components'


export default function Post() {
	const [details, setDetails] = useState([])
	const [loading, setLoading] = useState(true)

	const router = useRouter();
	const { id } = router.query

	// TODO: move to a hook and pull from state
	// TODO: determine if the results are being displayed via home or search page, back to... should respect this. 
	// TODO: include related breweries section based on type and nearby section based on location. 
	useEffect(() => {
		if (id) {
			fetch('https://api.openbrewerydb.org/breweries/' + id)
				.then((response) => response.json())
				.then((data) => {
					setDetails(data)
				})
				.then(() => {
					setLoading(false)
				})
				.catch((error) => {
					console.error(error.message);
					console.warn("There was an error fetching the brewery data for id: " + id);
				});
		}
	}, [id])

	return (
		<>
			<h1>Brewery Details</h1>
			<Link href="/">
				<a>← Back to home</a>
			</Link>
			<div>
				{loading && <div>Loading...</div>}
				{!loading && (
					<>
						<section className="featured">
							<BreweryDetails detailData={details} />
						</section>
						<section>
							Similar
						</section>
						<section>
							Nearby
						</section>
					</>
				)}

			</div>

		</>
	)
}

