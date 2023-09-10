import styled from "styled-components";

interface iBox{
    width: string;
    height: string;
}



const Boxs: React.FC <iBox> = ({ width , height}) =>{
    return(
        <div>
            <Box width = {width} height = {height}>
            </Box>
        </div>
    )
}

export default Boxs


const Box = styled.div <{width: string; height: string}>`
    width: ${({width}) => width};
    height: ${({height}) => height};
`