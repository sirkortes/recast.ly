class App extends React.Component{


  

  constructor(props) {

    super(props);
    this.state = { videos: exampleVideoData, current: exampleVideoData[0] }
  };

  componentDidMount(data) {

    console.log("props",this.props)

    var options = { key: window.YOUTUBE_API_KEY, query: 'test', max: 5 }
    this.props.searchYouTube( options, this.youtubeVideos.bind(this));

    // this.state = { videos: data, current: data[0] }
  };

  youtubeVideos(data) {
    
    var options = { key: window.YOUTUBE_API_KEY, query: 'test', max: 5 }

    this.setState({ videos: data, current: data[0] })
  }

  changeCurrent(video){
    this.setState({ current: video });
  };

  // form-control
  searchVideos(query){
    var options = { key: window.YOUTUBE_API_KEY, query: query, max: 10 }
    this.props.searchYouTube(options, this.;
  };


  render(){

    // var options = { key: window.YOUTUBE_API_KEY, query: 'test', max: 5 }
    // this.props.search( options, this.youtubeVideos.bind(this));

    console.log("RENDERING WITH STATE:",this.state);

    var styleApp = { border: '1px solid black' }

    return ( <div style={styleApp} >
                <Nav />
                <div className="col-md-7">
                  <VideoPlayer video={this.state.current}/>
                </div>
                <div className="col-md-5">
                  <VideoList videos={this.state.videos} clickHandle={this.changeCurrent.bind(this)} />
                </div>
              </div> );

  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
