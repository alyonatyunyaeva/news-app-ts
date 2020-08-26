import React from 'react';
import './styles.css';

interface Props {
    sourceName: string,
    title: string,
    description: string,
    url: string,
    urlToImage: string, 
}

function NewsItem (props: Props) {
    return(
        <div className="newsContainer">
            <div className="newsHead">
                {props.title}
            </div>
            <a className="" href={props.url}>
            Read more on the original site {props.sourceName}
            </a>
            <div className="">
                {props.description}
            </div>
        </div>
    );
};

export default NewsItem;
