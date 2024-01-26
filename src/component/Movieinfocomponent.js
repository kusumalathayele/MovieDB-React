import styled from "styled-components";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_KEY } from "../Project/MovieDB";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px 30px;
  justify-content: center;
  border-bottom: 1px solid lightgray;
`;
const Coverpage = styled.img`
  object-fit: cover;
  height: 350px;
`;
const Infocolumn = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;
const Moviename = styled.span`
  font-size: 22px;
  font-weight: 600;
  color: black;
  margin: 15px 0;
  white-space: nowrap;
  overflow: hidden;
  text-transform: capitalize;
  text-overflow: ellipsis;
  & span {
    opacity: 0.8;
  }
`;
const Movieinfo = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: black;
  overflow: hidden;
  margin: 4px 0;
  text-transform: capitalize;
  text-overflow: ellipsis;

  & span {
    opacity: 0.5;
  }
`;
const Close = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: black;
  background: lightgray;
  height: fit-content;
  padding: 8px;
  border-radius: 50%;
  cursor: pointer;
  opacity: 0.8;
`;
const MovieInfoComponent = (props) => {
   const [movieinfo, setMovieinfo] = useState();
   const { selectedMovie } = props;
 
   useEffect(() => {
     axios.get(`https://www.omdbapi.com/?i=${selectedMovie}&apikey=${API_KEY}`)
       .then((response) => setMovieinfo(response.data))
   }, [selectedMovie]);
 
   return (
     <Container>
      {movieinfo?<>
         <Coverpage src={movieinfo?.Poster} />
           <Infocolumn>
             <Moviename>{movieinfo?.Type}:{movieinfo?.Title}</Moviename>
             <Movieinfo>
               IMDB Rating: <span>{movieinfo?.imdbRating}</span>
             </Movieinfo>
             <Movieinfo>
               Year: <span>{movieinfo?.Year}</span>
             </Movieinfo>
             <Movieinfo>
               Language: <span>{movieinfo?.Language}</span>
             </Movieinfo>
             <Movieinfo>
               Released: <span>{movieinfo?.Released}</span>
             </Movieinfo>
             <Movieinfo>
               Runtime: <span>{movieinfo?.Runtime}</span>
             </Movieinfo>
             <Movieinfo>
               Director: <span>{movieinfo?.Director}</span>
             </Movieinfo>
             <Movieinfo>
               Actors: <span>{movieinfo?.Actors}</span>
             </Movieinfo>
             <Movieinfo>
               Plot: <span>{movieinfo?.Plot}</span>
             </Movieinfo>
           </Infocolumn>
           <Close onClick={()=>props.OnMovieSelect()}>X</Close>
      </>:"Loading..,"}
      </Container>
   );
 };
 export default MovieInfoComponent