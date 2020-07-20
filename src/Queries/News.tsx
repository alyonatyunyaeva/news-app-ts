interface Article {
    source: {
        name: string,
        id: string,
    },
    title: string,
    description: string,
    url: string,
    urlToImage: string, 
}

const news = {
    apiKey: '766bd0772ece48af8741e11d3dc30cbe',
    getNews(){
        return fetch(`http://newsapi.org/v2/top-headlines?q=trump&apiKey=${this.apiKey}`,
        ).then(
            response=>{
                return response.json();
            }
        ).then(
            (jsonResponse) => {
                return {
                    totalResults: jsonResponse.totalResults,
                    articles: jsonResponse.articles.map(
                        (article: Article) => {
                            return  {
                                sourceName: article.source.name,
                                sourceId: article.source.id,
                                title: article.title,
                                description: article.description,
                                url: article.url,
                                urlToImage: article.urlToImage,                               
                            };
                        }
                    ) 
                }
            }
        ).catch(
            () => {
                console.log('--  Error getting news --')
                return {
                    totalResults: 0,
                    articles: []
                };
            }
        );
    },
    getSourceNews(sourceName: string){
        return fetch(`https://newsapi.org/v2/everything?sources=${sourceName}&q=trump&apiKey=${this.apiKey}`,
        ).then(
            response=>{
                return response.json();
            }
        ).then(
            (jsonResponse) => {
                return {
                    totalResults: jsonResponse.totalResults,
                    articles: jsonResponse.articles.map(
                        (article: Article) => {
                            return  {
                                sourceName: article.source.name,
                                title: article.title,
                                description: article.description,
                                url: article.url,
                                urlToImage: article.urlToImage,                               
                            };
                        }
                    ) 
                }
            }
        ).catch(
            () => {
                console.log('--  Error getting news --')
                return {
                    totalResults: 0,
                    articles: []
                };
            }
        );
    },

};

export default news;