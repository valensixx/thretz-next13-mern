import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { fetchUser } from "@/lib/actions/user.actions";
import ProfileHeader from "@/components/shared/ProfileHeader";
import { Tabs, TabsList } from "@radix-ui/react-tabs";


async function Page({params}:{params:{id: string}}){
    const user = await currentUser();

    if(!user) return null;

    const userInfo = await fetchUser(params.id);

    if(!userInfo?.onboarded) redirect('/onboarding');
    return (
        <section>
            <ProfileHeader 
                accountId={userInfo.id}
                authUserId={user.id}
                name={userInfo.name}
                username={userInfo.username}
                imgUrl={userInfo.imgUrl}
                bio={userInfo.bio}
            />

            <div className="mt-9">
                <Tabs>
                    <TabsList>
                        
                    </TabsList>
                </Tabs>
            </div>
        </section>
    )
}

export default Page;