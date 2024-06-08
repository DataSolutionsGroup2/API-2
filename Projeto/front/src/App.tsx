import { BrowserRouter } from "react-router-dom";
import Rotas from "./routes/Gestor";
import { EditorProvider } from "./contexts/EditorContext";

function App() {
  return (
    <EditorProvider>
      <BrowserRouter>
        <Rotas />
      </BrowserRouter>
    </EditorProvider>
  );
}

export default App;
