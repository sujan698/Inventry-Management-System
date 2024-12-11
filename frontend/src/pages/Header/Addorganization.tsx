import { useState } from "react";
import "../../components/SignUp.css";
import axios from "axios";
import { useNavigate } from "react-router";

enum ORGANIZATION_TYPE {
  RETAIL = "retail",
  WHOLESALE = "wholesale",
}

const AddOrganization = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitting signup for:", { name, type, address, phone });

    try {
      const response = await axios.post("http://localhost:3000/organizations", {
        name,
        type,
        address,
        phone,
      });

      console.log(response);
      navigate("/signup", { state: { organizationId: response.data.id } });
  
    } catch (error: any) {
      console.log(error);
      setError(error.response?.data?.message || "An unexpected error occurred.");
    }
  };

  return (
    <div className="signup-form">
      <h2>Add Your Organization</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="organization-name">Organization Name</label>
          <input
            type="text"
            id="organization-name"
            placeholder="Enter your organization name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <div>
            <p>Organization Type</p>
            <div>
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="dropdown-input"
              >
                <option value="" disabled>
                  Select Organization Type
                </option>
                <option value={ORGANIZATION_TYPE.RETAIL}>Retail</option>
                <option value={ORGANIZATION_TYPE.WHOLESALE}>Wholesale</option>
              </select>
            </div>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="organization-address">Address</label>
          <input
            type="text"
            id="organization-address"
            placeholder="Enter organization address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="organization-phone">Phone Number</label>
          <input
            type="text"
            id="organization-phone"
            placeholder="Enter your organization phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button className="signup-button" type="submit">
          Create
        </button>
      </form>
    </div>
  );
};

export default AddOrganization;
