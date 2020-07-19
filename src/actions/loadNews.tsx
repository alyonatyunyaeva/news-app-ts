import { 
    LOADING_IN_PROGRESS,
    LOADING_SUCCESS,
    LOADED_WITH_SOURCE,
} from './types';

interface Article {
    sourceName: string,
    title: string,
    description: string,
    url: string,
    urlToImage: string, 
};

const loading = () => (dispatch: any) => {
    dispatch({
        type: LOADING_IN_PROGRESS
    });
}



const loaded = (totalResults: number, articles: Array<Article>) => (dispatch: any) => {
    console.log("2. action");
    dispatch({
        type: LOADING_SUCCESS,
        data: {
            totalResults: totalResults,
            articles: articles,
        }
    });
}



const loadWithSource = (totalResults: number, articles: Array<Article>) => (dispatch: any) => {
    console.log("2. action");
    dispatch({
        type: LOADED_WITH_SOURCE,
        data: {
            totalResults: totalResults,
            articles: articles,
        }
    });
}

export {loading, loaded, loadWithSource};