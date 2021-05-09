import React from "react";
import "./App.css";
import Layout from "Layout";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

// Dark theme
const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
  },
  overrides: {
    MuiCard: {
      root: {
        // boxShadow: "2px 2px 2px 0px rgba(255,255,255, 0.5)",
      },
    },
  },
  typography: {
    fontFamily: 'Comic Neue'
  }
});

function App() {
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={darkTheme}>
        <div className="App">
          <Layout />
        </div>
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
