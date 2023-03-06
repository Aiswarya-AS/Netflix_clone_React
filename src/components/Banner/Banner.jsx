import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../axios'
import {API_KEY,imageUrl} from  '../../constants/constants'

function Banner() {
  const [movie,setMovie]=useState()
  useEffect(()=>{
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      // console.log(response.data)
      setMovie(response.data.results[[Math.floor(Math.random() * 20)]])
    })

  },[])
  return (
    <div className='banner' style={{ backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ""})` }}
    >
        <div className='content'>
            <h1 className='title'>{movie ? movie.title : ""}</h1>
            <div className='banner-btns'>
                <button className='btn'>Play</button>
                <button className='btn'>Mylist</button>

            </div>
            <h1 className='desc'>{movie ? movie.overview : ""}</h1>
        </div>
      <div className="fade_bottom">

      </div>
    </div>
  )
}

export default Banner
