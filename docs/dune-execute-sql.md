# Dune Execute SQL

Execute custom SQL queries on Dune's blockchain data warehouse.

## Configuration

- **Performance Mode**: medium
- **Timeout**: 60000ms

## Usage

```tsx
import { useDuneQuery } from '@/hooks/useDuneQuery';

function MyComponent() {
  const { data, isLoading, error, execute } = useDuneQuery();
  
  const runQuery = async () => {
    await execute({
      sql: "SELECT * FROM dex.trades LIMIT 10",
      performance: "medium"
    });
  };
  
  return (
    <div>
      <button onClick={runQuery}>Run Query</button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
```
