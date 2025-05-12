import { useQuery } from "@tanstack/react-query"

export default function Home() {
    const { isPending, error, data } = useQuery({
        queryKey: ["homepageData"],
        queryFn: () => fetch("http://localhost:3000/").then(res => res.json())
    })

    if (isPending) return "Loading..."

    if (error) return "An error has occurred: " + error.message

    return (
        <div>
            <h1>Homepage content</h1>
            <p>{data.content}</p>
            <p>{data.ourNumber}</p>
        </div>
    )
}