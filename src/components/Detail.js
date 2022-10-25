import styled from "styled-components";
import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import db from "../Firebase";


function Detail() {

  const { id } = useParams();
  const [detailData, setDetailData] = useState({})


  useEffect(() => {
    db.collection("movies")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setDetailData(doc.data())
        } else {
          console.log("no such document in firebase 🔥")
        }
      })
      .catch((error) => {
        console.log("Error getting document");
      })
  }, [id])


  return (
    <div style={{ overflowX: "hidden", overflowY: "hidden" }}>

      <Container>
        <Background>
          <img src={detailData.backgroundImg} alt={detailData.title} />
        </Background>
      </Container>
      <ContentMatter><br /><br /><br /><br /><br />
        <ImageTitle>
          <Subscribers>
            <b>SUBSCRIBER</b>
          </Subscribers>
          <h1>
            {detailData.title}
          </h1>
          <SubTitle>
            {detailData.subTitle}
          </SubTitle>
        </ImageTitle><br />
        <Description>
          {detailData.description}
        </Description>
        <Controls>
          <Player>
            <img src="/play-icon-white.png" alt="" />
            <span>Watch Now</span>
          </Player>
          <AddlistContent>
            <AddList onClick={()=>{
              alert("Added to your watch list")
            }}>
              <span></span>
              <span></span>
            </AddList>
          </AddlistContent>

        </Controls>

      </ContentMatter>

    </div>
  )
}
const Container = styled.div`
 min-height: calc(100vh-250px);
 overflow-x: hidden;
 overflow-y: hidden !important;
 display: block;
 top: 72px;
 padding: 0 calc(3.5vw + 5px)
 `;

const AddlistContent = styled.div`
 
 margin-left: 200px;
 @media (max-width: 768px){
  display: none;
}



 `

const ImageTitle = styled.div`

`;

const Subscribers = styled.div`
color: #db882a;
margin-top: 40px;
@media (max-width: 768px){
  display: none;
}
`

const Background = styled.div`
 display: flex;
 justify-content: center;
 top: 50px;

img{
  display: flex;
  align-items: center;
  justify-content
  border-radius: 5px;
  width: 1150px;
  height: 490px;
  position: absolute;
  top: 60px;
  border-radius: 5px;



  @media (max-width: 768px){
    width: initial;
  }
}

 `;
const ContentMatter = styled.div`
display: flex;
flex-direction: column;
position: relative;
left: 80px;



`;

const Controls = styled.div`
align-items: center;
display: flex;
flex-flow: row nowrap;
margin: 24px 0px;
min-height: 200px;

`;

const Player = styled.div`
font-size: 18px;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
letter-spacing: 1.2px;
text-align: center;
gap: 8px;


img{
  width: 32px;
}

&:hover{
  cursor:pointer;
}
@media (max-width: 768px){
  display: flex;

}

`;



const AddList = styled.div`
margin-right: 16px;
height: 44px;
width: 44px;
display: flex;
justify-content: center;
align-items: center;
background-color: rgba(0, 0, 0, 0.6);
border-radius: 50%;
cursor: pointer;


span {
  background-color: rgb(249, 249, 249);
  display: inline-block;
  &:first-child {
    height: 2px;
    transform: translate(1px, 0px) rotate(0deg);
    width: 16px;
  }
  &:nth-child(2) {
    height: 16px;
    transform: translateX(-8px) rotate(0deg);
    width: 2px;
  }
}
`;


const SubTitle = styled.div`
color: rgba(255, 255, 255, 0.6);
font-weight: 400;
@media (max-width: 768px){
  display: none;
  }
`;

const Description = styled.div`
  width: 450px;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 550;

  @media (max-width: 768px){
  display: none;
  }
`;


export default Detail