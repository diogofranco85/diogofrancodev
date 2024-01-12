import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

export default function BtnPrimary({ href = '', children, type, ...rest }) {
    console.log("type", href);

    if (type === "scroll") {
        return (
            <ScrollLink
                to="link"
                className="text-white mr-4 p-2 px-4 rounded border border-1 bg-pink-700 hover:bg-pink-600 border-pink-700"
                {...rest}
            >
                {children}
            </ScrollLink>
        )
    }

    if (type === "button") {
        return (
            <button
                href={href}
                className="text-white mr-4 p-2 px-4 rounded border border-1 bg-pink-700 hover:bg-pink-600 border-pink-700"
            >
                {children}
            </button>
        )

    }

    if (type === "anchor") {
        return (
            <a
                href={href}
                className="text-white mr-4 p-2 px-4 rounded border border-1 bg-pink-700 hover:bg-pink-600 border-pink-700"
            >
                {children}
            </a>
        )

    }

    return (
        <Link
            href={href}
            {...rest}
            className="text-white mr-4 p-2 px-4 rounded border border-1 bg-pink-700 hover:bg-pink-600 border-pink-700"
        >
            {children}
        </Link>
    )


}