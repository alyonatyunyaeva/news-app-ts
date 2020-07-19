import React from 'react';
import { connect } from 'react-redux';
import {loadWithSource as loadWithSourceAction} from '../../actions/loadNews';
import {loading as loadingAction} from '../../actions/loadNews';
import news from '../../Queries/News';


interface Article {
    sourceName: string,
    title: string,
    description: string,
    url: string,
    urlToImage: string, 
  }
interface Props {
    sources: Array<string>,
    loading: ()=>{},
    loadWithSource: (totalResult: number, articles: Array<Article>)=>{},
}

type Store = {
  articles: Array<Article>,
  isLoading: boolean,
  totalResults: number,
  sourceName: string,
};

class Source extends React.Component<Props> {

    handlerclick = (ev: any) => {
        let sourceName = ev.target.innerHTML;
        this.props.loading();
        news.getSourceNews(sourceName).then(
            ({totalResults, articles}) => {
        this.props.loadWithSource(totalResults, articles);
      })

    }    

    render(){
        const { handlerclick } = this;
        return( this.props.sources.map(
                (sourceName) => {
                    return (
                        <div onClick={handlerclick}>
                            {sourceName}
                        </div>
                    )
                }
        ))
    }
};

const mapStateToProps = (state: any) => {
    return {
        sources: state.loadNews.sources,
    }   
}
      
const mapDispatchToProps = (dispatch: any) => ({
    loadWithSource: (totalResult: number, articles: Array<Article>) => dispatch(loadWithSourceAction(totalResult, articles)),  
    loading: () => dispatch(loadingAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Source)
