var movies = [
  {
    id: '1',
    title: 'Harry Potter',
    desc: 'Film o czarodzieju',
    poster: 'img/harry.jpg'
  },
  {
    id: '2',
    title: 'Król lew',
    desc: 'Film o lwie',
    poster: 'img/lew.jpg'
  },
  {
    id: '3',
    title: 'Kasyno',
    desc: 'Film o gangsterach',
    poster: 'img/kasyno.jpg'
  },
  {
    id: '4',
    title: 'Śmierć w Wenecji',
    desc: 'Film o facecie w lódce',
    poster: 'img/wenecja.jpg'
  }
];

var Image = React.createClass({
  propTypes: {
    poster: React.PropTypes.string.isRequired
  },
  render: function() {
    return React.createElement('img', {src: this.props.poster});
  }
});

var Description = React.createClass({
  propTypes: {
    description: React.PropTypes.string.isRequired
  },
  render: function() {
    return React.createElement('p', {}, this.props.description);
  }
});

var Title = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired
  },
  render: function() {
    return React.createElement('h2', {}, this.props.title);
  }
});

var Movie = React.createClass({
  propTypes: {
    movie: React.PropTypes.object.isRequired
  },
  render: function() {
    return (
      React.createElement('li', {},
        React.createElement(Title,       {title: this.props.movie.title}),
        React.createElement(Description, {description: this.props.movie.desc}),
        React.createElement(Image,       {poster: this.props.movie.poster})
      )
    );
  }
});

var moviesElements = movies.map(function(movie) {
  return React.createElement(Movie, {movie: movie, key: movie.id});
});

var element = React.createElement( 'div', {},
                React.createElement('h1', {}, 'Lista filmów'),
                React.createElement('ul', {}, moviesElements)
              );

ReactDOM.render(element, document.getElementById('app'));
