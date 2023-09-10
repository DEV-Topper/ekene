import React from "react"
import styled from "styled-components";


const Upload = () =>{
    return(
        <div>
            <Container>
                <Wrapper>

                </Wrapper>
            </Container>
        </div>
    )
}

export default Upload;

const Container = styled.div`
    background-color: green;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Wrapper = styled.div`
    background-color: red;
    height: 50vh;
    width: 50%;
`