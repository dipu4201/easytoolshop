const PRODUCTS = [
  { id:1, name:'ChatGPT Plus', category:'AI Tools', price:299, originalPrice:599, icon:'🤖', badge:'Bestseller', rating:4.9, reviews:2841 },
  { id:2, name:'Claude Pro', category:'AI Tools', price:249, originalPrice:499, icon:'🧠', badge:'New', rating:4.8, reviews:1204 },
  { id:3, name:'Midjourney', category:'AI Tools', price:199, originalPrice:399, icon:'🎨', badge:'Hot', rating:4.9, reviews:3102 },
  { id:4, name:'Canva Pro', category:'Design', price:149, originalPrice:299, icon:'✏️', badge:'Popular', rating:4.7, reviews:5621 },
  { id:5, name:'Netflix Premium', category:'Streaming', price:249, originalPrice:449, icon:'🎬', badge:'Trending', rating:4.6, reviews:7823 },
  { id:6, name:'Spotify Premium', category:'Streaming', price:99, originalPrice:199, icon:'🎵', badge:'Popular', rating:4.8, reviews:9231 },
]

export default function Products() {
  return (
    <section style={{
      maxWidth:1280, margin:'0 auto',
      padding:'0 20px 80px'
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
          🔥 BESTSELLERS
        </div>
        <h2 style={{
          fontSize:'clamp(26px,5vw,40px)',
          fontWeight:900, color:'#fff', margin:0
        }}>
          Trending Products
        </h2>
      </div>

      {/* Grid */}
      <div style={{
        display:'grid',
        gridTemplateColumns:'repeat(auto-fill, minmax(270px,1fr))',
        gap:24
      }}>
        {PRODUCTS.map(p => {
          const discount = Math.round((1 - p.price/p.originalPrice)*100)
          return (
            <div key={p.id} style={{
              background:'linear-gradient(135deg,rgba(255,255,255,0.04),rgba(124,58,237,0.06))',
              border:'1px solid rgba(124,58,237,0.2)',
              borderRadius:16, padding:20,
              position:'relative', transition:'all 0.3s'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor='rgba(124,58,237,0.6)'
              e.currentTarget.style.transform='translateY(-4px)'
              e.currentTarget.style.boxShadow='0 20px 40px rgba(124,58,237,0.15)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor='rgba(124,58,237,0.2)'
              e.currentTarget.style.transform='translateY(0)'
              e.currentTarget.style.boxShadow='none'
            }}
            >
              {/* Badge */}
              {p.badge && (
                <div style={{
                  position:'absolute', top:12, left:12,
                  background:'#7C3AED', color:'#fff',
                  fontSize:10, fontWeight:700,
                  padding:'3px 8px', borderRadius:20
                }}>{p.badge}</div>
              )}

              {/* Icon */}
              <div style={{
                fontSize:52, textAlign:'center',
                margin:'20px 0 14px',
                filter:'drop-shadow(0 0 20px rgba(124,58,237,0.4))'
              }}>{p.icon}</div>

              {/* Category */}
              <div style={{
                fontSize:11, color:'#7C3AED',
                fontWeight:600, marginBottom:4,
                letterSpacing:1
              }}>{p.category.toUpperCase()}</div>

              {/* Name */}
              <div style={{
                fontSize:17, fontWeight:700,
                color:'#fff', marginBottom:8
              }}>{p.name}</div>

              {/* Rating */}
              <div style={{
                display:'flex', alignItems:'center',
                gap:6, marginBottom:10
              }}>
                <span style={{color:'#FBBF24', fontSize:13}}>
                  {'★'.repeat(Math.floor(p.rating))}
                </span>
                <span style={{fontSize:12, color:'#9CA3AF'}}>
                  ({p.reviews.toLocaleString()})
                </span>
              </div>

              {/* Price */}
              <div style={{
                display:'flex', alignItems:'center',
                gap:8, marginBottom:16
              }}>
                <span style={{
                  fontSize:22, fontWeight:800,
                  color:'#A78BFA'
                }}>৳{p.price}</span>
                <span style={{
                  fontSize:13, color:'#6B7280',
                  textDecoration:'line-through'
                }}>৳{p.originalPrice}</span>
                <span style={{
                  fontSize:11,
                  background:'rgba(239,68,68,0.15)',
                  color:'#EF4444',
                  padding:'2px 6px', borderRadius:4,
                  fontWeight:700
                }}>{discount}% OFF</span>
              </div>

              {/* Buttons */}
              <div style={{display:'flex', gap:8}}>
                <a href={`/product/${p.id}`} style={{
                  flex:1,
                  background:'linear-gradient(135deg,#7C3AED,#6D28D9)',
                  color:'#fff', padding:'10px 0',
                  borderRadius:10, fontWeight:700,
                  fontSize:13, textDecoration:'none',
                  textAlign:'center'
                }}>
                  🛒 Add to Cart
                </a>
                <a href={`/product/${p.id}`} style={{
                  background:'rgba(124,58,237,0.1)',
                  border:'1px solid rgba(124,58,237,0.3)',
                  color:'#A78BFA', padding:'10px 14px',
                  borderRadius:10, fontWeight:700,
                  fontSize:13, textDecoration:'none'
                }}>
                  Buy
                </a>
              </div>
            </div>
          )
        })}
      </div>

      {/* View All */}
      <div style={{textAlign:'center', marginTop:40}}>
        <a href="/shop" style={{
          background:'linear-gradient(135deg,#7C3AED,#6D28D9)',
          color:'#fff', padding:'14px 40px',
          borderRadius:12, fontSize:15,
          fontWeight:700, textDecoration:'none'
        }}>
          View All Products →
        </a>
      </div>
    </section>
  )
}
