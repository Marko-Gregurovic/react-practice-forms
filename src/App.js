import React from 'react';

class App extends React.Component {
  constructor() {
      super()
      this.state = {
          firstName: "",
          lastName: "",
          age: "",
          gender: "",
          location: "zagreb",
          dietaryRestrictions: {
              isVegan: false,
              isVegetarian: false,
              isKosher: false
          }
      }

      this.handleChange = this.handleChange.bind(this);
      this.handleSumbit = this.handleSumbit.bind(this);
  }
  
  handleSumbit(event) {
      let aler = `First name: ${this.state.firstName}\n`;
      aler += `Last name: ${this.state.lastName}\n`;
      aler += `Age: ${this.state.age}\n`;
      aler += `Gender: ${this.state.gender}\n`;
      aler += `Location: ${this.state.location}\n`;
      aler += `Dietary restrictions: `;
      let first = true;
      for(let prop in this.state.dietaryRestrictions){
          if(this.state.dietaryRestrictions[prop] === true){
              first ? first = false : aler += ", ";
              aler += prop.substr(2);
          }
              
      }

      alert(aler);

      event.preventDefault();
  }

  handleChange(event) {
      let name = event.target.name;
      if(event.target.type === "checkbox") {
          let checked = event.target.checked;
          this.setState(prevState => {
              return (
                  {
                      dietaryRestrictions: {
                          ...prevState.dietaryRestrictions,
                          [name]: checked
                      }
                  }
              );
              
          });
      } else {
          let value = event.target.value;
          this.setState({
              [name]: value
          });
      }
  }

  render() {
      return (
          <main>
              <form onSubmit={this.handleSumbit}>
                  <input placeholder="First Name" name="firstName" value={this.state.firstName} onChange={this.handleChange} /><br />
                  <input placeholder="Last Name" name="lastName" value={this.state.lastName} onChange={this.handleChange} /><br />
                  <input placeholder="Age" name="age" value={this.state.age} onChange={this.handleChange} /><br />
                  <br />
                  <label>
                      <input type="radio" name="gender" checked={this.state.gender === "male"} value="male" onChange={this.handleChange} />
                      Male
                  </label>
                  <label>
                      <input type="radio" name="gender" checked={this.state.gender === "female"} value="female" onChange={this.handleChange} />
                      Female
                  </label>
                  <br />
                  
                  <label>Please choose a location</label>
                  <select name="location" value={this.state.location} onChange={this.handleChange}>
                      <option value="zagreb">Zagreb</option>
                      <option value="berlin">Berlin</option>
                      <option value="london">London</option>
                  </select>
                  <br />
                  
                  <label>
                      <input type="checkbox" name="isKosher" checked={this.state.dietaryRestrictions.isKosher} value="kosher" onChange={this.handleChange} />
                      Kosher
                  </label>
                  <label>
                      <input type="checkbox" name="isVegetarian" checked={this.state.dietaryRestrictions.isVegetarian} value="vegetarian" onChange={this.handleChange} />
                      Vegetarian
                  </label>
                  <label>
                      <input type="checkbox" name="isVegan" checked={this.state.dietaryRestrictions.isVegan} value="vegan" onChange={this.handleChange} />
                      Vegan
                  </label>
                  <br />
                  
                  <button>Submit</button>
              </form>
              <hr />
              <h2>Entered information:</h2>
              <p>Your name: {`${this.state.firstName} ${this.state.lastName}`}</p>
              <p>Your age: {this.state.age}</p>
              <p>Your gender: {this.state.gender}</p>
              <p>Your destination: {this.state.location}</p>
              <p>
                  Your dietary restrictions: 
                  <br />
                  Vegan: {this.state.dietaryRestrictions.isVegan ? "YES" : "NO"}
                  <br />
                  Vegetarian: {this.state.dietaryRestrictions.isVegetarian ? "YES" : "NO"}
                  <br />
                  Kosher: {this.state.dietaryRestrictions.isKosher ? "YES" : "NO"}
              </p>
          </main>
      )
  }
}

export default App;
