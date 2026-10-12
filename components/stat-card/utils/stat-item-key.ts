/**
 * Identity of one `items` entry across renders.
 *
 * The `kui-item-` prefix keeps a keyless item's position out of the namespace of
 * caller-supplied keys: `[{key: 1}, {}]` used to hand two different metrics the
 * same key, which let the diffing move a CountUp instance from one item to the
 * other. This rule and these strings are identical in both builds.
 */
export function statItemKey(item: { key?: string | number }, index: number): string {
  return String(item.key ?? `kui-item-${index}`);
}
