import React from 'react';

const BreweryDetails = ({ detailData }) => {

	const renderBreweryDetails = () => {
		let elementArray = []
		if (detailData !== null) {
			Object.keys(detailData).map((key) => {
				if (detailData[key] !== null)
					elementArray.push(<div key={key}>{key + ': ' + detailData[key]}</div>)
			})
		}

		return elementArray
	}

	return (
		<div>
			{renderBreweryDetails()}
		</div>
	);
};

export default BreweryDetails;