import React, { useState } from "react";

export function NGORegister() {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      contact: "",
      address: "",
      registrationId: "",
      website: "",
      description: "",
    });
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      console.log("Submitted Data:", formData);
      alert("NGO Registered Successfully!");
    };
  
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl space-y-4"
        >
          <h2 className="text-2xl font-bold text-center text-gray-700">
            NGO Registration Form
          </h2>
  
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="NGO Name"
            required
            className="w-full border rounded px-4 py-2"
          />
  
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
            className="w-full border rounded px-4 py-2"
          />
  
          <input
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            placeholder="Contact Number"
            required
            className="w-full border rounded px-4 py-2"
          />
  
          <input
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Address"
            required
            className="w-full border rounded px-4 py-2"
          />
  
          <input
            name="registrationId"
            value={formData.registrationId}
            onChange={handleChange}
            placeholder="NGO Registration ID"
            required
            className="w-full border rounded px-4 py-2"
          />
  
          <input
            name="website"
            value={formData.website}
            onChange={handleChange}
            placeholder="Website (optional)"
            className="w-full border rounded px-4 py-2"
          />
  
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Short Description About the NGO"
            rows={4}
            className="w-full border rounded px-4 py-2"
          />
  
          <button
            type="submit"
            className="w-full bg-green-700 text-white py-2 rounded hover:bg-green-800"
          >
            Register NGO
          </button>
        </form>
      </div>
    );
  }
  
  export default NGORegister;