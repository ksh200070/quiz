import Link from "next/link";
import { connectDB } from "@/util/database";
import Card from "@/component/card";

export default async function Home() {
  const client = await connectDB;
  const db = client.db("quiz");
  let result = await db.collection("country").find().toArray();
  let count = await db.collection("country").count();

  return (
    <div>
      <div className="title">
        <h1 style={{ color: "yellow", fontSize: "30px" }}>국기 맞추기</h1>
      </div>
      {<Card items={result}></Card>}
    </div>
  );
}
