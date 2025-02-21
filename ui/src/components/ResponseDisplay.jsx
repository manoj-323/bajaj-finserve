const ResponseDisplay = ({ response, selectedFilters }) => {
    const filteredResponse = {};
  
    selectedFilters.forEach((filter) => {
      if (response[filter]) {
        filteredResponse[filter] = response[filter];
      }
    });
  
    return (
      <div className="w-full max-w-md bg-gray-100 p-4 rounded">
        <h2 className="text-lg font-bold">Filtered Response</h2>
        {Object.keys(filteredResponse).length === 0 ? (
          <p>No filters selected</p>
        ) : (
          Object.entries(filteredResponse).map(([key, value]) => (
            <p key={key} className="mt-2">
              <strong>{key.replace("_", " ")}:</strong> {Array.isArray(value) ? value.join(", ") : value}
            </p>
          ))
        )}
      </div>
    );
  };
  
  export default ResponseDisplay;
  