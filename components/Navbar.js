import { useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav style={{
      position:'fixed', top:0, left:0, right:0, zIndex:100,
      background:'rgba(15,23,42,0.95)',
      backdropFilter:'blur(20px)',
      borderBottom:'1px solid rgba(124,58,237,0.2)',
      padding:'0 20px'
    }}>
      <div style={{
        maxWidth:1280, margin:'0 auto',
        height:65, display:'flex',
        alignItems:'center', justifyContent:'space-between'
      }}>
        {/* Logo */}
        <div style={{
          fontSize:20, fontWeight:900,
          background:'linear-gradient(135deg,#A78BFA,#7C3AED)',
          WebkitBackgroundClip:'text',
          WebkitTextFillColor:'transparent'
        }}>
          ⚡ EasyToolShop
        </div>

        {/* Desktop Links */}
        <ul style={{
          display:'flex', gap:28, listStyle:'none',
          margin:0, padding:0
        }}>
          {['Home','Shop','Categories','About','Contact'].map(link => (
            <li key={link}>
              <a href={`/${link.toLowerCase() === 'home' ? '' : link.toLowerCase()}`}
                style={{color:'#CBD5E1', textDecoration:'none', fontSize:14, fontWeight:500}}>
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Buttons */}
        <div style={{display:'flex', gap:10}}>
          <a href="/login" style={{
            background:'rgba(124,58,237,0.15)',
            border:'1px solid rgba(124,58,237,0.3)',
            color:'#A78BFA', padding:'8px 18px',
            borderRadius:8, fontSize:13,
            fontWeight:700, textDecoration:'none'
          }}>Login</a>
          <a href="/register" style={{
            background:'linear-gradient(135deg,#7C3AED,#6D28D9)',
            color:'#fff', padding:'8px 18px',
            borderRadius:8, fontSize:13,
            fontWeight:700, textDecoration:'none',
            border:'none'
          }}>Register</a>
        </div>
      </div>
    </nav>
  )
}
