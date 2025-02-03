export default function RootLayout({ children }) {
  return (
 <>
        <header style={{background:"orange"}}>Header (Marketing)</header>
        {children}
        <footer style={{background:"brown"}}>Footer (Marketing)</footer>
 </>
      
  );
}
