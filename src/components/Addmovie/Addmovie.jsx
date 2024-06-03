import React, { useState } from 'react'
import axiosInstance from '../../server/axiosInstance';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

// CSS 
import "./addmovie.css"

const Addmovie = () => {

  let [moviedata, setMoviedata] = useState({});

  let data = (e) => { setMoviedata({ ...moviedata, [e.target.name]: e.target.value }) }

  let navigate = useNavigate();
  let sendData = (e) => {
    e.preventDefault();
    let payload = moviedata;
    axiosInstance.post("/posts", payload);
    toast.success("Movie Added");
    navigate("/Viewmovie");
  }

  return (
    <div className='movies-container'>

      <form action="" className='movie-form' onSubmit={sendData}>
        <div className="add-movie">
          <label htmlFor="" >Movie Name</label>
          <input type="text" name="mname" id="" onChange={data} />
        </div>
        <div className="add-movie">
          <label htmlFor="" >Movie Poster</label>
          <input type="text" name="mposter" id="" onChange={data} />
        </div>
        <div className="add-movie">
          <label htmlFor="" >Movie language</label>
          <input type="text" name="mlang" id="" onChange={data} />
        </div>
        <div className="add-movie">
          <label htmlFor="" >Movie Genre</label>
          <input type="text" name="mgenre" id="" onChange={data} />
        </div>
        <div className="add-movie">
          <label htmlFor="" >Movie Description</label>
          <textarea name="mdesc" id="" onChange={data}></textarea>
        </div>
        <div className="add-movie">
          <label htmlFor="" >Movie rating</label>
          <select name="mrating" id="" onChange={data}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div className="btn">
          <button>Add Movie</button>
          <button type='reset'>Reset</button>
        </div>
      </form>

    </div>
  )
}

export default Addmovie