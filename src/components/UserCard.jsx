import react from "react";
import { Card } from "reactstrap";

const isAdmin = (admin) => (admin ? <i>Sim</i> : <i>Não</i>);

const UserCard = ({ user, onClick }) => {
  const styles = {
    card: {
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "15px",
      width: "250px",
      boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)",
      textAlign: "left",
      margin: "10px",
      backgroundColor: user.admin ? "red" : "",
    },
  };

  return (
    //<div className="card">
    //<div
      //style={styles.card}
      //className={user.admin ? "is-admin" : ""}
      //onClick={onClick}
    //>
    <Card>
      <h1>{user.nome}</h1>
      <h2>
        Um {user.profissao} de {user.idade} anos aprendendo React!{" "}
      </h2>
      <h3>Admin? {isAdmin(user.admin)}</h3>
      <button onClick={onClick} style={{ cursor: "pointer" }}>
        Dados do usuário
      </button>
      </Card>
    //</div>
  );
};

export default UserCard;
