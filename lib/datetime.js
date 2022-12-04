export default function countTime(until) {
  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  return Math.round(Math.abs((new Date() - new Date(until)) / oneDay));
}
