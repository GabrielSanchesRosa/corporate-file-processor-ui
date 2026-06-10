import { Box, List, ListItemButton, ListItemText, Typography } from '@mui/material'
import { height } from '@mui/system'
import { useNavigate, useLocation } from 'react-router-dom'

const SIDEBAR_WIDTH = 240

const navItems = [
    {label: 'Dashboard', path: '/'},
    {label: 'Files', path: '/files'},
    {label: 'Upload', path: '/upload'},
    {label: 'Errors', path: '/errors'}
]

function Sidebar() {
    const navigate = useNavigate()
    const location = useLocation()

    return (
        <Box sx={{ width: SIDEBAR_WIDTH, backgroundColor: '#1e293b', height: '100vh'}}>
            <Typography variant="h6" sx={{ color: 'white', p: 2}}>
                File Processor
            </Typography>
            <List>
                {navItems.map((item) => (
                    <ListItemButton key={item.path} 
                                    onClick={() => navigate(item.path)}
                                    selected={location.pathname === item.path}
                                    sx={{
                                        '&.Mui-selected': {
                                            backgroundColor: '#334155'
                                        },
                                        '&.Mui-selected:hover': {
                                            backgroundColor: '#334155'
                                        },
                                        '&:hover': {
                                            backgroundColor: '#273449'
                                        }
                                    }}
                                >
                        <ListItemText primary={item.label} sx={{ color: 'white'}}/>
                    </ListItemButton>
                ))}
            </List>
        </Box>
    )
}

export default Sidebar