import React from 'react'
import './Gallery.css'
import photo_1 from '../../assets/photo-1.png'
import photo_2 from '../../assets/photo-2.png'
import photo_3 from '../../assets/photo-3.png'
import photo_4 from '../../assets/photo-4.png'
import { BiRightArrowAlt } from 'react-icons/bi'

const Gallery = () => {
  return (
    <div className='gallery'>
      <div className="photos">
        <img src={photo_1} alt="photo_1" />
        <img src={photo_2} alt="photo_2" />
        <img src={photo_3} alt="photo_3" />
        <img src={photo_4} alt="photo_4" />
      </div>

      <button className='btn dark-btn'> See more here <BiRightArrowAlt size={30}/> </button>


    </div>
  )
}

export default Gallery
