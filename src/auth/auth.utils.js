import Bluebird from 'bluebird';
import bcrypt from 'bcrypt';

// Promisify bcrypt API
Bluebird.promisifyAll(bcrypt);

/**
 * Compare user password with the database record.
 * @param {string} passwordFromUser - plain text password provided by the user.
 * @param {string} passwordFromDB - hashed password stored in the database.
 */
export function comparePasswords (passwordFromUser, passwordFromDB) {
  return bcrypt.compareAsync(passwordFromUser, passwordFromDB);
}

/**
 * Create password hash that will be stored in the database.
 * @param {string} password - plain text password to hash.
 */
export function async hashPassword (password) {
  const salt = await bcrypt.genSaltAsync(10);
  return bcrypt.hashAsync(password, salt);
}