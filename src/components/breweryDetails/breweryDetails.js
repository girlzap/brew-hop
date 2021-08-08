import React from 'react';
import detailStyles from './BreweryDetails.module.css'


const BreweryDetails = ({ detailData }) => {
	const { name, phone, website_url, type, id, latitude, longitude, updated_at, created_at } = detailData || ''

	const buildAddress = () => {
		let targetStreet = detailData.street || ''
		let targetCity = detailData.city || ''
		let targetState = detailData.state || ''
		let targetPostalCode = detailData.postal_code || ''
		let targetCountry = detailData.country || ''

		return targetStreet + ' ' + targetCity + ', ' + targetState + ' ' + targetPostalCode + ' (' + targetCountry + ')'
	}

	const formatPhone = () => {
		let removeExcess = ('' + phone).replace(/\D/g, '');

		let verified = removeExcess.match(/^(\d{3})(\d{3})(\d{4})$/);

		if (verified) {
			return '(' + verified[1] + ') ' + verified[2] + '-' + verified[3]
		};

		return null
	}

	if (detailData === null || detailData === undefined) {
		return <div>Loading...</div>
	}

	return (
		<>
		{name && <div className={detailStyles.name}>{name}</div>}
		<div className={detailStyles.breweryDeatilsMain}>
			
			<div>				
				<div>{buildAddress()}</div>
				{phone && <div>{formatPhone()} </div>}
				{website_url && <div>{website_url} </div>}
			</div>

			<div className={detailStyles.minor}>

				{type && <div>Type: {type} </div>}

				{id && <div>ID: {id} </div>}

				{longitude && <div>Longitude: {longitude}</div>}
				{latitude && <div>Latitude: {latitude}</div>}

				{updated_at && <div>Updated: {updated_at}</div>}

				{created_at && <div>Created: {created_at} </div>}
			</div>
		</div>
		</>
	);
};

export default BreweryDetails;