import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import BreweryDetails from '../../components/breweryDetails/breweryDetails'

export default function Post() {
	const [details, setDetails] = useState([])
	const [loading, setLoading] = useState(true)

	const router = useRouter();
	const { id } = router.query

	//TODO: move to a hook and pull from state
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
					alert("There was an error fetching the data");
				});
		}
	}, [id])

	return (
		<>
			<Link href="/">
				<a>← Back to home</a>
			</Link>
			<div>
				{loading && <div>Loading...</div>}
				{!loading && (
					<section>
						<BreweryDetails detailData={details} />
					</section>
				)}

			</div>

		</>
	)
}

