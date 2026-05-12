const SESSION_KEY = 'revSync_session';

const demoAccounts = [
  { email: 'anas@revsync.app', password: '123456', name: 'Anas' },
  { email: 'rider@revsync.app', password: 'revsync123', name: 'Rider' },
  { email: 'test@revsync.app', password: 'demo123', name: 'Test User' },
];

export function validateCredentials(email, password) {
  return demoAccounts.some((account) => account.email === email && account.password === password);
}

export function getUserForCredentials(email, password) {
  return demoAccounts.find((account) => account.email === email && account.password === password) || null;
}

export function getSession() {
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    console.warn('Could not read session from storage:', e);
    return null;
  }
}

export function setSession(user) {
  try {
    localStorage.setItem(SESSION_KEY, JSON.stringify(user));
  } catch (e) {
    console.warn('Could not save session to storage:', e);
  }
}

export function clearSession() {
  try {
    localStorage.removeItem(SESSION_KEY);
  } catch (e) {
    console.warn('Could not clear session from storage:', e);
  }
}

export function isAuthenticated() {
  const session = getSession();
  return !!(session && session.email);
}

export function getCurrentUser() {
  return getSession();
}
