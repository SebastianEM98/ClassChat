import React from 'react'
import { Box, Paper, Typography } from '@mui/material'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import MessageInput from './MessageInput'
import Messages from './Messages'

const Chat = () => {

    return (
        <Box
            component={Paper}
            elevation={20}
            sx={{
                bgcolor: "secondary.light",
                height: "85vh",
                maxHeight: "85vh",
                display: "flex",
                flexDirection: "column",
                padding: "1rem",
                borderRadius: "10px"
            }}
        >
            <Typography variant="h6" sx={{ mb: "20px" }} color="white">
                Live Chat
                <FiberManualRecordIcon sx={{ fontSize: "15px", ml: "5px", color: "red" }} />
            </Typography>

            {/* Messages List */}
            <Messages />

            {/* Send Message Input */}
            <MessageInput />
        </Box>
    )
}

export default Chat