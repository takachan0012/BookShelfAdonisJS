import { Head, Link } from '@inertiajs/react'
import { Button } from '~/components/button'
import { Card, CardContent } from '~/components/card'
import { Input } from '~/components/input'

export default function Login(props: { title: string }) {
    const { title } = props;
    return (
        <>
            <Head title={`Homepage - ${title}`} />
            <div className="container flex items-center md:items-start md:justify-around">
                <div className="flex p-2 flex-col justify-center items-center gap-2 md:flex-row md:justify-around md:p-5">
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
                            <Link href="/register" className="flex justify-center">
                                <Button title="Create New Account" className="lg:w-1/2 p-4" />
                            </Link>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </>
    )
}
