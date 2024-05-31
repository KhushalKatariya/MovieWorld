import React, { useEffect, useState } from 'react'
import axiosInstance from '../../server/axiosInstance';
import "./viewmovie.css"

const Viewmovie = () => {

  let [movieData, setMovieData] = useState([])

  useEffect(() => {
    let fetchData = async () => {
      let { data } = await axiosInstance.get("/posts")
      // console.log(data);
      setMovieData(data)
    }
    fetchData();
  })

  return (
    <div className='holder'>
      {movieData.map((item, idx) => {
        return (
          <>
            <div className='card' key={idx}>
              <img src={item.mposter} alt="" />
              <h2>{item.mname}</h2>
              <h2>{item.mlang}</h2>
              <h2>Movie Rating : {item.mrating}</h2>
              <div className="btn">
                <button>Update</button>
                <button>Delete</button>
              </div>
            </div>
          </>
        )
      })}
    </div>
  )
}

export default Viewmovie