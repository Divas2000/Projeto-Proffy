import { getUserSession } from "@/helpers/getUserSession";

export default async function Welcome() {
  const user = await getUserSession();

  return <span>{JSON.stringify(user)}</span>;
}
