import styled from "styled-components"
import React, { useState } from "react"
import MovieComponent from "../component/MovieComponent";
import axios from "axios";
import MovieInfoComponent from "../component/Movieinfocomponent";




const Container= styled.div`
display:flex;
flex-direction:column;
`;
const Header=styled.div`
display:flex;
flex-direction: row;
background-color:black;
justify-content:space-between;
color:white;
padding:10px;
font-size:25px;
font-weight:bold;
box-shadow:0 3px 6px 0 red;
`;
const Appname =styled.div`
display: flex;
flex-direction:row;
align-items:center;
`;
const Searchbox=styled.div`
display:flex;
flex-direction:row;
padding:10px 10px;
background-color:white;
margin-left:20px;
width:50%;
align-items:center;
`;
const Searchinput=styled.input`
color:black;
font-size:16px;
font-weight:bold;
outline:none;
margin-left:15px;
`;
const MovieListContainer=styled.div`
display:flex;
flex-direction:row;
flex-wrap:wrap;
gap:24px;
padding:30px;
justify-content:space-between;
`;
  export const API_KEY="7fcd91c"
const MovieDataBase =()=>{

  const [Searchquery, setSearchQuery]=useState();
  const [timeoutid,updatetimeoutid]=useState();
  const [Movielist,updateMovielist]=useState([]);
  const [selectedMovie,OnMovieSelect]=useState();

     const Handlechange=(event)=>{
      clearTimeout(timeoutid);
      setSearchQuery(event.target.value);
      const timeout= setTimeout(()=>Fetchdata(event.target.value),500);
      updatetimeoutid(timeout);
     }

      const Fetchdata= async (searchString)=>{
        const response=await axios.get(`https://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}`);
        console.log(response);
        updateMovielist(response.data.Search)
      };

    return(
        <Container>
            <Header>
          <Appname> 
            React Movie App
          </Appname>
          <Searchbox>
            <Searchinput 
            placeholder="search movie"
             value={Searchquery}
              onChange={Handlechange}/>
          </Searchbox>
            </Header>
            {selectedMovie && (
            <MovieInfoComponent 
            selectedMovie={selectedMovie}
            OnMovieSelect={OnMovieSelect}
            />
            )}
            <MovieListContainer>
             {
              Movielist?.length
              ?
               Movielist.map((movie,index)=><MovieComponent 
               key={index}
                movie={movie} 
                OnMovieSelect={OnMovieSelect}
                />)
              :
              "No Movie Serach"
             }
            
            </MovieListContainer>
        </Container>
    )
}
export default MovieDataBase




