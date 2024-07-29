import { styled } from "@mui/material";
import { Link as LinkComponent} from "react-router-dom";
import { grayColor } from "../../constants/color";


const VisuallyHiddenInput = styled("input")({
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    whiteSpace: "nowrap",
    width: 1,
  });


const Link = styled(LinkComponent)`
  text-decoration: none;
  color: black;
  padding: 1rem;
  &:hover {
    background-color: rgba(0 , 0 , 0 , 0.1);
  }
`;

const InputBox = styled("input")`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  padding: 0 3rem;
  border-radius: 1.5rem;
  background-color: ${grayColor};
`;


const SearchField = styled("input")`
  padding: 1rem 2rem;
  width: 20vmax;
  border: none;
  outline: none;
  border-radius: 1.5rem;
  background-color: rgba(0,0,0,0.85);
  color: white;
  font-size: 1.1rem;
`


const CurveButton = styled("button")`
  border-radius: 1.5rem;

  // yaha par mene change kara hai kuch gadbad ho toh ye hata dena
  padding : 0.7rem 1rem;

  border: none;
  outline: none;
  cursor: pointer;
  background-color: rgba(0,0,0,0.85);
  color: white;
  font-size: 1.1rem;
  &:hover{
    background-color: 
  }
`


export {
    VisuallyHiddenInput , Link  , InputBox  , SearchField , CurveButton
};