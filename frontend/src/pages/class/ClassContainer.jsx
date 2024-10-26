import React from 'react'
import Grid from '@mui/material/Grid2'
import ClassVideo from '../../components/class/video/ClassVideo'
import Chat from '../../components/class/chat/Chat';

const ClassContainer = () => {
    return (
        <Grid container spacing={2} style={{ height: "88vh", padding: "20px" }}>
            {/* Video Section (Left) */}
            <Grid size={{ xs: 12, md: 8 }}>
                <ClassVideo />
            </Grid>

            {/* Chat Section (Right) */}
            <Grid size={{ xs: 12, md: 4 }} >
                <Chat />
            </Grid>
        </Grid>
    );
}

export default ClassContainer