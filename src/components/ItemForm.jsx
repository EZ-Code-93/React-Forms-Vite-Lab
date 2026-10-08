import React, { useState } from "react";
import { v4 as uuid } from "uuid";

// Added onItemFormSubmit prop to ItemForm component to handle form submission
function ItemForm({ onItemFormSubmit }) {
  // Added state for name and category inputs
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");
  // Added handleSubmit function to handle form submission and call onItemFormSubmit prop
  const handleSubmit = (e) => {
    // Prevent Refresh
    e.preventDefault();
    onItemFormSubmit({
      id: uuid(),
      name: name,
      category: category
    });
    // Reset form inputs
    setName("");
    setCategory("Produce");
  };

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      {/* Added onSubmit prop to form element to handle form submission */}
      <label>
        Name:
        {/* Added value and onChange props to input element to handle name input */}
        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
      </label>

      <label>
        Category:
        {/* Added value and onChange props to select element to handle category input */}
        <select name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;