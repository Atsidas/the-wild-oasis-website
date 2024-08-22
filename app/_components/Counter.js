"use client";
import { useState } from "react";

export default function Counter({ users }) {
  const [counter, setCounter] = useState(0);

  console.log(users);

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>

      <h2>{counter}</h2>
      <button onClick={() => setCounter((c) => c + 1)}>+</button>
      <button onClick={() => setCounter((c) => c - 1)}>-</button>
      <button onClick={() => setCounter(0)}>Reset</button>
    </div>
  );
}
