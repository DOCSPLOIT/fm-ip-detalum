const _loc = document.querySelector("#location");
let latLong = [0, 0];

const apiKey =
  location.search.split("=")[1] ?? "at_3RBNdNq0twrczK2q5gwTKgKbGC5hB";

function getIpInfo() {
  fetch(
    "https://geo.ipify.org/api/v2/country,city?apiKey=" +
      apiKey +
      "&ipAddress=" +
      search.value
  )
    .then((res) => res.json())
    .then((res) => {
      ip.innerHTML = res.ip;
      _loc.innerHTML = res.location.city;
      timezone.innerHTML = "UTC " + res.location.timezone;
      isp.innerHTML = res.isp;
      latLong = [res.location.lat, res.location.lng];
      search.value = "";
      getLOcation();
    });
}
getIpInfo();
function getLOcation() {
  var map = L.map("map").setView(latLong, 13);
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);
  var marker = L.marker(latLong).addTo(map);
}
