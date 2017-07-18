import React, {Component} from 'react';
import './App.css';


function Box(props) {
    return <div style={{width: props.width, height: 100, backgroundColor: 'powderblue'}}>index {props.index}</div>;
}


class App extends Component {
    state = {
        amount: null,
        value: "",
        boxes: []
    };

    handleSubmit = () => {
        const {value} = this.state;
        let boxObj = [];
        for (let i = 1; i <= value; i++) {
            let substraction = 200 - 10 * i;
            boxObj.push({
                id: i,
                width: substraction
            });
        }

        this.setState({
            boxes: [
                ...boxObj
            ]
        });
    };

    handleKeyDown = (e) => {
        this.setState({value: e.target.value})
    };

    render = () => {
        const {boxes} = this.state;
        return (
            <div>
                <input type="text" onKeyUp={this.handleKeyDown} width={20}/>
                <p>
                    {this.state.value}
                </p>
                <input type="submit" value="submit" onClick={this.handleSubmit}/>
                {
                    boxes.map((i) => <Box
                        key={i.id}
                        width={i.width}
                        index={i.id}
                    />)
                }

            </div>

        );
    }
}

export default App;

