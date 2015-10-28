$(function() {
	getSearchTerm()
})

function getRequest(searchTerm) {
	var params = {
		part: 'snippet',
		key: 'AIzaSyCZuXAKmkQOo3hHM4co_qxV4Zs9GrMJwlI',
		q: searchTerm
	}
	url ='https://www.googleapis.com/youtube/v3/search';
	$.getJSON(url, params, function(data){
		try {
			console.log(data)
			data.length
			var urls = []
			console.log(urls)
			for (var i = 0; i < data.items.length; i++) {
				console.log(i)
				urls.push(data.items[i].snippet.thumbnails.default.url);
				console.log(data.items[i].snippet.thumbnails.default.url);
			};
			console.log(urls);
			display(urls);
		} catch(err) {
			alert("bad search");
		}
	});
};

function getSearchTerm() {
	$("button").click(function() {
		var search = $("input").val();
		console.log(search)
		$("input").val('');
		getRequest(search);
	});
}

function display(urls) {
	console.log("DISPLAY FUNCTION")
	console.log("urls length: " + urls.length)
	for (var i = 0; i < urls.length; i++) {
		console.log(urls[i]);
		$("#thumbnails").append($("<img/>").attr({"src": urls[i], "class" : "img"}));
	}
	$('img').click(function() {
		console.log("IMG SEARCH")
		window.location = "https://www.google.com/?gws_rd=ssl"});	
};

//Callback hell

	