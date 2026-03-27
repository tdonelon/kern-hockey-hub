
export default function RootLayout({children}:{children:React.ReactNode}){
  return(
    <html>
    <body style={{background:"#0B0F1A",color:"white",fontFamily:"Arial"}}>
    <div style={{padding:"20px",borderBottom:"1px solid #1e293b"}}>
    <h2>MN Elite Kern Hockey Hub</h2>
    </div>
    <div style={{padding:"20px"}}>
    {children}
    </div>
    </body>
    </html>
  )
}
