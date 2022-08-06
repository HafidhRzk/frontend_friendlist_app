import { Form, Button, Container } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import { useMutation } from 'react-query';
import { API } from '../config/api';

export default function UpdateForm() {
    let navigate = useNavigate();
    const { id } = useParams();

    const [form, setForm] = useState({
        name:'',
        gender:'',
        age:'',
    })

    const getData = async () => {
        try {
          const response = await API.get('/friend/' + id);
          if (response.data.status === "success") {
            setForm({
                name: response.data.data.name,
                gender:response.data.data.gender,
                age:response.data.data.age,
            });
          }
        } catch (error) {
          console.log(error);
        }
    };

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
    
          const response = await API.patch('/friend/' + id, body, config);
    
          navigate('/');
        } catch (error) {
          console.log(error);
        }
    });

    useEffect(() => {
        getData();
    }, []);

    return(
        <Container className='base'>
            <h1 className='py-3'>Update Your Friend Data</h1>
            <Form onSubmit={(e) => handleSubmit.mutate(e)}>
                <Form.Group className="mb-3 py-3">
                    <Form.Control 
                        type="text"
                        placeholder="Update Full Name"
                        onChange={handleChange}
                        name="name"
                        value={name}
                    />
                </Form.Group>
                <Form.Group className="mb-3 py-3">
                    <Form.Control
                        type="text"
                        placeholder="Update Gender"
                        onChange={handleChange}
                        name="gender"
                        value={gender}
                    />
                </Form.Group>
                <Form.Group className="mb-3 py-3">
                    <Form.Control
                        type="text"
                        placeholder="Update Age"
                        onChange={handleChange}
                        name="age"
                        value={age}
                    />
                </Form.Group>
                <Button variant="success" type="submit">
                    Save
                </Button>
            </Form>
        </Container>
    )
}