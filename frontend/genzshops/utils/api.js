export async function fetchAPI(username, email, password) {
  const response = await fetch('/auth/local/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      email,
      password,
    }),
  });

  if (!response.ok) {
    const data = await response.json();
    throw new Error(data.message[0].messages[0].message);
  }
}
