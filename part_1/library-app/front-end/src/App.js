import React,{useState,useEffect} from 'react'
import axios from "axios"

export default function App() {
 const [book, setBook] = useState({
   title: "",
   author:"",
   pages:"",
   publisher: "",
   published_at:"",
 });

 axios
 .get("http://localhost:3000/books");

 })
  return (
    <div>
      
    </div>
  )
}
