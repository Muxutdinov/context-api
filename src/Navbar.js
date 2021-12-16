import React, {useContext} from "react";
import {Container ,Item } from "./NavStyle";
import { Kino } from "./Context";
const Navbar = ()=>{
const [data,setData] = useContext(Kino)
    return(
        <Container>
             <Item>MoveiList  </Item>
             <Item>{data.length}</Item>
        </Container>
    )
}
export default Navbar