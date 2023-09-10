import React from "react"
import styled from "styled-components"
import { NavLink } from "react-router-dom"
import image from "../assets/BookLogo.png"
import Button from "./Globalbotton"
import {FiSearch} from "react-icons/fi"

const Header = () =>{
    return(
        <div>
            <Container>
                <Wrapper>
                    <Logos>
                        <Logo src={image} alt="BOOK"  >
                            
                        </Logo>
                        <h2>Bookstore</h2>
                    </Logos>
                    <Navs>
                        <FiSearch color="gray" cursor= "pointer" height= "50px"/>

                        <NavLink to="/UploadBook" style={{textDecoration: "none"}}>
                        <Button width="150px" height="45px" txt="UPLOAD BOOKS" bcc="#E73B7D" border= "5px" color= "white" hover="" hColor="" hBcc="#ffc7dd"/>
                        </NavLink>
                    </Navs>
                </Wrapper>
            </Container>
        </div>
    )
}

export default Header

 

const Navs = styled.div`
    /* background-color: bisque; */
    height: 14vh;
    width: 180px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Logo = styled.img`
    width: 40px;
    height: 40px;
`

const Logos = styled.div`
    width: 165px;
    height: 14vh;
    /* background-color: blue; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
`

const Container = styled.div`
    width: 100%;
    height: 15vh;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Wrapper = styled.div`
    width: 95%;
    height: 14vh;
    /* background-color: red; */
    display: flex;
    justify-content: space-between;
`