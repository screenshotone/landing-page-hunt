import Link from "next/link";

export default function Layout({ children }) {
    return (
        <>
            <div className="md:container md:mx-auto px-4">
                <div className="flex justify-between">
                    <div className="pt-5">
                        <Link href="/">
                            <a className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Landing Page Hunt</a>
                        </Link>
                        <h2 className="pb-5">
                            An inspiration bucket for your next landing page.
                        </h2>
                    </div>
                    <div className="pt-8">
                        <Link href="/submit">
                            <a className="text-xl text-sky-500 underline decoration-sky-500 hover:no-underline">Submit your landing page</a>
                        </Link>
                    </div>
                </div>
                <main>{children}</main>
            </div>
        </>
    )
}