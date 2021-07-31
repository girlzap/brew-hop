import React from 'react'
import Link from 'next/link'

import tileStyles from './tile.module.css'

const Tile = ({tileData}) => {
	return (
		
		<Link href={`/details/${tileData}`}>
			<a className={tileStyles.tile}>
			<div>
				Tile element, can be re-used. Should take in its data as a prop. 
			</div>
			</a>
		</Link>
		
	);
};

export default Tile;