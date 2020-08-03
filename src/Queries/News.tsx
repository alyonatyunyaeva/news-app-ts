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

interface Source {
    sourceName: string,
    sourceId: string,
}

const news = {
    apiKey: '766bd0772ece48af8741e11d3dc30cbe',
    getNews(){
        return fetch(`http://newsapi.org/v2/top-headlines?country=us&apiKey=${this.apiKey}`,
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
    getSources(){
        return fetch(`http://newsapi.org/v2/top-headlines?country=us&apiKey=${this.apiKey}`,
        ).then(
            response=>{
                return response.json();
            }
        ).then(
            (jsonResponse) => {
                return jsonResponse.articles.map(
                    (article: Article): Source => {
                        return  {
                            sourceName: article.source.name,
                            sourceId: article.source.id,                             
                        };
                    }
                )   
            }
        ).catch(
            () => {
                console.log('--  Error getting sources --')
                return {
                    sourceName: 'ooooops',
                    sourceId: '',
                };
            }
        );
    },
    getNewsBySrc(sourceName: string){
        return fetch(`https://newsapi.org/v2/everything?sources=${sourceName}&language=en&apiKey=${this.apiKey}`,
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