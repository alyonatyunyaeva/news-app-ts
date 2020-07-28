import React, { Dispatch } from 'react';
import { connect } from 'react-redux';
import {loadingNewsBySrc, loadingSources} from '../../actions/loadNews';
import './styles.css';

  interface Source {
    sourceName: string,
    sourceId: string,
  }
interface Props {
    sources: Array<Source>,
}
interface Store{
    loadNews: {
    sources: Array<string>,
    }
  };
interface ActionProps {
    loadingNewsBySrc: (sourceId: string) => void,
    loadingSources: () => void,
}
class Source extends React.Component<Props & ActionProps> {
    componentDidMount(){
        this.props.loadingSources();
    }
    handlerclick = (ev: any) => {
        let sourceId = ev.target.getAttribute('id');
        this.props.loadingNewsBySrc(sourceId);
    }    
    renderItem = (source: Source) => {
        const { handlerclick } = this;
            return (
                <div onClick={handlerclick} className="sourceName" id={source.sourceId} key={source.sourceId}>
                    {source.sourceName}
                </div>
            )
    }

    render(){  
        return( 
            <div className="sourceName__container">
                {this.props.sources.map(this.renderItem)}
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
    loadingNewsBySrc: ( sourceId: string) => dispatch(loadingNewsBySrc(sourceId)),  
    loadingSources: () => dispatch(loadingSources()),
});

export default connect<Props, ActionProps, any>(mapStateToProps, mapDispatchToProps)(Source)
