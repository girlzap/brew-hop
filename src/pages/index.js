import Head from 'next/head'
import Link from 'next/link'

import Tile from '../components/tile'

import styles from '../styles/Home.module.css'

//TODO: map through tiles based on selected type results, cap at 12?
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Brew Hop</title>
        <meta name="description" content="Search and find details about local breweries." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
	  <section className={styles.search}>
		  Have something in mind?
			<Link href="/search">
				<a className={styles.searchButton}>Search</a>
			</Link>
		</section>
		
        <section className={styles.featured}>Featured brewery, set results in context wrapper along with geo-location if available. Include a fallback if needed. 
		</section>
		
		<section className={styles.tiles}>
			<Tile tileData='123'/>
			<Tile />
			<Tile />
			<Tile />
		</section>
      </main>

     
    </div>
  )
}
