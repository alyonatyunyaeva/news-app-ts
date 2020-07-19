import React from 'react';
interface Article {
    sourceName: string,
    title: string,
    description: string,
    url: string,
    urlToImage: string, 
  }
interface Props {
    article: Article;
}

class NewsContainer extends React.Component<Props> {
    render(){
        return(
            <div className="">
                <div className="">
                   {this.props.article.title}
                </div>
                <a className="" href={this.props.article.url}>
                    {this.props.article.sourceName}
                </a>
                <div className="">
                    {this.props.article.description}
                </div>
                {/* <div className="">
                    <img src={this.props.article.urlToImage}/>
                </div> */}
            </div>
        );
    };
};

export default NewsContainer;
