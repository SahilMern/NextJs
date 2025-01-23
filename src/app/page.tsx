import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      page
      <Link href={"/login"}>
        <button>Go to Login</button>
      </Link>
    </div>
  );
};

export default page;
