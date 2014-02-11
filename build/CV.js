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
          React.DOM.div( {className:"ui vertically divided grid"}, 
          ProjectList( {data:data.projects} )
          )

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


//<div className={(this.props.key != 0) ? 'ui divider' : ''}></div>


var Project = React.createClass({displayName: 'Project',
  render: function() {
    return (
        React.DOM.div( {className:"project"}, 
            React.DOM.div( {className:"limiter"}, 
                
                    React.DOM.div( {className:"column"},                         
                    React.DOM.h2( {className:"ui dividing header projectheader"}, 
                     this.props.name
                    ),
                    React.DOM.div( {className:"ui stackable grid"}, 

                        React.DOM.div( {className:"six wide column"}, 
                            React.DOM.div( {className:"ui basic segment"}, 
                                React.DOM.img( {className:"rounded ui image", src:this.props.imgurl} )
                            )
                        ),
                        React.DOM.div( {className:"ten wide column descriptionbox"}, 
                            React.DOM.div( {className:"ui segment description"} , 
                                React.DOM.h5( {className:"ui dividing header"}, "Technologies"),
                                React.DOM.p(null, this.props.technologies),
                                React.DOM.h5( {className:"ui dividing header"}, "Description"),
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


function loadPortfolio() {
    React.renderComponent(
  HeadlineList( {data:data}),
  document.getElementById('left'));
};

$(document)
  .ready(function() {

    $('.site.menu .item')
      .tab();
      loadPortfolio();
  });