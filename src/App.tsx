import React from "react";
import "./App.css";
import Layout from "components/Layout";
import { QueryClient, QueryClientProvider } from "react-query";

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Layout />
      </div>
    </QueryClientProvider>
  );
}

export default App;
