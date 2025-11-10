"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function DetailsClient() {
  const searchParams = useSearchParams();
  const ref = searchParams.get("ref");
  const user = searchParams.get("user");

  useEffect(() => {
    console.log("ref =>", ref);
    console.log("user =>", user);
  }, [ref, user]);

  return (
    <div className="mt-6">
      <p>Ref: {ref}</p>
      <p>User: {user}</p>
    </div>
  );
}
