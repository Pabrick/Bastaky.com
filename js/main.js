'use strict';

var isDeviceMobile;
var arrayLanguajes = ["spa", "eng"];
var currentLanguaje = arrayLanguajes[0];

var sectionHome,sectionDown,sectionLeft,sectionRight; 
var homeSqUp, homeSqDown, homeSqLeft, homeSqRight;

var btHomeDown, btHomeLeft, btHomeRight;
var avatarDown, avatarLeft, avatarRight;
var currentSection = "home";
var homeSquareMaxSize = 906;

window.onload = function() {
    BrowserDetect.init();
	isDeviceMobile = window.mobilecheck();

	PabrickUtils.showDebug("log", "BrowserDetect.browser - " + BrowserDetect.browser);
	PabrickUtils.showDebug("log", "MobileDevide = " + isDeviceMobile);

	RetrieveData( arrayLanguajes, initWeb );
    window.onresize();
};

window.mobilecheck = function() {
	var check = false;
	(function(a,b){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
		return check;
	}

	var waitForFinalEvent = (function () {
    var timers = {};
    return function (callback, ms, uniqueId) {
        if (!uniqueId) {
            uniqueId = "Don't call this twice without a uniqueId";
        }
        if (timers[uniqueId]) {
            clearTimeout (timers[uniqueId]);
        }
        timers[uniqueId] = setTimeout(callback, ms);
    };
})();

window.onresize = function() {
	switch(currentSection){
		case "home":
			document.getElementById("section-down").style.top = window.innerHeight + "px";
			document.getElementById("section-left").style.left = -window.innerWidth + "px";
			document.getElementById("section-right").style.left = window.innerWidth + "px";
		break;
		case "left":
			document.getElementById("section-down").style.top = window.innerHeight + "px";
			document.getElementById("section-right").style.left = window.innerWidth + "px";
		break;
		case "right":
			document.getElementById("section-down").style.top = window.innerHeight + "px";
			document.getElementById("section-left").style.left = -window.innerWidth + "px";
		break;
	}
	setHomeElements();
}

window.onscroll = function() {
};

function initWeb() {
	TranslateSite( currentLanguaje );

	homeSqUp = new HomeSquare('section-home-up');
	homeSqDown = new HomeSquare('section-home-down');
	homeSqLeft = new HomeSquare('section-home-left');
	homeSqRight = new HomeSquare('section-home-right');

	btHomeDown = new HomeSquare('bt-down');
	btHomeLeft = new HomeSquare('bt-left');
	btHomeRight = new HomeSquare('bt-right');

	avatarDown = new HomeSquare('section-down-avatar');

	sectionHome = new Section('section-home', 0, 0);
	sectionDown = new Section('section-home', window.innerHeight, 0);
	sectionLeft = new Section('section-home', 0, -window.innerWidth);
	sectionRight = new Section('section-home', 0, window.innerWidth);

	/* INIT SECTION POSITIONS */
	document.getElementById("section-down").style.top = window.innerHeight + "px";
	document.getElementById("section-left").style.left = + "px";
	document.getElementById("section-right").style.left = window.innerWidth + "px";

	/* INIT Section */
	/*
	document.getElementById("section-left").style.left = 0 + "px";
	document.getElementById("section-home").style.display = "none";
	*/
	document.getElementById("bt-down").onclick = function() { onClickHomeButton( event ) };
	document.getElementById("bt-left").onclick = function() { onClickHomeButton( event ) };
	document.getElementById("bt-right").onclick = function() { onClickHomeButton( event ) };
}

function onClickHomeButton( event ) {
	event.preventDefault(); //jQuery
	var dir = event.target.id.substr(3);
	ChangeTransitionDuration(1);
	loadSection(dir);
}

function loadSection( section ) {
	switch(section){
		case "down":
			currentSection = section;
			document.getElementById("section-home").style.top = -window.innerHeight + "px";
			document.getElementById("section-down").style.top = 0 + "px";
			document.getElementById("bt-down").style.zIndex = 4; 
			document.getElementById("bt-down").style.opacity = 0;
			
			var newTop = document.getElementById("section-home-down").offsetHeight * 0.45;
			document.getElementById("section-home-down").style.top = window.innerHeight - newTop + "px";	
		break;
		case "left":
			currentSection = section;
			document.getElementById("section-home").style.left = window.innerWidth + "px";
			document.getElementById("section-left").style.left = 0 + "px";
			document.getElementById("bt-left").style.zIndex = 4; 
			document.getElementById("bt-left").style.opacity = 0;
			
			//var newTop = document.getElementById("home-sq-down").offsetHeight * 0.45;
			//document.getElementById("home-sq-down").style.top = window.innerHeight - newTop + "px";
		break;
		case "right":
			currentSection = section;
			document.getElementById("section-home").style.left = -window.innerWidth + "px";
			document.getElementById("section-right").style.left = 0 + "px";
			document.getElementById("bt-right").style.zIndex = 4; 
			document.getElementById("bt-right").style.opacity = 0;
			
			//var newTop = document.getElementById("home-sq-down").offsetHeight * 0.45;
			//document.getElementById("home-sq-down").style.top = window.innerHeight - newTop + "px";
		break;
	}
	setInterval( function(){
		switch(section){
			case "down":
				document.getElementById("section-home").style.display = "none";
				document.getElementById("section-down-avatar").style.opacity = 1;
				ChangeTransitionDuration(0);
				document.body.style.overflow = "auto";
			break;
			case "left":
			break;
			case "right":
			break;
		}
		
	} , 2000 );
}

function ChangeTransitionDuration( sec ){
	document.getElementById("section-home").style.transitionDuration = sec * 2 + "s";

	document.getElementById("section-home-up").style.transitionDuration = sec * 2 + "s";
	document.getElementById("section-home-down").style.transitionDuration = sec * 2 + "s";
	document.getElementById("section-home-left").style.transitionDuration = sec * 2 + "s";
	document.getElementById("section-home-down").style.transitionDuration = sec * 2 + "s";

	document.getElementById("bt-down").style.transitionDuration = sec + "s";
	document.getElementById("bt-left").style.transitionDuration = sec + "s";
	document.getElementById("bt-down").style.transitionDuration = sec + "s";

	document.getElementById("section-down").style.transitionDuration = sec * 2 + "s";
	document.getElementById("section-left").style.transitionDuration = sec * 2 + "s";
	document.getElementById("section-right").style.transitionDuration = sec * 2 + "s";
}

function TranslateSite( lan ) {
	document.getElementById("bt-left").innerHTML = "Front-End";
	document.getElementById("bt-right").innerHTML = "VideoJuegos";
	document.getElementById("bt-down").innerHTML = "Personal";
}

function setHomeElements() {
	var currentSize, currentTop, currentLeft;
	currentSize = Math.min(window.innerWidth, window.innerHeight);
	
	if(window.innerWidth < window.innerHeight){
		currentTop = (window.innerHeight - window.innerWidth) / 2;
		currentLeft = 0;
	}else{
		currentTop = 0;
		currentLeft = (window.innerWidth - window.innerHeight) / 2;
	}

	homeSqUp.setSize(currentSize);
	homeSqDown.setSize(currentSize);
	homeSqLeft.setSize(currentSize);
	homeSqRight.setSize(currentSize);

	homeSqUp.setPosition(currentTop, currentLeft);
	homeSqDown.setPosition(currentTop, currentLeft);
	homeSqLeft.setPosition(currentTop, currentLeft);
	homeSqRight.setPosition(currentTop, currentLeft);

	var offsetTop = ((currentSize - document.getElementById("bt-left").offsetHeight ) / 2) + currentSize * 0.15;
	var offsetTop2 = offsetTop + currentSize * 0.2;
	var offsetLeft = (currentSize - document.getElementById("bt-down").offsetWidth) / 2;

	document.getElementById("bt-left").style.top = currentTop + offsetTop + "px";
	document.getElementById("bt-right").style.top = currentTop + offsetTop + "px";
	document.getElementById("bt-down").style.top = currentTop + offsetTop2 + "px";
	document.getElementById("bt-down").style.left = currentLeft + offsetLeft + "px";

	avatarDown.setSize(currentSize * 0.426);
	document.getElementById("section-down-header").style.height = currentSize * 0.426 * 0.55 + "px";
}

/* MY CLASSES */
var PabrickUtils = {
    isDebug: true,
    showDebug: function(type, message){
        if(this.isDebug && type === "error"){
            console.error("✖ " + message);
        }else if(this.isDebug){
            console.log("✔ " + message);     
        }
    }
};

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

function Section( section, initTop, initLeft ) {
	this.id = "section-" + section;
	this.initTop = initTop;
	this.initLeft = initLeft;
    this.setIn = function() {
		document.getElementById(id).style.top = 0 + "px";
		document.getElementById(id).style.left = 0 + "px";
		document.getElementById("bt-" + section).style.zIndex = 4; 
		document.getElementById("bt-" + section).style.opacity = 0;
	}
	this.setOut = function() {
		document.getElementById(id).style.top = initTop + "px";
		document.getElementById(id).style.left = initLeft + "px";
		document.getElementById("bt-" + section).style.zIndex = 9; 
		document.getElementById("bt-" + section).style.opacity = 1;
	}
	this.setTop = function( top ) {
		document.getElementById(id).style.top = top + "px";
	}
	this.setLeft = function( left ) {
		document.getElementById(id).style.left = left + "px";
	}
}

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


function RetrieveData(array, callback) {
	//this.array = array;
	var languaje = array.shift();
	var urlData = "data/" + languaje + ".json";
	initWeb();
/*
	var request = new XMLHttpRequest();
		request.open('GET', urlData, true);
		request.onload = function() {
			if (request.status >= 200 && request.status < 400) {
				PabrickUtils.showDebug("log", "Languaje loaded: " + languaje);
				var data = JSON.parse(request.responseText);
				console.log(data);
			} else {
				PabrickUtils.showDebug("error", "Languaje NOT loaded: " + languaje + " - We reached our target server, but it returned an error");
			}
		};
		request.onerror = function() {};
		request.send();
*/
/*
	$.getJSON(urlData, function(data) {
		$.each(data, function(i, pack) {
			arrayLanguajes[i] = pack;
		});
	}).then(function(data){
		PabrickUtils.showDebug("log", "Languaje loaded: " + languaje);
		if(array.length === 0){
			callback();
		}else{
			RetrieveData(array, callback); 
		}
		initWeb();
    });
*/
}