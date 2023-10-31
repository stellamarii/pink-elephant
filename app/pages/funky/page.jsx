'use client'


import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useEffect, useState } from 'react'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from "@mui/material"




export default function Funky() {
  const [employees, setEmployees] = useState([])
  const supabase = createClientComponentClient()

	useEffect(() => {
    const getEmployees = async () => {
      const { data } = await supabase.from('employees').select()
      if (data) {
        setEmployees(data)
				//console.log(data)
      }
    }

    getEmployees()
  }, [supabase, setEmployees])

/* 	const deleteData = (id) => {
		console.log("deleted " + id.target.dataset)
	 		const { error } = await supabase
		.from('employees')
		.delete()
		.eq('id', 1) 
	} */

	return (	
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }}>
					<TableHead>
						<TableRow>
							<TableCell>Name</TableCell>
							<TableCell>Email</TableCell>
							<TableCell>Department</TableCell>
							<TableCell>Birthdate</TableCell>
							<TableCell>Delete</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{employees.map(({id, name, email, department, birthdate}) => (
							<TableRow
								key={id}
								sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
							>
								<TableCell>{name}</TableCell>
								<TableCell>{email}</TableCell>
								<TableCell>{department}</TableCell>
								<TableCell>{birthdate}</TableCell>
								<TableCell><Button 
									variant="contained"
									data-value={id}
									//onClick={deleteData}
								>Delete</Button></TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
  )
}