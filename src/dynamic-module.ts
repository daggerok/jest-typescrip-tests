export const sum = (...args): number =>
  args.reduce((prev, curr) => prev + curr, 0);
