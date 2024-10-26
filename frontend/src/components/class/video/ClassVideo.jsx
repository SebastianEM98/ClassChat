import React from 'react'
import { Box, Paper, Typography } from '@mui/material'

const ClassVideo = () => {
    return (
        <>
            <Box
                component={Paper}
                elevation={20}
                sx={{ height: "75vh", borderRadius: "30px" }}
            >
                <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/example-video"
                    title="Class Video"
                    allow="fullscreen"
                    frameBorder="0"
                    style={{ borderRadius: "10px" }}
                />
            </Box>
            <Typography variant="h5" sx={{ color: "white", m: "20px" }} >
                Video Title Here
            </Typography>
        </>
    )
}

export default ClassVideo