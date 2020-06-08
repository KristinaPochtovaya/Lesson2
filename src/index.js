import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Phone extends React.Component {
  constructor (props){
    super(props)
    this.state = {
      phone: "",
      phoneError: false, 
    };
  }
  render() {
  return (
    <div>
    <form onSubmit={(e)=>e.preventDefault()}> 
    <label htmlFor="Phone"> Phone number: </label>
    <input 
    className={this.state.phoneError? "input-error":null}
      type="text"
      name="phone"
     
      value={this.setState.phone}
      onChange={(e)=>
        this.setState({
          phone: e.target.value,
        })
      }
    />
    <button onClick={(e)=>{

      const nextState = {};
      let hasError = false;
        if (!this.state.phone.startsWith("+37529" || "+37544" ||"+37533" || "+37525")){
          nextState.phoneError = true;
          hasError = true;
        }    
    if (hasError){
    this.setState(nextState);
  } else
   { 
     document.write ('Correct!');
  }
  }

    }
    > Send</button>
    </form>
    </div>
  );
  }
};

class Card extends React.Component {
  constructor(props){
    super(props)

   this.state= {
    number:"",
    names:"",
    month:"",
    year:"",
    CVV:"",
    numberError: false,
    namesError: false,
    monthError: false,
    yearError: false,
    CVVError: false,
    errorMessages: [],
  }
  }
  render(){
  return (
    <div>
      {this.state.errorMessages.length && (<ul className="error-messages">
        {this.state.errorMessages.map((message,index )=> 
        <li key={index}>{message}</li>
        )}
      </ul>)}
    <form onSubmit={(e)=>e.preventDefault()}>
      <label htmlFor="namber"> Payment Card(number): </label>
      <input
      className={this.state.numberError?"input-error":null}
      type="number"
      name="number"
      value={this.setState.number}
      onChange={(e)=>
        this.setState({
          number: e.target.value,
        })
      }
      >
      </input>
      <label htmlFor="name"> Payment Card(name): </label>
      <input
      className={this.state.namesError?"input-error":null}
      type="text"
      name="name"
      value={this.setState.names}
      onChange={(e)=>
      this.setState({
        names: e.target.value,
      })}
      >
      </input>
      <label htmlFor="validTHRU">Payment Card(valid THRU):</label>
      <input
      className={this.state.monthError? "input-error":null}
      type="text"
      name="month"
      maxLength="2"
      value={this.setState.month}
      onChange={(e)=>
      this.setState({
        month: e.target.value,
      })}
      >
      </input>
      <input
      className={this.state.yearError?"input-error":null}
      type="number"
      name="year"
      maxLength="2"
      value={this.setState.year}
      onChange={(e)=>
      this.setState({
        year: e.target.value,
      })
      }
      >
      </input>
      <label htmlFor="CVV">Payment Card(CVV):</label>
      <input
      className={this.state.CVVError?"input-error":null}
      type="number"
      name="cvv"
      value={this.setState.CVV}
      onChange={(e)=>
      this.setState({
        CVV: e.target.value,
      })
      }
      >
      </input>
      <button
        onClick={(e)=>       
        {
          let isKyr = function (str) {
            return /[а-я]/i.test(str);
        }
        
          let isMonth = function (str) {
            return /^([1-9]|1[0-2])$/.test(str);
        }
        let isEmpty= function (str) {
          return (!str || 0 === str.length);
      }
        let yearNow=new Date();
        let fullYear=yearNow.getFullYear();
        let fullYearStr = fullYear.toString().slice(2,4);
        let fullYearNum = +fullYearStr;
          const nextState={
            numberError: this.state.number.length>16 || this.state.number.length<15 ||this.state.number==="",
            namesError: isKyr(this.state.names) || this.state.names.trim()==="",
            monthError: !isMonth(+this.state.month) || this.state.month==="",
            yearError: this.state.year < fullYearNum || this.state.year > fullYearNum+1 || this.state.year==="",
            CVVError: this.state.CVV.length>4||this.state.CVV==="",
            errorMessages: [],
          };
          if(nextState.numberError || nextState.namesError||nextState.monthError){
            this.setState(nextState);
          }
           else 
           {
             document.write("Correct!")
          };
          if (nextState.numberError) {
           nextState.errorMessages.push('The Card Number must be 16 digits!')
          }
          if (nextState.namesError) {
            nextState.errorMessages.push('The Card Name must be in Latin only!')
           }
           if (nextState.monthError) {
            nextState.errorMessages.push('The Card Month cant be more than 12!')
           }
           if (nextState.yearError) {
            nextState.errorMessages.push('The Card Year cant be less than current year or more than next year!')
           }
           if (nextState.CVVError) {
            nextState.errorMessages.push('The Card CVV must be 3 or 4 digits!')
           }
        }
        }
      >Add Card</button>
    </form>
    </div>
  )
  }
}

const phone =  (
<div>
<Phone/>
</div>
);

const card = (
  <div>
    <Card/>
  </div>
)

ReactDOM.render(
  phone,
  document.getElementById('root')
);

ReactDOM.render(
  card,
  document.getElementById('card')
);

