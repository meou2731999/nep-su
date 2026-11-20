import "./globals.css";

export const metadata = {
  title: "Cerava Dental Lab · Labo phục hình nha khoa",
  description:
    "Cerava Dental Lab — labo phục hình nha khoa dành cho bác sĩ và phòng khám.",
  icons: { icon: { url: "/mark.svg", type: "image/svg+xml" } },
};

export const viewport = {
  themeColor: "#1b3362",
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body id="top">{children}</body>
    </html>
  );
}
