export const revalidate = 10

export default async function RandomPetPage() {
    console.log(`[ISR] Fetching data at ${new Date().toISOString()}`)

    const res = await fetch('http://localhost:3333/random-pet') // ← don't add cache: 'no-store'

    if (!res.ok) {
        console.error(`[ISR] Fetch failed: ${res.status}`)
        throw new Error('Failed to fetch')
    }

    const data = await res.json()

    return (
        <div>
            <h1>Random Pet page content</h1>
            <p>{data.pet}</p>
            <p>{data.ourNumber}</p>
        </div>
    )
}
