import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export default function Post() {
	const [details, setDetails] = useState([])
	const [loading, setLoading] = useState(true)

	const router = useRouter();
	const { id } = router.query

	useEffect(() => {
		//TODO: after api call is made set loading to false after response is set to data
	}, [])


	return (
		<div>
			<section>
				{id} -- Brewery details, everything should be conditional renders in case of null values. 
			</section>
		</div>
	)
}

