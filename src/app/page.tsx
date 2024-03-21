import { permanentRedirect, redirect } from "next/navigation";

export default function Home() {
  const website = process.env.WEBSITE;
  return permanentRedirect(`${website}`);
}
