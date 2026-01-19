"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { SessionProvider, useSession } from "next-auth/react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  return (
    <SessionProvider>
      <InnerAuthProvider>{children}</InnerAuthProvider>
    </SessionProvider>
  );
};

const InnerAuthProvider = ({ children }) => {
  const { data: session, status } = useSession();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      if (status === "authenticated") {
        try {
          const res = await fetch("/api/me", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
          });
          if (!res.ok) throw new Error("Failed to fetch user");
          const data = await res.json();
          setUser(data);
        } catch (error) {
          setUser(null);
        }
      } else if (status === "unauthenticated") {
        setUser(null);
      }
      setLoading(false);
    };

    fetchUser();
  }, [status]);
  const authData = {
    user,
    loading,
  };
  console.log("authprovider user:", user);


  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
