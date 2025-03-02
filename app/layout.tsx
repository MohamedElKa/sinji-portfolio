import ClientLogic from "./ClientLogic"
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Sinji',
  description: 'Sinji Portfolio',
  icons: {
    icon: "/sinji.png"
  }
  // metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout(){
    return (
        <ClientLogic />
    )
}