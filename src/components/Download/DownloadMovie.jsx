import React, { useEffect, useState } from 'react'
import "./downloadmovie.css"
import axiosInstance from '../../server/axiosInstance'
import { Link, useParams } from 'react-router-dom'

const DownloadMovie = () => {

    let { id } = useParams();
    let [MovieData, setMovieData] = useState([])

    useEffect(() => {
        let fetchData = async () => {
            let { data } = await axiosInstance.get(`/posts/${id}`);
            // console.log(data);
            setMovieData(data);
        }
        fetchData()
    })
    return (
        <div className='download-page-content'>
            <div className="movie-poster">
                <img src={MovieData.mposter} alt={MovieData.mname} className='bwsp'/>
                <h1>{MovieData.mname}</h1>
                <h3 className='bwsp'>Web-DL DDP5.1 | 4 GB</h3>
                <p>
                    <Link to={"https://drive.google.com/file/d/1dX2z618V2934taGxE5fBBAsP8hdKcbTj/view?usp=drive_link"}> Click Here </Link>
                </p>
                <h3 className='bwsp'>Web-DL DDP5.1 | 9 GB</h3>
                <p>
                    <Link to={"https://drive.google.com/file/d/1kEzfqguHNqhUtHSEKj41SMI91VzfGTf4/view?usp=drive_link"}> Click Here </Link>
                </p>
            </div>
        </div>
    )
}

export default DownloadMovie