import React from 'react';

// 变量声明
// const element = <h1>Hello, world!</h1>;

class TryClass extends React.Component {


    // 点击事件
    deleteRow(name, e) {
        console.log('this is:', name);
    }


    render() {
      return <div>
          <h1>Hello, {this.props.name}</h1>
          <button onClick={(e) => this.deleteRow("xxx",e)}>Delete Row</button>
          <button onClick={this.deleteRow.bind(this)}>Delete Row</button>
      </div>;
    }
  }

export default TryClass;
