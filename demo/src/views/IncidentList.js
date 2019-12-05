// src/views/UserList.js
var m = require("mithril")
var Incidents = require("../models/Incidents")

module.exports = {
    oninit: Incidents.loadList,
    view: function() {
        return m(".incidents-list", Incidents.list.map(function(incidents) {// incidents is treated like an array loops through array and populates it
            return m(".incidents-list-item", incidents.date + " " + incidents.incidents)//.incidents-list-item is a div
        }))
    }
}
