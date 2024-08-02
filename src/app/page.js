'use client'
import { SessionContext } from "@/components/context/Auth";
import { useEffect, useContext } from "react";
export default function Home() {
  console.log('ses', useContext(SessionContext))
  const user = useContext(SessionContext);
  console.log('object', user)
  const session = user?.session;
  console.log('obj', session)
  return (
    <>
      {session.role == 1 && 'The Home Page'}
      {session.role == 2 && 'The Home Page2'}
      {/* {session.role == 3 && 'The Home Page3'} */}
    </>
  );
}
