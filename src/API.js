import axios from 'axios';

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key: "a9dc1bd31af50bb46c99983404356308",
        language: "ko-KR"
    }
});

export const tvApi = {
    popular: () => api.get("tv/popular"),
    airingToday: () => api.get("tv/airing_today"),
    onTheAir: () => api.get("tv/on_the_air"),
    topRated: () => api.get("tv/top_rated"),
    tvDetail: id => api.get(`tv/${id}`, {
        params: {
            append_to_response: "videos"
        }
    }),
    search: term => api.get("search/movie", {
        params: {
            query: encodeURIComponent(term)
        }
    })
};

export const movieApi = {
    popular: () => api.get("movie/popular"),
    nowPlaying: () => api.get("movie/now_playing"),
    upcoming: () => api.get("movie/upcoming"),
    topRated: () => api.get("movie/top_rated"),
    movieDetail: id => api.get(`movie/${id}`, {
        params: {
            append_to_response: "videos"
        }
    }),
    search: term => api.get("search/tv", {
        params: {
            query: encodeURIComponent(term)
        }
    })
};
