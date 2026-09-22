import React, { useState } from 'react'

const Banner = () => {
  const [bannerVisible, setbannerVisible] = useState(() => {
    return sessionStorage.getItem('banner_dismissed') !== 'true';
  })








  return (
    <div>Banner</div>
  )
}

export default Banner