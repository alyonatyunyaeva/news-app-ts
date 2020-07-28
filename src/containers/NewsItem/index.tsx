import React from 'react';
import './styles.css';
// interface Article {
//     sourceName: string,
//     title: string,
//     description: string,
//     url: string,
//     urlToImage: string, 
//   }
interface Props {
    sourceName: string,
    title: string,
    description: string,
    url: string,
    urlToImage: string, 
}

class NewsItem extends React.Component<Props> {
    render(){
        return(
            <div className="newsContainer">
                <div className="newsHead">
                   {this.props.title}
                </div>
                <a className="" href={this.props.url}>
                Read more on the original site {this.props.sourceName}
                </a>
                <div className="">
                    {this.props.description}
                </div>
                {/* <div className="">
                    <img src={this.props.article.urlToImage}/>
                </div> */}
            </div>
        );
    };
};

export default NewsItem;
