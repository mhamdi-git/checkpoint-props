import React from 'react'
import photoProfil from './photoProfil.jpg'
function photoProfil(props) {
 return (
  <div>
   {props.handleAlert(props.name)}
   <img src={photoProfil} className="image-profil" alt="img" />
  </div>
 )
}

export default photoProfil
