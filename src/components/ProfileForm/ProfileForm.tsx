import { useState } from "react";
import "./styles.css";

const ProfileForm = () => {
  const [nome, setNome] = useState("");
  const [sobreNome, setSobreNome] = useState("");
  const [isAdded, setIsAdded] = useState(false);

  const handleNome = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNome(event.target.value);
  };

  const handleSobreNome = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSobreNome(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsAdded(nome !== "" && sobreNome !== "");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Nome:</label>
      <input aria-label="Nome" value={nome} onChange={handleNome} />
      <label>Sobrenome:</label>
      <input
        aria-label="Sobrenome"
        value={sobreNome}
        onChange={handleSobreNome}
      />
      <button>Adicionar</button>
      {isAdded && (
        <p role="alert">
          {nome} {sobreNome} foi adicionando a base de dados
        </p>
      )}
    </form>
  );
};

export default ProfileForm;
