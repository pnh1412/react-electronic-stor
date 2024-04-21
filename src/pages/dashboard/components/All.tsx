import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import TablePagination from "@mui/material/TablePagination";
import { Box } from "@mui/material";

function createData(image: string, title: string, category: string, price: number) {
  return { image, title, category, price };
}

const rows = [
  createData(
    "https://cdn.dummyjson.com/product-images/6/thumbnail.png",
    "MacBook Pro",
    "laptops",
    1749
  ),
  createData(
    "https://cdn.dummyjson.com/product-images/15/thumbnail.jpg",
    "Eau De Perfume Spray",
    "fragrances",
    1749
  ),
];

// API: https://dummyjson.com/products?skip=5&limit=10

function ProductAll() {
  const [page, setPage] = React.useState(2);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (_: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell>Title</TableCell>
              <TableCell align="left">Category</TableCell>
              <TableCell align="left">Price</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left">
                  <img src={row.image} width={50} alt="" />
                </TableCell>
                <TableCell align="left">{row.title}</TableCell>
                <TableCell align="left">{row.category}</TableCell>
                <TableCell align="left">{row.price}</TableCell>
                <TableCell align="center">
                  <Button variant="contained">Checkout</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box style={{ display: 'flex', justifyContent: 'end', width: '100%' }}>
        <TablePagination
          component="div"
          count={100}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Box>

     
    </>
  );
}

export default ProductAll;