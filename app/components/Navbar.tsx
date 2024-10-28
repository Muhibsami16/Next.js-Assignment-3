import Link from "next/link"
export default function NavBar(){
    return (
        <div>
            <ul className=" text-xl flex justify-start gap-10 bg-teal-300">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About Me</Link></li>
                <li><Link href="/education">Education</Link></li>
                <li><Link href="/contact">Contact Me</Link></li>
            </ul>
        </div>
    )
}