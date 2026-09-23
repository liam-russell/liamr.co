import type { AreaId } from "./areas";

/**
 * Home-page state requested by a client-side navigation from a skill page
 * ("All skills" reopens that skill's card, "Area" expands an area).
 *
 * The URL carries the same state, but Next.js updates it after the new page's first render.
 * Reading it here lets the skill card render in that first commit, so it pairs with the
 * detail page in the view transition.
 */
export interface PendingHomeState {
    open?: string;
    area?: AreaId;
}

let pending: PendingHomeState | null = null;

export function setPendingHomeState(state: PendingHomeState) {
    pending = state;
}

export function peekPendingHomeState(): PendingHomeState | null {
    return pending;
}

export function clearPendingHomeState() {
    pending = null;
}
