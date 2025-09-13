import { test, expect } from '@playwright/test';

test('GET GitHub API – status 200', async ({ request }) => {
  const res = await request.get('https://api.github.com/repos/microsoft/playwright');
  expect(res.status()).toBe(200);
  const body = await res.json();
  expect(body).toHaveProperty('stargazers_count');
});
