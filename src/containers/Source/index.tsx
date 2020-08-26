import React, { Dispatch, useEffect, useCallback } from 'react';
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
function Source (props: Props & ActionProps) {
    useEffect(()=>{
        props.loadingSources();
    }, [])

    const handlerclick = useCallback((ev: any): void => {
        let sourceId = ev.target.getAttribute('id');
        let sourceName = ev.target.innerHTML;
        props.loadingNewsBySrc(sourceId);
        props.setCurrentSrc(sourceName);
    }, [])

    const renderItem = useCallback((source: Source) => {
        return (
            <div onClick={handlerclick} className="sourceName" id={source.sourceId} key={source.sourceId}>
                {source.sourceName}
            </div>
        )
    }, [])

    return(
        <div>
            <div className="sourceName__container">
                {props.sources.map(renderItem)}                
            </div>
            <div className="sourceName__current">                  
                {props.currentSrc}
            </div>
        </div>
    )
};

function mapStateToProps (state: Store): Props {
    return {
        sources: state.loadSources.sources,
        currentSrc: state.loadSources.currentSrc,
    }   
}
      
function mapDispatchToProps (dispatch: Dispatch<any>) {
    return {
        loadingNewsBySrc: ( sourceId: string) => dispatch(loadingNewsBySrc(sourceId)),  
        loadingSources: () => dispatch(loadingSources()),
        setCurrentSrc: (currentSrc: string) => dispatch(setCurrentSrc(currentSrc)),
    }
};

export default connect (mapStateToProps, mapDispatchToProps)(Source)
