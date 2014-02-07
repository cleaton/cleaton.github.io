/** @jsx React.DOM */



var ProjectList = React.createClass({displayName: 'ProjectList',
    render: function () {
    
        var projectNodes = this.props.data.map(function (project, i) {
            return Project( {key:i, imgurl:project.imgurl, name:project.name, technologies:project.technologies, description:project.description});
    });

    return (
      React.DOM.div( {className:"projectlist"}, 
        projectNodes
      )
    );
  }
});

var HeadlineList = React.createClass({displayName: 'HeadlineList',
  render: function() {
    
    var headlineNodes = this.props.data.map(function (data, i) {
      return (
          
        React.DOM.div( {key:i, className:"headlinegroup"},  
          React.DOM.div( {className:"limiter"}, 
            React.DOM.div( {className:"ui ribbon purple huge inverted label headline"},  data.headline)
                  ),  
          ProjectList( {data:data.projects} )

          )
        );
      
    });
    
    
    return (
      React.DOM.div( {className:"left"}, 
          headlineNodes
      )
    );
  }
});





var Project = React.createClass({displayName: 'Project',
  render: function() {
    return (
        React.DOM.div( {className:"project"}, 
            React.DOM.div( {className:"limiter"}, 
                React.DOM.div( {className:(this.props.key != 0) ? 'ui divider' : ''}),
                React.DOM.div( {className:"ui two column stackable grid"}, 
                    React.DOM.div( {className:"equal height row"}, 
                        React.DOM.div( {className:"column"}, 
                            React.DOM.div( {className:"center aligned row imageContainer"}, 
                            React.DOM.h4( {className:"ui block header"}, 
                                this.props.name
                            ),
                            React.DOM.img( {className:"rounded ui large image", src:this.props.imgurl} )
                            )
                                ),
                        React.DOM.div( {className:"column descriptionbox"}, 
                            React.DOM.div( {className:"ui basic segment description"} , 
                                React.DOM.p(null, React.DOM.b(null, "technologies : " ), this.props.technologies),
                                React.DOM.p(null, this.props.description)
                            )
                        )
                    )
                )
            )
        )
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


function showPortfolio() {
    React.renderComponent(
  HeadlineList( {data:data}),
  document.getElementById('left'));
};



$(document)
  .ready(function() {

    $('.site.menu .item')
      .tab();
        React.renderComponent(
  HeadlineList( {data:data}),
  document.getElementById('left'));
  })
;