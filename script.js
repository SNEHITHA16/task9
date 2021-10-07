var request = new XMLHttpRequest();  //create a xml http request object

request.open('GET', 'https://restcountries.com/v2/all', true);  // initiate a connection

request.send();  //sending the connection

//receving the data
request.onload = function () {
    var data = JSON.parse(this.response);
    console.log(data);

     //1.filter function to print all countries in Asia region
    var countries = data.filter((ele) => ele.region === "Asia");
    console.log(countries);

    //2.filter function countries population is less than 200000  
    var countries = data.filter((ele) => ele.population <= 200000);
    console.log(countries);

    //3.US dollar as currency countries
    let curr = data.filter((ele) => {
        for (var i in ele.currencies) {
            if (ele.currencies[i].code === 'USD') {
                return true;
            }
        }
    });
    console.log(curr);

    //4.Reduce function  to print population of all countries
    var res = data.reduce(function foo(acc, ele) {
        return acc + ele.population;
    }, 0);
    console.log(res);

    //5.forEach loop to get country name ,capital,flag
    data.forEach(element => {
        console.log(element.name + " " + element.capital + " " + element.flag);
    })


}
