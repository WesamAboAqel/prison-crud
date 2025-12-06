import React from 'react'
import Card from '@/components/Card'
import Cards from '@/components/cards'
const Homepage = () => {
  return (
    <div className="min-h-screen bg-gray-200">
          {/* Header */}
          <header className="bg-custom1-100 text-custom1-900 py-6">
            <div className="container mx-auto px-6">
              <h1 className="text-4xl font-bold text-center">Prison Database Project</h1>
            </div>
          </header>

          {/* Main Content */}
          <main className="container mx-auto px-6 py-12">
            {/* Abstract Section */}
            <section className="mb-12 bg-custom1-50 p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-semibold text-custom1-900 mb-4">Abstract</h2>
              <p className="text-gray-700 text-lg">
                The Prison Database Project is a comprehensive system designed to manage and streamline operations within a correctional facility. This database application facilitates the efficient storage, retrieval, and management of critical data, including manager profiles, staff details, facility information, and operational statistics. Built with a focus on security and scalability, the project aims to enhance administrative workflows, improve data accessibility for authorized personnel, and ensure compliance with regulatory standards. Our solution provides a user-friendly interface for prison administrators to oversee operations effectively.
              </p>
            </section>

            {/* Team Section */}
            <section className="mb-12 bg-custom1-50 p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-semibold text-custom1-800 mb-4">Project Team</h2>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-custom1-900">Supervisor</h3>
                <p className="text-gray-700">Prof. Hani Al-Zoubi</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-custom1-900 mb-2">Team Members</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Eman Shadi</li>
                  <li>Raneem Alkhateeb</li>
                  <li>Abdullah Dmour</li>
                  <li>Abdulrahman Tarawneh</li>
                </ul>
              </div>
            </section>

            {/* Tech Stack Section */}
            <section className="bg-custom1-50 p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-semibold text-custom1-900 mb-4">Tech Stack</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-custom1-100 rounded-md">
                  <h3 className="text-lg font-bold text-custom1-900">React</h3>
                  <p className="text-gray-600">Frontend framework for building a dynamic user interface.</p>
                </div>
                <div className="text-center p-4 bg-custom1-100 rounded-md">
                  <h3 className="text-lg font-bold text-custom1-900">Postgres</h3>
                  <p className="text-gray-600">Relational database for secure and scalable data storage.</p>
                </div>
                <div className="text-center p-4 bg-custom1-100 rounded-md">
                  <h3 className="text-lg font-bold text-custom1-900">Express</h3>
                  <p className="text-gray-600">Backend framework for handling API requests and routing.</p>
                </div>
              </div>
            </section>
          </main>

          {/* Footer */}
          <footer className="bg-custom1-100 text-custom1-900 py-4">
            <div className="container mx-auto px-6 text-center">
              <p>&copy; 2025 Prison Database Project. All rights reserved.</p>
            </div>
          </footer>
        </div>
  )
}

export default Homepage