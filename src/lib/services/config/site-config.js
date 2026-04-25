import { parse } from 'yaml';

/**
 * @typedef {object} SiteConfig
 * @property {string[]} [extra_css] Stylesheets to inject into the CMS page.
 * @property {string[]} [extra_js] Scripts to inject into the CMS page.
 */

/**
 * Fetch and parse /config.yaml from the site root. Returns an empty object if the file is absent
 * or cannot be parsed, so missing config is never an error.
 * @returns {Promise<SiteConfig>}
 */
export const fetchSiteConfig = async () => {
  try {
    const response = await fetch('/config.yaml');

    if (!response.ok) return {};

    const text = await response.text();
    const parsed = parse(text);

    return parsed && typeof parsed === 'object' ? parsed : {};
  } catch {
    return {};
  }
};
