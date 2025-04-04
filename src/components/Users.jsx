import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://api.npoint.io/1c0feeaaf0e2633f44e3")
        if (!response.ok) {
          throw new Error("Erro ao buscar os dados");
        }
        const data = await response.json();
        setUsers(data);
      }
      catch (error){
        setError(error.message);
        console.log("Sem resposta: ", error);
      }
      finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  const handleClick = (user) => {
    alert(`Nome: ${user.nome} \nProfissão: ${user.profissao}`);
  };

  const filteredUsers = users.filter((user) => 
    //user.nome.toLowerCase().includes(filter.toLowerCase())
  Object.values(user).some(
    (value) => String(value).toLowerCase().includes(filter.toLowerCase())
  )
);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error}</p>;

  return (
    <div className="users">
      <input
      type="text"
      placeHolder="Buscar por nome..."
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
      />
      {filteredUsers.map((user, key) => (
        <UserCard key={key} user={user} onClick={() => handleClick(user)} />
      ))}
    </div>
  );
}
