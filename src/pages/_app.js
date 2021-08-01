import '../styles/globals.css'

import { AppWrapper } from '../context/state'

function BrewApp({ Component, pageProps }) {
	return (
		<AppWrapper>
			<Component {...pageProps} />
		</AppWrapper>)
}

export default BrewApp
