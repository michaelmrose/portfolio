interface IconData {
    title: string,
    target: string
    svg: string
    viewBox: string
}
export default function SocialIcon({title,target,svg,viewBox}:IconData) {
    return (
        <li className="mr-12 text-xs mt-6">
            <a className="block hover:text-slate-200" href={target} target="_blank" rel="noreferrer">
                <span className="sr-only">{title}</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox={viewBox} fill="currentColor" className="h-6 w-6" aria-hidden="true">
                    <path d={svg} >
                    </path>
                </svg>
            </a>
        </li>
    )
}