import React from 'react';
import { connect } from 'react-redux';
import {loaded as loadedAction} from 'actions/loadNews'
import {loading as loadingAction} from 'actions/loadNews'
import NewsContainer from 'containers/NewsContainer';
import Source from 'containers/Source';
import news from 'Queries/News';
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
//   dispatch: any,
//   isLoading: boolean,
//   totalResults: number,
// };

// type Store = {
//   articles: Array<Article>,
//   isLoading: boolean,
//   totalResults: number,
// };
// type State = {
//   articles: Array<Article>,
//   isLoading: boolean,
//   totalResults: number,
// };

// class MainPape extends React.Component<Props, State>{
class MainPage extends React.Component{
  componentDidMount(){
    this.search();
  }
  
  search(){
    this.props.loading();
    news.getNews().then(
      ({totalResults, articles}) => {
        console.log(totalResults, articles);
        console.log("1. this.props.articles after did mount   " + this.props.articles );
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

// const mapStateToProps = (state: Store) => {
const mapStateToProps = state => {
  console.log("state")
  return {
    articles: state.loadNews.articles,
    isLoading: state.loadNews.isLoading,
    totalResults: state.loadNews.totalResults,
    sources: state.loadNews.sources,
    sourceId: state.loadNews.sourceId,   
  }
}

// const mapDispatchToProps = (dispatch: any) => {
const mapDispatchToProps = dispatch => ({
  loaded: (totalResult, articles) => dispatch(loadedAction(totalResult, articles)),
  loading: () => dispatch(loadingAction()),
  
});


export default connect(mapStateToProps, mapDispatchToProps)(MainPage);


