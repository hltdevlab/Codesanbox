import React from "react";
import "./styles.css";
import myTileSource from "./myTileSource";
import myMapCenter from "./myMapCenter";

import {
  layer,
  custom, //interaction, control, //name spaces
  //Interactions, Overlays, Controls, //group
  Map,
  Layers,
  Overlay,
  Util, //objects
  Marker
} from "react-openlayers";

import * as ol from "openlayers";
// import test from "./test";

export default function App() {
  var iconFeature = new ol.Feature(new ol.geom.Point(myMapCenter));
  var iconFeature2 = new ol.Feature(new ol.geom.Point([0, 0]));
  var source = new ol.source.Vector({ features: [iconFeature, iconFeature2] });
  var marker = new custom.style.MarkerStyle(
    "https://openlayers.org/en/v4.0.1/examples/data/icon.png"
  );

  // test();

  return (
    <div className="App">
      <div>Hello CodeSandbox test test</div>
      <div>Start editing to see some magic happen!</div>
      created github repo
      <Map
        view={{
          center: myMapCenter,
          zoom: 10
        }}
      >
        <Layers>
          <layer.Tile source={myTileSource} />
          <layer.Vector style={marker.style} source={source} />
        </Layers>
      </Map>
    </div>
  );
}
