import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import Data from "../../../data.json";
const AUTH_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZUlkIjoxLCJvcmdhbml6YXRpb25JZCI6MiwibmFtZSI6IlN1amFuIEJoYXR0YXJhaSIsImVtYWlsIjoiYWNkZkBnbWFpbC5jb20iLCJtb2JpbGUiOiI5ODUyNDAxODc0NSIsInBhc3N3b3JkIjoiJDJiJDEwJGZlbW5RUGcuMXhRcEVtRjhjTW9sNk8xdTE0dHpybEhwNi5LQ1FmdktNRFRGb1pKMFRlZmlHIiwiY3JlYXRlZEF0IjoiMjAyNC0wOS0yNVQwOToyMzowNC45NjRaIiwidXBkYXRlZEF0IjoiMjAyNC0wOS0yNVQwOToyMzowNC45NjRaIiwicm9sZSI6eyJpZCI6MSwibmFtZSI6IlN1cGVyYWRtaW4ifSwiaWF0IjoxNzMyNjEwODUwLCJleHAiOjE3MzM5MDY4NTB9.V5sbX8qHpLoVSMvJBahZ1f57HzfyRa_fzZKeVyaf9yw";

const Products = () => {
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState<any>([]);
  const [filteredData, setFilteredData] = useState<any>([]);

  const headerKeys = Object.keys(Data[0]);

  const filterByName = (name: string) => {
    // filter Data by name
    const filteredData = data?.filter(({ item }: any) =>
      item.name.toLowerCase().includes(name.toLowerCase())
    );
    setFilteredData(filteredData);
  };

  const fetchItems = async () => {
    try {
      const response = await fetch("http://localhost:3000/items", {
        headers: {
          Authorization: `Bearer ${AUTH_TOKEN}`,
        },
      });
      console.log({ response });
      if (response.status === 200) {
        const data = await response.json();
        console.log({ data });
        setData(data);
      }
    } catch (error) {
      console.error({ error });
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  // filter data by name on search text change
  useEffect(() => {
    if (searchText !== "") {
      filterByName(searchText);
    } else {
      setFilteredData(data);
    }
  }, [searchText]);

  const tableData = searchText ? filteredData : data;

  return (
    <div style={{ width: "50%", margin: "auto" }}>
      <h1>Products</h1>
      <div className="search-container">
        <Search width={16} height={16} className="icon search" />
        <input
          placeholder="type name..."
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          style={{ marginLeft: 16, padding: "4px 16px", width: "30%" }}
          onClick={() => {}}
        >
          + Add New
        </button>
      </div>
      <table>
        <thead>
          <tr>
            {headerKeys.map((key) => (
              <th key={key}>{key}</th>
            ))}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map(({ item }: any) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
              <td>{item.discount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {tableData.length === 0 && (
        <p style={{ width: "100%", textAlign: "center" }}>
          This product is not available!!
        </p>
      )}
    </div>
  );
};

export default Products;
