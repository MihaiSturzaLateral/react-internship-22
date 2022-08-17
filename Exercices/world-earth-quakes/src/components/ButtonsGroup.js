import React,{useState} from 'react';
import styled from "styled-components";



const types = ["Past Hour", "Past Day", "Past 7 Days", "Past 30 Days"];



const ButtonsGroup = ({sendData}) => {
    const [active, setActive] = useState('');
  return (
    <div>
      {types.map((type,key) => (
        <ButtonCustom key={key} active={active === type} onClick={() => {
          setActive(type);
           sendData(type);
            }}>
          {type} 
        </ButtonCustom>
      ))}
    </div>
  );
};

const Button = styled.button`
 background-color:grey;
 color:white;
 border-radius:5px;
 margin-top:3em;
 box-shadow: 0px 4px 4px lightgray;
 font-size:1.1em;

 &:hover{
    background-color:black;
 }


 }

`;
const ButtonCustom = styled(Button)`
  background-color: grey;
  ${({ active }) => active && `background-color:blue;`};
`;


export default ButtonsGroup;