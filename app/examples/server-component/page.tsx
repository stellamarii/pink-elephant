// TODO: Duplicate or move this file outside the `_examples` folder to make it a route

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import { Checkbox } from "@mui/material"
import * as React from "react"

export const dynamic = "force-dynamic"

export default async function ServerComponent() {
  // Create a Supabase client configured to use cookies
  const supabase = createServerComponentClient({ cookies })

  // This assumes you have a `todos` table in Supabase. Check out
  // the `Create Table and seed with data` section of the README 👇
  // https://github.com/vercel/next.js/blob/canary/examples/with-supabase/README.md
  const { data: todos } = await supabase.from("todos").select()
	if (!todos) {
    return <p>No todos found</p>
  }

  return (	
    todos.map((todo) => (
			<List>
        <ListItem key={todo.id}>
          <ListItemText primary={todo.title}/>
          <Checkbox/>
        </ListItem>
			</List>
		))		
    
  )
}