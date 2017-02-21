


var getLegislatorData = function(legObj) {
	
	var legislatorString = ''
	legislatorString += '<div class="legislator">' + '<h1 class="legislatorName">' + legObj.first_name + ' ' + legObj.last_name + '</h1>\n'
	legislatorString += '<h2 class="titlePartyStateName">' + legObj.title + ' ~ ' + legObj.party + ' ' + legObj.state_name + '</h2>\n'
	legislatorString += '<ul class="contactInfo">' + '<li>' + legObj.phone + '</li>' + '<li>' + legObj.website + '</li>' + '<li>' + legObj.facebook_id + '</li>' + '<li>' + legObj.twitter_id + '</li>' + '</ul>'
	legislatorString += '<h4 class="termEndDate">' + 'Term End' + ' ' + legObj.term_end + '</h4>' + '</div>'
	
	return legislatorString
}

var handleResponse = function(apiResponse) {
	var stringHTML = ''
	var containerNode = document.querySelector('#container')
	for( var i = 0; i < apiResponse.results.length; i++) {

		stringHTML += getLegislatorData(apiResponse.results[i])
	}
	containerNode.innerHTML = stringHTML
	console.log(apiResponse)
}


var promise = $.getJSON('http://congress.api.sunlightfoundation.com/legislators?apikey=1435')

promise.then(handleResponse)