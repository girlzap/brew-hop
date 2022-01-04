import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { BreweryDetails, Layout } from '../../components'

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
		<Layout>
			<h1>Brewery Details</h1>

			{loading && <div>Loading...</div>}
			{!loading && (
				<>
					<section>
						<BreweryDetails detailData={details} />
					</section>
					{/* <section>
						Similar
					</section>
					<section>
						Nearby
					</section> */}
				</>
			)}
		</Layout>
	)
}

