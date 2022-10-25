import styled from "styled-components"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux";
import { selectOriginal } from "../features/movie/movieSlice";
import React from 'react'

function Originals() {
    const movies = useSelector(selectOriginal)
  return (
    <Container>
      <div className="headding">Disney Originals</div>
      <Content>
        {movies &&
          movies.map((movie, key) => (
            <Wrap key={key}>
              {/*{movie.id}*/}
              <Link to={`/detail/` + movie.id}>
                <img src={movie.cardImg} alt={movie.title} />
              </Link>
            </Wrap>
          ))}
      </Content>
    </Container>
  )
}

const Container = styled.div`
    padding: 0 0 26px;
    .headding{

        font-size: 20px;
        font-weight: 200;
        margin-bottom: 10px;
    }

`
const Content = styled.div`
    display: grid;
    grid-gap: 25px;
    gap: 10px;
    grid-template-columns: repeat(8, minmax(auto, auto));

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
`;

const Wrap = styled.div`
   
    
    img {
      height: 200px;
      width: 100%;
      cursor: pointer;
      border-radius: 5px;
    }

    &:hover {
      transition: 0.5s;
      transform:scale(1.23);
      z-index: 2;
    }
`

export default Originals
