import React, {Component} from 'react';
import './App.css';


function Boxes(props) {

    return <div style={{width: props.width, height: 100, backgroundColor: 'powderblue'}}>index {props.index}</div>;
}


class App extends Component {
    state = {
        amount: null,
        value: "",
        boxes: []


    };

    handleSubmit = () => {
        const {amount, boxes} = this.state;
        let boxObj = [];
        this.setState({amount: this.state.value});

        let index = 1;
        while (index <= amount) {
            let substraction = 200 - 10 * index;
            boxObj.push({
                id: index,
                width: substraction
            });
            index++;
        }
        this.setState({
            boxes: [
                ...boxObj
            ]
        });
        boxes.map((i) => console.log(i.width));
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
                    boxes.map((i) => <Boxes

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

