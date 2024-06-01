import React, { useEffect } from 'react'
import "./updatemovie.css"
import { addHeader } from '@shopify/shopify-api/runtime'
import axiosInstance from '../../server/axiosInstance'
import { useParams } from 'react-router-dom'

const Updatemovie = () => {

    let { id } = useParams();
    useEffect(() => {
        let fetchData = async () => {
            let { data } = await axiosInstance.get(`./posts/${id}`)
            console.log(data);
        }
        fetchData();
    })
    return (
        <div className='update-movies-container'>
            <form action="" className='update-movie-form'>
                <div className="update-movie">
                    <label htmlFor="" >Movie Name</label>
                    <input type="text" name="mname" id="" />
                </div>
                <div className="update-movie">
                    <label htmlFor="" >Movie Poster</label>
                    <input type="text" name="mposter" id="" />
                </div>
                <div className="update-movie">
                    <label htmlFor="" >Movie language</label>
                    <input type="text" name="mlan" id="" />
                </div>
                <div className="update-movie">
                    <label htmlFor="" >Movie Genre</label>
                    <input type="text" name="mgenre" id="" />
                </div>
                <div className="update-movie">
                    <label htmlFor="" >Movie Description</label>
                    <textarea name="mdesc" id=""></textarea>
                </div>
                <div className="update-movie">
                    <label htmlFor="" >Movie rating</label>
                    <select name="mrating" id="">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div className="btn">
                    <button>Update Movie</button>
                </div>
            </form>
        </div>
    )
}

export default Updatemovie