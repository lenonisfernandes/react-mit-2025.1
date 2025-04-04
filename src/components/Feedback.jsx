import React, { useState, useEffect } from "react";
import { Container, Card, Input, Form, FormGroup, Label, Button, Alert, Spinner } from 'reactstrap';

const Feedback = () => {
    const [formData, setFormData] = useState(
        {
            nome: '',
            email: '',
            feedback: '',
        }
    );
    const [userNames, setUserNames] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        const fetchUsers = async () => {
          try {
            const response = await fetch("https://api.npoint.io/1c0feeaaf0e2633f44e3")
            if (!response.ok) {
              throw new Error("Erro ao buscar os dados");
            }
            const data = await response.json();
            const names = Array.from(new Set(data.map(user => user.nome)));
            setUserNames(names);
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

    const handleSubmit = (e) => {
        e.preventDefault();

        if(formData.nome === "") {
            setError("Insira o nome!");
            return false;
        }

        if(formData.email === "") {
            setError("Insira o e-mail!");
            return false;
        }
        
        if(!formData.email.includes("infnet")) {
            setError("O email precisa ser institucional.");
            return false;
        }

        if(formData.feedback === "") {
            setError("Insira o feedback!");
            return false;
        }

        setError("");
        setSubmitted(true);
    }

    if (loading) return (
        <Container>
            <Spinner color="primary" />
                <p>Carregando usuários...</p>;
        </Container>
    )
    

    return (
        <Container>
        <h2>Feedback</h2>
        <Form onSubmit={handleSubmit}>
        <Card body>
            {error && <Alert color="danger">{error}</Alert>}
            {!error && submitted && <Alert color="success">
        Olá {formData.nome}, &lt;{formData.email}&gt; seu feedback foi recebido com sucesso!
        </Alert>}
            <FormGroup>
                <Label for="nome">Nome:</Label>
                <Input
                    name="nome"
                    id ="nome"
                    type="select"
                    value={formData.nome}
                    onChange={(e)=> setFormData({...formData, nome: e.target.value})}
                    required
                >
                <option value="">Selecionar usuário</option>
                {userNames.map((name, index) => (
                    <option key={index} value={name}>{name}</option>
                ))}
                </Input>
            </FormGroup>
            <FormGroup>
                <Label for="nome">Email:</Label>
                <Input
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e)=> setFormData({...formData, email: e.target.value})}
                    required
                />
            </FormGroup>
            <FormGroup>
                <Label for="nome">Feedback:</Label>
                <Input
                    name="Feedback"
                    type="textarea"
                    placeholder="Feedback"
                    value={formData.feedback}
                    onChange={(e)=> setFormData({...formData, feedback: e.target.value})}
                    required
                />
                <small className='text-muted'>
                    {formData.feedback.length} caracteres (mínimo 100)
                </small>
            </FormGroup>
        <Button type="submit" color="primary">Enviar</Button>
        </Card>
        </Form>
        
        </Container>
    )

}

export default Feedback;