import "./globals.css";
import "./page.css";

export const metadata = {
  title: "GiftCardCheck | GiftCardMall & MyGift Balance Guide",
  description:
    "Independent information about GiftCardMall and MyGift balance instructions, prepaid card activation, Visa usage, troubleshooting, and card safety.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
