export default function Loading() {
    return (
        <>
            <div className="h-screen bg-[--bg-intro] relative">
                <progress className="progress w-[60%] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" ></progress>
            </div>
        </>
    )
}