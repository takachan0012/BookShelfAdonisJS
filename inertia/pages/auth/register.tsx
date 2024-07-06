import { Head } from '@inertiajs/react'

export default function Register(props: { title: string }) {
    return (
        <>
            <Head title={`Homepage - ${props.title}`} />
            <div className="container">
                <div className="title">{props.title}</div>
            </div>
        </>
    )
}
