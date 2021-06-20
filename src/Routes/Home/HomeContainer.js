import { movieApi, tvApi } from 'API';
import React from 'react';
import HomePresenter from './HomePresenter';

export default class extends React.Component{
    state = {
        moviePopular: null,
        tvPopular: null,
        error: null,
        loading: true,
    };

    async componentDidMount() {
        try{
            const {
                data: {results : moviePopular}
            } = await movieApi.popular();
            const {
                data: {results : tvPopular}
            } = await tvApi.popular();
            this.setState({
                moviePopular,
                tvPopular,
            });
        } catch {
            this.setState({
                error: "Can't find Information",
            })
        } finally {
            this.setState({
                loading: false,
            });
        }
    }

    render() {
        const {moviePopular, tvPopular, error, loading} = this.state;
        return (
            <HomePresenter 
                moviePopular={moviePopular} 
                tvPopular={tvPopular} 
                error={error}
                loading={loading}
            />
        );
    }
}