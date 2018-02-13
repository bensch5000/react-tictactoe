var React = require('react');
var ReactDOM = require('react-dom');

import Header from './components/Header';
import Footer from './components/Footer';
import Board from './components/Board';


class TicTacToe extends React.Component {
    render(){
        return( 
            <div>
            <Header 
                title='Tic Tac Toe'
            />
            <Board />
            </div>
        );
    }
}

ReactDOM.render(<TicTacToe />, document.getElementById('app'));