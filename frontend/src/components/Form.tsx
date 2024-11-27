import { useState } from "react";
import "./Form.css"
import CustomInput from "./customInput";
const Form = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState("");
    const [price, setPrice] = useState("");
    const [discount,setDiscount]=useState("");

    const handleSubmit=(e:any)=>{
        e.preventDefault();
        console.log(name,description,quantity,price,discount);
       
    }

  return (
  <div className="form container">
    <h1>Add Products</h1>
    <form >
        <CustomInput label="Name" setValue={setName} />
        <CustomInput label="Description" setValue={setDescription} />
        <CustomInput label="Quantity" setValue={setQuantity} />
        <CustomInput label="Price" setValue={setPrice} />
        <CustomInput label="Discount" setValue={setDiscount} />
        <button className="button-submit" type="submit" onClick={handleSubmit}>Submit</button>
    </form>
  </div>
)};

export default Form;
