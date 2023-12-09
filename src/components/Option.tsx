import clsx from "clsx"

export default function Option ({className}: {className?: string}) {
    return (
        <div className={clsx('w-28 p-2 flex items-center justify-center h-10 rounded-xl bg-green-600', className)}>
            <p className="text-white">Hello world</p>
        </div>
    )
}