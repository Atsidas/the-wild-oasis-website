"use client";

import { createContext, useContext, useState } from "react";

const ReservationContex = createContext();

const initialState = { from: undefined, to: undefined };

function ReservationProvider({ children }) {
  const [range, setRange] = useState(initialState);
  const resetRange = () => setRange(initialState);

  return (
    <ReservationContex.Provider value={{ range, setRange, resetRange }}>
      {children}
    </ReservationContex.Provider>
  );
}

function useReservation() {
  const context = useContext(ReservationContex);

  if (context === undefined)
    throw new Error("useReservation was used outside provider");

  return context;
}

export { ReservationProvider, useReservation };
