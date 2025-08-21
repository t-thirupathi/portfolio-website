"use client";

import Link from "next/link";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Box,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useContext } from "react";
import { ThemeContext } from "./ThemeRegistry";

export default function NavBar() {
  const { mode, toggleMode } = useContext(ThemeContext);

  return (
    <AppBar
      position="sticky"
      color="default"
      elevation={2}
      sx={{
        backdropFilter: "blur(8px)",
        backgroundColor: "rgba(255, 255, 255, 0.8)",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Left side - Logo / Name */}
        <Typography
          variant="h6"
          component={Link}
          href="/"
          sx={{
            textDecoration: "none",
            color: "inherit",
            fontWeight: "bold",
            letterSpacing: "0.5px",
          }}
        >
          Thirupathi Thangavel
        </Typography>

        {/* Center - Navigation */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            component={Link}
            href="/"
            sx={{ color: "text.primary", fontWeight: 500 }}
          >
            Home
          </Button>
          <Button
            component={Link}
            href="/interview"
            sx={{ color: "text.primary", fontWeight: 500 }}
          >
            Interview Me
          </Button>
          <Button
            component={Link}
            href="/resume"
            sx={{ color: "text.primary", fontWeight: 500 }}
          >
            Resume
          </Button>
        </Box>

        {/* Right side - Social Icons */}
        <Box sx={{ display: "flex", gap: 1 }}>
          {/* Dark/Light mode toggle */}
          <IconButton onClick={toggleMode} sx={{ color: "text.primary" }}>
            {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>

          {/* Social links */}
          <IconButton
            href="https://github.com/t-thirupathi"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "text.primary" }}
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            href="https://linkedin.com/in/thirupathi-thangavel/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "text.primary" }}
          >
            <LinkedInIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
