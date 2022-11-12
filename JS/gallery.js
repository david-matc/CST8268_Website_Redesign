var peopleJson;
var path = '/DATA/people.json';

$(document).ready(async function () {
    peopleJson = await getJSON();
    console.log(peopleJson);
});

async function getJSON() {
    return await fetch(path)
        .then((response)=>response.json())
        .then((responseJson)=>{return responseJson});
}