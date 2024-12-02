import  { useState } from "react";
import CustomInput from "../../components/customInput";
import { ArrowBigLeft } from "lucide-react";
import axios from "axios";

enum DISCOUNT_TYPE {
  RATE = "rate",
  AMOUNT = "amount",
}
const AUTH_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Miwicm9sZUlkIjoxLCJvcmdhbml6YXRpb25JZCI6MiwibmFtZSI6IlJhbSBCaGF0dGFyYWkiLCJlbWFpbCI6InJhbWJoYXR0YXJhaTk4MjRAZ21haWwuY29tIiwibW9iaWxlIjoiOTg0MjczNzEyMCIsInBhc3N3b3JkIjoiJDJiJDEwJDA3YWZXVldJVnJhcVRNMjN5bUZMMC5qdGF3aDg0Sm1JSzdtVi9LRzFjVldPNDA4SFJYazUuIiwiY3JlYXRlZEF0IjoiMjAyNC0xMi0wMlQwODowODoxOC41MDNaIiwidXBkYXRlZEF0IjoiMjAyNC0xMi0wMlQwODowODoxOC41MDNaIiwicm9sZSI6eyJpZCI6MSwibmFtZSI6IlN1cGVyYWRtaW4ifSwiaWF0IjoxNzMzMTI2OTQyLCJleHAiOjE3MzQ0MjI5NDJ9.vEbZI4Hk6TfiZvrpspfHui1gpEz7FDVHgS-kjQejVRM";
const AddProducts = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [name, setName] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [productData, setProductData] = useState();
  const [discount, setDiscount] = useState("");
  const [discountType, setDiscountType] = useState<DISCOUNT_TYPE>(
    DISCOUNT_TYPE.AMOUNT
  );
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(name, description, quantity, price, discountType, discount);
    addItem();
  };
  const addItem = async () => {
    console.log(name, description, quantity, price, discountType, discount);

    try {
      const response = await axios("http://localhost:3000/items", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${AUTH_TOKEN}`,
        },
        data: {
          name,
          description,
          quantity: parseInt(quantity, 10),
          price: parseFloat(price),
          discount: parseFloat(discount),
        },
      });
      console.log({ response });
      if (response.status === 200) {
        setProductData(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="form container">
        <button className="button-back" onClick={() => window.history.back()}>
          <ArrowBigLeft size={24} />
          <span style={{ marginLeft: "8px", fontSize: "16px" }}>Back</span>
        </button>
        <h1>Add Products</h1>
        <form style={{ gap: "16" }} onSubmit={handleSubmit} >
          <CustomInput label="Name" setValue={setName} required/>
          <CustomInput label="Description" setValue={setDescription}  />
          <CustomInput label="Quantity" setValue={setQuantity}required />
          <CustomInput label="Price" setValue={setPrice} required />
          <CustomInput label="Discount" setValue={setDiscount} required />
          <div>
            <div>
              <p>Discount Type</p>
              <div style={{ display: "flex", gap: "16px" }}>
                <div className="radio-input">
                  <CustomInput
                    type="radio"
                    label="Rate"
                    setValue={() => setDiscountType(DISCOUNT_TYPE.RATE)}
                    checked={DISCOUNT_TYPE.RATE === discountType}
                  />
                  <CustomInput
                    type="radio"
                    label="Amount"
                    setValue={() => setDiscountType(DISCOUNT_TYPE.AMOUNT)}
                    checked={DISCOUNT_TYPE.AMOUNT === discountType}
                  />
                </div>
              </div>
            </div>
          </div>
          <button className="button-submit" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
