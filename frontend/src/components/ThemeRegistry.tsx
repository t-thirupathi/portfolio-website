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
          primary: { main: "#1976d2" },
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
