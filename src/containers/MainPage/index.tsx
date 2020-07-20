import React, { Dispatch } from 'react';
import { connect } from 'react-redux';
import {loaded as loadedAction} from '../../actions/loadNews'
import {loading as loadingAction} from '../../actions/loadNews'
import NewsContainer from '../../containers/NewsContainer';
import Source from '../../containers/Source';
import news from '../../Queries/News';
import './styles.css';

interface Article {
  sourceName: string,
  title: string,
  description: string,
  url: string,
  urlToImage: string, 
};

type Props = {
  articles: Array<Article>,
  isLoading: boolean,
  totalResults: string,
  sources: Array<string>,
  loading: any,
  loaded: any,
};

type Store = {
  loadNews: {
    articles: Array<Article>,
    isLoading: boolean,
    totalResults: string,
    sources: Array<string>,
  }
};


class MainPage extends React.Component<Props>{
  componentDidMount(){
    this.search();
  }
  
  search(){
    this.props.loading();
    news.getNews().then(
      ({totalResults, articles}) => {
        this.props.loaded(totalResults, articles);
      })
  }
  
  render(){
    console.log('RENDER this.props - - - - -', this.props )
    return(
      <div>                    
        { (this.props.isLoading) && 
              (<div>                    
                   loading
              </div>
              )
        }
        { (!this.props.isLoading) && 
          (<div>                    
              <Source />                  
              {this.props.articles.map(
                (article) => {
                    return <NewsContainer key={article.url} article={article} />
                }
              )
              }
          </div>
          )
        }
      </div>
    );
  };
}

const mapStateToProps = (state: Store) => {
  console.log("state")
  return {
    articles: state.loadNews.articles,
    isLoading: state.loadNews.isLoading,
    totalResults: state.loadNews.totalResults,
    sources: state.loadNews.sources,
  }
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    loaded: (totalResult: number, articles: Array<Article>) => dispatch(loadedAction(totalResult, articles)),
    loading: () => dispatch(loadingAction()),
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(MainPage);