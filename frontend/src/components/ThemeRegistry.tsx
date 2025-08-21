"use client";

import * as React from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import {
  ThemeProvider,
  CssBaseline,
  createTheme,
  PaletteMode,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

/**
 * Context so components (like NavBar) can trigger theme toggle
 */
export const ThemeContext = React.createContext<{
  mode: PaletteMode;
  toggleMode: () => void;
} | undefined>(undefined);

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  // Detect system preference
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const [mode, setMode] = React.useState<PaletteMode>("light");
  const [mounted, setMounted] = React.useState(false);

  // On mount, initialize theme from localStorage or system preference
  React.useEffect(() => {
    const savedMode = localStorage.getItem("theme") as PaletteMode | null;
    if (savedMode) {
      setMode(savedMode);
    } else {
      setMode(prefersDarkMode ? "dark" : "light");
    }
    setMounted(true);
  }, [prefersDarkMode]);

  const toggleMode = React.useCallback(() => {
    setMode((prev) => {
      const next = prev === "light" ? "dark" : "light";
      localStorage.setItem("theme", next);
      return next;
    });
  }, []);

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: { 
            main: mode === "dark" ? "#8B5FBF" : "#6B46C1",
            light: mode === "dark" ? "#A78BDB" : "#8B5FBF",
            dark: mode === "dark" ? "#6B46C1" : "#553C9A",
            contrastText: "#ffffff",
          },
          secondary: {
            main: mode === "dark" ? "#F59E0B" : "#D97706",
            light: mode === "dark" ? "#FCD34D" : "#F59E0B",
            dark: mode === "dark" ? "#D97706" : "#B45309",
            contrastText: "#ffffff",
          },
          background: {
            default: mode === "dark" ? "#0F0F23" : "#FAFAFC",
            paper: mode === "dark" ? "#1A1A2E" : "#FFFFFF",
          },
          text: {
            primary: mode === "dark" ? "#E5E7EB" : "#111827",
            secondary: mode === "dark" ? "#9CA3AF" : "#6B7280",
          },
          divider: mode === "dark" ? "#374151" : "#E5E7EB",
        },
        typography: {
          fontFamily:
            '"Inter", "SF Pro Display", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", sans-serif',
          h1: { fontWeight: 700, fontSize: "3.5rem", lineHeight: 1.2, letterSpacing: "-0.02em" },
          h2: { fontWeight: 600, fontSize: "2.5rem", lineHeight: 1.3, letterSpacing: "-0.01em" },
          h3: { fontWeight: 600, fontSize: "2rem", lineHeight: 1.4, letterSpacing: "-0.01em" },
          h4: { fontWeight: 600, fontSize: "1.5rem", lineHeight: 1.4 },
          h5: { fontWeight: 600, fontSize: "1.25rem", lineHeight: 1.5 },
          h6: { fontWeight: 600, fontSize: "1.125rem", lineHeight: 1.5 },
          body1: { fontSize: "1rem", lineHeight: 1.6 },
          body2: { fontSize: "0.875rem", lineHeight: 1.6 },
          button: { fontWeight: 500, textTransform: "none", letterSpacing: "0.01em" },
        },
        shape: { borderRadius: 8 },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                textTransform: "none",
                borderRadius: 8,
                fontWeight: 500,
                padding: "10px 24px",
                fontSize: "0.9rem",
                boxShadow: "none",
                "&:hover": {
                  boxShadow:
                    mode === "dark"
                      ? "0px 4px 12px rgba(139, 95, 191, 0.4)"
                      : "0px 4px 12px rgba(107, 70, 193, 0.25)",
                },
              },
              contained: {
                background:
                  mode === "dark"
                    ? "linear-gradient(135deg, #8B5FBF 0%, #6B46C1 100%)"
                    : "linear-gradient(135deg, #6B46C1 0%, #553C9A 100%)",
                "&:hover": {
                  background:
                    mode === "dark"
                      ? "linear-gradient(135deg, #A78BDB 0%, #8B5FBF 100%)"
                      : "linear-gradient(135deg, #8B5FBF 0%, #6B46C1 100%)",
                },
              },
              outlined: {
                borderColor: mode === "dark" ? "#8B5FBF" : "#6B46C1",
                color: mode === "dark" ? "#8B5FBF" : "#6B46C1",
                "&:hover": {
                  backgroundColor:
                    mode === "dark" ? "rgba(139, 95, 191, 0.08)" : "rgba(107, 70, 193, 0.08)",
                  borderColor: mode === "dark" ? "#A78BDB" : "#8B5FBF",
                },
              },
            },
          },
          MuiCard: {
            styleOverrides: {
              root: {
                borderRadius: 12,
                border:
                  mode === "dark"
                    ? "1px solid rgba(55, 65, 81, 0.6)"
                    : "1px solid rgba(229, 231, 235, 0.8)",
                backgroundImage: "none",
                backgroundColor: mode === "dark" ? "#1A1A2E" : "#FFFFFF",
              },
            },
          },
          MuiPaper: {
            styleOverrides: { root: { backgroundImage: "none" } },
          },
          MuiAppBar: {
            styleOverrides: {
              root: {
                background:
                  mode === "dark"
                    ? "linear-gradient(135deg, #0F0F23 0%, #1A1A2E 100%)"
                    : "linear-gradient(135deg, #FFFFFF 0%, #F8F9FB 100%)",
                backdropFilter: "blur(20px)",
                borderBottom:
                  mode === "dark"
                    ? "1px solid rgba(55, 65, 81, 0.3)"
                    : "1px solid rgba(229, 231, 235, 0.5)",
              },
            },
          },
          MuiChip: {
            styleOverrides: {
              root: { borderRadius: 6 },
              filled: {
                backgroundColor:
                  mode === "dark" ? "rgba(139, 95, 191, 0.15)" : "rgba(107, 70, 193, 0.1)",
                color: mode === "dark" ? "#A78BDB" : "#6B46C1",
              },
            },
          },
        },
      }),
    [mode]
  );

  if (!mounted) return null; // Prevent hydration mismatch

  return (
    <AppRouterCacheProvider options={{ key: "mui" }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ThemeContext.Provider value={{ mode, toggleMode }}>
          {children}
        </ThemeContext.Provider>
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
