// import React, { useState } from 'react';
// import { List, ListItem, ListItemText, ListItemIcon, Checkbox, Divider, Button, TextField, Box } from '@mui/material';

// const ShoppingList = () => {
//   const [items, setItems] = useState([
//     { name: 'Apples', checked: false },
//     { name: 'Bananas', checked: true },
//     { name: 'Oranges', checked: false },
//   ]);

//   const [editIndex, setEditIndex] = useState(-1);
//   const [editValue, setEditValue] = useState('');

//   const handleToggle = (index) => {
//     setItems((prevItems) => {
//       const updatedItems = [...prevItems];
//       updatedItems[index].checked = !updatedItems[index].checked;
//       return updatedItems;
//     });
//   };

//   const handleEdit = (index) => {
//     setEditIndex(index);
//     setEditValue(items[index].name);
//   };

//   const handleSaveEdit = (index) => {
//     setItems((prevItems) => {
//       const updatedItems = [...prevItems];
//       updatedItems[index].name = editValue;
//       return updatedItems;
//     });
//     setEditIndex(-1);
//   };

//   const handleCancelEdit = () => {
//     setEditIndex(-1);
//   };

//   return (
//     <Box sx={{ border: '1px solid black', p: 2 }}>
//       <List>
//         {items.map((item, index) => (
//           <React.Fragment key={index}>
//             {index === editIndex ? (
//               <ListItem>
//                 <TextField
//                   value={editValue}
//                   onChange={(e) => setEditValue(e.target.value)}
//                 />
//                 <Button onClick={() => handleSaveEdit(index)}>Save</Button>
//                 <Button onClick={handleCancelEdit}>Cancel</Button>
//               </ListItem>
//             ) : (
//               <ListItem dense button onClick={() => handleToggle(index)}>
//                 <ListItemIcon>
//                   <Checkbox edge="start" checked={item.checked} tabIndex={-1} disableRipple />
//                 </ListItemIcon>
//                 <ListItemText primary={item.name} />
//                 <Button onClick={() => handleEdit(index)}>Edit</Button>
//               </ListItem>
//             )}
//             <Divider />
//           </React.Fragment>
//         ))}
//       </List>
//       <Button variant="outlined">OK</Button>
//       <Button variant="outlined" onClick={() => setEditIndex(0)}>Edit</Button>
//     </Box>
//   );
// };

// export default ShoppingList;
import React, { useState } from 'react';
import { List, ListItem, ListItemText, Checkbox, TextField, Button } from '@mui/material';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useLocation } from 'react-router-dom';

const defaultTheme = createTheme();

const ShoppingList = () => {
  const { state } = useLocation();
  const { userName } = state || {};

  const [items, setItems] = useState([
    { name: 'Apples', checked: false },
    { name: 'Bananas', checked: true },
    { name: 'Oranges', checked: false },
  ]);

  const [editIndex, setEditIndex] = useState(-1);
  const [editValue, setEditValue] = useState('');

  const handleToggle = (index) => {
    if (!items[index].checked) {
      setEditIndex(index);
      setEditValue(items[index].name);
    } else {
      setItems((prevItems) => {
        const updatedItems = [...prevItems];
        updatedItems[index].checked = !updatedItems[index].checked;
        return updatedItems;
      });
    }
    items[index].editing = true;
  };

  // const handleSaveEdit = (index) => {
  //   setItems((prevItems) => {
  //     const updatedItems = [...prevItems];
  //     updatedItems[index].name = editValue;

  //     setEditIndex(-1);

  //     return updatedItems;
  //   });
  // };

  // const handleCancelEdit = () => {
  //   setEditIndex(-1);
  // };

  const handleEditItemChange = (value, index) => {
    const updatedItems = [...items];
    updatedItems[index].name = value;
    setItems(updatedItems);
  };
  
  const handleSaveEdit = (index) => {
    const updatedItems = [...items];
    updatedItems[index].editing = false;
    updatedItems[index].newItem = false;
    setItems(updatedItems);
    // return updatedItems;
  };
  
  const handleCancelEdit = (index) => {
    const updatedItems = [...items];
    updatedItems[index].editing = false;
    if (updatedItems[index].newItem) {
      updatedItems.pop(); // Remove the last item (newly added item) from the list
    }
    setItems(updatedItems);
    console.log('nnn', items[index])
  };

  const handleAddItem = () => {
    // Logic to add a new item to the list
    const newItem = {
      name: '', // Initial item name
      checked: false, // Initial checked state
      editing: true, // Set editing state to true for the new item
      newItem: true,
    };
  
    setItems([...items, newItem]);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
          <h2>Welcome {userName}! <br/>
          Suggested shopping List for you</h2>
          <List
              sx={{
                  marginTop: 8,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
              }}
          >
          {items.map((item, index) => (
            <React.Fragment key={index}>
              <ListItem dense onClick={() => handleToggle(index)}>
                <Checkbox
                  edge="start"
                  checked={item.checked}
                  tabIndex={-1}
                  disableRipple
                />
                {item.editing ? (
                  <TextField
                    value={item.name}
                    onChange={(e) => handleEditItemChange(e.target.value, index)}
                  />
                ) : (
                  <ListItemText primary={item.name} />
                )}
                {item.editing ? (
                  <>
                    <Button onClick={() => handleSaveEdit(index)}>Save</Button>
                    <Button onClick={() => handleCancelEdit(index)}>Cancel</Button>
                  </>
                ) : null}
                {/* {index === editIndex ? (
                  <TextField
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                  />
                ) : (
                  <ListItemText primary={item.name} />
                )}
                {index === editIndex ? (
                  <>
                    <Button onClick={() => handleSaveEdit(index)}>Save</Button>
                    <Button onClick={handleCancelEdit}>Cancel</Button>
                  </>
                ) : null} */}
              </ListItem>
            </React.Fragment>
          ))}
        </List>
        <button onClick={handleAddItem}>+</button>
      </Container>
    </ThemeProvider>
  );
};

export default ShoppingList;

