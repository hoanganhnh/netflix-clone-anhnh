import React, { useState, useEffect } from 'react'
import axios from '../Data/axios'
import styles from './Row.module.scss'

function Row({title, fetchURL, isLargeRow = false}) {
    const [movies, setMovie] = useState([])
    const BASE_URL_IMG = "https://image.tmdb.org/t/p/original/"
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchURL)
            setMovie(request.data.results)
            return request
        }

        fetchData()
    }, [fetchURL])
    return (
        <div className={styles.wapper}>
            <div className={styles.content}>
                <h2 className={styles.content__title}>{title}</h2>
                <div className={styles.content__cards}>
                    { movies.map((movie) => 
                        (
                            <a href="###" key={movie.id}>
                                <img 
                                    src={`${BASE_URL_IMG}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                                    alt={movie.name}
                                />
                            </a>
                        )
                    )}
                </div>
            </div>
        </div>
       
    )
}

export default Row
