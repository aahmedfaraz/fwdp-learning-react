import React, { useState, useEffect } from 'react';

const Counter = ({ appNo, start, incrementAmount }) => {
    // useState Hooks
    const [ counter, setCounter ] = useState(start);

    // useEffect Hooks in place of lifecycle methods
    useEffect(() => {
        console.log(`The Counter App ${appNo} is mounted.`);

        return () => {
            console.log(`The Counter App ${appNo} is unmounted.`);
        }
    }, [])

    useEffect(() => {
        console.log(`The Counter App ${appNo} is updated.`);
    }, [counter])

    // Methods
    const increment = () => {
        setCounter(counter + incrementAmount)
    }
    const decrement = () => {
        setCounter(counter - incrementAmount)
    }

    return (
        <div className='counter'>
            <h4>Counter App No. {appNo}</h4>
            <h1>{counter}</h1>
            <div>
                <button onClick={increment}><i className="fa-solid fa-plus"></i></button>
                <button onClick={decrement}><i className="fa-solid fa-minus"></i></button>
            </div>
        </div>
    )
}

// class Counter extends Component {
//     // Constructor
//     constructor(props) {
//         super(props);
//         this.state = {
//             counter: this.props.start,
//         }
//     }

//     // Methods
//     increment = () => {
//         this.setState({
//             ...this.state,
//             counter: this.state.counter + this.props.incrementAmount
//         })
//     }
//     decrement = () => {
//         this.setState({
//             ...this.state,
//             counter: this.state.counter - this.props.incrementAmount
//         })
//     }

//     // Lifecycle Methods
//     componentDidMount() {
//         console.log(`The Counter App ${this.props.appNo} is mounted.`);
//     }
//     componentDidUpdate() {
//         console.log(`The Counter App ${this.props.appNo} is updated.`);
//     }
//     componentWillUnmount() {
//         console.log(`The Counter App ${this.props.appNo} is unmounted.`);
//     }

//     // Rendering
//     render() {
//         return (
//             <div className='counter'>
//                 <h4>Counter App No. {this.props.appNo}</h4>
//                 <h1>{this.state.counter}</h1>
//                 <div>
//                     <button onClick={this.increment}><i className="fa-solid fa-plus"></i></button>
//                     <button onClick={this.decrement}><i className="fa-solid fa-minus"></i></button>
//                 </div>
//             </div>
//         )
//     }
// }

export default Counter;