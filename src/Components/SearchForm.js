import React from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`
    width:300px;
    height: 50px;
    margin-bottom: 5px;
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
    <SearchContainer>
        <InputContainer>
            <SearchBox>
                <Search placeholder="검색어를 입력해주세요" />
            </SearchBox>    
        </InputContainer>
        <SearchIcon />
    </SearchContainer>
);