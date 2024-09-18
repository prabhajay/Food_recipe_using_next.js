import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="text-xl text-red-700 text-center mt-14 ">
      <h1 className="font-extrabold text-3xl">Welcome to the Food Receipe</h1>
      <Link className="text-blue-500 font-extrabold" href={"/recipe-list"}>
        Go to recipe lists
      </Link>
    </div>
  );
}
