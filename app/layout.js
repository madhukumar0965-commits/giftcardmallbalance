import "./globals.css";
import "./page.css";

export const metadata = {
  title: "GiftCardMall/MyGift | Balance, Activation & Transactions",
  description:
    "Learn How to Check giftcardmall/mygift Balance, complete Activation, review Visa transactions, and verify your actual remaining funds with helpful tips for resolving prepaid gift card issues.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
