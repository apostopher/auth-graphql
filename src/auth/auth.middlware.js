import get from 'lodash/get';
import last from 'lodash/last';

import { loadUser } from './auth.service';

export const authorize = authorizeUser();
export const authorizeMayBe = authorizeUser({ mayBe: true });

/**
 * Authorize users 
 * @param {object} options
 * @returns {function} express.js middleware function
 */
function authorizeUser(options) {
  return (req, res, next) => {
    const token = extractToken(req);
  };
}

/**
 * Extracts the `Bearer` token from the `Authorization` header.
 * Authorization header should be in the form `Bearer <token>`
 * @param {object} req - express.js `request` object
 * @returns {string} - extracted token
 */
function extractToken(req) {
  const headerParts = get(req, 'headers.authorization', '').split(' ');
  if (headerParts.length !== 2) return '';
  const [type, token] = headerParts;
  if (type !== 'Bearer') return '';
  return token;
}
