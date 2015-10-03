Template.movie.events = {
	"click .movie-still": function (e, tmpl) {
		
	  //mixpanel.track("Movie Thumb Clicked", {"name": Meteor.user().profile.name});
	
	  //console.log("movie still clicked");
	  //alert("movie still!");

	  $('#movie-still-big-view').attr("src", $(e.target).attr("src")); 
	  $('.movie-still').removeClass('thumb-selected');
	
	  if(!$(e.target).hasClass('thumb-selected')) {
	  	$(e.target).addClass('thumb-selected');
	  }
	
	  if(e.target.id == "movie-still-1") {
	  	$('#movie-still-big-header').text('Alex-Keller Fonseca');
	  	$('#movie-still-big-desc').text('movie.atmamaafrica');
	  } else if (e.target.id == "movie-still-2") {
	  	$('#movie-still-big-header').text('Alex-Keller & Kwame Sousa');
	  	$('#movie-still-big-desc').text('movie.brasilemb');
	  } else if (e.target.id == "movie-still-3") {
	  	$('#movie-still-big-header').text('Alex-Keller & Rita Cruz');
	  	$('#movie-still-big-desc').text('movie.rtpinterview');
	  } else if (e.target.id == "movie-still-4") {
	  	$('#movie-still-big-header').text('Alex-Keller on a Mototaxi');
	  	$('#movie-still-big-desc').text('movie.crosstheislands');
	  } else if (e.target.id == "movie-still-5") {
	  	$('#movie-still-big-header').text('Alex-Keller Selecting Paintings');
	  	$('#movie-still-big-desc').text('movie.olavohelp');
	  } else if (e.target.id == "movie-still-6") {
	  	$('#movie-still-big-header').text('Alex-Keller on the Exhibiton Day');
	  	$('#movie-still-big-desc').text('movie.paintingsrevelation');
	  }
	}
};

/*
Template.movie.events({
  'click #wantmore': function(e, tmpl) {
    
    //alert("movie");
    e.preventDefault();
    
      $('#hero').scrollIntoView();
      
  }
})
*/

Template.featured.events({
	"click .artist": function (e, tmpl) {

		//console.log("artist clicked");
	  	//alert("artist!");
		
		function listProperties(obj) {
		   var propList = "";
		   for(var propName in obj) {
			  if(typeof(obj[propName]) != "undefined") {
				 propList += (propName + ", ");
			  }
		   }
		   //alert(propList);
		}		
		//listProperties(e.currentTarget.id);
		//alert($(e.currentTarget).height());

		if($(e.currentTarget).height() != 86) {
			
			var artistname = $(e.currentTarget).attr("title");

			$(e.currentTarget).animate({'height':'215'},'7000');
			$('#title-featured-artist').removeClass('fadeInLeft').addClass('fadeOutRight', 10, function(){
			  $(this).removeClass('fadeOutRight', 500, function() {
				$(this).text(artistname).addClass('fadeInLeft');
			  })
			});
		
		} else {
		
			$(e.currentTarget).animate({'height':'86'},'7000');
			$('#title-featured-artist').removeClass('fadeInLeft').addClass('fadeOutRight', 10, function(){
			  $(this).removeClass('fadeOutRight', 500, function() {
				$(this).text('featured.featuredartists').addClass('fadeInLeft');
			  })
			});
		} 
	   }
});