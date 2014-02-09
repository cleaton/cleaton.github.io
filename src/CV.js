/** @jsx React.DOM */



var ProjectList = React.createClass({
    render: function () {
    
        var projectNodes = this.props.data.map(function (project, i) {
            return <Project key={i} imgurl={project.imgurl} name={project.name} technologies={project.technologies} description={project.description}></Project>;
    });

    return (
      <div className="projectlist">
        {projectNodes}
      </div>
    );
  }
});

var HeadlineList = React.createClass({
  render: function() {
    
    var headlineNodes = this.props.data.map(function (data, i) {
      return (
          
        <div key={i} className="headlinegroup"> 
          <div className="limiter">
            <div className="ui ribbon purple huge inverted label headline"> {data.headline}</div>
                  </div>  
          <ProjectList data={data.projects} />

          </div>
        );
      
    });
    
    
    return (
      <div className="left">
          {headlineNodes}
      </div>
    );
  }
});





var Project = React.createClass({
  render: function() {
    return (
        <div className="project">
            <div className="limiter">
                <div className={(this.props.key != 0) ? 'ui divider' : ''}></div>
                <div className="ui two column stackable grid">
                    <div className="equal height row">
                        <div className="column">
                            <div className="center aligned row imageContainer">
                            <h4 className="ui block header">
                                {this.props.name}
                            </h4>
                            <img className="rounded ui large image" src={this.props.imgurl} />
                            </div>
                                </div>
                        <div className="column descriptionbox">
                            <div className="ui basic segment description" >
                                <p><b>technologies : </b> {this.props.technologies}</p>
                                <p>{this.props.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
});


//var data = [
//  {headline: "projects", projects: [{name: "Friday", technologies: "test new thisng small word in long list", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dui dolor, posuere at tempor fringilla, eleifend a nunc. Maecenas nec nisi elementum, iaculis nisl id, mattis sem. Nulla facilisi. Phasellus semper varius pharetra. Proin lobortis sit amet eros pulvinar porta. In id gravida nulla. Fusce sagittis nisi dui, sed ultricies orci pretium eu. Morbi faucibus dignissim pharetra. Quisque pretium blandit."},
//  {name: "Why not quiz", technologies: "test new thisng small word in long list", description: "this is a small description about the project"}]},
//  {headline: "projects", projects: [{name: "Friday", technologies: "test new thisng small word in long list", description: "this is a small description about the project"},
//  {name: "Why not quiz", technologies: "test new thisng small word in long list", description: "this is a small description about the project"}]}
//];

//var json = require('projects.json');
//consol.log(json)


function loadPortfolio() {
    React.renderComponent(
  <HeadlineList data={data}/>,
  document.getElementById('left'));
};

$(document)
  .ready(function() {

    $('.site.menu .item')
      .tab();
      loadPortfolio();
  });