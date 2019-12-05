var m = require("mithril")

var incident = {
    list: [],
    loadList: function() {
		// hear this function load list calls from the restful api as a promise function to gather data from the api
        return m.request({
            method: "GET",
            url: "http://localhost:8000/incidents",
            withCredentials: false,
        })
		//promise has been completed result.data is a json
        .then(function(result) {
            incident.list = result.data
        })
    },
}

module.exports = incident