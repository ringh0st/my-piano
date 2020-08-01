import React from 'react';
import Button from '../Button/Button';
import {NavLinks} from './Header.style';

const Header = () => {
    const links = ['Home','News','Contact','About'];
    const renderLinks = links.map(link=><Button text={link}/>)
    return (
        <>
            <NavLinks>
                {/* <Links primary><a href="default.asp">Home</a></Links>
                <Links primary><a href="news.asp">News</a></Links>
                <Links primary><a href="contact.asp">Contact</a></Links>
                <Links primary><a href="about.asp">About</a></Links> */}
                {renderLinks}

            </NavLinks>
        </>
    )
}
export default Header