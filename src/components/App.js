import { useState } from 'react';
import Logo from './Logo.js';
import Form from './Form.js';
import PackingList from './PackingList.js';
import Stats from './Stats.js';

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddedItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    console.log(id);
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function clearList() {
    const confirmed = window.confirm('Are you sure');
    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddedItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClear={clearList}
      />
      <Stats items={items} />
    </div>
  );
}
