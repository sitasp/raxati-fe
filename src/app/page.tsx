export const revalidate = 10

export default async function HomePage() {
    console.log(`[ISR] Fetching data at ${new Date().toISOString()}`)

    const res = await fetch('http://localhost:3333/home') // ← don't add cache: 'no-store'

    if (!res.ok) {
        console.error(`[ISR] Fetch failed: ${res.status}`)
        throw new Error('Failed to fetch')
    }

    const data = await res.json()

    return (
        <div>
            <h1>Homepage content</h1>
            <p>{data.content}</p>
            <p>{data.ourNumber}</p>
        </div>
    )
}
