export default function Footer() {
  return (
    <footer style={{
      background:'#060D1A',
      borderTop:'1px solid rgba(255,255,255,0.06)',
      padding:'60px 20px 24px'
    }}>
      <div style={{maxWidth:1280, margin:'0 auto'}}>

        {/* Top Grid */}
        <div style={{
          display:'grid',
          gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))',
          gap:40, marginBottom:48
        }}>
          {/* Brand */}
          <div>
            <div style={{
              fontSize:18, fontWeight:900,
              background:'linear-gradient(135deg,#A78BFA,#7C3AED)',
              WebkitBackgroundClip:'text',
              WebkitTextFillColor:'transparent',
              marginBottom:12
            }}>⚡ EasyToolShop</div>
            <p style={{
              color:'#6B7280', fontSize:13,
              lineHeight:1.7, marginBottom:16
            }}>
              Premium digital tools at affordable prices. Trusted by 50,000+ customers in Bangladesh.
            </p>
            {/* Social */}
            <div style={{display:'flex', gap:10}}>
              {['📱','✈️','💬'].map(icon => (
                <div key={icon} style={{
                  width:34, height:34,
                  background:'rgba(124,58,237,0.15)',
                  borderRadius:8,
                  display:'flex', alignItems:'center',
                  justifyContent:'center',
                  cursor:'pointer', fontSize:16
                }}>{icon}</div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{
              color:'#fff', fontWeight:700,
              marginBottom:16, fontSize:15
            }}>Quick Links</h4>
            <ul style={{
              listStyle:'none', padding:0, margin:0,
              display:'flex', flexDirection:'column', gap:10
            }}>
              {['Home','Shop','Categories','About','Contact'].map(link => (
                <li key={link}>
                  <a href={`/${link.toLowerCase() === 'home' ? '' : link.toLowerCase()}`}
                    style={{
                      color:'#6B7280', fontSize:14,
                      textDecoration:'none'
                    }}>{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Account */}
          <div>
            <h4 style={{
              color:'#fff', fontWeight:700,
              marginBottom:16, fontSize:15
            }}>Account</h4>
            <ul style={{
              listStyle:'none', padding:0, margin:0,
              display:'flex', flexDirection:'column', gap:10
            }}>
              {['Login','Register','Dashboard','My Orders','Wishlist'].map(link => (
                <li key={link}>
                  <a href={`/${link.toLowerCase().replace(' ','-')}`}
                    style={{
                      color:'#6B7280', fontSize:14,
                      textDecoration:'none'
                    }}>{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 style={{
              color:'#fff', fontWeight:700,
              marginBottom:16, fontSize:15
            }}>Legal</h4>
            <ul style={{
              listStyle:'none', padding:0, margin:0,
              display:'flex', flexDirection:'column', gap:10
            }}>
              {['Terms & Conditions','Privacy Policy','Refund Policy'].map(link => (
                <li key={link}>
                  <a href="#" style={{
                    color:'#6B7280', fontSize:14,
                    textDecoration:'none'
                  }}>{link}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div style={{
          borderTop:'1px solid rgba(255,255,255,0.06)',
          paddingTop:24,
          display:'flex',
          justifyContent:'space-between',
          flexWrap:'wrap', gap:12
        }}>
          <span style={{color:'#4B5563', fontSize:13}}>
            © 2025 EasyToolShop. All rights reserved.
          </span>
          <span style={{color:'#4B5563', fontSize:13}}>
            💳 bKash • Nagad • Rocket
          </span>
        </div>
      </div>
    </footer>
  )
}
