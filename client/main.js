import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from "meteor/meteor";
import {Players} from './../imports/api/players';
import {Tracker} from 'meteor/tracker';
import App from "../imports/ui/App";


Meteor.startup(() => {
    Tracker.autorun(() => {


        let players = Players.find().fetch();
        let title = "Score Keep";
        ReactDOM.render(<App players={players} title={title}/>, document.getElementById("app"));

    });
});
