// import React, { createContext, useContext, useState, useEffect } from 'react'

// const AuthContext = createContext()

// export const useAuth = () => {
//   const context = useContext(AuthContext)
//   if (!context) {
//     throw new Error('useAuth must be used within an AuthProvider')
//   }
//   return context
// }

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null)
//   const [isAuthenticated, setIsAuthenticated] = useState(false)
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     const storedUser = localStorage.getItem('ajoSaveUser')
//     if (storedUser) {
//       setUser(JSON.parse(storedUser))
//       setIsAuthenticated(true)
//     }
//     setLoading(false)
//   }, [])

//   const login = (userData) => {
//     const userWithId = {
//       ...userData,
//       id: Date.now().toString(), // Add unique ID
//       createdAt: new Date().toISOString()
//     }
//     setUser(userWithId)
//     setIsAuthenticated(true)
//     localStorage.setItem('ajoSaveUser', JSON.stringify(userWithId))
//   }

//   const signup = (userData) => {
//     const userWithId = {
//       ...userData,
//       id: Date.now().toString(),
//       createdAt: new Date().toISOString(),
//       isVerified: true // Mark as verified after signup
//     }
//     setUser(userWithId)
//     setIsAuthenticated(true)
//     localStorage.setItem('ajoSaveUser', JSON.stringify(userWithId))
//   }

//   const logout = () => {
//     setUser(null)
//     setIsAuthenticated(false)
//     localStorage.removeItem('ajoSaveUser')
//   }

//   const value = {
//     user,
//     isAuthenticated,
//     loading,
//     login,
//     signup,
//     logout
//   }

//   return (
//     <AuthContext.Provider value={value}>
//       {children}
//     </AuthContext.Provider>
//   )
// }
import React, { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(false) // Set to false since we're not loading from storage

  // Remove localStorage persistence - user will be logged out on refresh
  useEffect(() => {
    // Check if there's a user in session (temporary for current session)
    // But don't persist across page refreshes
    setLoading(false)
  }, [])

  const login = (userData) => {
    const userWithId = {
      ...userData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      isVerified: true
    }
    setUser(userWithId)
    setIsAuthenticated(true)
    // Don't save to localStorage - user will be logged out on refresh
  }

  const signup = (userData) => {
    const userWithId = {
      ...userData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      isVerified: true
    }
    setUser(userWithId)
    setIsAuthenticated(true)
    // Don't save to localStorage - user will be logged out on refresh
  }

  const logout = () => {
    setUser(null)
    setIsAuthenticated(false)
    // Remove from localStorage if it exists (cleanup)
    localStorage.removeItem('ajoSaveUser')
  }

  const value = {
    user,
    isAuthenticated,
    loading,
    login,
    signup,
    logout
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}