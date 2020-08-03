import React, { Dispatch } from 'react';
import { connect } from 'react-redux';
import {loadingNewsBySrc, loadingSources, setCurrentSrc} from '../../actions/loadNews';
import './styles.css';

  interface Source {
    sourceName: string,
    sourceId: string,
  }
interface Props {
    sources: Array<Source>,
    currentSrc: string,
}
interface Store{
    loadSources: {
        sources: Array<Source>,
        currentSrc: string,
    }
  };
interface ActionProps {
    loadingNewsBySrc: (sourceId: string) => void,
    setCurrentSrc: (sourceName: string) => void,
    loadingSources: () => void,
}
class Source extends React.PureComponent<Props & ActionProps> {
    componentDidMount(){
        this.props.loadingSources();
    }
    handlerclick = (ev: any) => {
        let sourceId = ev.target.getAttribute('id');
        let sourceName = ev.target.innerHTML;
        this.props.loadingNewsBySrc(sourceId);
        this.props.setCurrentSrc(sourceName);

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
            <div>
                <div className="sourceName__container">
                    {this.props.sources.map(this.renderItem)}                
                </div>
                <div className="sourceName__current">                  
                    {this.props.currentSrc}
                </div>
            </div>

        )
    }
};

const mapStateToProps: any = (state: Store) => {
    return {
        sources: state.loadSources.sources,
        currentSrc: state.loadSources.currentSrc,
    }   
}
      
const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
    loadingNewsBySrc: ( sourceId: string) => dispatch(loadingNewsBySrc(sourceId)),  
    loadingSources: () => dispatch(loadingSources()),
    setCurrentSrc: (currentSrc: string) => dispatch(setCurrentSrc(currentSrc)),
});

export default connect<Props, ActionProps, any>(mapStateToProps, mapDispatchToProps)(Source)
