// src/index.js
//var m = require("mithril")
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
			incident.list=[]
			for(let i  in result)
			{
				incident.list.push(result[i]);
			}
            //incident.list = result
        })
    },
};

var incidentList = {
    oninit: incident.loadList,
    view: function() {
		//console.log(incident);
        return m(".incidents-list", incident.list.map(function(incidents) {// incidents is treated like an array loops through array and populates it
            return m(".incidents-list-item", incidents.date + " " + incidents.incident)//.incidents-list-item is a div
        }))
    }
};

//var IncidentList = require("./views/incidentList.js")



//m.render(document.body, "hello world")


m.mount(document.body, incidentList)// m.mount renders the specified components into a DOM element