import React,{useEffect,useState} from 'react'
import './RowPost.css'
import axios from '../../axios'
import {imageUrl,API_KEY} from  '../../constants/constants'
import YouTube from 'react-youtube'
function RowPost(props) {
  const [movies,setmovies] = useState([])
  const [UrlId,setUrlId]=useState('')
  useEffect(()=>{
    axios.get(props.url).then(response=>{
      console.log(response.data);
      setmovies(response.data.results)
    }).catch(err=>{
      // alert('Network error')
    })
  },[])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
const handleMovieTrailer=(id)=>{
  axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{

    const index = response.data.results.map(object => object.type).indexOf('Trailer');
    if(index >0){
        setUrlId(response.data.results[index])
    }else
    {
        console.log("error occured Array is empty")
    }
   })
}
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
        {movies.map((obj)=>

          <img onClick={()=>handleMovieTrailer(obj.id)} className={props.isSmall?'small_poster':'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="poster" />
        
        )}
      </div>
      { UrlId && <YouTube opts={opts} videoId={UrlId.key}/>}
    </div>
  )
}

export default RowPost
