import { BrowserRouter } from "react-router-dom";
import Rotas from "./routes";
import { ApontRevisorProvider } from "./contexts/ApontamentoRevisorContext";
import { EditorProvider } from "./contexts/EditorContext";
import { RevisorProvider } from "./contexts/RevisorContext";

function App() {
  return (
    <ApontRevisorProvider>
      <RevisorProvider>
        <EditorProvider>
          <BrowserRouter>
            <Rotas />
          </BrowserRouter>
        </EditorProvider>
      </RevisorProvider>
    </ApontRevisorProvider>
  );
}

export default App;
