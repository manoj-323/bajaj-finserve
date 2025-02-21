const JsonInput = ({ jsonInput, setJsonInput, handleSubmit }) => {
    return (
      <div className="mb-4 w-full max-w-md">
        <textarea
          className="w-full p-2 border rounded"
          rows="4"
          value={jsonInput}
          onChange={(e) => setJsonInput(e.target.value)}
          placeholder='Enter JSON, e.g. {"data":["M","1","334","4","B"]}'
        />
        <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded w-full" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    );
  };
  
  export default JsonInput;
  