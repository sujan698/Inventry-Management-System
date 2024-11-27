import React from "react";
import { Plus } from "lucide-react";

interface AddButtonProps {
  onAdd: () => void; // Callback function for adding an item
}

const addButton: React.FC<AddButtonProps> = () => {
  return (
    <div style={{ display: "flex", alignItems: "center", marginBottom: "16px" }}>
      <button 
        style={{ display: "flex", alignItems: "center", cursor: "pointer", backgroundColor: "#007bff",
             color: "#fff", padding: "8px 12px", border: "none", borderRadius: "4px" }}
      >
        <Plus width={80}  style={{ marginRight: "8px" }} />
        Add New Item
      </button>
    </div>
  );
};

export default addButton;
