export function compareAlphabetical(a, b) {
  return a > b ? -1 : a < b ? 1 : 0;
}

export function random(list) {
  if (Array.isArray(list)) {
    return list[Math.floor(Math.random() * list.length)];
  }

  if (typeof list === "object") {
    const key = random(Object.keys(list));
    return { [key]: list[key] };
  }

  if (typeof list === "string") {
    return list.replace(/ /g, "")[Math.floor(Math.random() * list.length)];
  }

  console.error(`TypeError: cannot select a random element from "${list}"`);
}
