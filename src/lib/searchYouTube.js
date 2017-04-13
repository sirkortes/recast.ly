var searchYouTube = (options, callback) => {
  
  /*
    Use jQuery to send a GET request to the search endpoint. This is the only time you should use jQuery in this sprint
    Accept a callback function that is invoked with the videos array that is returned from hitting the endpoint
    Accept an options object with the following properties:
    query - the string to search for
    max - the maximum number of videos to get, which should default to 5
    key - an authorized YouTube Browser API key
    Only GET embeddable videos
    Make sure all the tests for searchYouTube are passing. You can open the tests with npm test
*/
  $.get(

    // url
    'https://www.googleapis.com/youtube/v3/search',

    // options
    { 
      part: 'snippet',
      type: 'video',
      videoEmbeddable: true,
      key: options.key, 
      q: options.query, 
      maxResults: options.max 
      
    },


  ).done(function(data){
      // success
      console.log("GET Success data",data);
      console.log("Data.items",data.items);
      callback(data.items);

  }).fail(function(error){
      // fail
      console.log("GET error")
      return error;
  });

};

window.searchYouTube = searchYouTube;
