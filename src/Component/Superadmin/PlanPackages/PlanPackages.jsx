// PlanPackages.jsx
import React, { useEffect, useState } from 'react';

const PlanPackages = () => {
  const [plans, setPlans] = useState([]);
  const [form, setForm] = useState({ name: '', price: '', description: '' });
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const storedPlans = JSON.parse(localStorage.getItem('plans')) || [];
    setPlans(storedPlans);
  }, []);

  useEffect(() => {
    localStorage.setItem('plans', JSON.stringify(plans));
  }, [plans]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleAddOrUpdate = () => {
    if (!form.name || !form.price || !form.description) return alert('All fields are required');
    
    if (editIndex !== null) {
      const updated = [...plans];
      updated[editIndex] = form;
      setPlans(updated);
      setEditIndex(null);
    } else {
      setPlans([...plans, form]);
    }
    setForm({ name: '', price: '', description: '' });
  };

  const handleEdit = (index) => {
    setForm(plans[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updated = plans.filter((_, i) => i !== index);
    setPlans(updated);
  };

  return (
    <div style={{ maxWidth: 600, margin: 'auto', padding: 20 }}>
      <h2>Plan Packages</h2>
      <input
        type="text"
        name="name"
        placeholder="Plan Name"
        value={form.name}
        onChange={handleChange}
        style={{ display: 'block', marginBottom: 10, width: '100%' }}
      />
      <input
        type="text"
        name="price"
        placeholder="Plan Price"
        value={form.price}
        onChange={handleChange}
        style={{ display: 'block', marginBottom: 10, width: '100%' }}
      />
      <textarea
        name="description"
        placeholder="Plan Description"
        value={form.description}
        onChange={handleChange}
        style={{ display: 'block', marginBottom: 10, width: '100%' }}
      />
      <button onClick={handleAddOrUpdate}>
        {editIndex !== null ? 'Update Plan' : 'Add Plan'}
      </button>

      <hr />

      <ul>
        {plans.map((plan, index) => (
          <li key={index} style={{ marginBottom: 10 }}>
            <strong>{plan.name}</strong> - ₹{plan.price} <br />
            <small>{plan.description}</small> <br />
            <button onClick={() => handleEdit(index)}>Edit</button>{' '}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlanPackages;