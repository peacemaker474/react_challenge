import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import styled from 'styled-components';
import SearchForm from './SearchForm';

const Header = styled.header`
    width:100%;
    height: 100px;
    position:fixed;
    left:0;
    top:0;
    background-color:rgba(21, 21, 21, .55);
    z-index: 10;
    box-shadow: 0px 10px 5px 2px rgba(0, 0, 0, 0.8);
`;

const Container = styled.div`
    width:1200px;
    height: 100%;
    margin: 0 auto;
    display:flex;
    align-items: flex-end;
`;

const NavBox = styled.nav`
    margin: 0 auto;
    padding-bottom: 15px;
`;

const List = styled.ul`
    display: flex;
    justify-content: center;
    width:90%;
`;

const Item = styled.li`
    &:not(:last-child){
        padding-right: 100px;
    }
    color: ${props => props.current ? "rgba(255, 255, 255, 0.5)" : "white"}
`;

const MainLink = styled(Link)`
    font-size: 18px;
    transition: color 0.3s ease-in-out;
`;

const LogoBox = styled.div`
    width: 20%;
    font-size: 22px;
    font-weight: 600;
    padding:0 0 15px 15px;
`;


export default withRouter(({location : {pathname}}) => (
    <Header>
        <Container>
            <LogoBox> 1 4 0 5 </LogoBox>
            <NavBox>
                <List>
                    <Item current={pathname === "/"} >
                        <MainLink to="/"> Home </MainLink>
                    </Item>
                    <Item current={pathname === "/movie"}>
                        <MainLink to="/movie"> Movie </MainLink>
                    </Item>
                    <Item current={pathname === "/tv"}>
                        <MainLink to="/tv"> TV </MainLink>
                    </Item>
                </List>
            </NavBox>
            <SearchForm />
        </Container>
    </Header>
));