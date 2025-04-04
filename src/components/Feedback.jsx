import React, { useState } from "react";
import { Card, Input } from 'reactstrap';

const Feedback = () => {
    const [formData, setFormData] = useState(
        {
            nome: '',
            email: '',
            feedback: '',
        }
    );

    const handleSubmit = (e) => {
        e.preventDefault();

        if(formData.nome === "") {
            alert("Insira o nome!");
            return false;
        }

        if(formData.email === "") {
            alert("Insira o e-mail!");
            return false;
        }

        
        if(formData.feedback === "") {
            alert("Insira o feedback!");
            return false;
        }
        
        const confirmationMessage = `
        Olá ${formData.nome} <${formData.email}> seu feedback foi recebido com sucesso!
        `;

        alert(confirmationMessage);
        // console.log(formData);
        // setFormData({
        //     nome: '',
        //     email: '',
        //     feedback: '',
        // });
    }

    return (
        <div>
        <h2>Feedback</h2>
        <form onSubmit={handleSubmit}>
        <Card>
        <Input
        type="text"
        placeholder="Nome"
        value={formData.nome}
        onChange={(e)=> setFormData({...formData, nome: e.target.value})}
        />

        <Input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e)=> setFormData({...formData, email: e.target.value})}
        />

        <textarea
        placeholder="Feedback"
        value={formData.feedback}
        onChange={(e)=> setFormData({...formData, feedback: e.target.value})}
        />

        <button type="submit">Enviar</button>
        </Card>
        </form>
        
        </div>
    )

}

export default Feedback;