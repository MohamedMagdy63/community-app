import React, { useState } from 'react';
import './login.css'; // Create a CSS file for styling
const Login = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Add your signup logic here, such as sending data to an API or handling the form data
        console.log(formData); // For example, you can log the form data for now
      };
    
      return (
        <div className="login-container">
          <h2>Login</h2>
          <form className="signup-form" onSubmit={handleSubmit}>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <button className='submitBtn' type="submit">Login</button>
          </form>
        </div>
      )
}

export default Login;
