import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function ProtectedRouter({children}){
    const router = useRouter();

    useEffect(() =>{
        
            router.push("/dashboard");
    },[router]);

    return children ;
}