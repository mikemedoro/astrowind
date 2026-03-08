import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button
      type="button"
      onClick={() => setCount((current) => current + 1)}
      style={{
        padding: '0.75rem 1rem',
        borderRadius: '0.5rem',
        border: '1px solid #444',
        background: '#1d4ed8',
        color: 'white',
        fontSize: '1rem',
        cursor: 'pointer',
      }}
    >
      Count: {count}
    </button>
  );
}
