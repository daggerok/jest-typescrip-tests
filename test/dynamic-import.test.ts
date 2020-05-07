import { expect, it } from '@jest/globals';

it('should import dynamic lazy module', async () => {
  const dynamicModule: any = await import('../src/dynamic-module');
  const total: any = await dynamicModule.sum(1, 2, 3);
  await expect(total).toBe(6);
});
