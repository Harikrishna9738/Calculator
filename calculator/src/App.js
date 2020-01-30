import React, { Component } from 'react';

import './App.css';



class App extends Component {
  constructor(props){
    let number1;
    let number2;
    let opration;
    super(props);
    
    this.state={
      calculator:this.props.calculator
    }
    // this.insert7 = this.insert7.bind(this);
    // this.insert8 = this.insert8.bind(this);
    // this.insert9 = this.insert9.bind(this);
    // this.insert4 = this.insert4.bind(this);
    // this.insert5 = this.insert5.bind(this);
    // this.insert6 = this.insert6.bind(this);
    // this.insert1 = this.insert1.bind(this);
    // this.insert2 = this.insert2.bind(this);
    // this.insert3 = this.insert3.bind(this);
    // this.insert0 = this.insert0.bind(this);
    this.TakeQuantity = this.TakeQuantity.bind(this);
    this.Backspace = this.Backspace.bind(this);
    this.Add = this.Add.bind(this);
    this.Equel = this.Equel.bind(this);
    this.number1=0;
    this.number2=0;
    this.opration=0;
  }
  insert7(){
    this.setState({
    calculator:this.state.calculator + '7'
    });
    }
  insert8(){
      this.setState({
      calculator:this.state.calculator + '8'
      });
      }
  insert9(){
    this.setState({
    calculator:this.state.calculator + '9'
     });
  }
  insert4(){
   this.setState({
   calculator:this.state.calculator + '4'
   });
   }
   insert5(){
    this.setState({
    calculator:this.state.calculator + '5'
    });
    }
    insert6(){
      this.setState({
      calculator:this.state.calculator + '6'
      });
      }
      insert1(){
       this.setState({
       calculator:this.state.calculator + '1'
       });
       }
     insert2(){
      this.setState({
      calculator:this.state.calculator + '2'
      });
      }
     insert3(){
      this.setState({
      calculator:this.state.calculator + '3'
      });
      }
     insert0(){
      this.setState({
      calculator:this.state.calculator + '0'
      });
      }
      TakeQuantity(event){
       let calculator=event.target.value;
        
      this.setState({
      calculator:parseInt(calculator)
      });
      }

      nampad(calculator){
        this.setState({
          calculator:this.state.calculator + calculator
        });
      }
      Backspace(calculator){
        this.setState({
          calculator: 0
        });
      }
     
      Add(hari){
        this.number1=this.state.calculator;
        this.opration=hari
        this.setState({
         calculator:  '0'
        });
        }

        Equel(calculator){
          this.number2=this.state.calculator;
          if(this.opration=='1')
          {
          this.setState({
           calculator:parseInt(this.number1) + parseInt(this.number2)
          });
          }
        
         else if(this.opration == '2')
         {
          this.setState({
           calculator:parseInt(this.number1) - parseInt(this.number2)
          });
          }
          else if(this.opration=='3')
          {
          this.setState({
           calculator:parseInt(this.number1) * parseInt(this.number2)
          });
          }
          else if(this.opration=='4')
          {
          this.setState({
           calculator:parseInt(this.number1) / parseInt(this.number2)
          });
          }
        }
        

        
        
            
      
            

  render() {
    return (
        <div className="outlet">
        <div className="App">
        <div className="text" >Calculator </div>
        <input  type="text" className="input" onChange={this.TakeQuantity} value={this.state.calculator}  />
        <div className="abc">
        <button className="a" onClick={(event) => this.nampad('7')}>7</button>
        <button className="a" onClick={(event) => this.nampad('8')}>8</button>
        <button className="a" onClick={(event) => this.nampad('9')}>9</button>
        <button className="a" onClick={this.Backspace}>C</button>
        </div>
        <div className="def">
        <button className="a" onClick={(event) => this.nampad('4')}>4</button>
        <button className="a" onClick={(event) => this.nampad('5')}>5</button>
        <button className="a" onClick={(event) => this.nampad('6')}>6</button>
        <button className="a" onClick={(event) => this.Add('1')}>+</button>
        </div>
        <div className="pqr">
        <button className="a" onClick={(event) => this.nampad('1')}>1</button>
        <button className="a" onClick={(event) => this.nampad('2')}>2</button>
        <button className="a" onClick={(event) => this.nampad('3')}>3</button>
        <button className="a" onClick={(event) => this.Add('2')}>-</button>
       
        </div>
        <div className="pqrr">
        
        <button className="a" onClick={(event) => this.nampad('0')}>0</button>
        <button className="a" onClick={this.Equel}>=</button>
        <button className="a" onClick={(event) => this.Add('3')}>*</button>
        <button className="a" onClick={(event) => this.Add('4')}>÷</button>
       
        </div>
      </div>
      </div>
    );
  }
}

class Appp extends Component{
  render(){
    return(
      <div className="appp">
        <App calculator={0}></App>
      </div>
    )
  }
}

export default Appp;
