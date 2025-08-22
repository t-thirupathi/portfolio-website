"use client";

import { Box, Button, Typography, Paper } from "@mui/material";

export default function ResumePage() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      px={2}
    >
      {/* Download Button */}
      <Button
        variant="contained"
        color="primary"
        href="/Thirupathi Thangavel Resume.pdf"
        download
        sx={{ mb: 4 }}
      >
        Download Resume
      </Button>

      {/* Inline PDF Preview */}
      <Paper
        elevation={3}
        sx={{ width: "100%", maxWidth: 900, height: "80vh", borderRadius: 2 }}
      >
        <embed
          src="/Thirupathi Thangavel Resume.pdf"
          type="application/pdf"
          width="100%"
          height="100%"
        />
      </Paper>
    </Box>
  );
}
