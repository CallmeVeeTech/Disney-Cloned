import React from 'react'
import styled from 'styled-components'
import {GoThreeBars} from 'react-icons/go' 
import {GiCancel} from 'react-icons/gi'
import {Link} from 'react-router-dom'

const Header = () => {
    const [toggle, setToggle] = React.useState(false)
    const toggleChange =()=>{
        setToggle(!toggle)
    }

  return (
    
    <Container>
        <Wrapper>
               <Logodiv><Logo src="/Assets/images/logo.svg" alt =""/></Logodiv> 
            <Navigation>
                <NavHold>
                    <Link to="/" style={{textDecoration:"none", color: "red"}}>
                    <Nav>
                        <Icon src="/Assets/images/home-icon.svg" alt =""/>
                        <span >Home</span>
                    </Nav>
                    </Link>
                    <Nav>
                        <Icon src="/Assets/images/movie-icon.svg"/>
                        <span >Movie</span>
                    </Nav>
                    <Nav>
                        <Icon src="/Assets/images/series-icon.svg" alt =""/>
                        <span >Series</span>
                    </Nav>
                    <Nav>
                        <Icon src="/Assets/images/watchlist-icon.svg" alt =""/>
                        <span>Watched</span>
                    </Nav>
                    <Nav>
                        <Icon src="/Assets/images/original-icon.svg" alt =""/>
                        <span>Favorite</span>
                    </Nav>
                    <Nav>
                        <Icon src="/Assets/images/search-icon.svg" alt="" />
                        <span>Search</span>
                    </Nav>
                </NavHold>
                <Avatarhold>
                <Pix src="/Assets/images/manavatar.jpg" alt="my profile"/>
            </Avatarhold>
            </Navigation>
            <Buggerhold>
            {toggle ? (<GoThreeBars onClick={toggleChange}  size="30px" color="white"/>
            ):
            (
                <GiCancel size="30px" onClick={toggleChange} color="white"/>
            
            )
                
            }
            </Buggerhold>
        </Wrapper>
    </Container>
  )
}

export default Header;
const Container= styled.div`
width: 100%;
height: 90px;
background-color: #090b13;
display: flex;
justify-content: center;
align-items: center;
`
const Wrapper= styled.div`
width: 98%;
height: 100%;
display: flex;
justify-content: space-between;
align-items: center;

`
const Logodiv= styled.div`
margin-right: 40px;
height: 100%;
display: flex;
align-items: center;
`
const Logo= styled.img`
width: 100px;
`
const Navigation= styled.div`
display: flex;
/* background: hotpink; */
height: 100%;
width: 100%;
flex: 1;
justify-content: space-between;
align-items: center;

@media (max-width: 768px){
    display: none;
}
`
const NavHold= styled.div`
display: flex;
width: 700px;
height: 100%;
/* background: greenyellow; */
justify-content: space-between;
align-items: center;
`
const Nav= styled.div`
display: flex;
justify-content:center;
align-items: center;


span{
    font-size: 20px;
    font-weight: 700;
    margin-left: 3px;
    transition: all .35ms;
    position: relative;
    color: #fff;
    cursor: pointer;

    ::after{
        content: "";
        position: absolute;
        height: 2px;
        background-color: #fff;
        left: 0;
        right: 0;
        bottom: -7px;
        opacity: 0;
        transition: all 350ms cubic-bezier(0.25, 0.46, 0.45, 0.95) 0s;
    }
    :hover{
        transform: scale(1.1);
        ::after{
            opacity: 1;
        }
    }

}
`

const Icon= styled.img`
width: 25px;
color: none;
`
const Avatarhold= styled.div`
width: 55px;
height: 55px;
border-radius: 55px;
background: blue;
`

const Pix= styled.img`
height: 100%;
width: 100%;
border-radius: 100%;
`

const Buggerhold= styled.div`
display: none;


@media screen and (max-width: 768px){
display: block;
width: 50px;
}
`

