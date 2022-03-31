import React from 'react'
// import { useState, useEffect } from 'react'
import styled from 'styled-components'
import Data from '../Data.json'
import { useParams, Link} from 'react-router-dom'
import {BiArrowBack} from 'react-icons/bi'

const Detail = () => {
    const {id} = useParams()
    const render = Data[id - 1]
  return (
    <div>
      {
        <Background>
            <BImage>
                <img src= {render.backgroundImg} alt={render.title} />
            </BImage>
                <Content>
                    <TitleImg  src={render.titleImg} />
                    <Controls>
                        <Play>
                            <Icon src="/Assets/images/play-icon-black.png"  />
                            <Text>Play</Text>
                        </Play>
                        <Trailer>
                            <Icon src="/Assets/images/play-icon-white.png"  />
                            <Text>Trailer</Text>
                        </Trailer>
                        <GroupIcon>
                            <Icon src="/Assets/images/watchlist-icon.svg"  />
                        </GroupIcon>
                        <GroupIcon>
                            <Icon src="/Assets/images/group-icon.png"  />
                        </GroupIcon>
                    </Controls>
                    <SubTitle>{render.subTitle} </SubTitle>
                    <Description> {render.description} </Description>
                    
                </Content>
                <Link to="/" >
                    <Back>
                        <BiArrowBack color="white" size="30px"/>
                    </Back>
                </Link>     
        </Background>
      }
      </div>


  )
}
export default Detail;

const Background = styled.div`
    background-size:cover;
    height: calc(100vh - 90px);
    width: 100%;
    color:white;
    position:relative;
   
`

const BImage = styled.div`
    position: absolute;
    top:0;
    bottom:0;
    left:0;
    right:0;
    z-index: -1;
    opacity:50;

    img{
        width:100%;
        object-fit:cover;
        height:100%;
    }
`

const Content = styled.div`
    width: 40%; 
    display:flex;
    flex-direction: column;
    margin: 0px 50px;
   height: calc(100vh - 90px);
  
`

const TitleImg = styled.img`
    width:50%;
    margin-top: 30px;
`

const Controls = styled.div`
    display:flex;
    align-items: center;
    margin-top: 30px;
`

const Play = styled.div`
    width: 130px;
    height:50px;
    background-color:#fff;
    color:black;
    display:flex;
    align-items: center;
    border-radius:5px;
    border: 2px solid #fff;
    justify-content: center;
    cursor:pointer;
    margin-right:10px;
`

const Icon = styled.img`
`

const Text = styled.div`
    font-weight:500;
`

const Trailer = styled.div`
    width: 140px;
    height:50px;
    border: 2px solid #fff;
    border-radius:5px;
    color:white;
    display:flex;
    align-items: center;
    margin: 0px 10px;
    justify-content: center;
    cursor:pointer;
`

const GroupIcon = styled.div`
    cursor:pointer;
    border-radius: 100%;
    width: 40px;
    height: 40px;
    display:flex;
    justify-content: center;
    margin: 0px 10px;
    align-items: center;
    border:2px solid #fff;
`

const SubTitle = styled.p`
    margin-top: 50px;
    font-size: 25px;
`

const Description = styled.p`
    margin-top: 30px;
    font-weight:500px;
    font-size: 25px;
`

const Back = styled.div`
    width: 50px;
    height:50px;
    display:flex;
    background-color: black;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    margin-top: 30px;
    position: absolute;
    bottom: 40px;
    right: 50px;
    cursor:pointer;

`