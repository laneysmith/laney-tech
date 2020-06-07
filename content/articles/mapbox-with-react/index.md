---
title: Mapbox with React
date: '2020-06-05T11:40:03-07:00' 
---

One of the first full stack apps I ever created was an interactive map that showed users the nearest place to buy junk food. The frontend was built with the Google Maps API and vanilla JavaScript. The backend was a Node + Express server that queried the Yelp API for businesses with low ratings and unhealthy-sounding search terms.

I recently decided to recreate that app using a React and Mapbox frontend (and Go for the backend, but that's a different story). Although I am still not a Mapbox expert, I'm sharing some of what I learned in hopes that it can help accelerate someone else's trajectory along the learning curve. This article assumes you have experience with React, but are new to Mapbox.

## Why Mapbox?

Mapbox is a powerful, versatile tool for creating interactive maps and visualizing geographic data. Tons of reputable companies employ it for a variety of use cases (The New York Times, Strava, and Weather Channel, to name a few).

## Why React?

I'll be the first to admit that using React for this app is overkill. Mapbox already has a collection of super simple [examples](https://docs.mapbox.com/mapbox-gl-js/examples/) that serve as a great starting point. However, most modern, complex web apps use some sort of library or framework. I chose React because it is so ubiquitous.

## App Premise & Setup

For this app, we will create an interactive map that fetches some data based on the map's center point and displays the results. Each time the map center changes, the results should be re-plotted on the map.

The API is out of scope for this article, so instead we'll use randomized mock data.

To begin, create a new React app and install `mapbox-gl` as a dependency:

```bash
npx create-react-app react-mapbox-example
cd react-mapbox-example
yarn add mapbox-gl
```

Next, create a free Mapbox account and obtain an API access token [here](https://account.mapbox.com/). In the root of your project, create an `.env.local` file and add your token to it:

```
/* .env.local */
REACT_APP_MAPBOX_ACCESS_TOKEN=YOUR_TOKEN_HERE
```

Add the Mapbox CSS file in the `<head>` of your `public/index.html` file (make sure the version number matches the one in your `package.json`, yours may not be 1.9.0. You can find the latest version [here](https://docs.mapbox.com/mapbox-gl-js/overview/#quickstart).):

```html
/* public/index.html */
<link href="https://api.mapbox.com/mapbox-gl-js/v1.9.0/mapbox-gl.css" rel="stylesheet" />
```

## Create the Map

Mapbox has [a few React examples using class components](https://github.com/mapbox/mapbox-react-examples), but I wanted to try it with functional components. There are a few key differences to be aware of when using functional components:

- You'll need to initialize your map with the `useEffect` hook followed by an empty dependency array, which is the functional equivalent of `componentDidMount`.
- The `useRef` hook _may_ also come in handy because it allows your map to persist for the full lifetime of the component, through re-renders. I'm going to take this route in my example.

To add the map, replace the contents of `src/App.js` with the following code:

```javascript
/* src/App.js */
import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

import './App.css';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

const App = () => {
  const mapContainerRef = useRef(null);

  // initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      // See style options here: https://docs.mapbox.com/api/maps/#styles
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-104.9876, 39.7405],
      zoom: 12.5,
    });

    // add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

    // clean up on unmount
    return () => map.remove();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return <div className="map-container" ref={mapContainerRef} />;
};

export default App;
```

To style the map, replace the contents of `src/Apps.css` with:

```css
/* src/App.css */
.map-container {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
```

Now, when you you run the app locally, you should see a full screen map.

## Adding Data to the Map

Mapbox can consume data in a lot of different formats, but for this example we'll format our fake data into a GeoJSON FeatureCollection. If you want to dive deeper into GeoJSON, you can do so [here](https://geojson.org/), but for now all you really need to know is that a GeoJSON FeatureCollection looks something like this, where each item in the `"features"` array will be a single point on the map:

```json
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "geometry": {
        // there are different geometry types, but Point is best
        // for this use case of simple latitude/longitude pairs
        "type": "Point",
        "coordinates": [0, 0] // longitude, latitude
      },
      "properties": {
        // you can put almost anything here, it's kind of like
        // the "metadata" for the feature
        "name": "Some Cool Point"
      }
    }
  ]
}
```

We'll create a file called `src/api/fetchFakeData.js`. This file is where we might make a real API call to fetch a new set of results. Instead, we're going to return a list of 20 coordinates randomly generated based on the map center point.

```javascript
/* src/api/fetchFakeData.js */
/**
 * A complete Coordinate Pair consisting of a latitude and longitude
 * @typedef {Object} CoordinatePair
 * @property {number} longitude - longitude coordinate
 * @property {number} latitude - latitude coordinate
 */

/**
 * Generates a GeoJSON FeatureCollection of random points based on
 * the center coordinates passed in.
 * @param {CoordinatePair} centerCoordinates - the {@link CoordinatePair} for the map center
 * @return {results} GeoJSON FeatureCollection
 */
const fetchFakeData = centerCoordinates => {
  const newFeaturesList = [];
  for (let i = 0; i < 20; i++) {
    const id = i;
    const { longitude, latitude } = getRandomCoordinate(centerCoordinates);
    newFeaturesList.push({
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [longitude, latitude],
      },
      properties: {
        id,
        name: `Random Point #${id}`,
        description: `description for Random Point #${id}`,
      },
    });
  }

  return Promise.resolve({
    type: 'FeatureCollection',
    features: newFeaturesList,
  });
};

