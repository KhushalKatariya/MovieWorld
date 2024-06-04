import React, { useEffect, useState } from 'react'
import "./downloadmovie.css"
import axiosInstance from '../../server/axiosInstance'

const DownloadMovie = () => {
    let [MovieData, setMovieData] = useState([])

    useEffect(() => {
        let fetchData = async () => {
            let { data } = await axiosInstance.get("/posts");
            // console.log(data);
            setMovieData(data);
        }
        fetchData()
    })
    return (
        <div className='download-content holder'>
            {MovieData.map((item, idx) => {
                return (
                    <>
                        <div className="poster card" key={idx}>
                            <img src={item.mposter} alt={item.mname} />
                            <h1>{item.mname}</h1>
                        </div>
                        {/* <div className="download-link">
                            <h3>Web-DL DDP5.1 4 GB</h3>
                            <p>
                                https://drive.google.com/file/d/1dX2z618V2934taGxE5fBBAsP8hdKcbTj/view?usp=drive_link
                            </p>
                            <h3>Web-DL DDP5.1 9 GB</h3>
                            <p>
                            https://drive.google.com/file/d/1kEzfqguHNqhUtHSEKj41SMI91VzfGTf4/view?usp=drive_link
                            </p>
                        </div> */}
                    </>
                )
            })}
        </div>
    )
}

export default DownloadMovie