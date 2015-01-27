var main= function(){
var hash=$('#hashtag');
console.log("File loaded");
hash.keypress(function( event ) {
  if ( event.which === 13&&$(hash.val()!=='') ) {

     event.preventDefault();
			var url="http://api.flickr.com/services/feeds/photos_public.gne?" + "tags="+$('#hashtag').val()+"&format=json&jsoncallback=?";

$('.container2').empty();
hash.empty();
$.getJSON(url, function (flickrResponse) {
		var responseDiv=$("<div>");
		var i=1;
		responseDiv.attr("class","row");
		

		flickrResponse.items.forEach(function (photo) {
			i++;
			var span2=$("<div>");
			span2.attr("class","col-md-2");

			


				var img = $("<img>");
				img.attr("width","100%");
				img.attr("height","100%");

				img.attr("src", photo.media.m);
				span2.append(img);
				responseDiv.append(span2);
				if(i===7){
					$('.container2').append(responseDiv);
					responseDiv=$('<div>');
					responseDiv.attr("class","row");
					i=1;
					}
				


			});
		$('.container2').append(responseDiv);
		});
}

	});
}


$(document).ready(main);