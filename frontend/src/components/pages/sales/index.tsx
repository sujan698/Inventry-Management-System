import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import Data from "../../../salesdata.json";
import "../../Table.css"

const Sales = () => {
  const [searchNumber, setSearchNumber] = useState("");
  const [filteredData, setFilteredData] = useState(Data);

  const headerKeys = Object.keys(Data[0]);

  const filterById = (id: number) => {
    // filter Data by name
    const filteredData = Data.filter(
      (item) => item.id == id
    );
    setFilteredData(filteredData);
    return filteredData;
  };

  // filter data by name on search text change
  useEffect(() => {
    if (searchNumber !== "") {
      filterById(parseInt(searchNumber));
    } else {
      setFilteredData(Data);
    }
  }, [searchNumber]);

  // filterByName("marker");

  return (
    <div style={{ width: "50%", margin: "auto" }}>
      <h1>Products</h1>
      <div className="search-container">
        <Search width={16} height={16} className="icon search" />
        <input
          placeholder="type name..."
          onChange={(e) => {
            setSearchNumber(e.target.value);
          }}
        />
        <button style={{ marginLeft: 16, padding: "4px 16px", width: "30%"}} onClick={() => {}}>+ Add New</button>
      </div>
      <table>
        <thead>
          <tr>
            {headerKeys.map((key) => (
              <th key={key}>{key}</th>
            ))}
            
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.OrderDate}</td>
              <td>{item.description}</td>
              <td>{item.customerId}</td>
              <td>{item.SubTotal}</td>
              <td>{item.discount}</td>
              <td>{item.beforeTax}</td>
              <td>{item.taxAmount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {filteredData.length === 0 && (
        <p style={{ width: "100%", textAlign: "center" }}>
          This Sales is not available!!
        </p>
      )}
    </div>
  );
};

export default Sales;