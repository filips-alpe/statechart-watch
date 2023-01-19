function cn(element: string, modifier?: string) {
  const modPart = !modifier ? '' : `_${modifier}`;

  return `${element}${modPart}`;
}

export default cn;
