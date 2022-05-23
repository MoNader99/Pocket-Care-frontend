import React from "react";
import ReactDOM from "react-dom";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const MyMapComponent = compose(
 withProps({
    googleMapURL:
        "AIzaSyAIhKbEiBEMVwsfE5ap8TWUsagXz_RZ_Yk",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
 }),
 withScriptjs,
 withGoogleMap
 )(props => (
   <GoogleMap defaultZoom={15} defaultCenter={{ lat: 30.007788, lng: 31.450317 }}>
    {props.isMarkerShown && (
        <Marker position={{ lat: 30.007788, lng: 31.450317 }} />
    )}
   </GoogleMap>
 ));

 export default MyMapComponent;