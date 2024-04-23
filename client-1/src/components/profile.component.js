import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import AuthService from "../services/auth.service";
import axios from "axios";


const Profile = () => {
  const [redirect, setRedirect] = useState(null);
  const [userReady, setUserReady] = useState(false);
  const [currentUser, setCurrentUser] = useState({ username: "" });
  const [randomImage, setRandomImage] = useState('');
  useEffect(() => {
    const imageFilenames = [
      'avatar1.png',
      'avatar2.png',
      'avatar3.png',
      'avatar4.png',
      'avatar5.png',
      'avatar6.png',
      'avatar7.png',
      'avatar8.png',
      'avatar1.png',
    ];

    const randomIndex = Math.floor(Math.random() * imageFilenames.length);
    const imagePath = `${imageFilenames[randomIndex]}`;
    setRandomImage(imagePath);
  }, []);

  useEffect(() => {
    const currentUser = AuthService.getCurrentUser();
    if (!currentUser) setRedirect("/home");
    setCurrentUser(currentUser);
    setUserReady(true);
  }, []);

  if (redirect) {
    return <Navigate to={redirect} />;
  }


  return (
    <>
      < div class="container mt-5 mb-5" >
        <div class="row no-gutters">
          <div class="col-md-4 col-lg-4"><img className="imgabt" src={randomImage} /></div>
          <div class="col-md-8 col-lg-8">
            <div class="d-flex flex-column">
              <div class="d-flex flex-row justify-content-between align-items-center p-5 bg-dark text-white">
                <h3 class="display-5"> Email - {currentUser.email}</h3></div>
              <div class="p-3 bg-black text-white">
                <h6>Web designer &amp; Developer</h6>
              </div>
              <div class="d-flex flex-row text-white">
                <div class="p-4 bg-primary text-center skill-block">
                  <h4>90%</h4>
                  <h6>React</h6>
                </div>
                <div class="p-3 bg-success text-center skill-block">
                  <h4>70%</h4>
                  <h6>Material-UI</h6>
                </div>
                <div class="p-3 bg-warning text-center skill-block">
                  <h4>80%</h4>
                  <h6>HTML</h6>
                </div>
                <div class="p-3 bg-danger text-center skill-block">
                  <h4>75%</h4>
                  <h6>JAVA</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  );
};

export default Profile;

//  <div className="container">
// {
//   userReady && (
//     <div>
//       <header className="jumbotron">
//         <h3>
//           <strong>{currentUser.username}</strong> Profile
//         </h3>
//       </header>
//       <p>
//         <strong>Token:</strong>{" "}
//         {currentUser.accessToken.substring(0, 20)} ...{" "}
//         {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
//       </p>
//       <p>
//         <strong>Id:</strong>{" "}
//         {currentUser.id}
//       </p>
//       <p>
//         <strong>Email:</strong>{" "}
//         {currentUser.email}
//       </p>
//       <strong>Authorities:</strong>
//       <ul>
//         {currentUser.roles &&
//           currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
//       </ul>
//     </div>
// )}
