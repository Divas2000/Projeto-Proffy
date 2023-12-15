import { getServerSession } from "next-auth";
import { authOptions } from "@/config/authOptions";

export async function getUserSession() {
  const session = await getServerSession(authOptions);

  if (session?.user && session.user.name) {
    const userName = session?.user?.name?.split(" ");

    return {
      ...session?.user,
      name: userName[0],
      lastName: userName[1],
    };
  }
}
