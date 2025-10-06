import { useState } from 'react';

const Home = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <div
      style={{
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontFamily: 'sans-serif',
      }}
      className="poppins-medium"
    >
      <h1 style={{ marginBottom: '20px' }}>Upload Gambar</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '16px',
        }}
      >
        <img src="/naruto.jpg" alt="" style={{ width: 200 }} />
        <button
          type="submit"
          disabled={loading}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            fontWeight: 'bold',
            borderRadius: '8px',
            border: 'none',
            cursor: loading ? 'not-allowed' : 'pointer',
            backgroundColor: loading ? '#9ca3af' : '#ca008eff',
            color: 'white',
            transition: 'background-color 0.2s ease',
          }}
        >
          {loading ? 'Loading...' : 'Upload'}
        </button>
      </form>
    </div>
  );
};

export default Home;
