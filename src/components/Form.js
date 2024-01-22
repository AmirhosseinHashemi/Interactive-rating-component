import FormRate from "./FormRate";

export default function Form() {
  return (
    <form className="card__form">
      <fieldset>
        {Array.from({ length: 5 }, (_, i) => i + 1).map((num) => (
          <FormRate num={num} key={num} />
        ))}
      </fieldset>

      <button className="card__button" type="submit">
        SUBMIT
      </button>
    </form>
  );
}
