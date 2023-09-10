import styled from "styled-components";
interface iBotton{
    width: string;
    height: string;
    txt: string;
    bcc: string;
    border: string;
    color:string;
    hover: string;
    hColor: string;
    hBcc: string
}


const Button: React.FC <iBotton> = ({width, height , txt , bcc , border , color , hover , hColor , hBcc}) =>{
    return(
        <div>
            <Buttons width = {width} height = {height}  bcc={bcc} border={border} color={color} hover={hover} hColor= {hColor} hBcc= {hBcc}>
                {txt}
            </Buttons>
        </div>
    );
};

export default Button

const Buttons = styled.div <{width: string ; height: string; bcc: string; border: string; color:string; hover: string; hColor: string; hBcc: string}>`
    width: ${({width}) => width};
    height: ${({height}) => height};
    background-color: ${({bcc}) => bcc};
    border-radius: ${({border}) => border};
    color: ${({color}) => color};
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover{
       ${({hover}) => hover}
       transform: scale(1.05);
       color: ${({hColor}) => hColor};
       background-color: ${({hBcc}) => hBcc};
    }
`
