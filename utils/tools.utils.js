export const msToString = (ms) => {
  const time = new Date(ms).toISOString().slice(11, 19);
  if (time.split(":")[0] === "00") {
    return `${time.split(":")[1]}:${time.split(":")[2]}`;
  }
  return time;
};
