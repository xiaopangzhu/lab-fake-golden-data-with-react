const App = React.createClass({
  getInitialState: function () {
    return {
      inputs: []
    };
  },

  getDefaultProps: function () {
    return {
      inputs: []
    };
  },

  render: function () {

    let inputs;
    if (this.props.inputs !== []) {
      inputs = this.props.inputs;
      // this.props.inputs = [];
    }
    else {
      inputs = [];
    }
    this.setState({inputs:inputs});

    inputs = this.state.inputs;
    // const inputs = this.state.inputs;
    const inputText = inputs.map((input, index) => {
      if (input === 1) {
        return (
          <div className="text">
            <input type="text" className="form-control"/><span className="glyphicon glyphicon-remove"
                                                               onClick={this.handleClick.bind(this, index)}></span>
          </div>
        );
      } else {
        return (
          <div className="text">
            <input type="date" className="form-control"/><span className="glyphicon glyphicon-remove"
                                                               onClick={this.handleClick.bind(this, index)}></span>
          </div>
        );
      }
    })


    const left = <div className="left">
      {inputText}
    </div>;

    const right =
      <div className="right">
        <div className="sellect">
          <input ref="text" type="radio" name="inputType"/><span>文本输入框</span><br/>
          <input ref="date" type="radio" name="inputType"/><span>日期</span>
        </div>
        <button className="btn btn-info" onClick={this.add}>添加</button>
      </div>

    return (
      <div className="wrap">
        <div className="header">
          <button className="btn btn-info" onClick={this.preview}>预览</button>
        </div>
        {left}
        {right}
      </div>
    );
  },

  handleClick: function (i) {
    this.state.inputs.splice(i, 1);
    this.setState({inputs: this.state.inputs});
  },

  add: function () {
    let isChecked = this.refs.text.checked;
    if (isChecked) {
      this.state.inputs.push(1);
    }
    isChecked = this.refs.date.checked;
    if (isChecked) {
      this.state.inputs.push(0);
    }
    this.setState({inputs: this.state.inputs});
  },

  preview: function () {
    ReactDOM.render(<Edit inputs={this.state.inputs}/>, document.body)
  }
})

const Edit = React.createClass({
  render: function () {
    const inputs = this.props.inputs;
    const inputText = inputs.map(input => {
      if (input === 1) {
        return (
          <div className="text">
            <input type="text" className="form-control"/>
          </div>
        );
      } else {
        return (
          <div className="text">
            <input type="date" className="form-control"/>
          </div>
        );
      }
    })

    return (
      <div className="wrap">
        <div className="header">
          <button className="btn btn-info" onClick={this.reEdit}>重新编辑</button>
        </div>
        <div className="middle">
          {inputText}
        </div>
        <div className="footer">
          <button className="btn btn-info">提交</button>
        </div>
      </div>
    )
  },

  reEdit: function () {
    ReactDOM.render(<App inputs={this.props.inputs}/>, document.body);
  }
})

{/*ReactDOM.render(<Edit inputs={[1,0,1,0]}/>,document.body)*/
}

ReactDOM.render(<App />, document.body)