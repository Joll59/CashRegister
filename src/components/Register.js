import React, {Component} from 'react';
import '../App.css';

class Register extends Component {
    constructor() {
        super()
        this.twenties = 0
        this.tens = 0
        this.fives = 0
        this.twos = 0
        this.ones = 0

        this.state = {
            cashValues: false,
            cashOutput: false,
            // changeInput: false,
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

/* display matters */

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
            // case "Get Change":
            //     this.setState({
            //         changeInput: !this.state.changeInput
            //     });
            //     break;
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
            this.denominations(this.state.request)
        }
    }

    handleOneDollar(number){
      number -= this.ones
      this.setState({
        request: this.state.request - (this.ones + this.twos*2 + this.fives*5 + this.tens*10 + this.twenties*20),
        register_content: Object.assign({}, this.state.register_content, {
              twenty: this.state.register_content.twenty - this.twenties,
              ten: this.state.register_content.ten - this.tens,
              five: this.state.register_content.five - this.fives,
              two: this.state.register_content.two - this.twos,
              one: this.state.register_content.one - this.ones
          })})
    }
    handleTwoDollar(){
      this.setState({
        request: this.state.request - (this.twos*2 + this.fives*5 + this.tens*10 + this.twenties*20),
        register_content: Object.assign({}, this.state.register_content, {
              twenty: this.state.register_content.twenty - this.twenties,
              ten: this.state.register_content.ten - this.tens,
              five: this.state.register_content.five - this.fives,
              two: this.state.register_content.two - this.twos
          })})
    }
    handleFiveDollar(){
      this.setState({
        request: this.state.request - (this.fives*5 + this.tens*10 + this.twenties*20),
        register_content: Object.assign({}, this.state.register_content, {
              twenty: this.state.register_content.twenty - this.twenties,
              ten: this.state.register_content.ten - this.tens,
              five: this.state.register_content.five - this.fives
          })})
    }
    handleTenDollar(){
      this.setState({
        request: this.state.request - (this.tens*10 + this.twenties*20),
        register_content: Object.assign({}, this.state.register_content, {
              twenty: this.state.register_content.twenty - this.twenties,
              ten: this.state.register_content.ten - this.tens
          })})
    }
    handleTwentyDollar(){
      this.setState({
          request: this.state.request - this.twenties*20,
          register_content: Object.assign({}, this.state.register_content, {
              twenty: this.state.register_content.twenty - this.twenties
          })
      })
    }

    denominations(number) {
        let required_twenties = parseInt(number / 20, 10)
        if (required_twenties >= this.state.register_content.twenty) {
            this.twenties = this.state.register_content.twenty
            number -= this.twenties * 20;
          let required_tens = parseInt(number / 10, 10)
            if (number !== 0 && required_tens >= this.state.register_content.ten) {
                this.tens = this.state.register_content.ten
                number -= this.tens * 10
              let required_fives = parseInt(number / 5, 10)
                if (number !== 0 && required_fives >= this.state.register_content.five) {
                    this.fives = this.state.register_content.five
                    number -= this.fives * 5
                  let required_twos = parseInt(number / 2, 10)
                    if (number !== 0 && required_twos >= this.state.register_content.two) {
                        this.twos = this.state.register_content.two
                        number -= this.twos * 2
                        if (number !== 0 && number >= this.state.register_content.one) {
                            this.ones = this.state.register_content.one
                            this.handleOneDollar()
                        }else if (number !== 0 && number < this.state.register_content.one) {
                              this.ones = number
                              this.handleOneDollar()
                        }else{
                          this.handleTwoDollar()
                        }
                    }else if (number !== 0 && required_twos < this.state.register_content.two) {
                        this.twos = required_twos
                        number -= this.twos * 2
                        this.handleTwoDollar()
                    }else {
                      this.handleFiveDollar()
                    }
                }else if (number !== 0 && required_fives < this.state.register_content.five) {
                    this.fives = required_fives
                    number -= this.fives * 5
                    this.handleFiveDollar()
                }else {
                    this.handleTenDollar()
                }
            }else if (number !== 0 && required_tens < this.state.register_content.ten) {
                this.tens = required_tens
                number -= this.tens * 10
                this.handleTenDollar()
            }else {
              this.handleTwentyDollar()
            }
        }else if (number !== 0 && required_twenties < this.state.register_content.twenty) {
            this.twenties = required_twenties
            number -= this.twenties * 20;
            this.handleTwentyDollar()
        }

    }

