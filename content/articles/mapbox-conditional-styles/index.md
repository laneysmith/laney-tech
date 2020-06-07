---
title: 'Mapbox: How to Conditionally Style Features Based on Data'
description: 'stuff'
date: '2020-06-02T17:26:50Z'
---

## Premise

For this map, we are going to overlay US county polygons on a map, merge the NY Times Covid-19 case data into the county features, and then style the county polygons conditionally based on the number of virus cases. This tutorial assumes you already know the basics of Mapbox sources and layers.

## The Data Format

The data we'll be using comes from the [New York Times Covid-19 data set](https://github.com/nytimes/covid-19-data). The raw `us-counties.csv` data looks like this:

```csv
date,county,state,fips,cases,deaths
...
2020-04-07,Lake,Illinois,17097,925,22
2020-04-07,Lawrence,Illinois,17101,2,0
2020-04-07,Lee,Illinois,17103,3,0
2020-04-07,Livingston,Illinois,17105,10,0
...
```

I transformed this data into a nested object to make it easier to manipulate. From now on, any time you see the `data` variable, assume it looks like this:

```json
{
  "2020-04-07": {
    "17097": {
      "cases": 952
    },
    "17101": {
      "cases": 2
    },
    "17103": {
      "cases": 3
    },
    "17105": {
      "cases": 10
    }
  }
}
```

## Create the Map

The first step is to initialize a map centered over the US, since the data is US specific.

```javascript
map = new mapboxgl.Map({
  container: 'map-container',
  style: 'mapbox://styles/mapbox/light-v10',
  center: [-100, 42],
  zoom: 3.5,
});
```

## Add the County Polygons

The next step is to add a pre-existing tileset that contains US county features. We want the `FIPS` code to be the unique identifier for each feature, so we promote it from the "original" source layer to the feature `id` using [`promoteId`](https://docs.mapbox.com/mapbox-gl-js/style-spec/sources/#vector-promoteId). This way we can easily map the FIPS code from the NY Times data to the corresponding feature.

```javascript
map.addSource('counties-source', {
  type: 'vector',
  url: 'mapbox://mapbox.82pkq93d',
  promoteId: { original: 'FIPS' },
});
```

## Map Data to Features

Now we can map the virus case data to county features by FIPS code using [`setFeatureState`](https://docs.mapbox.com/mapbox-gl-js/api/#map#setfeaturestate). The `setFeatureState` method takes 2 arguments: 1) the feature identifier object and 2) the state object. The feature identifier object consists of the feature `id` (which we just set to the "FIPS" code in the previous step), the feature source, and the source layer. This information is used to find the feature, and then the state object (the second argument) is merged with the feature's current state.

```javascript
const selectedDate = '2020-04-07';
const dataForSelectedDate = data[selectedDate];
const allFipsForSelectedDate = Object.keys(dataForSelectedDate); // ["17097", "17101", "17103", "17105"]

// Iterate through the list of FIPS codes that we have data for and add the virus
// case data to the feature's state.
allFipsForSelectedDate.forEach(fipsCode => {
  const { cases } = dataForSelectedDate[fipsCode];
  map.setFeatureState(
    {
      source: 'counties-source',
      sourceLayer: 'original',
      id: fipsCode,
    },
    {
      cases,
    }
  );
});
```

## Conditionally Style the Polygons

The final step is to conditionally style the county polygons using the virus data we just added to the feature states. We want counties that do not have data and counties that have 0 cases to be colored grey. For the counties that have at least 1 case of the virus, we want to conditionally color them on a stepped scale.

This can be accomplished using a [case expression](https://docs.mapbox.com/mapbox-gl-js/style-spec/expressions/#case). Case expressions in Mapbox are similar to JavaScript switch statements. They consist of case clauses that are evaluated sequentially until one evaluates to `true` or until the fallback value is reached. (It's worth skimming through the docs for expressions because there are a few quirks. For example, the `"=="` in Mapbox case expressions performs a strictly typed comparison, unlike the JavaScript `"=="` which coerces type.)

```javascript
map.addLayer(
  {
    id: "counties-layer",
    type: "fill",
    source: "counties-source",
    "source-layer": "original",
    paint: {
      "fill-outline-color": "black", // Add a black border around each county
      "fill-color": [
        "case", // Begin case expression
        ["==", ["feature-state", "cases"], null], // If state.cases == null,
        "grey", // ...then color the polygon grey.
        ["==", ["feature-state", "cases"], 0], // If state.cases == 0,
        "grey", // ...then also color the polygon grey.
        // ...
        // You could add more condition/output pairs between these sets of dots.
        // ...
        // This final array serves as the "fallback value" to be used when none
        // of the above cases are met (it is equivalent to the "default" clause
        // in a JavaScript switch statement):
        [
          // The first 3 values define the relationship between virus case count
          // and fill color, telling the map to interpolate linearly between steps.
          "interpolate",
          ["linear"],
          ["feature-state", "cases"],
          // The subsequent values are essentially the "steps" in our color scale,
          // consisting of "case count" and "color" pairs. The fill color will be
          // linearly interpolated between the defined steps.
          1, // If the county has 1 virus case,
          'yellow', // ...color it yellow.
          50, // If the county has 10 virus cases,
          'orange', // ...color it orange.
          500, // If the county has 50 virus cases,
          'red' // ...color it red.
          1000, // If the county has 1,000 virus cases,
          'maroon' // ...color it maroon.
        ],
      ],
    },
  }
);
```

And that's all there is to it!

## See the Code

You can see the full code for the project (which is still in progress) [here](https://github.com/laneysmith/covid-map) and the deployed project is hosted [here](https://covid.laney.tech/).
