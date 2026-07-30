import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  /**
   * Defaults matter here: a bare `new QueryClient()` uses `staleTime: 0`, so
   * every mount (including simply navigating back to a page) refetches and
   * drops the UI into its loading state again — which is what made the
   * library feel slow to load even when the data had already been fetched
   * moments earlier. It also retries 3× with exponential backoff, so a
   * single transient failure stacks seconds of waiting before anything
   * renders.
   *
   * Public content on this site (articles, templates, certifications) changes
   * on the order of days, so caching it for a few minutes is both safe and
   * the difference between "instant" and "spinner every time".
   */
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 5 * 60 * 1000,
        gcTime: 30 * 60 * 1000,
        retry: 1,
        refetchOnWindowFocus: false,
      },
    },
  });

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });

  return router;
};
