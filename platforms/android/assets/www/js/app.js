function onsubmit(){
	console.log('onsubmit');
		localStorage.setItem("access_key3", $('#access_key').val());
		$('#profile').append("<br><br><h1>Saved!</h1>");
		that.doDomain();
	}
	function doDomain(){
		
				$('#domains').html('<h1>Domains:</h1>');
		$.ajax({url:'https://api.adsterratools.com/publisher/' + localStorage.getItem("access_key3") + '/domains.json',contentType: "application/json;charset=utf-8",
dataType:"json",	success: function(data){
	
	var len = data['items'].length;
			for(var i=0;i<len;i++){
				$('#domains').show();
				$('#domains').append('<h1><a style="color:blue; text-color:blue;" id="thea-' + i.toString() + '" >' + data['items'][i]['title'] + '</a></h1><br><br>');
				localStorage.setItem("thea-" + i.toString(), data['items'][i]['id'].toString());
				document.getElementById("thea-" + i.toString()).addEventListener("click", function(event){
    
		
		activate_subpage("#uib_page_4");
		doData(event.target.id);
}, false);
			}
		}});
		
	}
	function doData(which){
		var td = new Date();
		td.setDate(td.getDate());
	var rest = td.toISOString().slice(0,10).replace(/-/g,"");
	var yeart = rest.slice(0,4);
	var montht = rest.slice(4,6);
	var dayt = rest.slice(6,8);
	var today = yeart + '-' + montht + '-' + dayt;
		var d = new Date();
		d.setDate(d.getDate() - 7);
	var resd = d.toISOString().slice(0,10).replace(/-/g,"");
	var year = resd.slice(0,4);
	var month = resd.slice(4,6);
	var day = resd.slice(6,8);
	var tosend = year + '-' + month + '-' + day;
	console.log(tosend);
			$.ajax({url:'https://api.adsterratools.com/publisher/' + localStorage.getItem("access_key3") + '/stats.json?domain_id=' +  localStorage.getItem(which)  +  '&start_date=' + tosend,contentType: "application/json;charset=utf-8",
dataType:"json",	success: function(data){
	
	  var dates = [];
		  var impressions = [];
		  var clicks = [];
		  var revenue = [];//parseFloat
		  var ctr = [];
		  var cpm = [];
		  
	var len = data['items'].length;
							for(var i=0;i<len;i++){
								if (data['items'][i]['a_date'] == today){
								impressionst = (data['items'][i]['impressions']);
								clickst = (data['items'][i]['clicks']);
								revenuet =(parseFloat(data['items'][i]['revenue']));
								ctrt = (parseFloat(data['items'][i]['ctr']));
								cpmt = (parseFloat(data['items'][i]['cpm']));
								$('#today').html('<b>Impressions:</b> ' + impressionst.toString() 
								+ '<br><b>Clicks:</b> ' + clickst.toString() 
								+ '<br><b>Revenue:</b> $' + revenuet.toString() 
								+ '<br><b>CTR:</b> ' + ctrt.toString() 
								+ '<br><b>CPM:</b> ' + cpmt.toString() + '%');
								
								}
								dates.push(data['items'][i]['a_date']);
								impressions.push(data['items'][i]['impressions']);
								clicks.push(data['items'][i]['clicks']);
								revenue.push(parseFloat(data['items'][i]['revenue']));
								ctr.push(parseFloat(data['items'][i]['ctr']));
								cpm.push(parseFloat(data['items'][i]['cpm']));
							}
			var ctx1 = document.getElementById("chart1");
			document.getElementById("chart1");
			Chart.defaults.global.defaultFontColor = "#fff";
var myChart1 = new Chart(ctx1, 

{
  type: "line",
  data: {
    "labels": (dates),
    "datasets": [{  
      yAxisID: 'A',"label": "Impressions",  borderColor: "#ffffff",
      "fill": "false","data": (impressions)},
	  {
      yAxisID: 'B',"label": "Clicks", borderColor: "#0000FF",
      "fill": "false","data": (clicks)},
{ 
      yAxisID: 'B',"label": "Revenue",borderColor: "#00FF00",
      "fill": "false", "data": (revenue)},
{
      yAxisID: 'B',"label": "Ctr",borderColor: "#9ba4d0",
      "fill": "false", "data": (ctr) },
{ 
      yAxisID: 'B',"label": "Cpm" ,borderColor: "#445cd2",
      "fill": "false","data": (cpm)}]
  },
  options: {responsive: true, scaleFontColor: "#FFFFFF",
    scales: {
      yAxes: [{
        "id": 'A',
        position: 'left'
      }, {
        "id": 'B',
        position: 'right'
      }]
    }
  }
});

var ctx12 = document.getElementById("chart1-2");
			document.getElementById("chart1-2");
var myChart12 = new Chart(ctx12, 

{responsive: true, scaleFontColor: "#FFFFFF",
  type: "line",
  data: {
    "labels": (dates),
    "datasets": [{  
      "label": "Impressions",  borderColor: "#ffffff",
      "fill": "false","data": (impressions)}]
  },
  options: {responsive: true, scaleFontColor: "#FFFFFF"}
});

var ctx13 = document.getElementById("chart1-3");
			document.getElementById("chart1-3");
var myChart13 = new Chart(ctx13, 

{responsive: true, scaleFontColor: "#FFFFFF",
  type: "line",
  data: {
    "labels": (dates),
    "datasets": [{  
      "label": "Clicks",  borderColor: "#0000FF",
      "fill": "false","data": (clicks)}]
  },
  options: {responsive: true, scaleFontColor: "#FFFFFF"}
});
var ctx14 = document.getElementById("chart1-4");
			document.getElementById("chart1-4");
var myChart14 = new Chart(ctx14, 

{responsive: true, scaleFontColor: "#FFFFFF",
  type: "line",
  data: {
    "labels": (dates),
    "datasets": [{  
      "label": "Revenue",  borderColor: "#00FF00",
      "fill": "false","data": (revenue)}]
  },
  options: {responsive: true, scaleFontColor: "#FFFFFF"}
});

var ctx15 = document.getElementById("chart1-5");
			document.getElementById("chart1-5");
var myChart15 = new Chart(ctx15, 

{responsive: true, scaleFontColor: "#FFFFFF",
  type: "line",
  data: {
    "labels": (dates),
    "datasets": [{  
      "label": "Ctr",  borderColor: "#9ba4d0",
      "fill": "false","data": (ctr)}]
  },
  options: {responsive: true, scaleFontColor: "#FFFFFF"}
});


var ctx16 = document.getElementById("chart1-6");
			document.getElementById("chart1-6");
var myChart16 = new Chart(ctx16, 

{responsive: true, scaleFontColor: "#FFFFFF",
  type: "line",
  data: {
    "labels": (dates),
    "datasets": [{  
      "label": "Cpm",  borderColor: "#445cd2",
      "fill": "false","data": (cpm)}]
  },
  options: {responsive: true, scaleFontColor: "#FFFFFF"}
});
	d = new Date();
		d.setDate(d.getDate() - 30);
	resd = d.toISOString().slice(0,10).replace(/-/g,"");
	year = resd.slice(0,4);
	month = resd.slice(4,6);
	day = resd.slice(6,8);
	tosend = year + '-' + month + '-' + day;
	console.log(tosend);
			$.ajax({url:'https://api.adsterratools.com/publisher/' + localStorage.getItem("access_key3") + '/stats.json?domain_id=' +   localStorage.getItem(which)   +  '&start_date=' + tosend,contentType: "application/json;charset=utf-8",
dataType:"json",	success: function(data){

	  dates = [];
		  impressions = [];
		  clicks = [];
		  revenue = [];//parseFloat
		  ctr = [];
		  cpm = [];
		  console.log(data);
		  
	var len = data['items'].length;
							for(var i=0;i<len;i++){
								if (data['items'][i]['a_date'] == today){
								impressionst = (data['items'][i]['impressions']);
								clickst = (data['items'][i]['clicks']);
								revenuet =(parseFloat(data['items'][i]['revenue']));
								ctrt = (parseFloat(data['items'][i]['ctr']));
								cpmt = (parseFloat(data['items'][i]['cpm']));
								}
								dates.push(data['items'][i]['a_date']);
								impressions.push(data['items'][i]['impressions']);
								clicks.push(data['items'][i]['clicks']);
								revenue.push(parseFloat(data['items'][i]['revenue']));
								ctr.push(parseFloat(data['items'][i]['ctr']));
								cpm.push(parseFloat(data['items'][i]['cpm']));
							}
			var ctx2 = document.getElementById("chart2");
			document.getElementById("chart2");
var myChart2 = new Chart(ctx2, 

{responsive: true, scaleFontColor: "#FFFFFF",
  type: "line",
  data: {
    "labels": (dates),
   "datasets": [{  
      yAxisID: 'A',"label": "Impressions",  borderColor: "#ffffff",
      "fill": "false","data": (impressions)},
	  {
      yAxisID: 'B',"label": "Clicks", borderColor: "#0000FF",
      "fill": "false","data": (clicks)},
{ 
      yAxisID: 'B',"label": "Revenue",borderColor: "#00FF00",
      "fill": "false", "data": (revenue)},
{
      yAxisID: 'B',"label": "Ctr",borderColor: "#9ba4d0",
      "fill": "false", "data": (ctr) },
{ 
      yAxisID: 'B',"label": "Cpm" ,borderColor: "#445cd2",
      "fill": "false","data": (cpm)}]
  },
  options: {responsive: true, scaleFontColor: "#FFFFFF",
    scales: {
      yAxes: [{
        "id": 'A',
        position: 'left'
      }, {
        "id": 'B',
        position: 'right'
      }]
    }
  }
});


var ctx22 = document.getElementById("chart2-2");
			document.getElementById("chart2-2");
var myChart22 = new Chart(ctx22, 

{responsive: true, scaleFontColor: "#FFFFFF",
  type: "line",
  data: {
    "labels": (dates),
    "datasets": [{  
      "label": "Impressions",  borderColor: "#ffffff",
      "fill": "false","data": (impressions)}]
  },
  options: {responsive: true, scaleFontColor: "#FFFFFF"}
});

var ctx23 = document.getElementById("chart2-3");
			document.getElementById("chart2-3");
var myChart23 = new Chart(ctx23, 


{responsive: true, scaleFontColor: "#FFFFFF",
  type: "line",
  data: {
    "labels": (dates),
    "datasets": [{  
      "label": "Clicks",  borderColor: "#0000FF",
      "fill": "false","data": (clicks)}]
  },
  options: {responsive: true, scaleFontColor: "#FFFFFF"}
});
var ctx24 = document.getElementById("chart2-4");
			document.getElementById("chart2-4");
var myChart24 = new Chart(ctx24, 

{responsive: true, scaleFontColor: "#FFFFFF",
  type: "line",
  data: {
    "labels": (dates),
    "datasets": [{  
      "label": "Revenue",  borderColor: "#00FF00",
      "fill": "false","data": (revenue)}]
  },
  options: {responsive: true, scaleFontColor: "#FFFFFF"}
});

var ctx25 = document.getElementById("chart2-5");
			document.getElementById("chart2-5");
var myChart25 = new Chart(ctx25, 

{responsive: true, scaleFontColor: "#FFFFFF",
  type: "line",
  data: {
    "labels": (dates),
    "datasets": [{  
      "label": "Ctr",  borderColor: "#9ba4d0",
      "fill": "false","data": (ctr)}]
  },
  options: {responsive: true, scaleFontColor: "#FFFFFF"}
});


var ctx26 = document.getElementById("chart2-6");
			document.getElementById("chart2-6");
var myChart26 = new Chart(ctx26, 

{responsive: true, scaleFontColor: "#FFFFFF",
  type: "line",
  data: {
    "labels": (dates),
    "datasets": [{  
      "label": "Cpm",  borderColor: "#445cd2",
      "fill": "false","data": (cpm)}]
  },
  options: {responsive: true, scaleFontColor: "#FFFFFF"}
});
			}});
			}});
			$('#profile').html('<a style="color:blue;" onclick="window.open(\'https://publishers.adsterra.com/api-token/\', \'_system\');">Adsterra Publisher Access Key:</a><br><br> <input type="text" id="access_key" value="' + localStorage.getItem("access_key3") + '"></input><input type="submit" onclick="that.onsubmit();">');
		setTimeout(doData, 60000);
	}
