// src/api/index.ts
const base = process.env.NEXT_PUBLIC_BASE;

async function massageRes(res: Response) {
  const result = await res.json();
  return result;
}

export function loginFNC(username: string, password: string) {
  return fetch(`${base}auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  }).then(res => massageRes(res));
}