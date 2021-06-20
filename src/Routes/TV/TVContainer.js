import { tvApi } from 'API';
import React from 'react';
import TVPresenter from './TVPresenter';

export default class extends React.Component {
    state = {
        airingToday: null,
        onTheAir: null,
        topRated: null,
        error: null,
        loading: true,
    };

    async componentDidMount() {
        try{
            const {
                data: {results: airingToday}
            } = await tvApi.airingToday();
            const {
                data: {results: onTheAir}
            } = await tvApi.onTheAir();
            const {
                data: {results: topRated}
            } = await tvApi.topRated();
            this.setState({
                airingToday,
                onTheAir,
                topRated
            });
        }catch{
            this.setState({
                error: "Can't find TVs information",
            });
        }finally{
            this.setState({
                loading: false,
            });
        }
    }

    render() {
        const {airingToday, onTheAir, topRated, error, loading} = this.state;
        return (
            <TVPresenter 
                airingToday={airingToday}
                onTheAir={onTheAir}
                topRated={topRated}
                error={error}
                loading={loading}
            />
        );
    }
}