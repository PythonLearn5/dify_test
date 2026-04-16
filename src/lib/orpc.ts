import { createORPCReact } from '@orpc/next/react';
import { AppRouter } from '@/server';
import ky from 'ky';

export const orpc = createORPCReact<AppRouter>({
  links: [
    () => (url, init) => {
      return ky(url.toString(), {
        method: init?.method,
        headers: init?.headers,
        body: init?.body,
      });
    },
  ],
});
