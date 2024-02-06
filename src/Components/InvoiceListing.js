import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
} from "@mui/material";

import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const InvoiceListing = () => {
  const [invoiceData, invoiceDataChange] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5050/lotus")
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        invoiceDataChange(resp);
        console.log(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

   // Edit Btn
   const LoadEdit = (id) => {
    navigate("/lotus/"+id);

    
  };

  const LoadDetail = (id) => {
    navigate("/lotus/edit/" + id);
}

const RemoveFunction = (id) => {
  if(window.confirm("Do you Want To Remove ?? ")){
    fetch("http://localhost:5050/lotus/"+ id,{
      method:"DELETE"
  }).then((res)=>{
    toast.warning('Record Deleted ')
    // refresh this page below code
      window.location.reload()              
  }).catch((err)=>{
      console.log(err.message);
  })
  }
};
 function PrintHandle(id){
  navigate("/lotus/print/" + id);

 }
  return (
    <>
      <Link to="/lotus/create" style={{float:'right',margin:'30px 120px 20px 0'}}>
        <Button variant="contained" sx={{ minWidth: "12ch", }} size="medium">
          Add +
        </Button>
      </Link>
      <TableContainer
        sx={{ width: "85%", marginLeft: "7%", marginTop: "50px" }}
      >
        <Table
          sx={{
            "&:last-child td, &:last-child th": { border: 0.5 },
          }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow sx={{ backgroundColor: "lightgray" }}>
              <TableCell align="right">Sr.No.</TableCell>

              <TableCell name="" align="center">
                Client Name
              </TableCell>
              <TableCell align="center">JOB/Joint Id</TableCell>
              <TableCell align="center">Procedure No.</TableCell>
              <TableCell align="center">Date</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {invoiceData &&
              invoiceData.map((element, i) => (
                <TableRow key={i}>
                  <TableCell align="center">{element.id}</TableCell>
                  <TableCell align="center">{element.client_name}</TableCell>
                  <TableCell align="center">{element.job_id}</TableCell>
                  <TableCell align="center">{element.procedure_no}</TableCell>
                  <TableCell align="center">{element.date}</TableCell>
                  <TableCell align="center">
                  <Button
                      // variant="contained"
                      sx={{ minWidth: "5ch", marginRight: "5px" }}
                      size="small"
                      onClick={()=>LoadDetail(element.id)}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
</svg>
                    </Button>
                    <Button
                      sx={{ minWidth: "5ch", marginRight: "5px" }}
                      size="small"

                      onClick={()=>LoadEdit(element.id)}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
</svg>
                    </Button>
                    <Button
                      // variant="contained"
                      sx={{ minWidth: "5ch" }}
                      size="small"
                      color="error"
                      onClick={()=>RemoveFunction(element.id)}
                    >
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
  <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
</svg>
                    </Button>
                    <Button
                      // variant="contained"
                      sx={{ minWidth: "5ch" }}
                      size="small"
                      onClick={()=>PrintHandle(element.id)}
                    >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-printer" viewBox="0 0 16 16">
  <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"/>
  <path d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1"/>
</svg>
                    </Button>

                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default InvoiceListing;
