export default function Hero() {
  return (
    <section style={{
      minHeight:'100vh',
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      textAlign:'center',
      padding:'80px 20px 40px',
      background:'radial-gradient(ellipse at 60% 40%, rgba(124,58,237,0.2) 0%, transparent 60%), #0F172A',
      position:'relative',
      overflow:'hidden'
    }}>
      {/* Glow orbs */}
      <div style={{
        position:'absolute', width:400, height:400,
        borderRadius:'50%', top:'10%', left:'5%',
        background:'radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)',
        filter:'blur(60px)', pointerEvents:'none'
      }}/>
      <div style={{
        position:'absolute', width:300, height:300,
        borderRadius:'50%', bottom:'10%', right:'5%',
        background:'radial-gradient(circle, rgba(109,40,217,0.12) 0%, transparent 70%)',
        filter:'blur(60px)', pointerEvents:'none'
      }}/>

      <div style={{zIndex:1, maxWidth:860}}>
        {/* Badge */}
        <div style={{
          display:'inline-block',
          background:'rgba(124,58,237,0.15)',
          border:'1px solid rgba(124,58,237,0.3)',
          color:'#A78BFA', fontSize:12,
          fontWeight:700, padding:'6px 16px',
          borderRadius:20, marginBottom:20,
          letterSpacing:1
        }}>
          🚀 BANGLADESH'S #1 DIGITAL MARKETPLACE
        </div>

        {/* Heading */}
        <h1 style={{
          fontSize:'clamp(36px,7vw,70px)',
          fontWeight:900, lineHeight:1.1,
          margin:'0 0 20px',
          background:'linear-gradient(135deg,#fff 0%,#A78BFA 50%,#7C3AED 100%)',
          WebkitBackgroundClip:'text',
          WebkitTextFillColor:'transparent'
        }}>
          Get Premium Tools<br/>Instantly
        </h1>

        {/* Subtext */}
        <p style={{
          fontSize:'clamp(15px,2.5vw,19px)',
          color:'#94A3B8', marginBottom:16,
          lineHeight:1.7
        }}>
          Fast Delivery • Trusted Service • Affordable Price
        </p>
        <p style={{
          fontSize:15, color:'#7C3AED',
          fontWeight:600, marginBottom:40
        }}>
          ChatGPT • Canva • Netflix • Spotify • NordVPN & 100+ more
        </p>

        {/* Buttons */}
        <div style={{
          display:'flex', gap:16,
          justifyContent:'center',
          flexWrap:'wrap', marginBottom:60
        }}>
          <a href="/shop" style={{
            background:'linear-gradient(135deg,#7C3AED,#6D28D9)',
            color:'#fff', padding:'16px 40px',
            borderRadius:14, fontSize:16,
            fontWeight:800, textDecoration:'none',
            boxShadow:'0 0 40px rgba(124,58,237,0.4)'
          }}>
            🛒 Shop Now
          </a>
          <a href="/categories" style={{
            background:'rgba(255,255,255,0.05)',
            border:'1px solid rgba(255,255,255,0.15)',
            color:'#fff', padding:'16px 40px',
            borderRadius:14, fontSize:16,
            fontWeight:800, textDecoration:'none'
          }}>
            📋 Categories
          </a>
        </div>

        {/* Stats */}
        <div style={{
          display:'flex', gap:40,
          justifyContent:'center',
          flexWrap:'wrap'
        }}>
          {[
            ['50K+','Happy Customers'],
            ['100+','Premium Tools'],
            ['24/7','Support'],
            ['99%','Satisfaction']
          ].map(([val, label]) => (
            <div key={label} style={{textAlign:'center'}}>
              <div style={{
                fontSize:'clamp(22px,4vw,34px)',
                fontWeight:900, color:'#A78BFA'
              }}>{val}</div>
              <div style={{fontSize:13, color:'#64748B'}}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
