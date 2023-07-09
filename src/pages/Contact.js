import React from 'react'
import Layout from '../components/Layout/Layout'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'

const Contact = () => {
  return (
    <Layout>
        <Box sx={{my:5, ml:5, "& h4":{fontWeight:'bold', mb:2}}}>
          <Typography variant='h4'>
            Contect My Resturant
          </Typography>
          <p>
            cgedhgccx hghdgcdhv jvhdvjh uhgdefh yuhggvdge hbedv hgdvchj jhdvcj ejkjh uhw jgvwed jgxevhjv  
          </p>
        </Box>
        <Box sx={{m:3, width:"600px",ml:5, "@media (max-width:600px)":{width:"300px"}}}>
          <TableContainer component={Paper}>
            <Table aria-label='contact table'>
              <TableHead>
                <TableRow>
                  <TableCell sx={{bgcolor:'black',color:'white'}} align='center'>
                    Contact Details
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <SupportAgentIcon sx={{color:'red',pt:1}}/> 123456(Emergency)
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <EmailIcon sx={{color:'blue',pt:1}}/> sanjay@gmail.com
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <CallIcon sx={{color:'blue',pt:1}}/> 7906225445
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
    </Layout>
  )
}

export default Contact
