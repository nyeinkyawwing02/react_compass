export default function Heading({ title = 'Hello', subtitle = 'Subtitle' }) {
    return (
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-20">
            <h2 className="mb-4 text-4xl tracking-wide font-extrabold">{title}</h2>
            <p className="mb-5 sm:text-xl">{subtitle}</p>
        </div>
    )
}
