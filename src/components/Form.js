import FormRate from "./FormRate";

export default function Form({ onSubmitForm, onClickRadio }) {
  function handleSubmit(e) {
    e.preventDefault();

    onSubmitForm();
  }

  return (
    <form className="card__form" onSubmit={handleSubmit}>
      <fieldset>
        {Array.from({ length: 5 }, (_, i) => i + 1).map((num) => (
          <FormRate num={num} handleClickRadio={onClickRadio} key={num} />
        ))}
      </fieldset>

      <button className="card__button" type="submit">
        SUBMIT
      </button>
    </form>
  );
}
