import { useState, useRef } from "react";

function App() {
  const [infos, setInfos] = useState({
    username: "",
    password: "",
    description: "",
  });

  const inputNomeRef = useRef();
  const inputSpecRef = useRef();
  const inputExpRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfos((prevInfos) => ({
      ...prevInfos,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nome = inputNomeRef.current.value;
    const spec = inputSpecRef.current.value;
    const experience = inputExpRef.current.value;

    const datiFinali = {
      nome,
      spec,
      experience,
      ...infos,
    };
    if (nome === "") {
      alert("Il nome è obbligatorio.");
      return;
    }
    if (infos.username.length < 6) {
      alert("L'username deve avere almeno 6 caratteri.");
      return;
    }
    if (infos.password.length < 8) {
      alert("La password deve avere almeno 8 caratteri.");
      return;
    }
    if (spec === "") {
      // Usa 'spec' locale dal ref
      alert("Seleziona una specializzazione.");
      return;
    }

    const expValore = Number(experience);
    if (isNaN(expValore) || expValore <= 0) {
      alert("L'esperienza deve essere un numero positivo.");
      return;
    }

    if (infos.description.length < 100 || infos.description.length > 1000) {
      alert("La descrizione deve contenere tra 100 e 1000 caratteri.");
      return;
    }

    console.log("I dati sono stati confermati", datiFinali);
    alert("Form inviato con successo!");
  };

  const isUserValid = infos.username.length >= 6;
  const isPwValid = infos.password.length >= 8;
  const isDescValid =
    infos.description.length >= 100 && infos.description.length <= 1000;

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input ref={inputNomeRef} type="text" name="nome" required />
        <input
          type="text"
          name="username"
          value={infos.username}
          onChange={handleChange}
          required
        />
        <p style={{ color: isUserValid ? "green" : "red" }}>
          {isUserValid
            ? "Username valido"
            : `Caratteri: ${infos.username.length} (min 6)`}
        </p>
        <input
          type="password"
          name="password"
          value={infos.password}
          onChange={handleChange}
          required
        />
        <p style={{ color: isPwValid ? "green" : "red" }}>
          {isPwValid
            ? "password valida"
            : `Caratteri: ${infos.password.length} (min 8)`}
        </p>
        <select name="spec" id="" ref={inputSpecRef}>
          <option value="">Seleziona una specializzazione</option>{" "}
          <option value="fullstack">Full stack</option>
          <option value="frontend">Front end</option>
          <option value="backend">Backend</option>
        </select>
        <input type="number" name="experience" required ref={inputExpRef} />
        <textarea
          name="description"
          value={infos.description}
          onChange={handleChange}
          required
        />
        <p style={{ color: isDescValid ? "green" : "red" }}>
          {isDescValid
            ? "Descrizione valida"
            : `Caratteri: ${infos.description.length} (min 100, max 1000)`}
        </p>

        <button>Submit</button>
      </form>
    </>
  );
}

export default App;
