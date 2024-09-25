
import { Routes , Route, useLocation} from 'react-router-dom'
import Home from './Home'
import DisplayAlbum from './DisplayAlbum'
import { useEffect, useRef } from 'react'
import { albumsData } from '../assets/assets'

const Display = () => {

  const displayRef = useRef();
  const loction = useLocation();
  const isAlbum = loction.pathname.includes("album")
   const alumId = isAlbum ? loction.pathname.slice(-1): "";

 const bgColor = albumsData[Number(alumId)].bgColor;

 useEffect(()=>{
  if (isAlbum) {
    displayRef.current.style.background =`linear-gradient(${bgColor}, #121212)`
  }else{
      displayRef.current.style.background =`#121212`
  }
 })

  return (
    <div ref={displayRef} className='w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0'>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/album/:id" element={<DisplayAlbum/>}/>
      </Routes>
    </div>
  )
}

export default Display
