import React from 'react';
import NewsContainer from '../NewsContainer';
import Source from '../../containers/Source';
import './styles.css';

class MainPage extends React.PureComponent{
  render(){
    return(
      <div>                    
          <Source />                  
          <NewsContainer />
      </div>
    );
  };
}

export default MainPage;