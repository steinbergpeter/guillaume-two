import { NextRequest, NextResponse } from 'next/server'

const api_url = 'https://enquotes.io/api/quotes/'

export async function GET() {
    try {
        const res = await fetch(api_url)
        const data = await res.json()
        const quote = await data[0].q
        if (!quote || typeof quote !== 'string')
            throw new Error('Invalid quote')
        return NextResponse.json({ quote }, { status: 201 })
    } catch (err) {
        const error = (err as Error).message
        return NextResponse.json({ error }, { status: 500 })
    }
}

export async function POST(req: NextRequest, ctx: any) {
    try {
        const { params } = ctx
        const body = await req.json()
        const res = await fetch(api_url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        })
        const data = await res.json()
        const quote = await data.q
        if (!quote || typeof quote !== 'string')
            throw new Error('Invalid quote')
    } catch (err) {
        const error = (err as Error).message
        return NextResponse.json({ error }, { status: 500 })
    }
}
