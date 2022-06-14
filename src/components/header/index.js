import React from 'react';

import RMDBLogo from '../../images/react-movie-logo.svg';
import TMDBLogo from '../../images/tmdb_logo.svg';
import {Link} from "react-router-dom";

import {Wrapper, Content, TMDBLogoImg, Logo} from "./Header.styles";

const Header = () => (
    <Wrapper>
        <Content>
            <Link to='/'>
                <Logo src={RMDBLogo} alt='rmdb-logo' />
            </Link>
            <TMDBLogoImg src={TMDBLogo} alt='tmdb-log' />
        </Content>
    </Wrapper>
);

export default Header;