/**
 * An array of public routes that do not require authentication.
 * @type {string[]}
 * @example
 * ```typescript
 * export const publicRoutes = [
 *    "/",
 *   "/login",
 *  "/signup",
 * ];
 * ```
 *  * 
 */
export const publicRoutes = [
    "/",
];

/**
 * An array of private routes that require authentication.
 * @type {string[]}
 * @example
 * ```typescript
 * export const privateRoutes = [
 *    "/settings",
 *   "/account",
 *  "/dashboard",
 * ];
 * ```
 *  * 
 */
export const privateRoutes = [
    "/settings",
];

/**
 * An array of routes that are used for authentication.
 * These reoutes will redirect logged in users to /settings.
 * @type {string[]}
 * @example
 * ```typescript
 * export const authRoutes = [
 *      "/auth/login",
 *      "/auth/register",
 * ];
 * ```
 *  * 
 */

export const authRoutes = [
    "/auth/login",
    "/auth/register",
];

/**
 * The prefix for the api routes that aure used for authentication.
 * @type {string}
 * @example
 * ```typescript
 * export const apiPrefix = "/api/auth";
 * ```
 *  * 
 */
export const apiAuthPrefix = "/api/auth";


/**
 * The default redirect for the login page.
 * @type {string}
 * @example
 * ```typescript
 * export const DEFAULT_LOGIN_REDIRECT = "/settings";
 * ```
 *  * 
*/
export const DEFAULT_LOGIN_REDIRECT = "/home";


