import React, { useState, useEffect } from 'react'
import axios from '../Data/axios'
import requests from '../Data/Requets'
import styles from './Banner.module.scss'

function Banner() {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        try {
            async function fetchData() {
                const request = await axios.get(requests.fetchNetflixOriginals)
                setMovies(
                    request.data.results[
                        Math.floor(Math.random() * request.data.results.length - 1)
                    ]
                )
                return request
            }
    
            fetchData()
            
        } catch (error) {
            console.log(error)
        }
    },[])
    function setupString(str, number) {
        return str.length > number ? str.substr(0, number - 1) + '...' : str
    }
    return (
        <div 
            className={styles.wapper}
            style={{
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`,  
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                paddingTop: "10%"
            }}
        >
            <div className={styles.content}>
                <h1 className={styles.title}>
                    {movies?.name}
                </h1>
                <div className={styles.buttons}>
                    <button className={styles.button}>Play</button>
                    <button className={styles.button}>My List</button>
                </div>
                <p className={styles.description}>
                    {setupString(`${movies?.overview}`, 150)}
                </p>
            </div>

            <div className={styles.overlayBottom} />
        </div>
    )
}

export default Banner
