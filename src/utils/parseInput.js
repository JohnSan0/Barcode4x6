export function parseInputData(rawText) {
  const lines = rawText.split('\n').filter(Boolean);

  return lines.map((line) => {
    const refMatch = line.match(/(R\d{8})/);
    const parts = line.split('||');

    if (!refMatch || parts.length < 2) return null;

    const reference = refMatch[1].trim();
    const description = line
      .replace(reference, '')
      .split('||')[0]
      .trim();
    const vehicleInfo = parts[1].trim();

    return {
      reference,
      description,
      vehicleInfo,
    };
  }).filter(Boolean);
}
