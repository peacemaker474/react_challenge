import { movieApi } from 'API';
import React from 'react';
import MoviePresenter from './MoviePresenter';

export default class extends React.Component {
    state = {
        nowPlaying: null,
        upcoming: null,
        topRated: null,
        error: null,
        loading: true,
    }

    async componentDidMount() {
        try{
            const {
                data: {results: nowPlaying}
            } = await movieApi.nowPlaying();
            const {
                data: {results: upcoming}
            } = await movieApi.upcoming();
            const {
                data: {results: topRated}
            } = await movieApi.topRated();
            this.setState({
                nowPlaying,
                upcoming,
                topRated
            })
        }catch{
            this.setState({
                error: "Can't find movie information!",
            })
        }finally{
            this.setState({
                loading: false,
            })
        }
    }

    render() {
        const {nowPlaying, upcoming, topRated, error, loading} = this.state;
        return (
            <MoviePresenter 
                nowPlaying={nowPlaying}
                upcoming={upcoming}
                topRated={topRated}
                error={error}
                loading={loading}
            />
        );
    }
}