import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import layoutStyles from './Layout.module.css'

const Layout = ({ children, home, search }) => {
	return (
		<>
			<Head>
				<title>Brew Hop</title>
				<meta name="description" content="Search and find details about local breweries." />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<header className={layoutStyles.header}>
				<h1>Brew Hop</h1>
				{!search && (
					<section className='search'>
						Have something in mind?
						<Link href="/search">
							<a className={layoutStyles.searchButton}>Search</a>
						</Link>
					</section>
				)}
				{!home && (
					<Link href="/">
						<a>← Back to home</a>
					</Link>
				)}
			</header>
			<main className={layoutStyles.main}>
				{children}
			</main>
		</>
	);
};

export default Layout;