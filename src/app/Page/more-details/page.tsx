
// default server component
import { Suspense } from "react";
import DetailsClient from "./DetailsClient";

export default function MoreDetailsPage() {
  return (
    <section >
      <h1 className="text-5xl font-bold mb-4">More Details Page</h1>
      <p className="text-lg text-gray-600 max-w-xl">
        This is the MoreDetails page. Static content is fine here.
      </p>

      {/* Client component handles URL params */}
       <Suspense fallback={<p>Loading details...</p>}>
        <DetailsClient />
       </Suspense>
    </section>
  );
}
