// This file just contains comments to be added to the top of the transpiled version of wp-lib-extra
// and a dummy export to be imported from other files so that they are recognized as modules.
export {};

/**
 * What to do before/after `npm run build`
 * 
 * 1. Comment out `export {};` at the bottom of src/wp-lib-extra.ts
 * 
 * 2. `npm run build` (and `npm run docs`)
 * 
 * 3. Un-comment out `export {};` at the bottom of src/wp-lib-extra.ts
 * 
 * (In types/wp-lib-extra.d.ts)
 * 
 * 4. Comment out the following
 * - declare const mwString
 * - interface FragmentOptions
 * - function processArgFragment
 * 
 * 5. Make interfaces global by adding `declare global {` (excluding `declare function` and `declare class`)
 * 
 * 6. Add the following interface to the bottom of the module
 */
// 	/** 
// 	 * The object exported by `ext.gadget.WpLibExtra`.
// 	 */
// 	interface WpLibExtra {
// 		/** The version of the library. */
// 		version: string;
// 		load: typeof load;
// 		sleep: typeof sleep;
// 		continuedRequest: typeof continuedRequest;
// 		massRequest: typeof massRequest;
//		getVipList: typeof getVipList;
//		getLtaList: typeof getLtaList;
// 		clean: typeof clean;
// 		getIcon: typeof getIcon;
// 		copyToClipboard: typeof copyToClipboard;
// 		arraysEqual: typeof arraysEqual;
// 		arraysDiff: typeof arraysDiff;
// 		Template: typeof Template;
// 		Wikitext: typeof Wikitext;
// 	}
// }
// export {};

// (Add the following to the top of MediaWiki:Gadget-WpLibExtra.js)
/**
 * This gadget is transpiled from TypeScript. You can find the source code at
 * @link https://github.com/Dr4goniez/wp-lib-extra/blob/main/src/wp-lib-extra.ts
 * and an API documentation at
 * @link https://dr4goniez.github.io/wp-lib-extra/index.html
 * The type definitions of the library are also available at
 * @link https://www.npmjs.com/package/wp-lib-extra
 * 
 * @author [[User:Dragoniez]]
 * @license CC-BY-SA-4.0
 * @version 1.2.1
 */