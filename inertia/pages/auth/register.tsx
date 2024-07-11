import { Head, Link } from '@inertiajs/react'
import { Button } from '~/components/button'
import { Card, CardContent } from '~/components/card'
import { Input } from '~/components/input'

export default function Register(props: { title: string }) {
    const { title } = props;
    return (
        <>
            <Head title={`Homepage - ${title}`} />
            <div className="h-screen md:h-3/4 flex items-center md:justify-center">
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
                                placeholder="Username"
                            />
                            <Input
                                type="text"
                                placeholder="Email Address"
                            />
                            <Input
                                type="password"
                                placeholder="Password"
                            />
                            <Input
                                type="password"
                                placeholder="Confirm Password"
                            />
                            <Button title="Register" className="w-full p-4" />
                            <hr />
                            <div className="flex flex-col items-center">
                                Have an Account?
                                <Link href="/login" className="flex justify-center font-bold no-underline text-md">
                                    Log in
                                </Link>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </>
    )
}
