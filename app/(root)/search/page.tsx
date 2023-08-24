

import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { fetchUser } from "@/lib/actions/user.actions";



async function Page(){
    const user = await currentUser();

    if(!user) return null;

    const userInfo = await fetchUser(user.id);

    if(!userInfo?.onboarded) redirect('/onboarding');

    //fetch Users
  return (
    <section>
        <h1 className="head-text mb-10">
            Search
        </h1>
    </section>
  )
}

export default Page;