import React, { useState } from 'react';
import './App.css';
import Navbar from './components/common/Navbar';
import Counter from './components/counter/Counter';

const App = () => {
  // useState Hooks
  const [showCounter01, setShowCounter01] = useState(true);
  const [showCounter02, setShowCounter02] = useState(true);

  // Methods
  const toggleCounter01 = () => { setShowCounter01(!showCounter01) };
  const toggleCounter02 = () => { setShowCounter02(!showCounter02) };

  return (
    <>
      <Navbar />
      <div className='navigation'>
        <button onClick={toggleCounter01}>
          {
            showCounter01 ? "Hide counter app 01" : "Show counter app 01"
          }
        </button>
        <button onClick={toggleCounter02}>
          {
            showCounter02 ? "Hide counter app 02" : "Show counter app 02"
          }
        </button>
      </div>
      <main>
        {
          showCounter01 &&
          <Counter appNo="01" start={10} incrementAmount={5} />
        }
        {
          showCounter02 &&
          <Counter appNo="02" start={5} incrementAmount={10} />
        }
      </main>
    </>
  )
}


// =============================================================================================

// class App extends Component {

//   // Constructor
//   constructor(props) {
//     super(props);
//     this.state = {
//       showCounter01: true,
//       showCounter02: true,
//     }
//   }

//   // Methods
//   toggleCounter01 = () => { this.setState({ ...this.state, showCounter01: !this.state.showCounter01 }) };
//   toggleCounter02 = () => { this.setState({ ...this.state, showCounter02: !this.state.showCounter02 }) };

//   // Rendering
//   render() {
//     return (
//       <>
//         <Navbar />
//         <div className='navigation'>
//           <button onClick={this.toggleCounter01}>
//             {
//               this.state.showCounter01 ? "Hide counter app 01" : "Show counter app 01"
//             }
//           </button>
//           <button onClick={this.toggleCounter02}>
//             {
//               this.state.showCounter02 ? "Hide counter app 02" : "Show counter app 02"
//             }
//           </button>
//         </div>
//         <main>
//           {
//             this.state.showCounter01 &&
//             <Counter appNo="01" start={10} incrementAmount={5} />
//           }
//           {
//             this.state.showCounter02 &&
//             <Counter appNo="02" start={5} incrementAmount={10} />
//           }
//         </main>
//       </>
//     )
//   }
// }

export default App;
