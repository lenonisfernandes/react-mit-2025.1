import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.npoint.io/1c0feeaaf0e2633f44e3")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao buscar os dados");
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        console.error("Sem resposta");
        setLoading(false);
      });
  }, []);

  const handleClick = (user) => {
    alert(`Nome: ${user.nome} \nProfissão: ${user.profissao}`);
  };

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error}</p>;

  return (
    <div className="users">
      {users.map((user, index) => (
        <UserCard key={index} user={user} onClick={() => handleClick(user)} />
      ))}
    </div>
  );
}
