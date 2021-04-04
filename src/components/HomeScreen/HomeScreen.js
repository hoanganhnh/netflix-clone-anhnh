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
            <Row 
                title= 'TOP TREDING'
                fetchURL={requets.fetchTrending}
            />
            <Row 
                title= 'TOP RATED'
                fetchURL={requets.fetchTopRated}
            />
            <Row 
                title= 'ACTIONS MOVIES'
                fetchURL={requets.fetchActionMovies}
            />
            <Row 
                title= 'COMEDY MOVIES'
                fetchURL={requets.fetchComedyMovies}
            />
            <Row 
                title= 'HORROR MOVIES'
                fetchURL={requets.fetchHorrorMovie}
            />
            <Row 
                title= 'ROMANCE MOVIES'
                fetchURL={requets.fetchRomanceMovies}
            />
            <Row 
                title= 'DOCUMENTARY'
                fetchURL={requets.fetchDocumentaries}
            />
        </>
    )
}

export default HomeScreen
