import React, { useContext } from 'react'
import  { PlayerContext } from '../context/PlayerContext'

const SongItems = ({name,desc,image,id}) => {

  const {playWithId} = useContext(PlayerContext);
  
  return (
    <div>
      <div onClick={()=>playWithId(id)} className="min-w-[150px] p-2 px3 rounded cursor-pointer hover:bg-[#ffffff26]">
         <img className='rounded' src={image} alt="" />
         <p className='font-bold mt-2 mb1'>{name}</p>
         <p className='text-slate-200 text-sm'>{desc}</p>
      
      </div>
    </div>
  )
}

export default SongItems
