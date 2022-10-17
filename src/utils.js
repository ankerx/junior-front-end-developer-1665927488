export const transformUrlPath = (path) => {
  return path.replace(/\s+/g, "-").toLowerCase();
};
