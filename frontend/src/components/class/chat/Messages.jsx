import React from 'react'
import { Box, Typography } from '@mui/material';

const Messages = () => {

    const messages = [
        {
            name: "John Doe",
            date: "23/10/2024",
            content: "Hello everyone! Ready for today's class?"
        },
        {
            name: "Jane Smith",
            date: "23/10/2024",
            content: "Yes! Looking forward to it."
        },
        {
            name: "Juan Lopez",
            date: "23/10/2024",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a vulputate turpis, a tincidunt nunc. Donec quis sapien sed turpis."
        }
    ];

    return (
        <Box
            style={{
                flex: 1,
                overflowY: "auto",
                marginBottom: "1rem",
                paddingRight: '0.5rem',
            }}
        >
            {messages.map((message, index) => (
                <Box
                    key={index}
                    sx={{
                        marginBottom: '1rem',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                    }}
                >
                    <Box
                        sx={{
                            backgroundColor: '#c1c1c1',
                            borderRadius: '15px',
                            padding: '0.8rem',
                            maxWidth: '90%',
                        }}
                    >
                        <Typography variant="body1" fontWeight="bold">
                            {message.name} - {message.date}
                        </Typography>
                        <Typography variant="body2">
                            {message.content}
                        </Typography>
                    </Box>
                </Box>
            ))}
        </Box>
    )
}

export default Messages