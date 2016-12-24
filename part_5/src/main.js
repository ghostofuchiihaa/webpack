const React = require('react');
const ReactDOM = require('react-dom');
require('./style.scss');

class Message extends React.Component {

    render() {
        return(
          <div>
              <h1>{this.props.title}</h1>
              <p>{this.props.message}</p>
          </div>
        );
    }

}

ReactDOM.render(<Message title="Swapnil Singh" message="Getting a new macOS Seirra" />,
    document.getElementById('react-container'));