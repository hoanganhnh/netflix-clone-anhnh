import React from 'react'
import Navbar from '../NavBar'
import Banner from '../Banner'
import Row from '../Row'
import requets from '../Data/Requets'

function HomeScreen() {
    return (
        <>
            <Navbar />
            <Banner />
            <Row 
                title= 'NETFLIX ORIGINALS'
                fetchURL={requets.fetchNetflixOriginals}
                isLargeRow
            />
            {/* <Row 
                title= 'NETFLIX ORIGINALS'
                fetchURL={requets.fetchTrending}
            />
            <Row 
                title= 'NETFLIX ORIGINALS'
                fetchURL={requets.fetchTopRated}
            />
            <Row 
                title= 'NETFLIX ORIGINALS'
                fetchURL={requets.fetchActionMovies}
            />
            <Row 
                title= 'NETFLIX ORIGINALS'
                fetchURL={requets.fetchComedyMovies}
            />
            <Row 
                title= 'NETFLIX ORIGINALS'
                fetchURL={requets.fetchHorrorMovie}
            />
            <Row 
                title= 'NETFLIX ORIGINALS'
                fetchURL={requets.fetchRomanceMovies}
            />
            <Row 
                title= 'NETFLIX ORIGINALS'
                fetchURL={requets.fetchDocumentaries}
            /> */}
        </>
    )
}

export default HomeScreen
