import { Avatar, Box, Paper, Typography } from "@mui/material"


export const ProfilePage = () => {

    return (
        <Paper elevation={3} className="p-6 max-w-4xl mx-auto mt-6">
            <Box sx={{display: "flex", gap: 4}}>
                <Avatar sx={{width: 120, height: 120}} variant="square">

                </Avatar>

                <Box className="flex flex-col justify-center space-y-2">
                    <Typography variant="h6">Имя</Typography>
                    <Typography color="text.secondary">Почта</Typography>
                    <Typography color="text.secondary">Должность</Typography>
                </Box>
            </Box>
        </Paper>
    )
}