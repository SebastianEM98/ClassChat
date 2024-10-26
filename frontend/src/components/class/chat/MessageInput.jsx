import React from 'react'
import { Box, TextField, Button } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'

const MessageInput = () => {
    return (
        <Box
            component="form"
            sx={{
                display: "flex",
                gap: "0.5rem",
            }}
        >
            <TextField
                fullWidth
                variant="outlined"
                placeholder="Type a message..."
            />
            <Button
                variant="contained"
                color="primary"
                type="submit"
                endIcon={<SendIcon />}
            >
                Enviar
            </Button>
        </Box>
    )
}

export default MessageInput