/**
 * Generates a random point within 0.025 radius of map center coordinates.
 * @param {CoordinatePair} centerCoordinates - the {@link CoordinatePair} for the map center
 * @return {CoordinatePair} randomly generated coordinate pair
 */
const getRandomCoordinate = ({ longitude: centerLon, latitude: centerLat }) => {
  const r = 0.025 * Math.sqrt(Math.random());
  const theta = Math.random() * 2 * Math.PI;
  const latitude = centerLat + r * Math.cos(theta);
  const longitude = centerLon + r * Math.sin(theta);
  return { longitude, latitude };
};

export default fetchFakeData;
```

### Markers

In my first attempt to display the data on my map, I iterated through the API results and appended each one to the map as a [marker](https://docs.mapbox.com/help/glossary/marker/). Spoiler: this was not the best idea. Skip ahead to the "Layers" section if you don't want to learn about markers and why I chose _not_ to use them for this particular map.

First, I created a Marker component:

```javascript
/* src/components/Marker.js */
import React from 'react';

const Marker = ({ id }) => <div id={`marker-${id}`} className="marker" />;

export default Marker;
```

...styled it with an svg:

```css
/* src/App.css */
.marker {
  background-image: url('svg/marker.svg');
  background-size: cover;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  cursor: pointer;
}
```

Next I added the markers to the map. Back in `src/App.js`, I imported the `Marker` component, as well as `ReactDOM` from "react-dom". Immediately after initializing the map (inside the useEffect hook), I added an event listener that would fetch new fake data when the map was moved and would append each feature to the map as a marker:

```javascript
map.on('moveend', async () => {
  // get center coordinates
  const { lng, lat } = map.getCenter();
  // fetch new data
  const results = await fetchFakeData({ longitude: lng, latitude: lat });
  // iterate through the feature collection and append marker to the map for each feature
  results.features.forEach(result => {
    const { id, geometry } = result;
    // create marker node
    const markerNode = document.createElement('div');
    ReactDOM.render(<Marker id={id} />, markerNode);
    // add marker to map
    new mapboxgl.Marker(markerNode)
      .setLngLat(geometry.coordinates)
      .addTo(map);
  });
});
```

Cool, now when I moved the map, I see the markers. However, as I continued to pan around further, the effect was cumulative—I was adding more markers to the map on top of the previous ones. :(

To remove a marker, you have to invoke the `.remove()` method on the marker instance, meaning you need to save each marker into an array somewhere on state for you to access and loop through later. This already felt a little messy for me, so I scrapped the markers and started exploring layers instead.

### Layers

Layers are essentially collections of data that are styled the same way. Mapbox supports many different data types, called ["sources"](https://docs.mapbox.com/mapbox-gl-js/style-spec/#sources), which can be fed into a layer.

Back in `src/App.js`, immediately after initializing the map (inside the useEffect hook), we'll add an event listener that waits for the map to load, then adds our data source and layer.

```javascript
/* src/App.js */
map.on('load', () => {
  // add the data source for new a feature collection with no features
  map.addSource('random-points-data', {
    type: 'geojson',
    data: {
      type: 'FeatureCollection',
      features: [],
    },
  });
  // now add the layer, and reference the data source above by name
  map.addLayer({
    id: 'random-points-layer',
    source: 'random-points-data',
    type: 'symbol',
    layout: {
      // full list of icons here: https://labs.mapbox.com/maki-icons
      'icon-image': 'bakery-15', // this will put little croissants on our map
      'icon-padding': 0,
      'icon-allow-overlap': true,
    },
  });
});
```

At this point, you still shouldn't see the data on the map yet. Just like with the markers, we need to add an event listener that fetches fake data with the updated center coordinates on move end, only this time, instead of looping through the features and appending them to the map, we can simply update our data source with the new FeatureCollection. To do this, we have to import the `fetchFakeData` function and add another listener after the "on load" listener:

```javascript
/* src/App.js */
map.on('moveend', async () => {
  // get new center coordinates
  const { lng, lat } = map.getCenter();
  // fetch new data
  const results = await fetchFakeData(lng, lat);
  // update "random-points-data" source with new data
  // all layers that consume the "random-points-data" data source will be updated automatically
  map.getSource('random-points-data').setData(results);
});
```

Now, when you pan around in the map you'll see little croissant icons scattered around.

### Markers vs. Layers Summary

Markers are more appropriate for static data or small data points that you can easily manage manually—for example, the user's current location. Markers are easier to style with your own svgs or images via CSS, but they're harder to manage in large numbers and more difficult to interact with.

Larger, dynamic data sets are more manageable with layers. They're a bit more difficult to style (in my opinion), but much easier to interact with. You can add event listeners to the map that target specific layers by their unique ids and easily access and act upon the features in those layers, without having to manually manage the data.

## Add a Popup on Hover

To make the map more interactive, we can add a popup box that shows more detail when users click on a feature. To begin, I'll create a new `Popup` component:

```javascript
/* src/components/Popup.js */
import React from 'react';

