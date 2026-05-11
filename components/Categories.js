const CATEGORIES = [
  { name:'AI Tools', icon:'🤖', count:12, color:'#7C3AED' },
  { name:'Design', icon:'🎨', count:8, color:'#DB2777' },
  { name:'Streaming', icon:'🎬', count:6, color:'#DC2626' },
  { name:'VPN', icon:'🔒', count:5, color:'#059669' },
  { name:'Education', icon:'🎓', count:9, color:'#D97706' },
  { name:'Productivity', icon:'⚡', count:7, color:'#0891B2' },
]

export default function Categories() {
  return (
    <section style={{
      maxWidth:1280, margin:'0 auto',
      padding:'80px 20px'
    }}>
      {/* Title */}
      <div style={{textAlign:'center', marginBottom:48}}>
        <div style={{
          display:'inline-block',
          background:'rgba(124,58,237,0.15)',
          border:'1px solid rgba(124,58,237,0.3)',
          color:'#A78BFA', fontSize:12,
          fontWeight:700, padding:'4px 14px',
          borderRadius:20, marginBottom:14,
          letterSpacing:1
        }}>
          BROWSE CATEGORIES
        </div>
        <h2 style={{
          fontSize:'clamp(26px,5vw,40px)',
          fontWeight:900, color:'#fff', margin:0
        }}>
          Shop by Category
        </h2>
      </div>

      {/* Grid */}
      <div style={{
        display:'grid',
        gridTemplateColumns:'repeat(auto-fill, minmax(150px,1fr))',
        gap:16
      }}>
        {CATEGORIES.map(cat => (
          <a key={cat.name}
            href={`/shop?category=${cat.name}`}
            style={{
              background:'rgba(255,255,255,0.03)',
              border:`1px solid ${cat.color}30`,
              borderRadius:16, padding:'24px 16px',
              textAlign:'center', textDecoration:'none',
              display:'block', transition:'all 0.3s'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = cat.color
              e.currentTarget.style.transform = 'translateY(-4px)'
              e.currentTarget.style.background = `${cat.color}15`
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = `${cat.color}30`
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
            }}
          >
            <div style={{fontSize:36, marginBottom:10}}>{cat.icon}</div>
            <div style={{
              fontWeight:700, color:'#fff',
              fontSize:14, marginBottom:4
            }}>{cat.name}</div>
            <div style={{fontSize:12, color:'#6B7280'}}>
              {cat.count} products
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
