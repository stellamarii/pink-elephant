import { AppBar, CssBaseline, Toolbar, Typography } from "@mui/material";
import DashboardIcon from '@mui/icons-material/Dashboard';



export default function Header({title, user}) {

  return (
    <CssBaseline>
      <AppBar position="sticky" color="primary" sx={{ zIndex: 2000 }}>
          <Toolbar sx={{ backgroundColor: 'background.paper' }}>
            <DashboardIcon sx={{ color: '#444', mr: 2, transform: 'translateY(-2px)' }} />
            <Typography
              variant="h6"
              noWrap
              component="div"
              color="black">
              {title}
            </Typography>
          </Toolbar>
      </AppBar>
    </CssBaseline>
  )
}