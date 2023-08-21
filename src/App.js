import './App.css';
import { Footer, Header } from './component';
import { Allroute} from "./routes/Allroute"

function App() {
  return (
    <div className="dark:bg-slate-900">
     <Header />
     <Allroute />
     <Footer />
    </div>
  );
}

export default App;