var that = this;
$(document).ready(function() {
	
			activate_subpage("#uib_page_5");
			$('.uib_w_4').css('background', '#00AEEF');
 });
var app = {
    // Application Constructor
	
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {

		if (typeof console != "undefined")
                if (typeof console.log != 'undefined')
                    console.olog = console.log;
                else
                    console.olog = function() {};

            console.log = function(message) {
                console.olog(message);
                $('#results').prepend('<p>' + message + '</p>');
            };
            window.onerror = function(message, url, linenumber) {
                console.log("JavaScript error: " + message + " on line " +
                    linenumber + " for " + url);
            }
            console.error = console.debug = console.info = console.log

            
	 console.log('deviceready');
		$('#results').html('test');
		if (localStorage.getItem("access_key3") == null){
			activate_subpage("#uib_page_5");
			$('.uib_w_4').css('background', '#00AEEF');
			$('#profile').html('<a style="color:blue;" onclick="window.open(\'https://publishers.adsterra.com/api-token/\', \'_system\');">Adsterra Publisher Access Key:</a><br><br> <input type="text" id="access_key"></input><input type="submit" id="thesubmit">');
			  document.getElementById("thesubmit").addEventListener("click", that.onsubmit, false);
		}
		else {
			
			activate_subpage("#uib_page_5");
			$('.uib_w_4').css('background', '#00AEEF');
				$('#profile').html('<a style="color:blue;" onclick="window.open(\'https://publishers.adsterra.com/api-token/\', \'_system\');">Adsterra Publisher Access Key:</a><br><br> <input type="text" id="access_key" value="' +  localStorage.getItem("access_key3") + '"></input><input type="submit" id="thesubmit">');
		document.getElementById("thesubmit").addEventListener("click", that.onsubmit, false);
			that.doDomain();
			}
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);


        console.log('Received Event: ' + id);
    }
};

app.initialize();