import { createSelector } from 'reselect';

const baseState = state => state.mapReducer;

export const results = createSelector(
    baseState,
    s =>
    s.results
)