/** Checkout destinations (Zadeyo affiliate). */
export const CHECKOUT_URLS = {
  /** Primary cheat checkout — canonical path is `/go/valorant/`. */
  Valorant: 'https://zadeyo.com/go/SOOFIYAN?to=%2Fproducts%2Fvalorant',
  Warzone: 'https://zadeyo.com/go/SOOFIYAN?to=%2Fproducts%2Fvalorant',
  dayz: 'https://zadeyo.com/go/SOOFIYAN?to=%2Fproducts%2Fvalorant',
  hwidSpoofer: 'https://zadeyo.com/go/SOOFIYAN?to=%2Fproducts%2Fhwid-spoofer',
};

export const DISCORD_INVITE_URL = 'https://discord.com/invite/2gMnnaPWq';

export const CHECKOUT_PATH_REDIRECTS = new Map([
  ['/go/discord', DISCORD_INVITE_URL],
  ['/go/discord/', DISCORD_INVITE_URL],
  ['/go/valorant', CHECKOUT_URLS.Valorant],
  ['/go/valorant/', CHECKOUT_URLS.Valorant],
  ['/go/Warzone', CHECKOUT_URLS.Valorant],
  ['/go/Warzone/', CHECKOUT_URLS.Valorant],
  ['/go/dayz', CHECKOUT_URLS.dayz],
  ['/go/dayz/', CHECKOUT_URLS.dayz],
  ['/go/delta-force', CHECKOUT_URLS.Valorant],
  ['/go/delta-force/', CHECKOUT_URLS.Valorant],
  ['/go/hwid-spoofer', CHECKOUT_URLS.hwidSpoofer],
  ['/go/hwid-spoofer/', CHECKOUT_URLS.hwidSpoofer],
]);

export function resolveCheckoutPathRedirect(pathname) {
  const direct = CHECKOUT_PATH_REDIRECTS.get(pathname);
  if (direct) return direct;

  if (pathname !== '/' && !pathname.endsWith('/')) {
    return CHECKOUT_PATH_REDIRECTS.get(`${pathname}/`) ?? null;
  }

  return null;
}
