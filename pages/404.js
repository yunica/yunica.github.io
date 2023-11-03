import { useEffect } from "react";
import Router from "next/router";

export default function Custom404() {
  useEffect(() => {
    Router.push("/");
  });
  console.log("404");
  return <div />;
}
