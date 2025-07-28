// src/components/PosterCard.jsx
export default function PosterCard({ image, title, onClick }) {
  return (
    <div className="col-md-4 mb-4">
      <div
        className="card bg-dark text-white shadow-sm"
        style={{ cursor: 'pointer' }}
        onClick={onClick}
      >
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body text-center">
          <h5 className="card-title">{title}</h5>
        </div>
      </div>
    </div>
  );
}
