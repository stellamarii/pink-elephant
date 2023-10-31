import * as React from "react"
import Box from "@mui/material/Box"

import ServerComponent from "@/app/examples/server-component/page"
import { Typography } from "@mui/material"




export default async function Todos() {

	return (
		<Box>
			<Typography variant="h1">Todos</Typography>
			<ServerComponent />
		</Box>
		
	)
}