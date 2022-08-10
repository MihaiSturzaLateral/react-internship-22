// import React from 'react';
// import './App.css';
// import LabelValue from './components/LabelValue.js';

// class App extends React.Component{
//   constructor(props){
//     super(props);
//     this.state={
//       label:"Your age...",
//       value:20
//     };
//   }
//   onIncrement=()=>{
//     this.setState({value: this.state.value+1});
//   }
//   onDecrement=()=>{
//     this.setState({value: this.state.value-1});
//   }
//   changeText=(e)=>{
//     this.setState({label: e.target.value});
//   }
//   render(){
//     return(
//       <>
//       <input type="text" value={this.state.label} onChange={this.changeText}></input>
//       <LabelValue label={this.state.label} value={this.state.value}/>
      
//       <div className='twoBtns'>
//         <button  id='btnone' onClick={this.onIncrement}>+</button>
//         <button id='btntwo' onClick={this.onDecrement}>-</button>
//       </div>

//       </>
//     )
//   }
// }
// export default App;

//function component
import React,{useState} from 'react';
import './App.css';
import LabelValue from './components/LabelValue.js';

function App(){
  const [obj,setObj]=useState({label:"Your age...", value:20});
  return(
    <>
          <input type="text" value={obj.label} onChange={(e)=>setObj({...obj,label:e.target.value})}></input>
          <LabelValue label={obj.label} value={obj.value}/>
          
           <div className='twoBtns'>
             <button  id='btnone' onClick={()=>setObj({...obj,value: obj.value+1})}>+</button>
            <button id='btntwo' onClick={()=>setObj({...obj,value:obj.value-1})}>-</button>
           </div>
    
    </>
  );
}
export default App; 

