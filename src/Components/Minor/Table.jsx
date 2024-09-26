import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

const weight = {
  fontWeight: "bold"
}
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}


const rows = [
  createData(1 , "Microsoft" , "42Lpa" , "Bengalore", "On Field"),
  createData(2 , "Amazon", "72Lpa", "NaN", "Remote"),
  createData(3 , "Google", "1.2Cr", "Pune", "On Field"),
  createData(4 , "IBM", "60Lpa", "Hyderabad", "Remote"),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper} sx={{boxShadow: "5px 5px 15px rgba(0.3, 0, 0, 0.3)"}}>
      <Table sx={{ minWidth: 550 }} aria-label="simple table">
        <TableHead>
          <TableRow >
            <TableCell sx={weight}>S/no</TableCell>
            <TableCell sx={weight} align="left">Company</TableCell>
            <TableCell sx={weight} align="left">Salary</TableCell>
            <TableCell sx={weight} align="left">City</TableCell>
            <TableCell sx={weight} align="left">Type</TableCell>
            <TableCell sx={weight} align="left">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.calories}</TableCell>
              <TableCell align="left">{row.fat}</TableCell>
              <TableCell align="left">{row.carbs}</TableCell>
              <TableCell align="left">{row.protein}</TableCell>
              <TableCell align="left" sx={{cursor:"pointer"}}><DeleteOutlinedIcon/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
