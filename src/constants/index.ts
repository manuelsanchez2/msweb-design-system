/**
 * @description Custom events
 * @type {Object}
 * @property {string} THEME_CHANGE - Theme change event / used to change the theme
 */
export const CUSTOM_EVENTS: Record<string, string> = {
  THEME_CHANGE: 'THEME_CHANGE',
}

export type KEY_OF_CUSTOM_EVENTS = keyof typeof CUSTOM_EVENTS
