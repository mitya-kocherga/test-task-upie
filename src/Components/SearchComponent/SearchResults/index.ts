import { SearchResults } from './SearchResults';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'
import { createStructuredSelector } from 'reselect';
import { hoverMarker, results } from '../../../store/mapReucer';

const mapState = createStructuredSelector({
    results
});
//@ts-ignore
const mapDispatch = dispatch => bindActionCreators(
    {
        hoverMarker
    },
    dispatch
)

export default connect(mapState, mapDispatch)(SearchResults);
