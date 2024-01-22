export default function FormRate({ num }) {
  return (
    <div className="card__rate">
      <label htmlFor={`rate-${num}`} className="card__label">
        {num}
      </label>

      <input
        type="radio"
        name="rate"
        id={`rate-${num}`}
        value={`${num}`}
        className="card__input"
      />
    </div>
  );
}
