export default function Message({ num }) {
  return (
    <section className="thank">
      <figure className="thank__icon">
        <img src="./illustration-thank-you.svg" alt="thank you"></img>
      </figure>

      <p className="thank__selected-rate">
        You selected <span>{num}</span> out of 5
      </p>
      <h2 className="thank__title">Thank you!</h2>
      <p className="thank__caption">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </section>
  );
}
