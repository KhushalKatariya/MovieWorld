import React, { useEffect, useState } from 'react'
import axiosInstance from '../../server/axiosInstance'
import { useParams } from 'react-router-dom'

const Home = () => {

  let[MovieData,setMovieData]=useState([]);

  useEffect(()=>{
    let {id}=useParams();
    let fetchData=async ()=>{
      let {data}= await axiosInstance.get(`/posts/${is}`);
      setMovieData(data);
    }
    fetchData();
  })
  return (
    <div className="download-movie-container">
      

    </div>
  )
}

export default Home