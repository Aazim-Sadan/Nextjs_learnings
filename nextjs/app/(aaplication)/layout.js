export default function RootLayout({ children }) {
  return (
 <>
        <header style={{background:"orange"}}>Header (Application)</header>
        {children}
        <footer style={{background:"brown"}}>Footer (Application)</footer>
 </>
      
  );
}
