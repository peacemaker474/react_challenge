import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.header`
    width:100%;
    height: 100px;
    background-color:rgba(21, 21, 21, .55);
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
    :not(:last-child){
        padding-right: 100px;
    }
`;

const MainLink = styled(Link)`
    font-size: 18px;
`;

const LogoBox = styled.div`
    width: 20%;
    font-size: 22px;
    font-weight: 600;
    padding:0 0 15px 15px;
`;

const SearchContainer = styled.div`
    width:300px;
    height: 50px;
    position: relative;
`;

const InputContainer = styled.div`
    border: 1px solid orange;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    border-radius: 25px;
`;

const SearchBox = styled.div`
    border: 1px solid white;
    margin-left: 20px;
`;

const Search = styled.input`
    all: unset;
    width: 190px;
    height: 40px;
    font-size: 17px;
`;

const SearchIcon = styled.div`
    border: 1px solid red;
    width: 40px;
    height: 40px;
    margin-left: 20px;
    position: absolute;
    right: 10%;
    bottom: 11%;
`;

export default () => (
        <Header>
            <Container>
                <LogoBox> 1 4 0 5 </LogoBox>
                <NavBox>
                    <List>
                        <Item>
                            <MainLink to="/"> Home </MainLink>
                        </Item>
                        <Item>
                            <MainLink to="/movie"> Movie </MainLink>
                        </Item>
                        <Item>
                            <MainLink to="/TV"> TV </MainLink>
                        </Item>
                    </List>
                </NavBox>
                    <SearchContainer>
                        <InputContainer>
                                <SearchBox>
                                    <Search placeholder="검색어를 입력해주세요" />
                                </SearchBox>    
                        </InputContainer>
                        <SearchIcon />
                    </SearchContainer>
            </Container>
        </Header>
);