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

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  // Detect system preference
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const [mode, setMode] = React.useState<PaletteMode>(
    prefersDarkMode ? "dark" : "light"
  );

  // Sync with system changes
  React.useEffect(() => {
    setMode(prefersDarkMode ? "dark" : "light");
  }, [prefersDarkMode]);

  const toggleMode = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: { 
            main: mode === "dark" ? "#8B5FBF" : "#6B46C1", // Deep purple inspired by Kovai
            light: mode === "dark" ? "#A78BDB" : "#8B5FBF",
            dark: mode === "dark" ? "#6B46C1" : "#553C9A",
            contrastText: "#ffffff",
          },
          secondary: {
            main: mode === "dark" ? "#F59E0B" : "#D97706", // Warm orange/amber
            light: mode === "dark" ? "#FCD34D" : "#F59E0B",
            dark: mode === "dark" ? "#D97706" : "#B45309",
            contrastText: "#ffffff",
          },
          background: {
            default: mode === "dark" ? "#0F0F23" : "#FAFAFC", // Deep navy to light gray
            paper: mode === "dark" ? "#1A1A2E" : "#FFFFFF",
          },
          text: {
            primary: mode === "dark" ? "#E5E7EB" : "#111827",
            secondary: mode === "dark" ? "#9CA3AF" : "#6B7280",
          },
          divider: mode === "dark" ? "#374151" : "#E5E7EB",
          grey: {
            50: "#F9FAFB",
            100: "#F3F4F6",
            200: "#E5E7EB",
            300: "#D1D5DB",
            400: "#9CA3AF",
            500: "#6B7280",
            600: "#4B5563",
            700: "#374151",
            800: "#1F2937",
            900: "#111827",
          },
          error: {
            main: mode === "dark" ? "#F87171" : "#EF4444",
            light: mode === "dark" ? "#FCA5A5" : "#F87171",
            dark: mode === "dark" ? "#DC2626" : "#B91C1C",
          },
          warning: {
            main: mode === "dark" ? "#FBBF24" : "#F59E0B",
            light: mode === "dark" ? "#FDE68A" : "#FCD34D",
            dark: mode === "dark" ? "#D97706" : "#B45309",
          },
          success: {
            main: mode === "dark" ? "#34D399" : "#10B981",
            light: mode === "dark" ? "#6EE7B7" : "#34D399",
            dark: mode === "dark" ? "#059669" : "#047857",
          },
          info: {
            main: mode === "dark" ? "#60A5FA" : "#3B82F6",
            light: mode === "dark" ? "#93C5FD" : "#60A5FA",
            dark: mode === "dark" ? "#2563EB" : "#1D4ED8",
          },
        },
        typography: {
          fontFamily: '"Inter", "SF Pro Display", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", sans-serif',
          h1: {
            fontWeight: 700,
            fontSize: "3.5rem",
            lineHeight: 1.2,
            letterSpacing: "-0.02em",
          },
          h2: {
            fontWeight: 600,
            fontSize: "2.5rem",
            lineHeight: 1.3,
            letterSpacing: "-0.01em",
          },
          h3: {
            fontWeight: 600,
            fontSize: "2rem",
            lineHeight: 1.4,
            letterSpacing: "-0.01em",
          },
          h4: {
            fontWeight: 600,
            fontSize: "1.5rem",
            lineHeight: 1.4,
          },
          h5: {
            fontWeight: 600,
            fontSize: "1.25rem",
            lineHeight: 1.5,
          },
          h6: {
            fontWeight: 600,
            fontSize: "1.125rem",
            lineHeight: 1.5,
          },
          body1: {
            fontSize: "1rem",
            lineHeight: 1.6,
          },
          body2: {
            fontSize: "0.875rem",
            lineHeight: 1.6,
          },
          button: {
            fontWeight: 500,
            textTransform: 'none',
            letterSpacing: "0.01em",
          },
        },
        shape: {
          borderRadius: 8,
        },
        shadows: mode === "dark" 
          ? [
              'none',
              '0px 1px 3px rgba(0, 0, 0, 0.3), 0px 1px 2px rgba(0, 0, 0, 0.4)',
              '0px 1px 5px rgba(0, 0, 0, 0.3), 0px 2px 2px rgba(0, 0, 0, 0.4)',
              '0px 1px 8px rgba(0, 0, 0, 0.3), 0px 3px 4px rgba(0, 0, 0, 0.4)',
              '0px 2px 4px rgba(0, 0, 0, 0.3), 0px 7px 13px rgba(0, 0, 0, 0.4)',
              '0px 3px 5px rgba(0, 0, 0, 0.3), 0px 9px 18px rgba(0, 0, 0, 0.4)',
              '0px 3px 5px rgba(0, 0, 0, 0.3), 0px 12px 23px rgba(0, 0, 0, 0.4)',
              '0px 4px 6px rgba(0, 0, 0, 0.3), 0px 16px 30px rgba(0, 0, 0, 0.4)',
              '0px 5px 7px rgba(0, 0, 0, 0.3), 0px 20px 38px rgba(0, 0, 0, 0.4)',
              '0px 5px 8px rgba(0, 0, 0, 0.3), 0px 22px 42px rgba(0, 0, 0, 0.4)',
              '0px 6px 9px rgba(0, 0, 0, 0.3), 0px 24px 46px rgba(0, 0, 0, 0.4)',
              '0px 6px 10px rgba(0, 0, 0, 0.3), 0px 26px 50px rgba(0, 0, 0, 0.4)',
              '0px 7px 11px rgba(0, 0, 0, 0.3), 0px 28px 54px rgba(0, 0, 0, 0.4)',
              '0px 7px 12px rgba(0, 0, 0, 0.3), 0px 30px 58px rgba(0, 0, 0, 0.4)',
              '0px 8px 13px rgba(0, 0, 0, 0.3), 0px 32px 62px rgba(0, 0, 0, 0.4)',
              '0px 8px 14px rgba(0, 0, 0, 0.3), 0px 34px 66px rgba(0, 0, 0, 0.4)',
              '0px 9px 15px rgba(0, 0, 0, 0.3), 0px 36px 70px rgba(0, 0, 0, 0.4)',
              '0px 9px 16px rgba(0, 0, 0, 0.3), 0px 38px 74px rgba(0, 0, 0, 0.4)',
              '0px 10px 17px rgba(0, 0, 0, 0.3), 0px 40px 78px rgba(0, 0, 0, 0.4)',
              '0px 10px 18px rgba(0, 0, 0, 0.3), 0px 42px 82px rgba(0, 0, 0, 0.4)',
              '0px 11px 19px rgba(0, 0, 0, 0.3), 0px 44px 86px rgba(0, 0, 0, 0.4)',
              '0px 11px 20px rgba(0, 0, 0, 0.3), 0px 46px 90px rgba(0, 0, 0, 0.4)',
              '0px 12px 21px rgba(0, 0, 0, 0.3), 0px 48px 94px rgba(0, 0, 0, 0.4)',
              '0px 12px 22px rgba(0, 0, 0, 0.3), 0px 50px 98px rgba(0, 0, 0, 0.4)',
              '0px 13px 23px rgba(0, 0, 0, 0.3), 0px 52px 102px rgba(0, 0, 0, 0.4)'
            ]
          : [
              'none',
              '0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 2px rgba(0, 0, 0, 0.08)',
              '0px 1px 5px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.08)',
              '0px 1px 8px rgba(0, 0, 0, 0.12), 0px 3px 4px rgba(0, 0, 0, 0.08)',
              '0px 2px 4px rgba(0, 0, 0, 0.12), 0px 7px 13px rgba(0, 0, 0, 0.08)',
              '0px 3px 5px rgba(0, 0, 0, 0.12), 0px 9px 18px rgba(0, 0, 0, 0.08)',
              '0px 3px 5px rgba(0, 0, 0, 0.12), 0px 12px 23px rgba(0, 0, 0, 0.08)',
              '0px 4px 6px rgba(0, 0, 0, 0.12), 0px 16px 30px rgba(0, 0, 0, 0.08)',
              '0px 5px 7px rgba(0, 0, 0, 0.12), 0px 20px 38px rgba(0, 0, 0, 0.08)',
              '0px 5px 8px rgba(0, 0, 0, 0.12), 0px 22px 42px rgba(0, 0, 0, 0.08)',
              '0px 6px 9px rgba(0, 0, 0, 0.12), 0px 24px 46px rgba(0, 0, 0, 0.08)',
              '0px 6px 10px rgba(0, 0, 0, 0.12), 0px 26px 50px rgba(0, 0, 0, 0.08)',
              '0px 7px 11px rgba(0, 0, 0, 0.12), 0px 28px 54px rgba(0, 0, 0, 0.08)',
              '0px 7px 12px rgba(0, 0, 0, 0.12), 0px 30px 58px rgba(0, 0, 0, 0.08)',
              '0px 8px 13px rgba(0, 0, 0, 0.12), 0px 32px 62px rgba(0, 0, 0, 0.08)',
              '0px 8px 14px rgba(0, 0, 0, 0.12), 0px 34px 66px rgba(0, 0, 0, 0.08)',
              '0px 9px 15px rgba(0, 0, 0, 0.12), 0px 36px 70px rgba(0, 0, 0, 0.08)',
              '0px 9px 16px rgba(0, 0, 0, 0.12), 0px 38px 74px rgba(0, 0, 0, 0.08)',
              '0px 10px 17px rgba(0, 0, 0, 0.12), 0px 40px 78px rgba(0, 0, 0, 0.08)',
              '0px 10px 18px rgba(0, 0, 0, 0.12), 0px 42px 82px rgba(0, 0, 0, 0.08)',
              '0px 11px 19px rgba(0, 0, 0, 0.12), 0px 44px 86px rgba(0, 0, 0, 0.08)',
              '0px 11px 20px rgba(0, 0, 0, 0.12), 0px 46px 90px rgba(0, 0, 0, 0.08)',
              '0px 12px 21px rgba(0, 0, 0, 0.12), 0px 48px 94px rgba(0, 0, 0, 0.08)',
              '0px 12px 22px rgba(0, 0, 0, 0.12), 0px 50px 98px rgba(0, 0, 0, 0.08)',
              '0px 13px 23px rgba(0, 0, 0, 0.12), 0px 52px 102px rgba(0, 0, 0, 0.08)'
            ],
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                textTransform: 'none',
                borderRadius: 8,
                fontWeight: 500,
                padding: '10px 24px',
                fontSize: '0.9rem',
                boxShadow: 'none',
                '&:hover': {
                  boxShadow: mode === "dark" 
                    ? '0px 4px 12px rgba(139, 95, 191, 0.4)'
                    : '0px 4px 12px rgba(107, 70, 193, 0.25)',
                },
              },
              contained: {
                background: mode === "dark" 
                  ? 'linear-gradient(135deg, #8B5FBF 0%, #6B46C1 100%)'
                  : 'linear-gradient(135deg, #6B46C1 0%, #553C9A 100%)',
                '&:hover': {
                  background: mode === "dark"
                    ? 'linear-gradient(135deg, #A78BDB 0%, #8B5FBF 100%)'
                    : 'linear-gradient(135deg, #8B5FBF 0%, #6B46C1 100%)',
                },
              },
              outlined: {
                borderColor: mode === "dark" ? "#8B5FBF" : "#6B46C1",
                color: mode === "dark" ? "#8B5FBF" : "#6B46C1",
                '&:hover': {
                  backgroundColor: mode === "dark" 
                    ? "rgba(139, 95, 191, 0.08)" 
                    : "rgba(107, 70, 193, 0.08)",
                  borderColor: mode === "dark" ? "#A78BDB" : "#8B5FBF",
                },
              },
            },
          },
          MuiCard: {
            styleOverrides: {
              root: {
                borderRadius: 12,
                border: mode === "dark" 
                  ? "1px solid rgba(55, 65, 81, 0.6)"
                  : "1px solid rgba(229, 231, 235, 0.8)",
                backgroundImage: 'none',
                backgroundColor: mode === "dark" ? "#1A1A2E" : "#FFFFFF",
              },
            },
          },
          MuiPaper: {
            styleOverrides: {
              root: {
                backgroundImage: 'none',
              },
            },
          },
          MuiAppBar: {
            styleOverrides: {
              root: {
                background: mode === "dark" 
                  ? "linear-gradient(135deg, #0F0F23 0%, #1A1A2E 100%)"
                  : "linear-gradient(135deg, #FFFFFF 0%, #F8F9FB 100%)",
                backdropFilter: 'blur(20px)',
                borderBottom: mode === "dark" 
                  ? "1px solid rgba(55, 65, 81, 0.3)"
                  : "1px solid rgba(229, 231, 235, 0.5)",
              },
            },
          },
          MuiChip: {
            styleOverrides: {
              root: {
                borderRadius: 6,
              },
              filled: {
                backgroundColor: mode === "dark" 
                  ? "rgba(139, 95, 191, 0.15)"
                  : "rgba(107, 70, 193, 0.1)",
                color: mode === "dark" ? "#A78BDB" : "#6B46C1",
              },
            },
          },
        },
      }),
    [mode]
  );

  return (
    <AppRouterCacheProvider options={{ key: "mui" }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* Expose toggleMode to children via context */}
        <ThemeContext.Provider value={{ mode, toggleMode }}>
          {children}
        </ThemeContext.Provider>
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}

/**
 * Context so components (like NavBar) can trigger theme toggle
 */
export const ThemeContext = React.createContext({
  mode: "light" as PaletteMode,
  toggleMode: () => {},
});