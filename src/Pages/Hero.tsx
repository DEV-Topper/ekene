import React from "react"
// import { Scrollbars } from "react-custom-scrollbars";
import styled from "styled-components"
import Button from "../Block/Globalbotton"
import {AiOutlineSearch} from "react-icons/ai"
import vid from "../assets/Bookvid.mp4"

const Hero = () =>{
    return(
        <div>
           <Video autoPlay loop muted>
        <source src={vid} type="video/mp4"/>
        </Video>
            <Container>
                <Wrapper>
                    <Allbutton>
                        <Button height=" 50px" txt="COMEDY" width="120px" bcc="black" border="10px" color="white" hover="" hColor="black" hBcc="white"/>
                        <Button height=" 50px" txt="COMEDY" width="120px" bcc="black" border="10px" color="white" hover="" hColor="black" hBcc="white"/>
                        <Button height=" 50px" txt="POETRY" width="120px" bcc="black" border="10px" color="white" hover="" hColor="black" hBcc="white"/>
                        <Button height=" 50px" txt="FAIRY TALE" width="120px" bcc="black" border="10px" color="white" hover="" hColor="black" hBcc="white"/>
                        <Button height=" 50px" txt="PICTURE BOOK" width="120px" bcc="black" border="10px" color="white" hover="" hColor="black" hBcc="white"/>
                        <Button height=" 50px" txt="ROMANCE" width="120px" bcc="black" border="10px" color="white" hover="" hColor="black" hBcc="white"/>
                        <Button height=" 50px" txt="MYSTERY" width="120px" bcc="black" border="10px" color="white" hover="" hColor="black" hBcc="white"/>
                        <Button height=" 50px" txt="NON-FICTION" width="120px" bcc="black" border="10px" color="white" hover="" hColor="black" hBcc="white"/>
                        <Button height=" 50px" txt="FICTION" width="120px" bcc="black" border="10px" color="white" hover="" hColor="black" hBcc="white"/>
                    </Allbutton>

                    <Textdiv>
                        <h2 style = {{fontFamily: "inherit" , color: "white", fontWeight: "700", fontSize:"35px"}}>Explore the world’s leading Books and Autors <br/></h2>
                        <p style={{fontSize: "16px" , color: "white"}}>“Books are a uniquely portable magic.” “That's the thing about books. They let you travel without moving your feet.” <br/>“Books are mirrors: you only see in them what you already have inside you.”</p>
                    </Textdiv>
                    <Search>
                        <AiOutlineSearch style={{marginLeft:"10px", cursor: "pointer"}}/>
                        <input style={{height:"45px",  width:"550px", outline:"none", border:"none"}} type="search" placeholder="Serach By Autors Name"  id="search-input"/>
                    </Search>
                </Wrapper>
            </Container>
        </div>
    )
}

export default Hero

const Video = styled.video`
    width: 100%;
    height: 95vh;
    object-fit: cover;
    overflow: hidden;
    position: absolute;
`


const Search = styled.div`
    background-color: white;
    height: 50px;
    width: 600px; 
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    
    #search-input{
        font-size: 16px;
        font-family: monospace;
        border-radius: 10px;
    }
`
const Textdiv = styled.div`
    text-align: center;
    margin-bottom: 40px;
    /* display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column; */
`

const Allbutton = styled.div`
    height: 100px;
    margin-bottom: 20px;
    width: 100%;
    /* background-color: aqua; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* margin-bottom: 30px; */

    @media screen and (max-width: 1172px){
        flex-wrap: wrap;
        /* margin: 20px; */
    }
`

const Wrapper = styled.div`
    width: 95%;
    height: 95vh;
    /* background-color: red; */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Container = styled.div`
    height: 95vh;
    width: 100%;
    background-color: #00000043;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    /* @media screen and (max-width: 1191px) {
        -ms-flex-align: center;
    } */

    /* Scrollbar thumb color
    ::-webkit-scrollbar-thumb {
        background-color: black;
    } */
`

