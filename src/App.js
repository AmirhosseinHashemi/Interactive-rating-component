import Description from "./Description";
import Form from "./Form";

export default function App() {
  return (
    <div className="wrapper">
      <main>
        <section className="card">
          <Description />
          <Form />
        </section>
      </main>
    </div>
  );
}
