import { handleActions } from 'redux-actions';
import { hoverMarker } from './actions';
import { MapData } from './MapData';

const hoverMarkerHandler = (state, { payload }) => ({
    ...state,
    results: state.results.map(i => i.id === payload ? {
        ...i,
        selected: true
    } : {
        ...i,
        selected: false
    })
})

export const mapReducer = handleActions({
        [hoverMarker]: hoverMarkerHandler
    },
    new MapData()
);