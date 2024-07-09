import { Head } from '@inertiajs/react'
import { Card } from '~/components/card'

export default function Login(props: { title: string }) {
    return (
        <>
            <Head title={`Homepage - ${props.title}`} />
            <div className="container">
                <Card
                >
                    <div className="title">{props.title}</div>
                </Card>
            </div>
        </>
    )
}
