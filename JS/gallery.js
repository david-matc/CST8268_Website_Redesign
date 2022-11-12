fetch('DATA/people.json').then(function (response){
    return response.json();
}).then((obj){
    console.log(obj);
}).catch(function(error){
    console.error('something went wrong with retrieving the people');
    console.error(error);
});