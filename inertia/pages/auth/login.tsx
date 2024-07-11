import { Head, Link } from '@inertiajs/react'
import { Button } from '~/components/button'
import { Card, CardContent } from '~/components/card'
import { Input } from '~/components/input'

export default function Login(props: { title: string }) {
    const { title } = props;
    return (
        <>
            <Head title={`Homepage - ${title}`} />
            <div className="h-screen md:h-3/4 flex items-center md:items-center md:justify-center">
                <div className="flex p-2 flex-col justify-center items-center gap-2 md:flex-row md:justify-around md:px-5 md:py-8">
                    <div className="w-full text-center md:text-left md:w-1/2">
                        <h1 className="text-2xl md:text-5xl font-bold text-violet-500">LibraryHub</h1>
                        <p className="text-base md:text-xl mt-2">The Perfect Home for Your Books: Effortlessly Organize and Explore Your Literary Collection.</p>
                    </div>
                    <Card
                        className="w-full md:w-96"
                    >
                        <CardContent>
                            <Input
                                type="text"
                                placeholder="Email Address"
                            />
                            <Input
                                type="password"
                                placeholder="Password"
                            />
                            <Button title="Log In" className="w-full p-4" />
                            <div>
                                <Link href="/reset-password"
                                    className="text-violet-500 no-underline"
                                >Forgot your password?</Link>
                            </div>
                            <hr />
                            <div className="flex flex-col items-center">
                                Have not an Account?
                                <Link href="/register" className="flex justify-center font-bold no-underline text-md">
                                    Register
                                </Link>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </>
    )
}
