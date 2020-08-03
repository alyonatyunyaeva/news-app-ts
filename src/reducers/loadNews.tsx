import { 
  LOADING_IN_PROGRESS,
  LOADING_NEWS_CONTENT_SUCCESS,
} from '../actions/types';
import src from '*.bmp';


interface Article {
    sourceName: string,
    title: string,
    description: string,
    url: string,
    urlToImage: string, 
};

interface Source {
  sourceName: string,
  sourceId: string,
}
  
type Store = {
articles: Array<Article>,
isLoading: boolean,
totalResults: number,
};

interface NewsAction {
  type: string,
  data?: {
      articles?: Array<Article>,
      totalResults?: 0,
  }
};

const initialState = {
    articles: [],
    isLoading: false,
    totalResults: 0,
};

const reducer = (state: Store = initialState, action: NewsAction): Store => {
    const { type } = action;
    let newState = null;

    switch (type) {
      case LOADING_IN_PROGRESS:
        newState = JSON.parse(JSON.stringify(state));
        newState.isLoading = true;
        return newState;
        
      case LOADING_NEWS_CONTENT_SUCCESS:
        newState = JSON.parse(JSON.stringify(state));
        newState.articles = action.data ? action.data.articles : newState.articles;
        newState.totalResults = action.data ? action.data.totalResults : newState.totalResults;
        newState.isLoading = false;
        return newState;

      default:
        return state;
    }
  };

export default reducer;



