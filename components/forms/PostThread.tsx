"use client"

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
//import { UserValidation } from "@/lib/validations/user";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
//mport { updateUser } from "@/lib/actions/user.actions";
import { usePathname, useRouter } from "next/navigation";

interface Props {
    user: {
        id: string,
        objectId: string,
        username: string,
        name: string,
        bio: string,
        image: string,
    }
    btnTitle: string;
}

function PostThread( {userId}: {userId: string}){
    const router = useRouter();
    const pathname = usePathname();

    const form = useForm({
        resolver: zodResolver(),
        defaultValues: {
           thread: '',
           accountId: userId,
           
        }
    });
   return <h1>Post Thread Form</h1>
}

export default PostThread;