class Square extends React.Component {
    /*
    * Class constructor
    */
    constructor(props){
        super(props);
        this.state = {

        }
    }
    handleClick(e){
        console.log('clicked');
    }
    render(){
        return (
            <button id={this.props.val} ref="square-{this.props.val}" key={this.props.val} onClick={this.handleClick()}> {this.props.val} </button>
        );
    }
}

export default class Board extends React.Component {
    /*
    * Class constructor
    */
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render() {
        // Create Array of Squares from props
        const x = this.props.fields.map(x => 
          <Square 
            id={x.indexOf()}
            val={x[x.indexOf()]}
          />
        );

        // Return Array of Squares as Board
        return(
            <div id='board' ref='board'>
                {x}
            </div>
        );
    }
}
/*
* Default Props
*/
/*
Square.propTypes = {

}
Board.propTypes = {

}
*/
/*
* Default Props
*/

Square.defaultProps = {

}


Board.defaultProps = {
    fields: [' ',' ',' ',' ',' ',' ',' ',' ',' ']
}
