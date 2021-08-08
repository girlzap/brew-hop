import React from 'react'
import Link from 'next/link'

import tileStyles from './Tile.module.css'

const Tile = ({tileData}) => {
	return (
		
		<Link href={`/details/${tileData.id}`}>
			<a className={tileStyles.tile}>
				<div className={tileStyles.name}>
					{tileData.name}
				</div>
			</a>
		</Link>
		
	);
};

export default Tile;