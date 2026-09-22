import type { CountUpPlugin } from "./countup";

export interface OdometerOptions {
  duration?: number;
  lastDigitDelay?: number;
  mode?: "step" | "continuous";
}

/** Bounded digit tracks shared by statistical numbers and badges. */
export class Odometer implements CountUpPlugin {
  private previous?: { text: string; value: number };
  private timer?: ReturnType<typeof setTimeout>;
  private frame?: number;
  private revision = 0;

  private options: OdometerOptions;

  constructor(options: OdometerOptions = {}) {
    this.options = options;
  }

  public destroy(): void {
    this.revision++;
    clearTimeout(this.timer);
    if (this.frame !== undefined) cancelAnimationFrame(this.frame);
    this.previous = undefined;
  }

  public render(elem: HTMLElement, text: string, value = Number(text.replaceAll(",", ""))): void {
    const previous = this.previous;
    this.previous = { text, value };
    if (previous?.text === text) return;
    this.revision++;
    const revision = this.revision;
    clearTimeout(this.timer);
    if (this.frame !== undefined) cancelAnimationFrame(this.frame);
    const rawDuration = this.options.duration ?? 0.8;
    const duration = Number.isFinite(rawDuration) ? Math.max(0, rawDuration) : 0;
    const reducedMotion =
      typeof matchMedia === "function" && matchMedia("(prefers-reduced-motion: reduce)").matches;
    const direction = previous && value < previous.value ? "down" : "up";
    const wrapper = document.createElement("span");
    wrapper.className = "odometer-numbers";
    wrapper.setAttribute("role", "img");
    wrapper.setAttribute("aria-label", text);
    wrapper.style.cssText = "display:inline-flex;line-height:1;vertical-align:middle";
    const settle = () => {
      if (revision !== this.revision) return;
      wrapper.textContent = text;
      wrapper.removeAttribute("data-direction");
    };
    elem.replaceChildren(wrapper);
    if (
      !previous ||
      previous.text === text ||
      value === previous.value ||
      duration === 0 ||
      reducedMotion
    ) {
      settle();
      return;
    }
    if (this.options.mode !== "continuous") wrapper.dataset.direction = direction;
    const length = Math.max(previous.text.length, text.length);
    const before = previous.text.padStart(length, " ");
    const after = text.padStart(length, " ");
    const continuous = this.options.mode === "continuous";
    const rollingDigits = Array.from(after).filter(
      (character, index) =>
        character !== before[index] && (/\d/.test(character) || /\d/.test(before[index])),
    ).length;
    let digitOrder = 0;
    const tracks: {
      element: HTMLSpanElement;
      distance: number;
      duration: number;
      direction: "up" | "down";
    }[] = [];
    for (let index = 0; index < length; index++) {
      const oldCharacter = before[index];
      const character = after[index];
      const slot = document.createElement("span");
      slot.setAttribute("aria-hidden", "true");
      slot.style.cssText = "display:inline-block;height:1em;overflow:hidden";
      const isDigit = /\d/.test(character) || /\d/.test(oldCharacter);
      const rollContinuously = continuous && character !== oldCharacter && isDigit;
      if ((!rollContinuously && character === oldCharacter) || !isDigit) {
        slot.textContent = character === " " ? "" : character;
      } else {
        const track = document.createElement("span");
        track.className = "odometer-track";
        track.style.cssText = "display:flex;flex-direction:column;transition:none";
        let characters = [oldCharacter, character];
        let trackDuration = duration;
        let trackDirection: "up" | "down" = direction;
        if (rollContinuously) {
          const start = /\d/.test(oldCharacter) ? Number(oldCharacter) : 0;
          const end = /\d/.test(character) ? Number(character) : 0;
          trackDirection = end < start ? "down" : end > start ? "up" : direction;
          const step = trackDirection === "up" ? 1 : -1;
          const distance = (((end - start) * step + 10) % 10) + Math.min(digitOrder, 2) * 10;
          characters = Array.from({ length: distance + 1 }, (_, offset) =>
            String((start + ((step * offset) % 10) + 10) % 10),
          );
          characters[0] = oldCharacter;
          characters[characters.length - 1] = character;
          if (characters.length === 1) characters = [oldCharacter, character];
          trackDuration =
            duration * (rollingDigits <= 1 ? 1 : 0.75 + (0.25 * digitOrder) / (rollingDigits - 1));
          digitOrder++;
        }
        const distance = characters.length - 1;
        track.dataset.direction = trackDirection;
        if (trackDirection === "down") characters.reverse();
        for (const item of characters) {
          const digit = document.createElement("span");
          digit.textContent = item === " " ? "\u00a0" : item;
          digit.style.cssText = "display:block;flex:none;height:1em;line-height:1";
          track.appendChild(digit);
        }
        track.style.transform =
          trackDirection === "up" ? "translateY(0)" : `translateY(-${distance}em)`;
        slot.appendChild(track);
        tracks.push({
          element: track,
          distance,
          duration: trackDuration,
          direction: trackDirection,
        });
      }
      wrapper.appendChild(slot);
    }
    // Commit the starting position before enabling the transition.
    void wrapper.offsetHeight;
    this.frame = requestAnimationFrame(() => {
      if (revision !== this.revision) return;
      this.frame = undefined;
      for (const track of tracks) {
        track.element.style.transition = `transform ${track.duration}s cubic-bezier(0.4, 0, 0.2, 1)`;
        track.element.style.transform =
          track.direction === "up" ? `translateY(-${track.distance}em)` : "translateY(0)";
      }
      this.timer = setTimeout(settle, duration * 1000);
    });
  }
}
