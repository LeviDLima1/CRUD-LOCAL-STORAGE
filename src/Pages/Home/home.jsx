import { StrictMode } from "react";
import { useNavigate } from 'react-router-dom';
import Header from "./components/header.jsx";
import Body from "./components/body.jsx";
export default function Home(){

  

  return (
    <StrictMode>
      <Header/>
      <Body/>
    </StrictMode>
  )
       
    
}