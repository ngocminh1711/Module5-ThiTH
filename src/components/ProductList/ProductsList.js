import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useEffect, useState} from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));



function ProductsList () {
    const [products , setProducts ] = useState([]);
    const navigate = useNavigate()
    const [statusDelete, setStatusDelete] = useState(false);

    const getProducts = async () => {
        return await axios.get('http://localhost:3001/products')
    }
    const handleDelete = async (id) => {

         await axios.delete(`http://localhost:3001/products/${id}`)
        setStatusDelete(true)
    }
    const handleEdit = (id) => {
        navigate('/editProduct', { state: { id: id}})
    }
    useEffect(() => {
         getProducts().then((res) =>{
             setProducts(res.data)
         })
    },[statusDelete])

    console.log(products)
    return (
        <TableContainer component={Paper}>

            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>STT</StyledTableCell>
                        <StyledTableCell align="right">Name Product</StyledTableCell>
                        <StyledTableCell align="right">Price</StyledTableCell>
                        <StyledTableCell align="right">Stock</StyledTableCell>
                        <StyledTableCell align="right">Description</StyledTableCell>
                        <StyledTableCell align="right">Actions</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    { products.map((product,index)  => (
                        <StyledTableRow key={product.id} >
                            <StyledTableCell component="th" scope="row">
                                {index + 1}
                            </StyledTableCell>
                            <StyledTableCell align="right">{product.name}</StyledTableCell>

                            <StyledTableCell align="right">{product.price}</StyledTableCell>
                            <StyledTableCell align="right">{product.stock}</StyledTableCell>
                            <StyledTableCell align="right">{product.description}</StyledTableCell>
                            <StyledTableCell align="right">

                                <Button onClick={() => handleDelete(product.id)}
                                        variant="contained"
                                        color="error"
                                >Delete</Button>
                                <Button onClick={() => handleEdit(product.id)}
                                        variant="contained"
                                >Edit</Button>
                            </StyledTableCell>

                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
export default ProductsList;