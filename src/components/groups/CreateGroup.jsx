import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Users, CreditCard, Send } from 'lucide-react'

const CreateGroup = () => {
  const navigate = useNavigate()
  const [currentStep, setCurrentStep] = useState(1)
  const [groupData, setGroupData] = useState({
    // Step 1: Group Details
    name: '',
    description: '',
    maxMembers: 5,
    duration: 3,
    
    // Step 2: Contribution Rules
    contributionAmount: 1000,
    frequency: 'Monthly',
    payoutOrder: 'random',
    
    // Step 3: Invite Members
    emails: ''
  })

  const steps = [
    { number: 1, title: 'Group Details', icon: Users },
    { number: 2, title: 'Contribution Rules', icon: CreditCard },
    { number: 3, title: 'Invite Members', icon: Send }
  ]

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    } else {
      // Create group and redirect
      handleCreateGroup()
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    } else {
      navigate('/groups')
    }
  }

  const handleCreateGroup = () => {
    // Simulate API call to create group
    console.log('Creating group:', groupData)
    // Redirect to groups page after creation
    navigate('/groups')
  }

  const handleInputChange = (field, value) => {
    setGroupData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return renderGroupDetails()
      case 2:
        return renderContributionRules()
      case 3:
        return renderInviteMembers()
      default:
        return null
    }
  }

  const renderGroupDetails = () => (
    <div className="space-y-4">
      <div className="text-center mb-4">
        <div className="w-12 h-12 bg-deepBlue-100 rounded-full flex items-center justify-center mx-auto mb-2">
          <Users className="w-6 h-6 text-deepBlue-600" />
        </div>
        <h3 className="text-lg font-semibold text-deepBlue-800 mb-1">Group Details</h3>
        <p className="text-deepBlue-600 text-sm">Set up the basic information for your saving group</p>
      </div>

      <div className="space-y-3">
        <div>
          <label className="block text-sm font-medium text-deepBlue-700 mb-1">
            Group Name
          </label>
          <input
            type="text"
            value={groupData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            placeholder="e.g. Office Colleagues"
            className="w-full px-3 py-2 border border-deepBlue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-deepBlue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-deepBlue-700 mb-1">
            Description (Optional)
          </label>
          <textarea
            value={groupData.description}
            onChange={(e) => handleInputChange('description', e.target.value)}
            placeholder="What is this group for?"
            rows="2"
            className="w-full px-3 py-2 border border-deepBlue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-deepBlue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-deepBlue-700 mb-1">
            Max Members
          </label>
          <select
            value={groupData.maxMembers}
            onChange={(e) => handleInputChange('maxMembers', parseInt(e.target.value))}
            className="w-full px-3 py-2 border border-deepBlue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-deepBlue-500"
          >
            <option value={5}>5 Members</option>
            <option value={10}>10 Members</option>
            <option value={15}>15 Members</option>
            <option value={20}>20 Members</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-deepBlue-700 mb-1">
            Duration
          </label>
          <select
            value={groupData.duration}
            onChange={(e) => handleInputChange('duration', parseInt(e.target.value))}
            className="w-full px-3 py-2 border border-deepBlue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-deepBlue-500"
          >
            <option value={3}>3 Months</option>
            <option value={6}>6 Months</option>
            <option value={12}>12 Months</option>
          </select>
        </div>
      </div>
    </div>
  )

  const renderContributionRules = () => (
    <div className="space-y-4">
      <div className="text-center mb-4">
        <div className="w-12 h-12 bg-deepBlue-100 rounded-full flex items-center justify-center mx-auto mb-2">
          <CreditCard className="w-6 h-6 text-deepBlue-600" />
        </div>
        <h3 className="text-lg font-semibold text-deepBlue-800 mb-1">Contribution Rules</h3>
        <p className="text-deepBlue-600 text-sm">Define how much and when members contribute</p>
      </div>

      <div className="space-y-3">
        <div>
          <label className="block text-sm font-medium text-deepBlue-700 mb-1">
            Contribution Amount (₦)
          </label>
          <input
            type="number"
            value={groupData.contributionAmount}
            onChange={(e) => handleInputChange('contributionAmount', parseInt(e.target.value))}
            placeholder="1000"
            className="w-full px-3 py-2 border border-deepBlue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-deepBlue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-deepBlue-700 mb-1">
            Contribution Frequency
          </label>
          <select
            value={groupData.frequency}
            onChange={(e) => handleInputChange('frequency', e.target.value)}
            className="w-full px-3 py-2 border border-deepBlue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-deepBlue-500"
          >
            <option value="Weekly">Weekly</option>
            <option value="Bi-Weekly">Bi-Weekly</option>
            <option value="Monthly">Monthly</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-deepBlue-700 mb-1">
            Payout Order
          </label>
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="payoutOrder"
                value="random"
                checked={groupData.payoutOrder === 'random'}
                onChange={(e) => handleInputChange('payoutOrder', e.target.value)}
                className="text-deepBlue-600 focus:ring-deepBlue-500"
              />
              <span className="text-sm">Random (First Draw)</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="payoutOrder"
                value="firstCome"
                checked={groupData.payoutOrder === 'firstCome'}
                onChange={(e) => handleInputChange('payoutOrder', e.target.value)}
                className="text-deepBlue-600 focus:ring-deepBlue-500"
              />
              <span className="text-sm">First Come, First Served</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="payoutOrder"
                value="bidding"
                checked={groupData.payoutOrder === 'bidding'}
                onChange={(e) => handleInputChange('payoutOrder', e.target.value)}
                className="text-deepBlue-600 focus:ring-deepBlue-500"
              />
              <span className="text-sm">Bidding System</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  )

  const renderInviteMembers = () => (
    <div className="space-y-4">
      <div className="text-center mb-4">
        <div className="w-12 h-12 bg-deepBlue-100 rounded-full flex items-center justify-center mx-auto mb-2">
          <Send className="w-6 h-6 text-deepBlue-600" />
        </div>
        <h3 className="text-lg font-semibold text-deepBlue-800 mb-1">Invite Members</h3>
        <p className="text-deepBlue-600 text-sm">Send invitations to start your savings group</p>
      </div>

      <div className="space-y-3">
        <div>
          <label className="block text-sm font-medium text-deepBlue-700 mb-1">
            Email Addresses
          </label>
          <textarea
            value={groupData.emails}
            onChange={(e) => handleInputChange('emails', e.target.value)}
            placeholder="john@example.com, jane@example.com"
            rows="3"
            className="w-full px-3 py-2 border border-deepBlue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-deepBlue-500"
          />
          <p className="text-xs text-deepBlue-500 mt-1">Separate email addresses with commas</p>
        </div>

        {/* Group Summary */}
        <div className="bg-deepBlue-50 rounded-lg p-3">
          <h4 className="font-semibold text-deepBlue-800 mb-2 text-sm">Group Summary</h4>
          <div className="space-y-1 text-xs">
            <div className="flex justify-between">
              <span className="text-deepBlue-600">Name:</span>
              <span className="font-medium text-deepBlue-800">{groupData.name || 'Not specified'}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-deepBlue-600">Amount:</span>
              <span className="font-medium text-deepBlue-800">₦{groupData.contributionAmount.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-deepBlue-600">Frequency:</span>
              <span className="font-medium text-deepBlue-800">{groupData.frequency}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-deepBlue-600">Max Members:</span>
              <span className="font-medium text-deepBlue-800">{groupData.maxMembers} members</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-deepBlue-50 pb-20">
      <div className="container mx-auto px-4 py-4 max-w-2xl">
        <div className="bg-white rounded-xl shadow-lg p-3 sm:p-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <button 
              onClick={handleBack}
              className="flex items-center text-deepBlue-600 text-xs sm:text-sm"
            >
              <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
              Back
            </button>
            <h1 className="text-base sm:text-lg font-bold text-deepBlue-800 text-center">Create New Group</h1>
            <div className="text-xs text-deepBlue-600">Step {currentStep} of 3</div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-deepBlue-200 rounded-full h-1.5 mb-4">
            <div 
              className="bg-deepBlue-600 h-1.5 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / 3) * 100}%` }}
            ></div>
          </div>

          {/* Step Indicators */}
          <div className="flex justify-between mb-4">
            {steps.map((step) => {
              const Icon = step.icon
              return (
                <div key={step.number} className="flex flex-col items-center flex-1">
                  <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center mb-1 ${
                    currentStep >= step.number ? 'bg-deepBlue-600 text-white' : 'bg-deepBlue-200 text-deepBlue-400'
                  }`}>
                    <Icon className="w-3 h-3 sm:w-4 sm:h-4" />
                  </div>
                  <span className={`text-xs text-center px-1 ${
                    currentStep >= step.number ? 'text-deepBlue-600 font-medium' : 'text-deepBlue-400'
                  }`}>
                    {step.title}
                  </span>
                </div>
              )
            })}
          </div>

          {/* Step Content */}
          <div className="mb-4">
            {renderStepContent()}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
            {currentStep > 1 && (
              <button
                onClick={handleBack}
                className="border border-deepBlue-200 text-deepBlue-600 py-2 px-3 rounded-lg font-semibold hover:bg-deepBlue-50 transition duration-200 text-sm"
              >
                Back
              </button>
            )}
            <button
              onClick={handleNext}
              className={`flex-1 py-2 px-3 rounded-lg font-semibold transition duration-200 text-sm ${
                currentStep === 3 
                  ? 'bg-green-600 hover:bg-green-700 text-white'
                  : 'bg-deepBlue-600 hover:bg-deepBlue-700 text-white'
              }`}
            >
              {currentStep === 3 ? 'Create Group & Send Invites' : 'Continue'}
            </button>
          </div>

          {currentStep === 3 && (
            <button
              onClick={handleCreateGroup}
              className="w-full border border-deepBlue-200 text-deepBlue-600 py-2 px-3 rounded-lg font-semibold hover:bg-deepBlue-50 transition duration-200 mt-2 text-sm"
            >
              Create Group (Invite Later)
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default CreateGroup