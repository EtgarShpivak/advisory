import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Advisory from "./pages/Advisory";

const App = () => (
  <TooltipProvider>
    <Toaster />
    <Advisory />
  </TooltipProvider>
);

export default App;