const Popup = ({ feature }) => {
  const { id, name, description } = feature.properties;

  return (
    <div id={`popup-${id}`}>
      <h3>{name}</h3>
      {description}
    </div>
  );
};

export default Popup;
```

Back in `src/App.js`, we'll need to import that `Popup` component as well as `ReactDOM` from `"react-dom"`. I want this popup to persist throughout the lifetime of the `App` component, just like the map, so I'll add a `popUpRef` immediately after the `mapContainerRef` like so:

```javascript
/* src/App.js */
// offset puts the popup 15px above the feature
const popUpRef = useRef(new mapboxgl.Popup({ offset: 15 }));
```

To set the content of the popup and make it actually appear, we'll add a "click" event listener to the map layer:

```javascript
/* src/App.js */
// add popup when user clicks a point
map.on('click', 'random-points-layer', e => {
  if (e.features.length) {
    const feature = e.features[0];
    // create popup node
    const popupNode = document.createElement('div');
    ReactDOM.render(<Popup feature={feature} />, popupNode);
    // set popup on map
    popUpRef.current.setLngLat(feature.geometry.coordinates).setDOMContent(popupNode).addTo(map);
  }
});
```

Now, when you click a feature, you should see the popup. We can also change the user's cursor to a pointer whenever they hover over a clickable feature, then back to default on mouseleave. Here are the listeners I added to implement this visual cue:

```javascript
/* App.js */
// change cursor to pointer when user hovers over a clickable feature
map.on('mouseenter', 'random-points-layer', e => {
  if (e.features.length) {
    map.getCanvas().style.cursor = 'pointer';
  }
});

// reset cursor to default when user is no longer hovering over a clickable feature
map.on('mouseleave', 'random-points-layer', () => {
  map.getCanvas().style.cursor = '';
});
```

## Next Steps

As you can see, Mapbox is so customizable that it's easy to go down rabbit holes trying to fine tune your project, so we'll stop here. But if you're up for a challenge, there's a lot more work that can be done to make a map like this more usable.

For example, you'll notice that zooming in or out on the map triggers the "moveend" listener and generates new points. That doesn't make sense. A better solution might be to use the "moveend" listener to update the coordinates on the component's state, then create a new `useEffect` hook that only runs when the center coordinates change, fetching new data and setting the "random-points-data" source to the new data. The ability to access and act upon the map outside of the `useEffect` hook that initializes it on mount heavily influenced my decision to store the map in a ref after all.

Hopefully, this was as helpful to someone else as it would've been for me when I first started diving into Mapbox!

## tldr;

[Here's the code.](https://github.com/laneysmith/react-mapbox-example)
