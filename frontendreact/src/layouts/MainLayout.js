import React, { useState } from 'react';

const MainLayout = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleAuth = () => {
    setIsAuthenticated(!isAuthenticated);
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      {/* Sidebar */}
      {sidebarOpen && (
        <aside style={{
          width: '250px',
          background: '#2c3e50',
          color: '#fff',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column'
        }}>
         
        </aside>
      )}

      {/* Main Content */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Header */}
        <header style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '10px 20px',
          background: '#3498db',
          color: '#fff'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button onClick={() => setSidebarOpen(!sidebarOpen)} style={{
              background: 'transparent',
              border: 'none',
              color: '#fff',
              fontSize: '20px',
              cursor: 'pointer'
            }}>☰</button>
            <h1 style={{ margin: 0 }}>Logo</h1>
          </div>

          <input
            type="text"
            placeholder="Recherche..."
            style={{
              padding: '5px',
              borderRadius: '4px',
              border: 'none',
              width: '200px'
            }}
          />

          <div>
            <button onClick={toggleAuth} style={{
              background: '#2980b9',
              border: 'none',
              padding: '8px 12px',
              borderRadius: '4px',
              color: '#fff',
              cursor: 'pointer'
            }}>
              {isAuthenticated ? 'Se déconnecter' : 'Se connecter'}
            </button>
          </div>
        </header>

        {/* Content */}
        <main style={{ flex: 1, padding: '20px', background: '#ecf0f1' }}>
          {children}
        </main>

        {/* Footer */}
        <footer style={{
          padding: '10px 20px',
          textAlign: 'center',
          background: '#bdc3c7'
        }}>
          © 2025 - Tous droits réservés
        </footer>
      </div>
    </div>
  );
};

export default MainLayout;
