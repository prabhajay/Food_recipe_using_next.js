import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h1>This page can be not found</h1>
      <Link href="/">Back to home page</Link>
    </div>
  );
}
