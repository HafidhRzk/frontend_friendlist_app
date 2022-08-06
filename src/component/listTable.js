import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router'
import { Table, Container, Button } from 'react-bootstrap';
import { API } from '../config/api';
import { useMutation } from 'react-query';
import DeleteData from "./deleteData";

export default function ListTable() {
    let navigate = useNavigate();
    const [data, setData] = useState([]);

    const [idDelete, setIdDelete] = useState(null);
    const [confirmDelete, setConfirmDelete] = useState(null);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const getData = async () => {
        try {
          const response = await API.get("/friends");
          if (response.data.status === "success") {
            setData(response.data.data);
          }
        } catch (error) {
          console.log(error);
        }
    };

    const handleEdit = (id) => {
        navigate(`/updatelist/${id}`);
    };

    const handleDelete = (id) => {
        setIdDelete(id);
        handleShow();
    };

    const deleteById = useMutation(async (id) => {
        try {
            await API.delete(`/friend/${id}`);
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    });

    useEffect(() => {
        if (confirmDelete) {
            handleClose();
            deleteById.mutate(idDelete);
            setConfirmDelete(null);
        }
        getData();
    }, [confirmDelete]);

    return(
        <Container className='base'>
            <h1 className='py-3'>Friend List Table</h1>
            <Table striped bordered hover variant="secondary" size="sm">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Age</th>
                        <th>#</th>
                    </tr>
                </thead>
                <tbody>
                {data?.map((item, index) => (
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{item.name}</td>
                        <td>{item.gender}</td>
                        <td>{item.age}</td>
                        <td>
                            <Button
                                onClick={() => {
                                    handleEdit(item.id);
                                }}
                                variant='success'
                                style={{ width: '135px' }}
                            >
                                Edit
                            </Button>
                            <Button
                                onClick={() => {
                                    handleDelete(item.id);
                                }}
                                variant='danger'
                                style={{ width: '135px' }}
                            >
                                Delete
                            </Button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>
            <DeleteData
                setConfirmDelete={setConfirmDelete}
                show={show}
                handleClose={handleClose}
            />
        </Container>
    )
}