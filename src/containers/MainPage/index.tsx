import React from 'react';
// import React, { Dispatch } from 'react';
// import { connect } from 'react-redux';
// import {loadingNewsContent} from '../../actions/loadNews'
// import {loadingSources} from '../../actions/loadNews'
// import {loadingNewsBySrc} from '../../actions/loadNews'
import NewsContainer from '../NewsContainer';
import Source from '../../containers/Source';
// import news from '../../Queries/News';
import './styles.css';

// interface Article {
//   sourceName: string,
//   title: string,
//   description: string,
//   url: string,
//   urlToImage: string, 
// };

// type Props = {
//   articles: Array<Article>,
//   isLoading: boolean,
// };

// type ActionsProps = {
//   loading: () => void,
//   loaded: (totalResult: number, articles: Array<Article>)=> void,
// }

// type Store = {
//   loadNews: {
//     articles: Array<Article>,
//     isLoading: boolean,
//     totalResults: string,
//     sources: Array<string>,
//   }
// };


class MainPage extends React.Component{
  render(){
    return(
      <div>                    
          <Source />                  
          <NewsContainer />
      </div>
    );
  };
}

// const mapStateToProps: any = (state: Store) => {
//   return {
//     isLoading: state.loadNews.isLoading,
//   }
// }

// const mapDispatchToProps = (dispatch: Dispatch<any>): ActionsProps => {
//   return {
//     loaded: (totalResult: number, articles: Array<Article>) => dispatch(loadedAction(totalResult, articles)),
//     loading: () => dispatch(loadingAction()),
//   };
// }


// export default connect<Props, ActionsProps, any>(mapStateToProps, mapDispatchToProps)(MainPage);
export default MainPage;