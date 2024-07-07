import "./App.css";
import ErrorBoundary from "./compnents/ErrorBoundary.tsx";
import Home from "./pages/Home";

const fallbackUI = <h1>Something went wrong.</h1>;

const App = () => (
  <ErrorBoundary fallback={fallbackUI}>
    <Home />
  </ErrorBoundary>
);

export default App;
