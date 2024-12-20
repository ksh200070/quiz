import Link from "next/link";
import { connectDB } from "@/util/database";
import Card from "@/component/card";

export default async function Capital() {
  const client = await connectDB;
  const db = client.db("quiz");
  let result = await db.collection("capital").find().toArray();
  result = result.map((a) => {
    a._id = a._id.toString();
    return a;
  });
  return (
    <div>
      <div className="title">
        <h1 style={{ color: "yellow", fontSize: "30px" }}>수도 맞추기</h1>
      </div>
      {<Card items={result}></Card>}
    </div>
  );
}
