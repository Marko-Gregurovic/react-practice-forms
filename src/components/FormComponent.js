

function FormComponent(props) {
    return (
        <main>
            <form onSubmit={props.handleSumbit}>
                <input placeholder="First Name" name="firstName" value={props.firstName} onChange={props.handleChange} /><br />
                <input placeholder="Last Name" name="lastName" value={props.lastName} onChange={props.handleChange} /><br />
                <input placeholder="Age" name="age" value={props.age} onChange={props.handleChange} /><br />
                <br />
                <label>
                    <input type="radio" name="gender" checked={props.gender === "male"} value="male" onChange={props.handleChange} />
                    Male
                </label>
                <label>
                    <input type="radio" name="gender" checked={props.gender === "female"} value="female" onChange={props.handleChange} />
                    Female
                </label>
                <br />
                
                <label>Please choose a location</label>
                <select name="location" value={props.location} onChange={props.handleChange}>
                    <option value="zagreb">Zagreb</option>
                    <option value="berlin">Berlin</option>
                    <option value="london">London</option>
                </select>
                <br />
                
                <label>
                    <input type="checkbox" name="isKosher" checked={props.dietaryRestrictions.isKosher} value="kosher" onChange={props.handleChange} />
                    Kosher
                </label>
                <label>
                    <input type="checkbox" name="isVegetarian" checked={props.dietaryRestrictions.isVegetarian} value="vegetarian" onChange={props.handleChange} />
                    Vegetarian
                </label>
                <label>
                    <input type="checkbox" name="isVegan" checked={props.dietaryRestrictions.isVegan} value="vegan" onChange={props.handleChange} />
                    Vegan
                </label>
                <br />
                
                <button>Submit</button>
            </form>
            <hr />
            <h2>Entered information:</h2>
            <p>Your name: {`${props.firstName} ${props.lastName}`}</p>
            <p>Your age: {props.age}</p>
            <p>Your gender: {props.gender}</p>
            <p>Your destination: {props.location}</p>
            <p>
                Your dietary restrictions: 
                <br />
                Vegan: {props.dietaryRestrictions.isVegan ? "YES" : "NO"}
                <br />
                Vegetarian: {props.dietaryRestrictions.isVegetarian ? "YES" : "NO"}
                <br />
                Kosher: {props.dietaryRestrictions.isKosher ? "YES" : "NO"}
            </p>
        </main>
    )
}

export default FormComponent;