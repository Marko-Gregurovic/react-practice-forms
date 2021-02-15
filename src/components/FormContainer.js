import React from 'react';

import FormComponent from './FormComponent';

class Form extends React.Component {
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
            <FormComponent 
                handleChange={this.handleChange}
                handleSumbit={this.handleSumbit}
                {...this.state}
            />
        );
        
    }
}

export default Form;
