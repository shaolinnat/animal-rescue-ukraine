export const metadata = {
  title: "Help Animals in Ukraine",
  description: "Helping stray dogs and cats near war zones in Ukraine"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
