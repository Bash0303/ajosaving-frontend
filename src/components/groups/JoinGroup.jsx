import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Users, CheckCircle, Calendar, Clock, User } from 'lucide-react'

const JoinGroup = () => {
  const navigate = useNavigate()
  const [step, setStep] = useState('enterCode') // 'enterCode', 'reviewGroup', 'joined'
  const [groupCode, setGroupCode] = useState('')
  const [selectedGroup, setSelectedGroup] = useState(null)

  // Sample group data for demonstration
  const sampleGroup = {
    id: 1,
    name: "Office Colleagues",
    description: "A contribution tool for software developers and tech professionals",
    credibility: 92,
    admin: "Sarah Johnson",
    amount: 25000,
    frequency: "Monthly",
    members: 8,
    maxMembers: 15,
    duration: "12 Months",
    startDate: "September 25, 2025",
    nextContribution: "October 25, 2025",
    totalPool: 200000,
    membersList: [
      { name: "Sarah Johnson", joinDate: "September 25, 2025", role: "Admin" },
      { name: "Mike Chen", joinDate: "September 25, 2025", role: "Member" },
      { name: "John Doe", joinDate: "September 26, 2025", role: "Member" },
      { name: "Jane Smith", joinDate: "September 27, 2025", role: "Member" },
      { name: "Robert Brown", joinDate: "September 28, 2025", role: "Member" },
      { name: "Emily Davis", joinDate: "September 29, 2025", role: "Member" },
      { name: "Michael Wilson", joinDate: "September 30, 2025", role: "Member" },
      { name: "Sarah Thompson", joinDate: "October 1, 2025", role: "Member" }
    ]
  }

  const handleFindGroup = () => {
    if (groupCode.trim()) {
      // Simulate finding group by code
      setSelectedGroup(sampleGroup)
      setStep('reviewGroup')
    }
  }

  const handleJoinGroup = () => {
    // Simulate joining group
    setStep('joined')
  }

  const handleBack = () => {
    if (step === 'reviewGroup') {
      setStep('enterCode')
    } else if (step === 'joined') {
      navigate('/groups')
    } else {
      navigate('/dashboard')
    }
  }

  const renderEnterCode = () => (
    <div className="space-y-4">
      <div className="text-center mb-4">
        <div className="w-12 h-12 bg-deepBlue-100 rounded-full flex items-center justify-center mx-auto mb-2">
          <Users className="w-6 h-6 text-deepBlue-600" />
        </div>
        <h3 className="text-lg font-semibold text-deepBlue-800 mb-1">Enter Group</h3>
        <p className="text-deepBlue-600 text-sm">Enter the 6-digit code shared by the group admin</p>
      </div>

      <div className="space-y-3">
        <div>
          <label className="block text-sm font-medium text-deepBlue-700 mb-1">
            Group Invitation Code
          </label>
          <input
            type="text"
            value={groupCode}
            onChange={(e) => setGroupCode(e.target.value.toUpperCase())}
            placeholder="Enter 6-digit code (e.g., ABC123)"
            className="w-full px-3 py-2 border border-deepBlue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-deepBlue-500 text-center text-base font-mono"
            maxLength={6}
          />
        </div>

        <button
          onClick={handleFindGroup}
          className="w-full bg-deepBlue-600 text-white py-2 rounded-lg font-semibold hover:bg-deepBlue-700 transition duration-200 text-sm"
        >
          Find Group
        </button>

        <button className="w-full text-deepBlue-600 text-xs font-medium hover:underline">
          Don't have a code? Browse Public Groups
        </button>
      </div>
    </div>
  )

  const renderReviewGroup = () => (
    <div className="space-y-4">
      {/* Group Card */}
      <div className="bg-white border border-deepBlue-200 rounded-xl p-4">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h4 className="text-base font-semibold text-deepBlue-800">{selectedGroup.name}</h4>
            <p className="text-deepBlue-600 mt-1 text-sm">{selectedGroup.description}</p>
          </div>
          <span className="inline-block px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
            Highly Credible ({selectedGroup.credibility}%)
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-3">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
              <Users className="w-4 h-4 text-blue-600" />
            </div>
            <div>
              <p className="text-xs text-deepBlue-600">Members</p>
              <p className="font-semibold text-deepBlue-800 text-sm">{selectedGroup.members}/{selectedGroup.maxMembers}</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
              <Calendar className="w-4 h-4 text-green-600" />
            </div>
            <div>
              <p className="text-xs text-deepBlue-600">Frequency</p>
              <p className="font-semibold text-deepBlue-800 text-sm">{selectedGroup.frequency}</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
              <Clock className="w-4 h-4 text-purple-600" />
            </div>
            <div>
              <p className="text-xs text-deepBlue-600">Duration</p>
              <p className="font-semibold text-deepBlue-800 text-sm">{selectedGroup.duration}</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
              <User className="w-4 h-4 text-orange-600" />
            </div>
            <div>
              <p className="text-xs text-deepBlue-600">Admin</p>
              <p className="font-semibold text-deepBlue-800 text-sm">{selectedGroup.admin}</p>
            </div>
          </div>
        </div>

        {/* Group Details */}
        <div className="space-y-2 text-xs">
          <div className="flex justify-between">
            <span className="text-deepBlue-600">Start Date:</span>
            <span className="font-medium text-deepBlue-800">{selectedGroup.startDate}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-deepBlue-600">Next Contribution:</span>
            <span className="font-medium text-deepBlue-800">{selectedGroup.nextContribution}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-deepBlue-600">Total Pool:</span>
            <span className="font-medium text-deepBlue-800">₦{selectedGroup.totalPool.toLocaleString()}</span>
          </div>
        </div>

        {/* Current Members */}
        <div className="mt-4">
          <h5 className="font-semibold text-deepBlue-800 mb-2 text-sm">Current Members ({selectedGroup.members})</h5>
          <div className="space-y-2">
            {selectedGroup.membersList.map((member, index) => (
              <div key={index} className="flex justify-between items-center py-1">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-deepBlue-100 rounded-full flex items-center justify-center">
                    <span className="text-xs font-semibold text-deepBlue-600">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-deepBlue-800 text-sm">{member.name}</p>
                    <p className="text-xs text-deepBlue-500">Joined {member.joinDate}</p>
                  </div>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  member.role === 'Admin' 
                    ? 'bg-deepBlue-100 text-deepBlue-800' 
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  {member.role}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={handleJoinGroup}
        className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition duration-200 text-sm"
      >
        Join Group
      </button>
    </div>
  )

  const renderJoined = () => (
    <div className="text-center py-6">
      <div className="flex justify-center mb-3">
        <CheckCircle className="w-12 h-12 text-green-500" />
      </div>
      <h3 className="text-lg font-semibold text-deepBlue-800 mb-1">
        Group Joined Successfully!
      </h3>
      <p className="text-deepBlue-600 mb-4 text-sm">
        Welcome to {selectedGroup.name}. {selectedGroup.description}
      </p>
      <button
        onClick={() => navigate('/groups')}
        className="w-full bg-deepBlue-600 text-white py-2 rounded-lg font-semibold hover:bg-deepBlue-700 transition duration-200 text-sm"
      >
        Back to Groups
      </button>
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
            <h1 className="text-base sm:text-lg font-bold text-deepBlue-800 text-center">
              {step === 'reviewGroup' ? 'Review Group Details' : 'Join Group'}
            </h1>
            <div className="w-16"></div>
          </div>

          {/* Content */}
          {step === 'enterCode' && renderEnterCode()}
          {step === 'reviewGroup' && renderReviewGroup()}
          {step === 'joined' && renderJoined()}
        </div>
      </div>
    </div>
  )
}

export default JoinGroup