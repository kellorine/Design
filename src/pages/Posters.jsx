import { useState } from 'react';
import PosterCard from '../components/PosterCard';

export default function Posters() {
  const [zoomedPoster, setZoomedPoster] = useState(null);

  const posters = [
    { image: '/burger.png', title: 'Special Burger' },
    { image: '/pizza.png', title: 'Veggies And Meat' },
    { image: '/shawarma.png', title: 'Shawarma Queen' },
  ];

  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center text-white">My Poster Designs</h2>
      <div className="row">
        {posters.map((poster, i) => (
          <PosterCard
            key={i}
            image={poster.image}
            title={poster.title}
            onClick={() => setZoomedPoster(poster)}
          />
        ))}
      </div>

      {/* Zoom Modal */}
      {zoomedPoster && (
        <div
          style={{
            position: 'fixed',
            top: 0, left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
          }}
          onClick={() => setZoomedPoster(null)}
        >
          <img
            src={zoomedPoster.image}
            alt={zoomedPoster.title}
            style={{
              maxWidth: '90%',
              maxHeight: '90%',
              borderRadius: '8px',
              boxShadow: '0 0 20px #000',
              transition: 'transform 0.3s ease-in-out',
              transform: 'scale(1.05)',
            }}
          />
        </div>
      )}
    </div>
  );
}
