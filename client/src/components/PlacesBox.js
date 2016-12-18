import React from 'react';

var google = window.google;

const PlacesBox = React.createClass({
  componentDidMount: function() {
    var mapElement = this.mapElement;
    var pacInputElement = this.pacInputElement

    console.log(mapElement)

    var map = new google.maps.Map(mapElement, {
      center: {lat: -33.8688, lng: 151.2195},
      zoom: 13,
      mapTypeId: 'roadmap'
    });

    // Create the search box and link it to the UI element.
    var input = pacInputElement;
    var searchBox = new google.maps.places.SearchBox(input);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    // Bias the SearchBox results towards current map's viewport.
    map.addListener('bounds_changed', function() {
      searchBox.setBounds(map.getBounds());
    });

    var markers = [];
    // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.
    searchBox.addListener('places_changed', function() {
      var places = searchBox.getPlaces();

      if (places.length == 0) {
        return;
      }

      // Clear out the old markers.
      markers.forEach(function(marker) {
        marker.setMap(null);
      });
      markers = [];

      // For each place, get the icon, name and location.
      var bounds = new google.maps.LatLngBounds();
      places.forEach(function(place) {
        if (!place.geometry) {
          console.log("Returned place contains no geometry");
          return;
        }
        var icon = {
          url: place.icon,
          size: new google.maps.Size(71, 71),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(17, 34),
          scaledSize: new google.maps.Size(25, 25)
        };

        // Create a marker for each place.
        markers.push(new google.maps.Marker({
          map: map,
          icon: icon,
          title: place.name,
          position: place.geometry.location
        }));

        if (place.geometry.viewport) {
          // Only geocodes have viewport.
          bounds.union(place.geometry.viewport);
        } else {
          bounds.extend(place.geometry.location);
        }
      });
      map.fitBounds(bounds);
    });
  },

  setMapElementReference: function(mapElementReference) {
    this.mapElement = mapElementReference;
  },

  setPacInputElementReference: function(pacInputElementReference) {
    this.pacInputElement = pacInputElementReference;
  },

  render() {
    return (
      <div>
        <input id="pac-input" className="pac-input controls" ref={this.setPacInputElementReference} type="text" placeholder="Search Box" />
        <div id="map" style={{width: '100%', height: 500}} className="map" ref={this.setMapElementReference}></div>
      </div>
    )
  }
});

export default PlacesBox;