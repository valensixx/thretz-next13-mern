//This is the SEO (SEARCH ENGINE OPTIMIZATION):

import { ClerkProvider } from "@clerk/nextjs"

export const metadata = {
    title: 'Threadz',
    description: 'Threadz, Next13 MERN applicaton with React, Next JS, TypeScript and MongoDB.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body className="">

                </body>
            </html>
        </ClerkProvider>
    )
}
