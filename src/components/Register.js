import React, {Component} from 'react';
import _ from 'lodash';
import '../App.css';

class Register extends Component {
    constructor() {
        super()
        this.twenties = 0
        this.tens = 0
        this.fives = 0
        this.twos = 0
        this.ones = 0
        this.pocket = {}
        this.state = {
            cashValues: false,
            cashOutput: false,
            request: 0,
            register_content: {
                twenty: 0,
                ten: 0,
                five: 0,
                two: 0,
                one: 0
            }
        }
        this.show = this.show.bind(this)
        this.add_value = this.add_value.bind(this)
        this.subtract_value = this.subtract_value.bind(this)
        this.remove_value = this.remove_value.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    total_in_regsiter() {
        return (this.state.register_content.twenty * 20) + (this.state.register_content.ten * 10) + (this.state.register_content.five * 5) + (this.state.register_content.two * 2) + (this.state.register_content.one * 1)
    }

    show(event) {
        var clicked_button = event.target.innerText
        switch (clicked_button) {
            case "Add Cash":
                this.setState({
                    cashValues: !this.state.cashValues
                });
                break;
            case "Get Change":
                this.setState({
                    cashOutput: !this.state.cashOutput
                });
                break;
            default:
                return this.state;
        }
    }
    handleChange(event) {
        this.setState({request: event.target.value})
    }

    add_value(event) {
        var value = event.target.parentElement.innerText
        switch (value) {
            case "+20-":
                this.setState({register_content: Object.assign({}, this.state.register_content, {
                        twenty: this.state.register_content.twenty + 1
                    })});
                break;
            case "+10-":
                this.setState({register_content: Object.assign({}, this.state.register_content, {
                        ten: this.state.register_content.ten + 1
                    })});
                break;
            case "+5-":
                this.setState({register_content: Object.assign({}, this.state.register_content, {
                        five: this.state.register_content.five + 1
                    })});
                break;
            case "+2-":
                this.setState({register_content: Object.assign({}, this.state.register_content, {
                        two: this.state.register_content.two + 1
                    })});
                break;
            case "+1-":
                this.setState({register_content: Object.assign({}, this.state.register_content, {
                        one: this.state.register_content.one + 1
                    })});
                break;
            default:
                return this.state;
        }
    }
    subtract_value(event) {
        var value = event.target.parentElement.innerText
        if (this.total_in_regsiter() > 0) {
            switch (value) {
                case "+20-":
                if(this.state.register_content.twenty>0){
                    this.setState({register_content: Object.assign({}, this.state.register_content, {
                            twenty: this.state.register_content.twenty - 1})})
                          }
                    break;
                case "+10-":
                if(this.state.register_content.ten>0){
                    this.setState({register_content: Object.assign({}, this.state.register_content, {
                            ten: this.state.register_content.ten - 1
                        })});}
                    break;
                case "+5-":
                if(this.state.register_content.five>0){
                    this.setState({register_content: Object.assign({}, this.state.register_content, {
                            five: this.state.register_content.five - 1
                        })});}
                    break;
                case "+2-":
                if(this.state.register_content.two>0){
                    this.setState({register_content: Object.assign({}, this.state.register_content, {
                            two: this.state.register_content.two - 1
                        })});}
                    break;
                case "+1-":
                if(this.state.register_content.one>0){
                    this.setState({register_content: Object.assign({}, this.state.register_content, {
                            one: this.state.register_content.one - 1
                        })});}
                    break;
                default:
                    return this.state;
            }
        }
    }
    remove_value(event) {
        event.preventDefault()
        if (this.state.request > this.total_in_regsiter()) {
            alert("Transaction Error, Please try again!")
        } else {
            this.pocket = _.extend({}, this.state.register_content);
            this.pocket.request = this.state.request
            this.comparison(this.pocket.request)
        }
    }

    comparison(number){
    let remainder= 0
    switch (true){
      case (number/20>=1 && this.pocket.twenty>0):
        let twenty = Math.floor(number/20)
         remainder = number % 20
        if (this.pocket.twenty >= twenty){
          if (remainder){
            this.pocket.twenty -= twenty
            this.pocket.request -= (twenty * 20)
            this.comparison(remainder)
          }
        else {
            this.setState({
                request: this.pocket.request - (twenty * 20),
                register_content: Object.assign({},this.pocket, {
                    twenty: this.state.register_content.twenty - twenty
                }) })
          }
        }
        else if(this.pocket.twenty < twenty){
          let value = twenty - this.pocket.twenty
          this.pocket.request -=(this.pocket.twenty*20)
          this.pocket.twenty = 0;
          this.comparison(remainder + ((value)* 20))
        }

        else{
          remainder+=20
          this.comparison(remainder)
      }
      break;
      case (number/10>=1 && this.state.register_content.ten>0):
        let ten = Math.floor(number/10)
         remainder = number % 10
         if (this.state.register_content.ten >= ten){
           if (remainder){
             this.pocket.ten -= ten
             this.pocket.request -= (ten * 10)
             this.comparison(remainder)
           }
           else {
             this.setState({
                 request: this.pocket.request - (ten * 10),
                 register_content: Object.assign({}, this.pocket, {
                     ten: this.state.register_content.ten - ten
                 })
             })
           }
        }
        else if(this.pocket.ten < ten){
          let value = ten - this.pocket.ten
          this.pocket.request -=(this.pocket.ten*10)
          this.pocket.ten = 0;
          this.comparison(remainder + ((value)* 10))
        }

        else {
          remainder+=10
          this.comparison(remainder)
      }
      break;
      case (number/5>=1 && this.state.register_content.five>0):
        let five = Math.floor(number/5)
         remainder = number% 5
         if (this.state.register_content.five >= five){
           if (remainder){
             this.pocket.five -= five
             this.pocket.request -= (five * 5)
             this.comparison(remainder)
           } else {
             this.setState({
                 request: this.pocket.request - (five * 5),
                 register_content: Object.assign({}, this.pocket, {
                     five: this.state.register_content.five - five
                 })
             })
           }
        }
        else if(this.pocket.five < five){
          let value = five - this.pocket.five
          this.pocket.request -=(this.pocket.five*5)
          this.pocket.five = 0;
          this.comparison(remainder + ((value)* 5))
        }

        else {
          remainder+=5
          this.comparison(remainder)
      }
      break;
      case (number/2>=1 && this.state.register_content.two>0):
        let two = Math.floor(number/2)
         remainder = number% 2
         if (this.state.register_content.two >= two){
           if (remainder){
             this.pocket.two -= two
             this.pocket.request -= (two * 2)
             this.comparison(remainder)
           } else {
             this.setState({
                 request: this.pocket.request - (two * 2),
                 register_content: Object.assign({}, this.pocket, {
                     two: this.state.register_content.two - two
                 })
             })
           }
        }    else if(this.pocket.two < two){
              let value = two - this.pocket.two
              this.pocket.request -=(this.pocket.two*2)
              this.pocket.two = 0;
              this.comparison(remainder + ((value)* 2))
            }else {
          remainder +=2
          this.comparison(remainder)
      }
      break;

      case (number> 0 && this.state.register_content.one>0):
        if (this.state.register_content.one >= number){
          this.setState({
              request: this.pocket.request - (number),
              register_content: Object.assign({}, this.pocket, {
                  one: this.state.register_content.one - number
              })
          })
      }
      break;
      default:
      alert ("Transaction not possible!!")
      }
    }


    render() {
        return (
            <div className="center mw7">
              <div className="bg-black-90">
                <h2 className="white-90">!Cash Register!</h2>
                <p className="white-90">Total in register: ${this.total_in_regsiter()}</p>
                <p className="white-90" > Current available denominations: </p>
              </div>
              <div className="di center mw7 bg-white-70">
                <p className="pa3 ph4-l dtc">20 x {this.state.register_content.twenty}</p>
                <p className="pa3 ph4-l dtc">10 x {this.state.register_content.ten}</p>
                <p className="pa3 ph4-l dtc">5  x {this.state.register_content.five}</p>
                <p className="pa3 ph4-l dtc">2  x {this.state.register_content.two}</p>
                <p className="pa3 ph4-l dtc">1  x {this.state.register_content.one}</p>
              </div>

              <div className="App-header">
                <div>
                  <button onClick={this.show} className="ui positive button">Add Cash</button>
                  {this.state.cashValues
                    ? <CashValue add_value={this.add_value} subtract_value={this.subtract_value}/>
                  : null}</div>
                <div>
                  <button onClick={this.show} className="ui negative button">Get Change</button>
                  {this.state.cashOutput
                    ? <CashOutput remove_value={this.remove_value} handleChange={this.handleChange} request={this.state.request}/>
                  : null}
                  {this.state.request > this.total_in_regsiter()
                    ? <Failure/>
                  : null}
                </div>
              </div>
            </div>
        );
    }
}

class CashValue extends Component {
    render() {
        return (
            <div  className="dt center mw7 bg-white-70">
              <div className="pa3 ph4-l dtc">
                <button className="ui circular positive icon button" onClick={this.props.add_value}>+</button>
                20
                <button className="ui circular negative icon button" onClick={this.props.subtract_value}>-</button>
              </div>
              <div className="pa3 ph4-l dtc">
                <button className="ui circular positive icon button" onClick={this.props.add_value}>+</button>
                10
                <button className="ui circular negative icon button" onClick={this.props.subtract_value}>-</button>
              </div>
              <div className="pa3 ph4-l dtc">
                <button className="ui circular positive icon button" onClick={this.props.add_value}>+</button>
                5
                <button className="ui circular negative icon button" onClick={this.props.subtract_value}>-</button>
              </div>
              <div className="pa3 ph4-l dtc">
                <button className="ui circular positive icon button" onClick={this.props.add_value}>+</button>
                2
                <button className="ui circular negative icon button" onClick={this.props.subtract_value}>-</button>
              </div>
              <div className="pa3 ph4-l dtc">
                <button className="ui circular positive icon button" onClick={this.props.add_value}>+</button>
                1
                <button className="ui circular negative icon button" onClick={this.props.subtract_value}>-</button>
                </div>
            </div>
        );
    }
};
CashValue.propTypes = {
    add_value: React.PropTypes.func,
    subtract_value: React.PropTypes.func
};

class CashOutput extends Component {
    render() {
        return (
            <div>
              <form onSubmit={this.props.remove_value}>
                <input type="number" min="1" step="1" onChange={this.props.handleChange} value={this.props.request} className="ui form"/>
                <input type="submit" className="ui button"/>
                </form>
            </div>
        );
    }
};
CashOutput.propTypes = {
    remove_value: React.PropTypes.func,
    handleChange: React.PropTypes.func
};

class Failure extends Component {
    render() {
        return (
            <div>
              Transaction NOT possible not enough cash in Register
            </div>
        )
    }
}

export default Register;
