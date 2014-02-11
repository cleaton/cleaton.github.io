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
          <div className="ui vertically divided grid">
          <ProjectList data={data.projects} />
          </div>

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


//<div className={(this.props.key != 0) ? 'ui divider' : ''}></div>


var Project = React.createClass({
  render: function() {
    return (
        <div className="project">
            <div className="limiter">
                
                    <div className="column">                        
                    <h2 className="ui dividing header projectheader">
                     {this.props.name}
                    </h2>
                    <div className="ui stackable grid">

                        <div className="six wide column">
                            <div className="ui basic segment">
                                <img className="rounded ui image" src={this.props.imgurl} />
                            </div>
                        </div>
                        <div className="ten wide column descriptionbox">
                            <div className="ui segment description" >
                                <h5 className="ui dividing header">Technologies</h5>
                                <p>{this.props.technologies}</p>
                                <h5 className="ui dividing header">Description</h5>
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