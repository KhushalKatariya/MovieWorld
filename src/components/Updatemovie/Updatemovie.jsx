import React, { useEffect, useState } from 'react'
import "./updatemovie.css"
import axiosInstance from '../../server/axiosInstance'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

const Updatemovie = () => {
    let { id } = useParams();

    let navigate = useNavigate();

    let [MovieData, setMovieData] = useState({});

    let data = (e) => { setMovieData({ ...MovieData, [e.target.name]: e.target.value }) }

    useEffect(() => {
        let fetchData = async () => {
            let { data } = await axiosInstance.get(`/posts/${id}`)
            setMovieData(data);
        }
        fetchData();
    },[])

    let updateData = (e) => {
        e.preventDefault();

        let payload = MovieData;
        axiosInstance.put(`/posts/${id}`, payload);
        toast.success("Movie Updated");
        navigate("/viewmovie")
    }

    return (
        <div className='update-movies-container'>
            <form action="" className='update-movie-form' onSubmit={updateData}>
                <div className="update-movie">
                    <label htmlFor="" >Movie Name</label>
                    <input type="text" name="mname" id="" onChange={data} value={MovieData.mname} />
                </div>
                <div className="update-movie">
                    <label htmlFor="" >Movie Poster</label>
                    <input type="text" name="mposter" id="" onChange={data} value={MovieData.mposter} />
                </div>
                <div className="update-movie">
                    <label htmlFor="" >Movie language</label>
                    <input type="text" name="mlang" id="" onChange={data} value={MovieData.mlang} />
                </div>
                <div className="update-movie">
                    <label htmlFor="" >Movie Genre</label>
                    <input type="text" name="mgenre" id="" onChange={data} value={MovieData.mgenre} />
                </div>
                <div className="update-movie">
                    <label htmlFor="" >Movie Description</label>
                    <textarea name="mdesc" id="" onChange={data} value={MovieData.mdesc}></textarea>
                </div>
                <div className="update-movie">
                    <label htmlFor="" >Movie rating</label>
                    <select name="mrating" id="" onChange={data} value={MovieData.mrating}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div className="btn">
                <button>Update Movie</button>
                    {/* <Link to="/viewmovie"><button>Update Movie</button></Link> */}
                    <Link to="/viewmovie"><button>Cancel</button></Link>
                </div>
            </form>
        </div>
    )
}

export default Updatemovie