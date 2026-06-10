import { Box } from "@mui/material"
import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar"

function AppLayout() {
    return (
        <Box sx={{ display: 'flex', height: '100vh'}}>
            <Sidebar />
            <Box component="main" sx={{ flex: 1, p: 3}}>
                <Outlet />
            </Box>
        </Box>
    )
}

export default AppLayout