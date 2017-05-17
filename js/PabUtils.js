/*!
 * PabUtils: Pabrick Utilities for Web Development - v0.0.1 - 2017-05-17
 * Author: Pablo Jiménez Beneyto - @Pabrick
 * http://bastaky.com
 * Copyright 2017, Bastaky.
 */

'use strict';

function PabrickUtils(){
	this.isDebug = false;
	this.setDebug = function( value ){
        this.isDebug = value;
    };
	this.showDebug = function(type, message){
        if(this.isDebug && type === "error"){
            console.error("✖ " + message);
        }else if(this.isDebug){
            console.log("✔ " + message);     
        }
    };
}

var BrowserDetect = {
	init: function () {
		this.browser = this.searchString(this.dataBrowser) || "Other";
		this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "Unknown";
	},
	searchString: function (data) {
		for (var i = 0; i < data.length; i++) {
			var dataString = data[i].string;
			this.versionSearchString = data[i].subString;
			if (dataString.indexOf(data[i].subString) !== -1) {
				return data[i].identity;
			}
		}
	},
	searchVersion: function (dataString) {
		var index = dataString.indexOf(this.versionSearchString);
		if (index === -1) {
			return;
		}
		var rv = dataString.indexOf("rv:");
		if (this.versionSearchString === "Trident" && rv !== -1) {
			return parseFloat(dataString.substring(rv + 3));
		} else {
			return parseFloat(dataString.substring(index + this.versionSearchString.length + 1));
		}
	},
	dataBrowser: [
		{string: navigator.userAgent, subString: "Chrome", identity: "Chrome"},
		{string: navigator.userAgent, subString: "MSIE", identity: "Explorer"},
		{string: navigator.userAgent, subString: "Trident", identity: "Explorer"},
		{string: navigator.userAgent, subString: "Firefox", identity: "Firefox"},
		{string: navigator.userAgent, subString: "Safari", identity: "Safari"},
		{string: navigator.userAgent, subString: "Opera", identity: "Opera"}
	]
};

function DomElem(id){
	this.id = id;
}
DomElem.prototype = {
	id : null,
	setTop : function( top ){
		document.getElementById(this.id).style.top = top + "px";
	},
	setLeft : function( left ){
		document.getElementById(this.id).style.left = left + "px";
	},
	setHeight : function( height ){
		document.getElementById(this.id).style.height = height + "px";
	},
	setWidth : function( width ){
		document.getElementById(this.id).style.width = width + "px";
	},
	setProperty : function ( property, value ) {
		document.getElementById(id).style[property] = value + "px";
	},
	setPosition : function (top, left){
		this.setTop( top );
		this.setLeft( left );
	},
	setSize : function (height, width){
		this.setHeight( height );
		this.setWidth( width );
	}
}

function HomeSquare(id){
	DomElem.call(this, id);
}
HomeSquare.prototype = Object.create(DomElem.prototype, {
	setSize : {
		value: function(){
			if(arguments[0] > homeSquareMaxSize ){
				arguments[0] = homeSquareMaxSize;
			} //console.log(arguments);
			DomElem.prototype.setSize.apply(this, [arguments[0], arguments[0]] );
		}
	}
});
//HomeSquare.prototype.constructor = HomeSquare;