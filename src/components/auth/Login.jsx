import React, { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'

const Login = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    phoneNumber: '',
    password: ''
  })
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate login
    onLogin({
      firstName: 'John',
      lastName: 'Doe',
      phoneNumber: formData.phoneNumber
    })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div>
      {/* Login Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-black mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="+2349011223344"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-deepBlue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-black mb-2">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-deepBlue-500 pr-12"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-deepBlue-600 text-white py-3 rounded-lg font-semibold hover:bg-deepBlue-700 transition duration-200"
        >
          Log In
        </button>

        <div className="text-center">
          <button type="button" className="text-deepBlue-600 text-sm hover:underline">
            Forgot Password?
          </button>
        </div>
      </form>
    </div>
  )
}

export default Login