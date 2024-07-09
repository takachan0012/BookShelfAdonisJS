import { Head, Link } from '@inertiajs/react'
import { Button } from '~/components/button'

export default function Home(props: { version: number }) {
  return (
    <>
      <Head title="Homepage" />

      <div className="container">
        <div className="title">AdonisJS {props.version} x Inertia x React</div>

        <span className="text-2xl bg-red-500">
          Learn more about AdonisJS and Inertia.js by visiting the{' '}
          <a href="https://docs.adonisjs.com/guides/inertia">AdonisJS documentation</a>.
        </span>
        <Link href="/login">
          <Button
            title="Login"
            className=""
          />
        </Link>
        <Link href="/register">
          <Button
            title="Register"
            className=""
          />
        </Link>
      </div>
    </>
  )
}
