import React from 'react';
import {NavLinks, Links} from './Header.style';
const Header = () => {

    return (
        <>
            <NavLinks>
                <Links primary><a href="default.asp">Home</a></Links>
                <Links primary><a href="news.asp">News</a></Links>
                <Links primary><a href="contact.asp">Contact</a></Links>
                <Links primary><a href="about.asp">About</a></Links>
            </NavLinks>
        </>
    )
}
export default Header