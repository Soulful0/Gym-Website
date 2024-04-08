const API_KEY = "Y9TrTb2z2iPNTJvoBAdwOg==K6FBSw1ARauKFPzl";
const apiUrl = "https://api.api-ninjas.com/v1/exercises?muscle=";
const exerciseForm = document.getElementById("excercise-form");

exerciseForm.addEventListener("change", function (event) {
  event.preventDefault();

  let selection = $("#select-excercises option:selected").text();

  $.ajax({
    method: "GET",
    url: apiUrl + selection,
    headers: { "X-Api-Key": API_KEY },
    contentType: "application/json",
    success: function (results) {
      var inst = document.getElementById("instructions");
      let out = "";
      for (let result of results) {
        out += `
         <tr class="content-center">   
            <td scope="col" class="px-4 py-3 bg-gray-50 dark:bg-gray-800 " >${result.name}</td>
            <td scope="col" class="px-4 ">${result.type}</td>
            <td scope="col" class="px-4 py-3 bg-gray-50 dark:bg-gray-800">${result.equipment}</td>
            <td scope="col" class="px-4 ">${result.difficulty}</td>
        </tr>`;
      }
      inst.innerHTML = out;
    },
    error: function ajaxError(jqXHR) {
      console.error("Error: ", jqXHR.responseText);
    },
  });
});

function initMap() {
  let location = {lat:32.97775321119118, lng: -96.76926394878767};
  let map = new google.maps.Map(document.getElementById("map"), {
      zoom: 14,
      center: location
  });

  const marker = new google.maps.Marker({
    position: location,
    map: map,
    title: 'Gains Fitness'
  });
}

function calculateDistance() {
  const origin = document.getElementById('zipcode').value;
  const destination = {lat:32.97775321119118, lng: -96.76926394878767};

  const service = new google.maps.DistanceMatrixService();
  service.getDistanceMatrix({
      origins: [origin],
      destinations: [destination],
      travelMode: 'DRIVING',
      unitSystem: google.maps.UnitSystem.IMPERIAL, 
  }, function(response, status) {
      if (status === 'OK') {
          var distance = response.rows[0].elements[0].distance.text;
          document.getElementById('distance-result').innerText = 'Distance: ' + distance;
      } else {
          alert('Error: ' + status);
      }
  });
}

document.getElementById("toggle-button").addEventListener("click", function() {
  this.classList.toggle("toggled");
});
