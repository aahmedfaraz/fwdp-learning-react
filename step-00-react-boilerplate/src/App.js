import React from 'react';
import './App.css';

function App () {
    return (
        <>
            <div className='container'>
                <h1>Learning React</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, esse.</p>
            </div>
            <WithoutJSX />
        </>
    )
}

export function WithoutJSX() {
    return (
        React.createElement('div', { className: 'container' }, [
            React.createElement('h1', null, 'Learning React without JSX'),
            React.createElement('p', { id: 'my-para' }, 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, esse.'),
        ])
    )
}

export default App;