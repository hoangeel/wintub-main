'use client'
import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from 'components/Layout';
import { usePathname } from 'next/navigation';
const privateRoutes = ['/about-us'];

export default function RootLayout({ children }) {
  const pathname = usePathname();
	const isPrivate = privateRoutes.indexOf(pathname) > -1 ? true : false;
  console.log("isPrivate >>>" + isPrivate)
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head >
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet"/>
      </head>
      <body>
        <Layout isPrivate={isPrivate}>
          {children}
        </Layout>
      </body>
    </html>
  )
}
