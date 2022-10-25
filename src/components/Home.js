import styled from "styled-components"
import React, { useEffect } from 'react'
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";
import Recommends from "./Recommends";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Trending from "./Trending";
import { useDispatch, useSelector } from "react-redux"
import db from "../Firebase"
import { setMovies } from "../features/movie/movieSlice"
import { selectUserName } from '../features/useers/UserSlice'


function Home( props ) {

  

  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  let recommends = [];
  let newDisneys = [];
  let originals = [];
  let trending = [];

  useEffect(() => {
    db.collection('movies').onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {

        // console.log(recommends)
        // console.log(newDisney)
        // console.log(originals)
        // console.log(trending)

        switch (doc.data().type) {
          case 'recommended':

            // console.log("I am recommended")
            recommends = [...recommends, { id: doc.id, ...doc.data() }]
            break;


          case 'new':

            //console.log("I am new")
            newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }]
            break;


          case 'original':

            // console.log("I am originals")
            originals = [...originals, { id: doc.id, ...doc.data() }]
            break;


          case 'trending':

            // console.log("I am trending")
            trending = [...trending, { id: doc.id, ...doc.data() }]
            break;
        }
      });
        console.log(recommends)

      dispatch(
        setMovies({
          recommend: recommends,
          newDisney: newDisneys,
          original: originals,
          trending: trending,
        })
      )
    });
  }, [userName]);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trending />
    </Container>
  )
}

const Container = styled.main`
position: relative;
min-height: calc(100vh - 250px);
overflow-x: hidden;
display: block;
top: 72px;
padding: 0 calc(3.5vw + 5px);
&:after {
  // background: url("/home-background.png") center center / cover
  //   no-repeat fixed;
  background-color: #0c111b;
  content: "";
  position: absolute;
  inset: 0px;
  opacity: 1;
  z-index: -1;
}
`;
export default Home