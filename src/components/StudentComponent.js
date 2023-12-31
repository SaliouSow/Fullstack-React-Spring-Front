import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import {Container, Typography} from '@mui/material'


export default function Student() {
    const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"};
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [students , setStudents] = useState('');

    const handleClick = e =>{
        e.preventDefault();
        const student = {name, address}
        console.log(student);
        fetch("http://localhost:8080/student/add", {method: "POST", headers: {"Content-Type":"application/json"},body: JSON.stringify(student)})
        .then(()=>{
            console.log("New student added :)")
        })
    }

    useEffect(()=> {
        fetch("http://localhost:8080/student/list")
        .then((response) => response.json())
        .then(result => {console.log(result); setStudents(result)})
    },[])

    /* const studentCards = students.map(student => { 
        return (<Paper elevation={6} style={{margin:"10px",padding:"15px", textAlign:"left"}} key={student.id}>
         Id:{student.id}<br/>
         Name:{student.name}<br/>
         Address:{student.address}

        </Paper>)
}) */


  return (
    <Container>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
    >
            <Paper elevation={3} style={paperStyle}>
      <TextField id="outlined-basic" padding="5px" label="Name" variant="outlined" fullWidth 
      value={name} 
      onChange={e => setName(e.target.value)}/>
      <TextField id="outlined-basic" padding="5px" label="Address" variant="outlined" fullWidth 
      value={address} 
      onChange={e => setAddress(e.target.value)}/>
      <Button variant="contained" color="secondary" onClick={handleClick}>
        Submit
      </Button>
      </Paper>
      <h1>Students List</h1><br/>
      <Paper elevation={3} style={paperStyle}>
      
      {/* {studentCards} */}
      </Paper>
    </Box>
    
    </Container>
  );
}