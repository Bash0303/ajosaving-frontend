import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { Eye, EyeOff, CheckCircle } from 'lucide-react'

const Signup = ({ onSignup }) => {
  const { signup } = useAuth()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    bvn: '',
    nin: '',
    dateOfBirth: '',
    password: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Create user object
    const userData = {
      ...formData,
      firstName: formData.firstName.trim(),
      lastName: formData.lastName.trim(),
      email: formData.email.trim().toLowerCase()
    }
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1000)) // Simulate delay
      signup(userData)
      setIsSuccess(true)
      
      // Redirect to dashboard after 2 seconds
      setTimeout(() => {
        navigate('/dashboard')
      }, 2000)
      
    } catch (error) {
      console.error('Signup error:', error)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  if (isSuccess) {
    return (
      <div className="text-center py-8">
        <div className="flex justify-center mb-4">
          <CheckCircle className="w-16 h-16 text-green-500" />
        </div>
        <h3 className="text-xl font-semibold text-deepBlue-800 mb-2">
          Account Created Successfully!
        </h3>
        <p className="text-deepBlue-600">Redirecting to dashboard...</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-deepBlue-700 mb-2">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-deepBlue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-deepBlue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-deepBlue-700 mb-2">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-deepBlue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-deepBlue-500"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-deepBlue-700 mb-2">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="john@example.com"
          className="w-full px-4 py-3 border border-deepBlue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-deepBlue-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-deepBlue-700 mb-2">
          Phone Number
        </label>
        <input
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          placeholder="+2349011223344"
          className="w-full px-4 py-3 border border-deepBlue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-deepBlue-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-deepBlue-700 mb-2">
          BVN (Bank Verification Number)
        </label>
        <input
          type="text"
          name="bvn"
          value={formData.bvn}
          onChange={handleChange}
          placeholder="Enter your 11-digit BVN"
          maxLength="11"
          pattern="[0-9]{11}"
          className="w-full px-4 py-3 border border-deepBlue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-deepBlue-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-deepBlue-700 mb-2">
          NIN (National Identification Number)
        </label>
        <input
          type="text"
          name="nin"
          value={formData.nin}
          onChange={handleChange}
          placeholder="Enter your 11-digit NIN"
          maxLength="11"
          pattern="[0-9]{11}"
          className="w-full px-4 py-3 border border-deepBlue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-deepBlue-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-deepBlue-700 mb-2">
          Date of Birth
        </label>
        <input
          type="date"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-deepBlue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-deepBlue-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-deepBlue-700 mb-2">
          Password
        </label>
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Create a strong password"
            className="w-full px-4 py-3 border border-deepBlue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-deepBlue-500 pr-12"
            required
            minLength="6"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-deepBlue-400"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-deepBlue-600 text-white py-3 rounded-lg font-semibold hover:bg-deepBlue-700 transition duration-200"
      >
        Create Account
      </button>
    </form>
  )
}

export default Signup