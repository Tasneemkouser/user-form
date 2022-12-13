
import { AppBar, Toolbar, styled } from "@mui/material"
import { NavLink } from "react-router-dom";

const Header = styled(AppBar)`
`

const Tabs = styled(NavLink)`
font-size: 25px;
margin-right: 50px;
color: inherit;
text-decoration: none
`
                        
export const NavBar = () => { 
    return (
        <Header position="static">
            <Toolbar>   
            <Tabs to = "/list">User List</Tabs>
            <Tabs to = "/add">Add Users</Tabs>
        </Toolbar>
        </Header>
    );
};