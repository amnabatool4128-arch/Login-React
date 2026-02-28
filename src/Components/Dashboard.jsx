import React from "react";
import { FaUserAlt, FaChartBar, FaUserFriends } from "react-icons/fa";

const Dashboard = ({ user, onLogout }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900">React</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-700">Welcome, {user.fullName}</span>
              <button
                onClick={onLogout}
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium py-2 px-4 rounded-full transition duration-300 cursor-pointer"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>
      {/* Hero Section */}
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8 lg:py-16">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Welcome to React
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            You've successfully logged in to your account.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl shadow-md p-8">
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
              <FaUserAlt className="text-yellow-700 text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Your Profile
            </h3>
            <p className="text-gray-600">
              Manage your account settings and preferences.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-8">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <FaChartBar className="text-blue-700 text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Dashboard</h3>
            <p className="text-gray-600">
              Access your personalized dashboard with key metrics.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-8">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <FaUserFriends className="text-green-700 text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Community</h3>
            <p className="text-gray-600">
              Connect with other users and share experiences..
            </p>
          </div>
        </div>
        {/*Userinfo */}
        <div className="mt-12 max-w-md mx-auto bg-white rounded-2xl shadow md:overflow-hidden">
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Your Account Information
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">Full Name</p>
                <p className="font-medium">{user?.fullName}</p>
              </div>
              <div className="space-y-4">
                <p className="text-sm text-gray-500">Email Address</p>
                <p className="font-medium">{user?.email}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Account Status</p>
                <p className="font-medium text-green-600">Active</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
