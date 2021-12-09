import React from 'react';



// 函数组件与 class 组件

function Try(props) {
  return (
    <div>Try, {props.name} </div>
  );
}

// class TryClass extends React.Component {
//     render() {
//         return <h1>Hello, {this.props.name}</h1>;
//     }
// }

export default Try;