    //   if (number - 20 >= 0 && this.state.register_content.twenty > 0){
    //     this.setState({request:this.state.request - 20,register_content: Object.assign({}, this.state.register_content, {twenty: this.state.register_content.twenty - 1,})
    //   })
    //   }
    //    else if (number - 10 >= 0 && this.state.register_content.ten > 0){
    //             this.setState({request:this.state.request - 10,register_content: Object.assign({}, this.state.register_content, {ten: this.state.register_content.ten - 1,})
    //     })
    //   }
    //  else if (number - 5 >= 0 && this.state.register_content.five > 0){
    //             this.setState({request:this.state.request - 5,register_content: Object.assign({}, this.state.register_content, {five: this.state.register_content.five - 1,})
    //     })
    //   }
    //  else if (number - 2 >= 0 && this.state.register_content.two > 0){
    //             this.setState({request:this.state.request - 2,register_content: Object.assign({}, this.state.register_content, {two: this.state.register_content.two - 1,})
    //     })
    //   }
    //
    //    else if (number - 1 >= 0 && this.state.register_content.one > 0){
    //             this.setState({request:this.state.request - 1,register_content: Object.assign({}, this.state.register_content, {one: this.state.register_content.one - 1,})
    //     })
    //   }
    //   if (this.state.request > 0){
    //     debugger
    //   this.denominations(this.state.request)}

    render() {
        return (
            <div className="center">
              <h2>!Cash Register!</h2>
              <p>Total in register: ${this.total_in_regsiter()}</p>
              <p> Current available denominations: </p>
              <div className="dt center mw7">
                <p className="pa3 ph4-l dtc">20 X {this.state.register_content.twenty}</p>
                <p className="pa3 ph4-l dtc">10 X {this.state.register_content.ten}</p>
                <p className="pa3 ph4-l dtc">5  X {this.state.register_content.five}</p>
                <p className="pa3 ph4-l dtc">2  X {this.state.register_content.two}</p>
                <p className="pa3 ph4-l dtc">1  X {this.state.register_content.one}</p>
              </div>

              <div className="App-header">
                <div>
                  <button onClick={this.show}>Add Cash</button>
                  {this.state.cashValues
                    ? <CashValue add_value={this.add_value} subtract_value={this.subtract_value}/>
                  : null}</div>
                <div>
                  <button onClick={this.show}>Get Change</button>
                  {this.state.cashOutput
                    ? <CashOutput remove_value={this.remove_value} handleChange={this.handleChange} request={this.state.request}/>
                  : null}
                  {this.state.request > this.total_in_regsiter()
                    ? <Failure/>
                  : null}
                </div>
                {/* <div>
                  <button onClick={this.show}>Get Change</button>
                  {this.state.changeInput
                    ? <ChangeInput/>
                  : null}
                </div> */}
              </div>
            </div>
        );
    }
}

class CashValue extends Component {
    render() {
        return (
            <div  className="dt center mw7">
              <div className="pa3 ph4-l dtc">
                <button className="bg-green" onClick={this.props.add_value}>+</button>
                20
                <button className="bg-red" onClick={this.props.subtract_value}>-</button>
              </div>
              <div className="pa3 ph4-l dtc">
                <button className="bg-green" onClick={this.props.add_value}>+</button>
                10
                <button className="bg-red" onClick={this.props.subtract_value}>-</button>
              </div>
              <div className="pa3 ph4-l dtc">
                <button className="bg-green" onClick={this.props.add_value}>+</button>
                5
                <button className="bg-red" onClick={this.props.subtract_value}>-</button>
              </div>
              <div className="pa3 ph4-l dtc">
                <button className="bg-green" onClick={this.props.add_value}>+</button>
                2
                <button className="bg-red" onClick={this.props.subtract_value}>-</button>
              </div>
              <div className="pa3 ph4-l dtc">
                <button className="bg-green" onClick={this.props.add_value}>+</button>
                1
                <button className="bg-red" onClick={this.props.subtract_value}>-</button>
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
                    <input type="number" min="1" step="1" onChange={this.props.handleChange} value={this.props.request}/>
                    <input type="submit"/>
                </form>
            </div>
        );
    }
};
CashOutput.propTypes = {
    remove_value: React.PropTypes.func,
    handleChange: React.PropTypes.func
};

// class ChangeInput extends Component {
//     render() {
//         return (
//             <div>
//                 <form onSubmit>
//                     <input type="number"/>
//                     <input type="submit"/>
//                 </form>
//             </div>
//         );
//     }
// };

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
