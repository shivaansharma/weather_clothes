const place = document.querySelector("form");
place.addEventListener("submit", weather);

function weather(e) {
    e.preventDefault();
    console.log(e);
    let val = document.querySelector("input").value
    console.log(val)
    let url = `http://api.weatherapi.com/v1/current.json?key=c9c3a570884541309eb73103231908&q=${val}&aqi=no`
    let prom = fetch(url)
    prom.then(data => data.json())
        .then((jdata) => {
            let current = jdata.current
            return current
        })
        .then((today) => {
            class fData {
                constructor(cloud, feelsc, feelf, tempc, tempf, humidity, preci) {
                    this.cloud = cloud;
                    this.feelc = feelsc;
                    this.feelf = feelf;
                    this.tempc = tempc;
                    this.tempf = tempf;
                    this.humidity = humidity;
                    this.preci = preci;
                }
            }
            let myObject = new fData(today.cloud,today.feelslike_c,today.feelslike_f,today.temp_c,today.temp_f,today.humidity,today.precip_in)
            console.log(myObject)
        })
}
