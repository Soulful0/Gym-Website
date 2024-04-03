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
