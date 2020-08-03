import { 
  LOADING_SOURCES_SUCCESS,
  CURRENT_SRC,
} from '../actions/types';
import src from '*.bmp';


interface Source {
  sourceName: string,
  sourceId: string,
}
  
type Store = {
  sources: Array<Source>,
  currentSrc?: string,
};

interface NewsAction {
  type: string,
  data?: {
      sources?: Array<Source>,
      currentSrc?: string,
  }
};

const initialState = {
    sources: [],
    currentSrc: '',
};

const reducer = (state: Store = initialState, action: NewsAction): Store => {
    const { type } = action;
    let newState = null;

    switch (type) {      
      case LOADING_SOURCES_SUCCESS:
        newState = JSON.parse(JSON.stringify(state));
        newState.sources = action.data && action.data.sources ? action.data.sources.reduce(
        //newState.sources = action.data?.sources ? action.data.sources.reduce(
          (totalList: Array<Source>, article ) => {
            const srcData = {
              sourceName: article.sourceName,
              sourceId: article.sourceId,
            }
            if (!totalList.some(srcData => srcData.sourceName === article.sourceName) && article.sourceId){
              totalList.push(srcData)
            }
              return totalList
          }, []
        ) : newState.sources;
        return newState;

      case CURRENT_SRC:
        console.log(CURRENT_SRC, action.data)
        newState = JSON.parse(JSON.stringify(state));
        newState.currentSrc = action.data && action.data.currentSrc ? action.data.currentSrc : '';
        console.log('--------- - - - ', newState)
      return newState;

      default:
        return state;
    }
  };

export default reducer;



