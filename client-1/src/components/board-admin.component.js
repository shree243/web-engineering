import React, { useState, useEffect } from "react";
import UserService from "../services/user.service";
import EventBus from "../common/EventBus";
import axios from "axios";
import { Alert, AlertTitle, Button, Stack } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



const BoardAdmin = () => {
  const [content, setContent] = useState("");
  const [users, setUsers] = useState([]);
  const [alert, setAlert] = useState(false);
  useEffect(() => {
    UserService.getAdminBoard().then(
      response => {
        setContent(response.data);
      },
      error => {
        setContent(
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString()
        );

        if (error.response && error.response.status === 401) {
          EventBus.dispatch("logout");
        }
      }
    );
  }, []);

  useEffect(() => {
    if (alert) {
      const timer = setTimeout(() => {
        setAlert(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [alert]);
  const getAllUsers = async (id) => {
    // const userId = localStorage.getItem('id')
    const url = ``;
    const response = await axios.get(url);
    console.log(response);
    setUsers(response.data);
  }
  let rows = [];
  const SetAllDataToTable = () => {
    users.forEach((user) => {
      rows.push(createData(user.id, user.email, user.username, user.firstName, user.lastName, user.password));
    });

    function createData(id, email, username, firstName, lastName, password) {
      return { id, email, username, firstName, lastName, password };
    }
  }

  useEffect(() => {
    getAllUsers();
    SetAllDataToTable();
  }, []);




  const downloadFile = () => {
    const jsonContent = JSON.stringify(users, null, 2);
    const blob = new Blob([jsonContent], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'Users_data.json';
    link.click();
  };

  const deleteUser = async (id) => {
    try {
      const url = ``;
      const response = await axios.post(url);
      setAlert(true);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div style={{ position: 'fixed', top: '20px', right: '20px', zIndex: 9999 }}>
        {alert && (
          <Alert severity="success">
            <AlertTitle>Success</AlertTitle>
            User has Been Deleted<strong>--check it out!</strong>
          </Alert>
        )}
      </div>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3>{content}</h3>
        <button className="grey-button" onClick={downloadFile}>Download User's Report</button>
      </div>

      <TableContainer component={Paper} sx={{ margin: '2%' }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead >
            <TableRow>
              <TableCell style={{ fontWeight: 'bold' }}> Email </TableCell>
              <TableCell align="right" style={{ fontWeight: 'bold' }}>UserName</TableCell>
              <TableCell align="right" style={{ fontWeight: 'bold' }}>First Name</TableCell>
              <TableCell align="right" style={{ fontWeight: 'bold' }}>Last Name</TableCell>
              <TableCell align="right" style={{ fontWeight: 'bold' }}>Password</TableCell>
              <TableCell align="right" style={{ fontWeight: 'bold' }}>Delete</TableCell>
            </TableRow>

          </TableHead>
          <TableBody>
            {users.map((row) => (
              <TableRow
                key={row.email}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.email}
                </TableCell>
                <TableCell align="right">{row.username}</TableCell>
                <TableCell align="right">{row.firstName}</TableCell>
                <TableCell align="right">{row.lastName}</TableCell>
                <TableCell align="right">{row.password}</TableCell>
                <TableCell align="right"><Button
                  variant="outlined"
                  style={{ borderColor: 'white', backgroundColor: 'green', color: 'white' }} onClick={() => deleteUser(row.id)}
                >
                  Delete
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

export default BoardAdmin;
