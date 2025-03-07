import "./App.css";
import CarbonFootPrintForm from "./components/CarbonFootPrintForm";
import Header from "./components/Header";

function App() {
  return (
    <div className="w-full min-h-screen px-5 py-5 bg-gradient-to-r from-blue-100 to-blue-300">
      <div className="w-full h-full bg-white shadow-lg rounded-xl p-5 md:p-8">
        {/* Header Section */}
        <Header />

        {/* Form Section */}
        <CarbonFootPrintForm />
      </div>
    </div>
  );
}

export default App;
