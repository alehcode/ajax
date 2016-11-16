$(document).ready(function (){
	$("#search-form button").click(function(event){
		event.preventDefault();
		var term = cleanTerm($("#search-form input").val());
		var results = callItunesSearch(term, showResults, noResults, error);
	});

	function callItunesSearch(searchTerm, showResults, noResultsMessage, error){
		startLoading();
		// Pueden revisar el API en el link https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/
		var root = 'https://itunes.apple.com/search?parameterkeyvalue';
		$.ajax({
		Url :"http://a1099.itunes.apple.com/r10/Music/f9/54/43/mzi.gqvqlvcq.aac.p.m4p"
        });
	}

  	showResults();
	function showResults(data){
		console.log(data);
		data.results.map(function(cancion, index){
			var song  = document.createElement("div");
			$(song).addClass("song");
			// genera los elementos de cada canción aquí
			$("#search-results").append(song);
		});
	}
  
 	function noResults(){
       	$("#search-results").html(song);
    }
  	function error(){console.log("Error")}
	
	function cleanTerm(term){
        term = $.trim(term);
		return term.replace(/s/g, "+");
	}

	function startLoading(){
		var div = $(document.createElement("div")).addClass("spinner");
		var dot2 = $(document.createElement("div")).addClass("dot2");
		var dot1 = $(document.createElement("div")).addClass("dot1");
		div.append(dot1);
		div.append(dot2);
		$("#search-results").html("").append(div);
	}

	function stopLoading(){
		$(".spinner").remove();
	}
});

