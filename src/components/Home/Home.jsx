import React, { useEffect, useState } from 'react'
import axiosInstance from '../../server/axiosInstance'
import { Link } from 'react-router-dom';

const Home = () => {

  let [MovieData, setMovieData] = useState([]);

  useEffect(() => {
    let fetchData = async () => {
      let { data } = await axiosInstance.get(`/posts`)
      // console.log(data);
      setMovieData(data)
    }
    fetchData();
  })
  return (
    <div className="holder">
      {MovieData.map((item, idx) => {
        return (
          <>
            <div className="download-content card" key={idx}>
              <img src={item.mposter} alt="" />
              <h2>{item.mname}</h2>
              <h2>{item.mlang}</h2>
              <h2>Movie Rating : {item.mrating}</h2>
              <div className="btn">
                <Link to={"/downloadmovie"}><button>Download</button></Link>
              </div>
            </div>
          </>
        )
      })}
    </div>
  )
}

export default Home