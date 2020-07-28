import news from '../Queries/News';

import { 
    LOADING_IN_PROGRESS,
    LOADING_NEWS_CONTENT_SUCCESS,
    LOADING_SOURCES_SUCCESS,
} from './types';

import { Dispatch } from 'react';

const loading = () => ({
    type: LOADING_IN_PROGRESS
});


// const loaded = (totalResults: number, articles: Array<Article>) => {
//     return {
//         type: LOADING_SUCCESS,
//         data: {
//             totalResults: totalResults,
//             articles: articles,
//         }
//     };
// }

// const loadWithSource = (totalResults: number, articles: Array<Article>) => (dispatch: Dispatch<any>) => {
//     console.log("2. action");
//     dispatch({
//         type: LOADED_WITH_SOURCE,
//         data: {
//             totalResults: totalResults,
//             articles: articles,
//         }
//     });
// }

// const load = (totalResults: number, articles: Array<Article>) => (dispatch: Dispatch<any>) => {
//     dispatch(loading());
//     fetch.then
//     dispatch(loaded());
// }

// const loaded2 = (totalResults: number, articles: Array<Article>) => (dispatch: Dispatch<any>) => {
//     console.log("2. action");
//     dispatch({
//         type: LOADING_SUCCESS,
//         data: {
//             totalResults: totalResults,
//             articles: articles,
//         }
//     });
// }

const loadingNewsContent = () => {
    return (dispatch: any) => {
        dispatch(loading());
        news.getNews().then(
            ({totalResults, articles}) => {
              dispatch({
                type: LOADING_NEWS_CONTENT_SUCCESS,
                data: {
                    totalResults,
                    articles,
                },
              })
            }
        )
    };
}

const loadingSources = () => {
    return (dispatch: any) => {
        console.log("hello")
        news.getSources().then(
            (sources) => {
              console.log("sources fetch ",sources)
              dispatch({
                type: LOADING_SOURCES_SUCCESS,
                data: {
                    sources,
                },
              })
            }
        )
    };
}

const loadingNewsBySrc = (sourceId: string) => {
    return (dispatch: any) => {
        dispatch({
            type: LOADING_IN_PROGRESS
        });
        news.getNewsBySrc(sourceId).then(
            ({totalResults, articles}) => {
              dispatch({
                type: LOADING_NEWS_CONTENT_SUCCESS,
                data: {
                    totalResults: totalResults,
                    articles: articles,
                },
              })
            }
        )
    };
}

export {loadingNewsContent, loadingSources, loadingNewsBySrc};