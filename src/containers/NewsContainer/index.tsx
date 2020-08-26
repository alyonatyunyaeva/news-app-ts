import React, { Dispatch, useCallback, useEffect } from 'react';
import { connect } from 'react-redux';
import NewsItem from '../NewsItem';
import {loadingNewsContent} from '../../actions/loadNews'

interface Article {
    sourceName: string,
    sourceId: string,
    title: string,
    description: string,
    url: string,
    urlToImage: string, 
};
interface Props {
    articles: Array<Article>,
    isLoading: boolean,
    totalResults: string,
    loadingNewsContent: () => void,
}
interface ActionProps {
    loadingNewsContent: () => void,
}
interface Store {
    loadNews: {
        articles: Array<Article>,
        isLoading: boolean,
        totalResults: string,
        sources: Array<string>,
    }
};
function NewsContainer (props: Props) {
    useEffect(()=>{
        props.loadingNewsContent();
    }, []);

    const renderItem = useCallback((article: Article) => {
        return (
            <NewsItem 
                key={article.url}
                sourceName = {article.sourceName}
                title = {article.title}
                description = {article.description}
                url = {article.url}
                urlToImage = {article.urlToImage} 
            />
        )
    }, []);

    return( 
        <div>
            {
                (props.isLoading)&&(
                    <div>Loading</div>
                )
            }
            {
                (!props.isLoading)&&(
                    <div className="">
                        {props.articles.map(renderItem)}
                    </div>
                )
            }
        </div>
    )
};

function mapStateToProps(state: Store) {
    return {
        articles: state.loadNews.articles,
        isLoading: state.loadNews.isLoading,
        totalResults: state.loadNews.totalResults,
    }   
};

function mapDispatchToProps(dispatch: Dispatch<any>): ActionProps {
  return {
    loadingNewsContent: () => dispatch(loadingNewsContent()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsContainer)
