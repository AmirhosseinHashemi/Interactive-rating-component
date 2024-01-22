import { useState } from "react";
import Description from "./Description";
import Form from "./Form";
import Message from "./Message";

export default function App() {
  const [submitted, setSubmitted] = useState(false);
  const [selected, setSelected] = useState(null);

  function handleClickRadio(e) {
    setSelected(e.target.value);
  }

  function handleSubmitForm() {
    setSubmitted(true);
  }

  return (
    <div className="wrapper">
      <main>
        {submitted ? (
          <Message num={selected} />
        ) : (
          <section className="card">
            <Description />
            <Form
              onClickRadio={handleClickRadio}
              onSubmitForm={handleSubmitForm}
            />
          </section>
        )}
      </main>
    </div>
  );
}
