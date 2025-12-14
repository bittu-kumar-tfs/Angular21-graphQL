import { HttpInterceptorFn } from '@angular/common/http';

/**
 * HTTP interceptor to include credentials (cookies) with requests
 * This is necessary for the JWT token stored in HTTP-only cookies
 */
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  // Clone request with credentials included
  const authReq = req.clone({
    withCredentials: true,
  });

  return next(authReq);
};
