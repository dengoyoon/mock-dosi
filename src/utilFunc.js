const go = (...as) => as.reduce((a, f) => f(a));

export { go };
