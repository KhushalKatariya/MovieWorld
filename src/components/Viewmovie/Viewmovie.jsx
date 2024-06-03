import React, { useEffect, useState } from 'react'
import axiosInstance from '../../server/axiosInstance';
import "./viewmovie.css"
import { Link } from 'react-router-dom';

const Viewmovie = () => {

  let [movieData, setMovieData] = useState([])

  useEffect(() => {
    let fetchData = async () => {
      let { data } = await axiosInstance.get("/posts")
      setMovieData(data)
    }
    fetchData();
  })

  let deleteData=(id)=>{
    axiosInstance.delete(`/posts/${id}`);

  }
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
              <Link to={`/updatemovie/${item.id}`}><button>Update</button></Link>
                <Link><button>Delete</button></Link>
              </div>
            </div>
          </>
        )
      })}
    </div>
  )
}

export default Viewmovie