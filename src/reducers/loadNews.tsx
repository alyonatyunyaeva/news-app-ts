import { 
    LOADING_IN_PROGRESS,
    LOADING_SUCCESS,
    LOADED_WITH_SOURCE,
} from '../actions/types';
import src from '*.bmp';


interface Article {
    sourceName: string,
    sourceId: string,
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
sources: Array<Source>,
isLoading: boolean,
totalResults: number,
};

interface NewsAction {
type: string,
data?: {
    articles: Array<Article>,
    totalResults: 0,
}
};

const initialState = {
    articles: [],
    sources: [],
    isLoading: false,
    totalResults: 0,
};

const reducer = (state: Store = initialState, action: NewsAction): Store => {
    const { type } = action;
    let newState = null;
    switch (type) {
      case LOADING_IN_PROGRESS:
        console.log(LOADING_IN_PROGRESS)
        newState = JSON.parse(JSON.stringify(state));
        newState.isLoading = true;
        return newState;
        
      case LOADING_SUCCESS:
        console.log("3. LOADING_SUCCESS");
        console.log(action.data);
        newState = JSON.parse(JSON.stringify(state));
        newState.articles = action.data ? action.data.articles : newState.articles;
        newState.totalResults = action.data ? action.data.totalResults : newState.totalResults;

        newState.sources = action.data ? action.data.articles.reduce(
          (totalList: Array<Source>, article ) => {
            const srcData = {
              sourceName: article.sourceName,
              sourceId: article.sourceId,
            }
            if (!totalList.some(srcData => srcData.sourceName === article.sourceName) && article.sourceId){
              totalList.push(srcData)
            }
            console.log("totalList", totalList)
             return totalList
          }, []
        ) : newState.sources;

        newState.isLoading = false;
        console.log('3. newState ------- ', newState);
        return newState;
      
        case LOADED_WITH_SOURCE:
        newState = JSON.parse(JSON.stringify(state));
        newState.articles = action.data ? action.data.articles : newState.articles;
        newState.totalResults = action.data ? action.data.totalResults : newState.totalResults;
        newState.isLoading = false;
        console.log('3. newState ------- ', newState);
        return newState;

      default:
        return state;
    }
  };

export default reducer;



