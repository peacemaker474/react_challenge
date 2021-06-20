import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MoviePresenter = ({nowPlaying, upcoming, topRated, error, loading}) => null;

MoviePresenter.propTypes = {
    nowPlaying: PropTypes.array,
    upcoming: PropTypes.array,
    topRated: PropTypes.array,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired
}

export default MoviePresenter;