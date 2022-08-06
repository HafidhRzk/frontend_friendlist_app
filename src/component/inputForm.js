import { Form, Button, Container, Alert } from 'react-bootstrap';
import React, { useState } from 'react';
import { useMutation } from 'react-query';
import { API } from '../config/api';

export default function InputForm() {
    const [message, setMessage] = useState(null);
    const [form, setForm] = useState({
        name:'',
        gender:'',
        age:'',
    })

    const { name, gender, age } = form;

    const handleChange = (e) => {
        console.log(`${e.target.name}: ${e.target.value}`);
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };
    
    const handleSubmit = useMutation(async (e) => {
        try {
        e.preventDefault();

        const config = {
            headers: {
            'Content-type': 'application/json',
            },
        };

        const body = JSON.stringify(form);

        const response = await API.post('/friend', body, config);

        console.log(response.data.status);

        if (response.data.status === 'success') {
            const alert = (
                <Alert variant="success" className="py-1">
                    Success
                </Alert>
            );
            setMessage(alert);
            setForm({
                name: '',
                gender: '',
                age: '',
            });
        } else {
            const alert = (
                <Alert variant="danger" className="py-1">
                    Failed
                </Alert>
            );
            setMessage(alert);
        }
        } catch (error) {
        const alert = (
            <Alert variant="danger" className="py-1">
                Failed
            </Alert>
        );
        setMessage(alert);
        console.log(error);
        }
    });

    return(
        <Container className='base'>
            <h1 className='py-3'>Input Your Friend Data</h1>
            {message && message}
            <Form onSubmit={(e) => handleSubmit.mutate(e)}>
                <Form.Group className="mb-3 py-3">
                    <Form.Control 
                        type="text"
                        placeholder="Input Full Name"
                        onChange={handleChange}
                        name="name"
                        value={name}
                    />
                </Form.Group>
                <Form.Group className="mb-3 py-3">
                    <Form.Control
                        type="text"
                        placeholder="Input Gender"
                        onChange={handleChange}
                        name="gender"
                        value={gender}
                    />
                </Form.Group>
                <Form.Group className="mb-3 py-3">
                    <Form.Control
                        type="text"
                        placeholder="Input Age"
                        onChange={handleChange}
                        name="age"
                        value={age}
                    />
                </Form.Group>
                <Button variant="success" type="submit">
                    Add to List
                </Button>
            </Form>
        </Container>
    )
}