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

  return (
    <>
      <input
        type="text"
        name="nome"
        value={infos.nome}
        onChange={handleChange}
      />
      <input
        type="text"
        name="username"
        value={infos.username}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={infos.password}
        onChange={handleChange}
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
        onChange={handleChange}
      />
      <textarea
        name="description"
        value={infos.description}
        onChange={handleChange}
      />

      <button>Submit</button>
    </>
  );
}

export default App;
