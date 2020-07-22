import React, { Dispatch } from 'react';
import { connect } from 'react-redux';
import {loadWithSource as loadWithSourceAction} from '../../actions/loadNews';
import {loading as loadingAction} from '../../actions/loadNews';
import news from '../../Queries/News';
import './styles.css';


interface Article {
    sourceName: string,
    sourceId: string,
    title: string,
    description: string,
    url: string,
    urlToImage: string, 
  }

  interface Source {
    sourceName: string,
    sourceId: string,
  }
interface Props {
    sources: Array<Source>,
}

type Store = {
    loadNews: {
      sources: Array<string>,
    }
  };

interface ActionProps {
    loading: () => void,
    loadWithSource: (totalResult: number, articles: Array<Article>) => void,
}
class Source extends React.Component<Props & ActionProps> {

    handlerclick = (ev: any) => {
        let sourceId = ev.target.getAttribute('id');
        console.log(sourceId, "source id")
        this.props.loading();
        news.getSourceNews(sourceId).then(
            ({totalResults, articles}) => {
        this.props.loadWithSource(totalResults, articles);
      })

    }    

    render(){
        const { handlerclick } = this;
        return( 
            <div className="sourceName__container">
                {this.props.sources.map(
                    (source) => {
                        return (
                            <div onClick={handlerclick} className="sourceName" id={source.sourceId} key={source.sourceId}>
                                {source.sourceName}
                            </div>
                        )
                    }
                )}
            </div>
        )
    }
};

const mapStateToProps: any = (state: Store) => {
    return {
        sources: state.loadNews.sources,
    }   
}
      
const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
    loadWithSource: ( totalResult: number, articles: Array<Article>) => dispatch(loadWithSourceAction(totalResult, articles)),  
    loading: () => dispatch(loadingAction()),
});

export default connect<Props, ActionProps, any>(mapStateToProps, mapDispatchToProps)(Source)
