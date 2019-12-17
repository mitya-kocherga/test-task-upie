import React from 'react';
import CardContainer from './Components/CardContainer';
import SearchComponent from './Components/SearchComponent';
import GoogleMapReact from 'google-map-react';
import { Image } from './img'
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'
import { createStructuredSelector } from 'reselect';
import { hoverMarker, results } from './store/mapReucer'

//@ts-ignore
const Marker = ({ text, lat, lng, pic, onHover, id, selected }) => {
  return (
    <div
      onMouseOver={() => onHover(id)}
      onMouseLeave={() => onHover(0)}
      className={selected ? 'marker-selected' : ''}
    >
      <Image name={pic} />
      {text}
    </div>
  )
};

//@ts-ignore
const App = ({ results, hoverMarker }) => {

  return (
    <CardContainer>
      <div className="map">
        <GoogleMapReact
          defaultCenter={{
            lat: 59.95,
            lng: 30.33
          }}
          defaultZoom={5}
        >
          {
            //@ts-ignore
            results.map((item, index) => {
              const { marker: { text, lat, lng, pic }, id, selected } = item;
              return (
                <Marker
                  id={id}
                  selected={selected}
                  onHover={hoverMarker}
                  key={index}
                  lat={lat}
                  lng={lng}
                  text={text}
                  pic={pic}
                />
              )
            }

            )}
        </GoogleMapReact>
      </div>
      <SearchComponent />
    </CardContainer>
  );
}

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

export default connect(mapState, mapDispatch)(App);
