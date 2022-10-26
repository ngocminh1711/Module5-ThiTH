import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";


function Navbar () {

    const navigate = useNavigate();

    const handleClick = () => {

    navigate('/createProduct')
    }




    return (
        <>
        <h1>Danh Sách sản phẩm</h1>
            <Button onClick={handleClick} variant="contained" color="success">Create Product</Button>
        </>
    )
}
export default Navbar;