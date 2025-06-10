import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Dashboard() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios.get('http://localhost:8000/items/', {
      headers: { Authorization: `Bearer ${token}` }
    }).then(res => {
      setItems(res.data);
    }).catch(() => {
      alert('Failed to fetch items');
    });
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <ul>
        {items.map((item, i) => (<li key={i}>{item}</li>))}
      </ul>
    </div>
  );
}