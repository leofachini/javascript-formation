(function() {

    'use strict';

    const API_KEI = '4c8cb3f1d04e3f4b82fdaecaa292699a';
    const CITY = 'lisbon';
    // const endpoint = `https://samples.openweathermap.org/data/2.5/forecast?q=${CITY}&appid=${API_KEI}`;
    const endpoint = `https://api.myjson.com/bins/h2mc6`;

    function getData() {
        return axios.get(endpoint);
    }

    function getRequestWithPromises() {
        getData().then(response => {
            console.log(response);
            let ul = document.querySelector('ul');
            // response.data.students.forEach(.... 
            response.data['students'].forEach(studant => {
                ul.innerHTML += `<li>${studant.name} | ${studant.age}</li>`;
            });
        });
    }
    getRequestWithPromises();

    console.log('This has executed awayyyyy before!!!');

    // async function getRequestWithAsyncAwait() {
    //     const data = await getData();
    //     console.log(data);
    // };

    // getRequestWithAsyncAwait();

})();