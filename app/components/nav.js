import React from 'react'
import Link from 'next/link'

const nav = () => {
  return (
    <div>
        <ul className="flex space-x-4">

            <Link href='/'>Home</Link>
            <Link href='/my-team'>My Team</Link>
            <Link href='/leagues'>Leagues</Link>
            <Link href='/statistics'>Statistics</Link>
            <Link href='/prizes'>Prizes</Link>
            <Link href='/how-to-play'>How to play</Link>
            <Link href='/game-rules'>Game rules</Link>
            <Link href='/faqs'>FAQs</Link>
            <Link href='/terms'>T&Cs</Link>
            {/* TODO: add language dropdown*/}
        </ul>
    </div>
  )
}

export default nav