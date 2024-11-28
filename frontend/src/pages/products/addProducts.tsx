

import React, { useState } from 'react'
import CustomInput from '../../components/customInput'
const AUTH_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZUlkIjoxLCJvcmdhbml6YXRpb25JZCI6MiwibmFtZSI6IlN1amFuIEJoYXR0YXJhaSIsImVtYWlsIjoiYWNkZkBnbWFpbC5jb20iLCJtb2JpbGUiOiI5ODUyNDAxODc0NSIsInBhc3N3b3JkIjoiJDJiJDEwJGZlbW5RUGcuMXhRcEVtRjhjTW9sNk8xdTE0dHpybEhwNi5LQ1FmdktNRFRGb1pKMFRlZmlHIiwiY3JlYXRlZEF0IjoiMjAyNC0wOS0yNVQwOToyMzowNC45NjRaIiwidXBkYXRlZEF0IjoiMjAyNC0wOS0yNVQwOToyMzowNC45NjRaIiwicm9sZSI6eyJpZCI6MSwibmFtZSI6IlN1cGVyYWRtaW4ifSwiaWF0IjoxNzMyNjEwODUwLCJleHAiOjE3MzM5MDY4NTB9.V5sbX8qHpLoVSMvJBahZ1f57HzfyRa_fzZKeVyaf9yw";
const addProducts = () => {

  const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState("");
    const [price, setPrice] = useState("");
    const [discount,setDiscount]=useState("");
  const handleSubmit=(e:any)=>{
    e.preventDefault();
    console.log(name,description,quantity,price,discount);
    addItem();
   
}
const addItem=async()=>{
  console.log(name,description,quantity,price,discount);

  try{
    const response = await fetch('http://localhost:3000/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${AUTH_TOKEN}`
        },
        body: JSON.stringify({
          name,
          description,
          quantity: parseInt(quantity, 10),
          price:parseInt(price,10),
          discount:parseInt(discount,10)
        })
    }
  );
  console.log({response});
  if(response.status===201){
    const data=await response.json();
    console.log({data});
  }
  }catch (error){
    console.log(error);
  }
};
  return (
    <div>
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
    </div>
  )
}

export default addProducts
