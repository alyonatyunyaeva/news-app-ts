import React, { Dispatch } from 'react';
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
};
interface ActionsProps {
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
class NewsContainer extends React.PureComponent<Props & ActionsProps> {
    componentDidMount(){
        this.props.loadingNewsContent();
    }

    renderItem(article: Article) {
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
    }
    render(){ 
        return( 
            <div>
                {
                    (this.props.isLoading)&&(
                        <div>Loading</div>
                    )
                }
                {
                    (!this.props.isLoading)&&(
                        <div className="">
                            {this.props.articles.map(this.renderItem)}
                        </div>
                    )
                }
            </div>
        )
    }
};

const mapStateToProps = (state: Store) => {
    return {
        articles: state.loadNews.articles,
        isLoading: state.loadNews.isLoading,
        totalResults: state.loadNews.totalResults,
    }   
}

const mapDispatchToProps = (dispatch: Dispatch<any>): ActionsProps => {
  return {
    loadingNewsContent: () => dispatch(loadingNewsContent()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsContainer)
