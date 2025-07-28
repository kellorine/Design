export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#000',
      color: '#fff',
      fontFamily: "'Poppins', sans-serif",
      padding: '4rem 1rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      {/* Header Section */}
      <div style={{ textAlign: 'center', maxWidth: '700px' }}>
        <h1 style={{
          fontSize: '3rem',
          fontWeight: '700',
          marginBottom: '1rem',
          letterSpacing: '1px',
          textTransform: 'uppercase',
        }}>
          Welcome to My Poster Site
        </h1>

        <p style={{
          fontSize: '1.2rem',
          color: '#aaa',
          marginBottom: '2rem',
        }}>
          Discover unique and modern poster designs created with passion and creativity.
        </p>

        {/* Posters Button */}
        <a href="/posters" style={{
          backgroundColor: '#111',
          color: '#fff',
          padding: '0.8rem 2.5rem',
          borderRadius: '50px',
          textDecoration: 'none',
          fontWeight: '600',
          border: '1px solid #333',
          fontSize: '1rem',
          transition: 'all 0.3s ease-in-out',
        }}
          onMouseEnter={e => e.target.style.backgroundColor = '#333'}
          onMouseLeave={e => e.target.style.backgroundColor = '#111'}
        >
          View Posters
        </a>
      </div>

      {/* Resume Section */}
      <div style={{
        marginTop: '4rem',
        maxWidth: '850px',
        width: '100%',
        textAlign: 'center',
        padding: '2rem',
        backgroundColor: '#111',
        borderRadius: '12px',
        boxShadow: '0 0 20px rgba(255,255,255,0.05)'
      }}>
        <h2 style={{
          fontSize: '2rem',
          marginBottom: '1.5rem',
          borderBottom: '2px solid #444',
          display: 'inline-block',
          paddingBottom: '0.5rem',
        }}>
          My Resume
        </h2>

        <div style={{ lineHeight: '1.8', color: '#ccc', fontSize: '1rem' }}>
        {/* Profile Image */}
<img
  src="/rej.jpg" // <-- use your actual image path
  alt="My Profile"
  style={{
    width: '160px',
    height: '160px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '1rem',
    border: '4px solid #333',
    boxShadow: '0 0 10px rgba(255,255,255,0.1)',
  }}
/>
          <p><strong>Name:</strong> REJ NOEL P. BASCOGUIN</p>
          <p><strong>Email:</strong> rejbascoguinb@gmail.com</p>
          <p><strong>Phone:</strong> 639085182170 / 09556746826</p>
          <p><strong>Address:</strong> Block 23 Lot 19 & 21 Verde Heights Subdivision, Gaya-Gaya, CSJDM, Bulacan</p>

          {/* Skills with Icons */}
          <div style={{ marginTop: '2rem', padding: '1.5rem', backgroundColor: '#1a1a1a', borderRadius: '8px' }}>
            <h3 style={{ color: '#5ccfe6', marginBottom: '1rem' }}>Skills</h3>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '1.5rem',
              fontSize: '1.1rem',
              color: '#ccc',
            }}>
              <div><i className="devicon-html5-plain colored"></i> HTML5</div>
              <div><i className="devicon-css3-plain colored"></i> CSS3</div>
              <div><i className="devicon-javascript-plain colored"></i> JavaScript</div>
              <div><i className="devicon-react-original colored"></i> React</div>
              <div><i className="devicon-git-plain colored"></i> Git</div>
              <div><i className="devicon-bootstrap-plain colored"></i> Bootstrap</div>
              <div><i className="devicon-postgresql-plain colored"></i> PostgreSQL</div>
              <div>
                <span style={{ color: '#646CFF', fontWeight: 'bold' }}>⚡</span> Vite
              </div>
              <div>
                <span style={{
                  backgroundColor: '#001e36',
                  padding: '4px 8px',
                  borderRadius: '4px',
                  color: '#31A8FF',
                  fontWeight: 'bold',
                  fontSize: '0.9rem'
                }}>Ps</span> Photoshop
              </div>
              <div>
                <span style={{
                  backgroundColor: '#00C4CC',
                  color: 'white',
                  padding: '4px 8px',
                  borderRadius: '50%',
                  fontWeight: 'bold',
                  fontSize: '0.9rem'
                }}>C</span> Canva
              </div>
            </div>
          </div>

          {/* Experience */}
          <div style={{ marginTop: '2rem', padding: '1.5rem', backgroundColor: '#1a1a1a', borderRadius: '8px' }}>
            <h3 style={{ color: '#5ccfe6', marginBottom: '1rem' }}>Experience</h3>
            <p><strong>ID Assistant Editor/Designer</strong> – La Concepcion College (2023–2024)</p>
            <p><strong>Assistant Programmer & Page Designer</strong> – Bizbox Inc.</p>
            <p>Project: Health Assistant & Student Statistics – CSJDM, Bulacan</p>
          </div>

          {/* Seminars */}
          <div style={{ marginTop: '2rem', padding: '1.5rem', backgroundColor: '#1a1a1a', borderRadius: '8px' }}>
            <h3 style={{ color: '#5ccfe6', marginBottom: '1rem' }}>Seminars</h3>
            <p>The Complete Full-Stack Web Development Bootcamp (Dec 2024 – Feb 2025)</p>
            <p>Ultimate Adobe Photoshop CC Mastery Class (Jul 2025)</p>
          </div>

          {/* Portfolio */}
          <div style={{ marginTop: '2rem', padding: '1.5rem', backgroundColor: '#1a1a1a', borderRadius: '8px' }}>
            <h3 style={{ color: '#5ccfe6', marginBottom: '1rem' }}>Portfolio</h3>
            <a href="https://kellorine.github.io/rej_porfolio/" target="_blank" rel="noopener noreferrer" style={{
              color: '#fff',
              textDecoration: 'underline',
            }}>
              kellorine.github.io/rej_porfolio
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
