'use client'
import { SessionContext } from "@/components/context/Auth";
import { useEffect, useContext } from "react";
export default function Home() {
  console.log('ses', useContext(SessionContext))
  const user = useContext(SessionContext);
  console.log('object', user)
  const session = user?.session;
  console.log('obj', session)
  useEffect(() => {
    if (session) {
      if (session.user !== session) {
        setUser(session.user);
        setEmail(session.email);
        setName(session.nom);
      } else {
        console.log('sess')
      }
    }
    else {
      console.log('sss')
    }
  }, []);
  return (
    <>
      The Home Page
    </>
  );
}
