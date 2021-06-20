import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Section from 'Components/Section';

const Container = styled.div`
    width:1200px;
    margin:0 auto;
    padding-left: 5px;
`;

const HomePresenter = ({
    moviePopular, 
    tvPopular, 
    error, 
    loading}) => (
    loading ? null :
        <Container>
            {moviePopular && moviePopular.length > 0 && 
                <Section title="영화 인기">{
                moviePopular.map(movie => movie.title)
                }</Section>}
            {tvPopular && tvPopular.length > 0 && 
                <Section title="TV 인기">{
                tvPopular.map(tv => tv.name)
                }</Section>}
        </Container>
    );

HomePresenter.propTypes = {
    moviePopular: PropTypes.array,
    tvPopular: PropTypes.array,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired
}

export default HomePresenter;