import React from 'react'
import photoProfil from './photoProfil.jpg'
const user = {
 name: 'Ahmed',
 profession: 'Developpeur Web',
 bio : 'Technicien expérimenté, passionné par l’univers ICT et son évolution croissante, j’ambitionne de mettre mes compétences au service d’une entreprise à la culture innovante, enthousiaste et audacieuse. Grâce à un parcours de formation approfondie et à une somme d’expériences professionnelles performante, je suis devenu expert dans la conception et l’adaptation de sites et d’applications web.',
 age: 30,
};

function profile() {
 
 const myStyle = {
    color: 'red',
 };
 const handleAlert = (name) => {
    alert(`Hi I am an ${name}`);
  };

  return (
   <div>
    
    <img src={photoProfil} className='photoprofil' alt="pp" />
    <br />
    <label className="name-label"><h2 style={myStyle}>Nom:</h2><h3>{user.name}</h3></label>
     <br />
    <label className="name-label"><h2 style={myStyle}>Profession:</h2><h3>{user.profession}</h3></label>
     <br />
    <label className="name-label"><h2 style={myStyle}>Bibliographie:</h2><h3>{user.bio}</h3> </label>
     <br />
    <label className="name-label"><h2 style={myStyle}>Age:</h2> <h3>{user.age}</h3></label>
     <br />
    
    </div>
  );
};

export default profile
