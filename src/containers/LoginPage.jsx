import React from "react";
import { Link } from "react-router-dom";
import './LoginPage.css'
import styled from "styled-components";
const loginStyle =  styled.div`
    display: grid;
    place-items: center;
    background-color: black;
    height: 100vh;
    img{
      height: 200px;
    }
    
`;
const linkStyle = {
  color: 'white',
textDecoration: 'none',
padding: '20px',
borderRadius: '99px',
fontWeight: '800',
backgroundColor: '#1db954'
};

export default function LoginPage(){
  return<>
    <div className="login"  >
    <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
       
      />
      <Link to='/' style={linkStyle}>Login Spotify</Link>
    </div>
  </>  
}