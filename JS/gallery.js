var peopleJson;
var path = '/DATA/people.json';

$(document).ready(async function () {
    peopleJson = await getJSON();

    // loop to populate gallery
    peopleJson.people.forEach(function (value, i) {
        var div = $('<div id="div' + i + '">');
        var img = $('<img id="img' + i + '">');
        img.attr('src', value.image.path);
        div.append(img);
        var name = $('<p id="name' + i + '">');
        name.html(value.name);
        div.append(name);
        div.click(function () {
            alert(this.id);
        });
        $('#gallery').append(div);

    });

});

// async function to read and return the json file
async function getJSON() {
    return await fetch(path)
        .then((response) => response.json())
        .then((responseJson) => { return responseJson });
}