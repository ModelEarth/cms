// Site config is pre-loaded by localsite/js/localsite.js into window.CMS_SITE_CONFIG
// before sveltia-cms.js executes, so no fetch or YAML parsing is needed in the fork.
export const fetchSiteConfig = () => Promise.resolve(window.CMS_SITE_CONFIG || {});
