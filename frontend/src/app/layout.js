import "./globals.css";
import StoreProvider from "./StoreProvider";
export const metadata = {
  title: "authPage",
  description: "Generated by Sumit",
};

export default function RootLayout( { children } ) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <StoreProvider>
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
