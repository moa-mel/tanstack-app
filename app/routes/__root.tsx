import {
    Outlet,
    createRootRoute,
    HeadContent,
    Scripts,
  } from '@tanstack/react-router';
  import type { ReactNode } from 'react';
  import appCSS from '../styles/app.css?url';
  import Header from '../components/Header';
  
  export const Route = createRootRoute({
    head: () => ({
      meta: [
        {
          charSet: 'utf-8',
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
        {
          title: 'TanStack Start Starter',
        },
      ],
      links: [{ rel: 'stylesheet', href: appCSS }],
    }),
    component: RootComponent,
  });
  
  function RootComponent() {
    return (
      <RootDocument>
        <Header />
        <main className='max-w-4xl mx-auto pt-10'>
        <Outlet />
        </main>
      </RootDocument>
    );
  }
  
  function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
    return (
      <html>
        <head>
          <HeadContent />
        </head>
        <body>
          {children}
          <Scripts />
        </body>
      </html>
    );
  }