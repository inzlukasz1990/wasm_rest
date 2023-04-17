EXAMPLE

```
// App.js
import React, { useState } from "react";
import wasm_rest from "wasm_rest";

function App() {
  const [url, setUrl] = useState("");
  const [method, setMethod] = useState("GET");
  const [data, setData] = useState("");
  const [response, setResponse] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setResponse(null);

    let result;
    switch (method) {
      case "GET":
        result = await wasm_rest.get(url);
        break;
      case "POST":
        result = await wasm_rest.post(url, data);
        break;
      case "PUT":
        result = await wasm_rest.put(url, data);
        break;
      case "DELETE":
        result = await wasm_rest.deleteRequest(url);
        break;
      default:
        break;
    }

    setResponse(result);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Method:
          <select value={method} onChange={(e) => setMethod(e.target.value)}>
            <option value="GET">GET</option>
            <option value="POST">POST</option>
            <option value="PUT">PUT</option>
            <option value="DELETE">DELETE</option>
          </select>
        </label>
        <label>
          URL:
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </label>
        {method !== "GET" && method !== "DELETE" && (
          <label>
            Data:
            <textarea
              value={data}
              onChange={(e) => setData(e.target.value)}
            ></textarea>
          </label>
        )}
        <button type="submit">Submit</button>
      </form>
      {response && (
        <div>
          <h2>Response:</h2>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default App;
```

