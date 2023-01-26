import React from 'react';
import './App.css';
import Layout from './modules/Layout';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className="App">
      <Layout>
        <Dashboard />
      </Layout>
    </div>
  );
}

export default App;
