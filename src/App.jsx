import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
// import Navbar from "./COMPONENTS/Navbar";
// import Main from "./COMPONENTS/Main";
// import Sidebar1 from "./COMPONENTS/Sidebar1";
// import Sidebar2 from "./COMPONENTS/Sidebar2";
// import Footer from "./COMPONENTS/Footer";
//  const App=()=>{
//     return (
//         <div className="app">
//             <Navbar/>
//             <Main></Main>
//             <div className="sidebar">
//                 <Sidebar1/>
//                 <Sidebar2/>
//             </div>
//             <Footer/>

//         </div>
//     )
//  }
//  export default App;
// import React,{COMPONENTS} from 'react';
// import CBCPropsex1 from './COMPONENTS/propsexample/CBCPropsex1';

// class App extends COMPONENTS{
//     render (){
//         return (
//             <div>App
//                 <hr/>

//                 <CBCPropsex1
//                 usernamw="Sam"
//                 age={25}
//                 userDetails={{city:"Hyderabad", area:"Gandimaisamma"}}
//                 design={["developer", "tester"]}
//                 sendFun={function(){alert("hi im from parent Component")}}/>
//             </div>
//         )
//     }
// }
// export default App;

// import React from 'react'
// import FBCPropsex1 from './propsexample/FBCPropsex1'

// const App=() => {
//     <div>
//         app
//         {/* <FBCPropsex1
//         useraname="Prasoon"
//         isLoggedIn= {false}
//         hobbies={["WTACHING SERIES", "PALYING","GITTIN GYM"]}/> */}
//     </div>
// }
// export default App;

// import React from 'react'
// import PropsChildrenEx from './propsexample/PropsChildrenEx'
// import ChildProps from './propsexample/ChildProps';

// const App = () =>{
//     return (
//         <div>
//             <PropsChildrenEx username="prasoon" comapny="Entech">
//                 <h1>This data is passed as props children</h1>
//                 <ChildProps/>
//             </PropsChildrenEx>
//         </div>
//     )
// }
// export default App


// import React from 'react'
// import Child1 from './propsexample/Child1'

// const App = () => {
//   return (
//     <div className='app'> App
//     <hr/>
//     <Child1 university="MRU"/>
      
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import CBCStateEx from './stateexamples.jsx/CBCStateEx';
// const App = () => {
//   return (
//     <div>
//       <CBCStateEx/>
//     </div>
//   )
// }

// export default App
import React from 'react'
import FBCStateEx from './stateexamples.jsx/FBCStateEx';

const App = () => {
  return (
    <div>
      <FBCStateEx/>
    </div>
  )
}

export default App


