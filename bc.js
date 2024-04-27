function initMap() {
    const uluru = { lat: -25.344, lng: 131.036 }; // Example coordinates (Uluru)
    const map = new google.maps.Map(document.getElementById('map-container'), {
      center: uluru,
      zoom: 10, // Adjust the zoom level as needed
    });
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
      title: 'Good Book Club Place', // Customize the marker title
    });
  }

  initMap();