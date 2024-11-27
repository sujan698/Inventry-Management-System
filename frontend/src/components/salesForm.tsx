import { useState } from "react";
import "./Form.css"
import CustomInput from "./customInput";
const salesForm = () => {
    const [orderDate, setOrderDate] = useState("");
    const [description, setDescription] = useState("");
    const [customerId, setCustomerID] = useState("");
    const [subTotal, setSubTotal] = useState("");
    const [discount,setDiscount]=useState("");
    const [beforeTax, setBeforeTax] = useState("");
    const [taxAmount, setTaxAmount] = useState("");

    const handleSubmit=(e:any)=>{
        e.preventDefault();
        console.log(orderDate,description,customerId,subTotal,discount,beforeTax,taxAmount);
       
    }

  return (
  <div className="form container">
    <h1>Add Sales</h1>
    <form >
        <CustomInput label="Name" setValue={setOrderDate} />
        <CustomInput label="Description" setValue={setDescription} />
        <CustomInput label="Quantity" setValue={setCustomerID} />
        <CustomInput label="Price" setValue={setSubTotal} />
        <CustomInput label="Discount" setValue={setDiscount} />
        <CustomInput label="Before Tax" setValue={setBeforeTax} />
        <CustomInput label="Tax Amount" setValue={setTaxAmount} />
        <button className="button-submit" type="submit" onClick={handleSubmit}>Submit</button>
    </form>
  </div>
)};

export default salesForm;
