import styled from "styled-components";

const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 280px;
  box-shadow: 0 30px 10px 0 pink;
  cursor: pointer;
`;

const Coverpage = styled.img`
  height: 362px;
  object-fit: cover;
`;

const Moviename = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: black;
  margin: 15px 0;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden; /* Added overflow property to handle ellipsis */
`;

const Infocolumn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Movieinfo = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: black;
  text-transform: capitalize;
`;

const MovieComponent = (props) => {
  const { Title, Year, imdbID, Type, Poster } = props.movie;

  return (
    <MovieContainer onClick={()=>props.OnMovieSelect(imdbID)}>
      <Coverpage src={Poster} alt={Title} />
      <Moviename>{Title}</Moviename>
      <Infocolumn>
        <Movieinfo>Year: {Year}</Movieinfo>
        <Movieinfo>Type: {Type}</Movieinfo>
      </Infocolumn>
    </MovieContainer>
  );
};

export default MovieComponent;




