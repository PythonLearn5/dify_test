import { createNextApiHandler } from '@orpc/next';
import { appRouter } from '@/server';

const handler = createNextApiHandler({
  router: appRouter,
});

export { handler as GET, handler as POST };
