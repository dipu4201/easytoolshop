const PLANS = [
  {
    name:'Starter', price:299,
    features:['1 Premium Tool','Instant Delivery','Email Support','30-Day Warranty'],
    popular:false
  },
  {
    name:'Pro', price:799,
    features:['5 Premium Tools','Instant Delivery','Priority Support','60-Day Warranty','Exclusive Deals'],
    popular:true
  },
  {
    name:'Business', price:1999,
    features:['Unlimited Tools','Instant Delivery','24/7 VIP Support','90-Day Warranty','Bulk Discounts'],
    popular:false
  },
]

export default function Plans() {
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
          MEMBERSHIP PLANS
        </div>
        <h2 style={{
          fontSize:'clamp(26px,5vw,40px)',
          fontWeight:900, color:'#fff', margin:0
        }}>
          Choose Your Plan
        </h2>
      </div>

      {/* Grid */}
      <div style={{
        display:'grid',
        gridTemplateColumns:'repeat(auto-fit,minmax(270px,1fr))',
        gap:24
      }}>
        {PLANS.map(plan => (
          <div key={plan.name} style={{
            background: plan.popular
              ? 'linear-gradient(135deg,rgba(124,58,237,0.2),rgba(109,40,217,0.1))'
              : 'rgba(255,255,255,0.03)',
            border:`2px solid ${plan.popular ? '#7C3AED' : 'rgba(255,255,255,0.08)'}`,
            borderRadius:20, padding:32,
            position:'relative'
          }}>
            {plan.popular && (
              <div style={{
                position:'absolute', top:-14,
                left:'50%', transform:'translateX(-50%)',
                background:'#7C3AED', color:'#fff',
                fontSize:12, fontWeight:800,
                padding:'4px 16px', borderRadius:20
              }}>⭐ MOST POPULAR</div>
            )}

            <h3 style={{
              color:'#fff', fontSize:22,
              fontWeight:800, marginBottom:8
            }}>{plan.name}</h3>

            <div style={{marginBottom:24}}>
              <span style={{
                fontSize:40, fontWeight:900,
                color: plan.popular ? '#A78BFA' : '#fff'
              }}>৳{plan.price}</span>
              <span style={{color:'#6B7280'}}>/month</span>
            </div>

            <ul style={{
              listStyle:'none', padding:0, margin:'0 0 28px',
              display:'flex', flexDirection:'column', gap:10
            }}>
              {plan.features.map(f => (
                <li key={f} style={{
                  color:'#CBD5E1', fontSize:14,
                  display:'flex', alignItems:'center', gap:8
                }}>
                  <span style={{color:'#A78BFA'}}>✓</span> {f}
                </li>
              ))}
            </ul>

            <a href="/register" style={{
              display:'block', textAlign:'center',
              background: plan.popular
                ? 'linear-gradient(135deg,#7C3AED,#6D28D9)'
                : 'rgba(124,58,237,0.15)',
              border: plan.popular ? 'none' : '1px solid rgba(124,58,237,0.3)',
              color: plan.popular ? '#fff' : '#A78BFA',
              padding:'13px 0', borderRadius:12,
              fontWeight:700, fontSize:15,
              textDecoration:'none'
            }}>
              Get {plan.name} Plan
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
