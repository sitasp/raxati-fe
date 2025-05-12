import { useQuery } from "@tanstack/react-query"

export default function About() {
    const { isPending, error, data } = useQuery({
        queryKey: ["aboutPageData"],
        staleTime: 1000 * 60 * 30,
        queryFn: () => fetch("http://localhost:3000/about").then(res => res.json())
    })

    if (isPending) return "Loading..."

    if (error) return "An error has occurred: " + error.message

    return (
        <div>
            <h1>About page content</h1>
            <p>{data.content}</p>
            <p>{data.ourNumber}</p>
        </div>
    )
}