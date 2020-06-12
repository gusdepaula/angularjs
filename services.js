// SERVICES
weatherApp.service('cityService', function() {
   
    this.city = "London";
    
});

weatherApp.service('weatherService', ['$resource', function($resource) {

    this.GetWeather = function(city, appID, days) {

        var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast", { callback: "JSON_CALLBACK" }, { get: { method: "JSONP" }});

        return weatherAPI.get({ q: city, appid: appID, cnt: days });

    };
}]);