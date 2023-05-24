import React, { useState } from 'react';
import { TextField, Button, List, ListItem, ListItemText } from '@mui/material';

const CreateShoppingList = () => {
  const [itemName, setItemName] = useState('');
  const [items, setItems] = useState([]);

  const handleItemNameChange = (event) => {
    setItemName(event.target.value);
  };

  const handleAddItem = () => {
    if (itemName.trim() !== '') {
      setItems((prevItems) => [...prevItems, itemName]);
      setItemName('');
    }
  };

  return (
    <div>
      <TextField
        label="Item Name"
        value={itemName}
        onChange={handleItemNameChange}
        variant="outlined"
        fullWidth
      />
      <Button onClick={handleAddItem} variant="contained" color="primary">
        Add Item
      </Button>
      <List>
        {items.map((item, index) => (
          <ListItem key={index}>
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default CreateShoppingList;
