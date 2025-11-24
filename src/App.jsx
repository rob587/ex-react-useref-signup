import { useState, useEffect } from "react";

function App() {
  const [infos, setInfos] = useState({
    nome: "",
    username: "",
    password: "",
    spec: "",
    experience: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfos((prevInfos) => ({
      ...prevInfos,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const campiObbligatori = [
      "nome",
      "username",
      "password",
      "spec",
      "description",
    ];
    for (let i = 0; i < campiObbligatori.length; i++) {
      const nomeForm = campiObbligatori[i];
      const valoreForm = infos[nomeForm];

      if (valoreForm === "") {
        alert("compila il form");
        return;
      }
    }

    const expValore = Number(infos.experience);

    if (isNaN(expValore) || expValore <= 0) {
      alert("il numero deve essere positivo");
      return;
    }

    console.log("I dati sono stati confermati", infos);
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="nome"
          value={infos.nome}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="username"
          value={infos.username}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          value={infos.password}
          onChange={handleChange}
          required
        />
        <select name="spec" id="" value={infos.spec} onChange={handleChange}>
          <option value="">Seleziona una specializzazione</option>{" "}
          <option value="fullstack">Full stack</option>
          <option value="frontend">Front end</option>
          <option value="backend">Backend</option>
        </select>
        <input
          type="number"
          name="experience"
          value={infos.experience}
          required
          onChange={handleChange}
        />
        <textarea
          name="description"
          value={infos.description}
          onChange={handleChange}
          required
        />

        <button>Submit</button>
      </form>
    </>
  );
}

export default App;
