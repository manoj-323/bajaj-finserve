import { useState } from "react";
import axios from "axios";
import JsonInput from "./components/JsonInput";
import MultiSelect from "./components/MultiSelect";
import ResponseDisplay from "./components/ResponseDisplay";

function App() {
  document.title = "2221323";

  const [jsonInput, setJsonInput] = useState("");
  const [response, setResponse] = useState(null);
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleSubmit = async () => {
    try {
      const parsedInput = JSON.parse(jsonInput);
      if (!parsedInput.data || !Array.isArray(parsedInput.data)) {
        alert("Invalid JSON format. Must contain an array under 'data' key.");
        return;
      }

      const res = await axios.post("http://127.0.0.1:8000/bfhl", parsedInput);
      setResponse(res.data);
    } catch (error) {
      alert("Invalid JSON or API error.");
    }
  };

  return (
    <div className="flex flex-col items-center p-8">
      <h1 className="text-2xl font-bold mb-4">Backend API Interface</h1>

      {/* JSON Input Component */}
      <JsonInput jsonInput={jsonInput} setJsonInput={setJsonInput} handleSubmit={handleSubmit} />

      {/* Multi-Select Dropdown (Visible after valid response) */}
      {response && <MultiSelect setSelectedFilters={setSelectedFilters} />}

      {/* Filtered Response Display */}
      {response && <ResponseDisplay response={response} selectedFilters={selectedFilters} />}
    </div>
  );
}

export default App;
