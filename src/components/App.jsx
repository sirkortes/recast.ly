class App extends React.Component{

  constructor(){

    super();
    this.state = {  
                    videos: window.exampleVideoData, 
                    current: window.exampleVideoData[0]
                 }

  };

  changeCurrent(video){
      // console.log("changingCurrent");
      this.setState({ current: video });
  };

  render(){

    // App Style
    var styleApp = { border: '1px solid black' }

    return (
              <div style={styleApp} >
                <Nav />
                <div className="col-md-7">
                  <VideoPlayer video={this.state.current}/>
                </div>
                <div className="col-md-5">
                  <VideoList videos={this.state.videos} clickHandle={this.changeCurrent.bind(this)} />
                </div>
              </div>
            );

    }
  }

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
