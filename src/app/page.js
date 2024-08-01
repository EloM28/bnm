'use client'
import { SessionContext } from "@/components/context/Auth";
export default function Home() {
  const user = useContext(SessionContext);
  const session = user.session;
  return (
    <>
      The Home Page
    </>
  );
}
