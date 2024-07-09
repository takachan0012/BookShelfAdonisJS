import { cn } from "~/js/utils"

interface Props {
    className?: string | undefined,
    title?: string
}

const Button: React.FC<Props> = (props) => {
    const { className, title } = props;
    return (
        <button className={cn("py-2 px-4 rounded-md bg-violet-500 text-white", className)}>
            {title}
        </button>
    )
}

export { Button }