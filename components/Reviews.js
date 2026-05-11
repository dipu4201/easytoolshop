const REVIEWS = [
  { name:'Rahim Uddin', avatar:'RU', text:'Got ChatGPT Plus within 2 minutes! Amazing service and super affordable. 100% legit!', rating:5, date:'2 days ago' },
  { name:'Fatima Khan', avatar:'FK', text:'Canva Pro is working perfectly. Great support team, resolved my issue in minutes.', rating:5, date:'1 week ago' },
  { name:'Arif Hossain', avatar:'AH', text:'Best place to buy premium tools in Bangladesh. bKash payment is super easy!', rating:5, date:'3 days ago' },
  { name:'Nasrin Akter', avatar:'NA', text:'Netflix premium at half price! Everything works perfectly. Will buy again.', rating:5, date:'5 days ago' },
  { name:'Sumon Islam', avatar:'SI', text:'Got Spotify Premium instantly after payment. Incredible support team!', rating:4, date:'1 week ago' },
  { name:'Mitu Begum', avatar:'MB', text:'Been buying from EasyToolShop for 6 months. Always satisfied!', rating:5, date:'2 weeks ago' },
]

export default function Reviews() {
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
          CUSTOMER REVIEWS
        </div>
        <h2 style={{
          fontSize:'clamp(26px,5vw,40px)',
          fontWeight:900, color:'#fff',
          margin:'0 0 8px'
        }}>
          What Customers Say
        </h2>
        <p style={{color:'#6B7280', fontSize:15}}>
          Trusted by thousands across Bangladesh
        </p>
      </div>

      {/* Grid */}
      <div style={{
        display:'grid',
        gridTemplateColumns:'repeat(auto-fill,minmax(270px,1fr))',
        gap:20
      }}>
        {REVIEWS.map((r,i) => (
          <div key={i} style={{
            background:'rgba(255,255,255,0.03)',
            border:'1px solid rgba(255,255,255,0.07)',
            borderRadius:16, padding:24
          }}>
            {/* Stars */}
            <div style={{color:'#FBBF24', fontSize:14, marginBottom:12}}>
              {'★'.repeat(r.rating)}{'☆'.repeat(5-r.rating)}
            </div>

            {/* Text */}
            <p style={{
              color:'#CBD5E1', fontSize:14,
              lineHeight:1.7, margin:'0 0 16px'
            }}>"{r.text}"</p>

            {/* Author */}
            <div style={{
              display:'flex',
              alignItems:'center', gap:12
            }}>
              <div style={{
                width:42, height:42,
                borderRadius:'50%',
                background:'linear-gradient(135deg,#7C3AED,#4F46E5)',
                display:'flex', alignItems:'center',
                justifyContent:'center',
                fontSize:13, fontWeight:700, color:'#fff'
              }}>{r.avatar}</div>
              <div>
                <div style={{
                  color:'#fff', fontWeight:700,
                  fontSize:14
                }}>{r.name}</div>
                <div style={{
                  color:'#6B7280', fontSize:12
                }}>{r.date}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
