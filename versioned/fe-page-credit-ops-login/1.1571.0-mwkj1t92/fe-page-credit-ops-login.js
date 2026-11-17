(function () {
	'use strict';

	try{if(typeof document != 'undefined'){var elementStyle = document.createElement('style');elementStyle.appendChild(document.createTextNode("/*! tailwindcss v4.3.3 | MIT License | https://tailwindcss.com */\n@layer properties {\n  @supports (((-webkit-hyphens: none)) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color: rgb(from red r g b)))) {\n    *, :before, :after, ::backdrop {\n      --tw-translate-x: 0;\n      --tw-translate-y: 0;\n      --tw-translate-z: 0;\n      --tw-scale-x: 1;\n      --tw-scale-y: 1;\n      --tw-scale-z: 1;\n      --tw-rotate-x: initial;\n      --tw-rotate-y: initial;\n      --tw-rotate-z: initial;\n      --tw-skew-x: initial;\n      --tw-skew-y: initial;\n      --tw-pan-x: initial;\n      --tw-pan-y: initial;\n      --tw-pinch-zoom: initial;\n      --tw-space-y-reverse: 0;\n      --tw-space-x-reverse: 0;\n      --tw-divide-x-reverse: 0;\n      --tw-border-style: solid;\n      --tw-divide-y-reverse: 0;\n      --tw-leading: initial;\n      --tw-font-weight: initial;\n      --tw-tracking: initial;\n      --tw-ordinal: initial;\n      --tw-slashed-zero: initial;\n      --tw-numeric-figure: initial;\n      --tw-numeric-spacing: initial;\n      --tw-numeric-fraction: initial;\n      --tw-shadow: 0 0 #0000;\n      --tw-shadow-color: initial;\n      --tw-shadow-alpha: 100%;\n      --tw-inset-shadow: 0 0 #0000;\n      --tw-inset-shadow-color: initial;\n      --tw-inset-shadow-alpha: 100%;\n      --tw-ring-color: initial;\n      --tw-ring-shadow: 0 0 #0000;\n      --tw-inset-ring-color: initial;\n      --tw-inset-ring-shadow: 0 0 #0000;\n      --tw-ring-inset: initial;\n      --tw-ring-offset-width: 0px;\n      --tw-ring-offset-color: #fff;\n      --tw-ring-offset-shadow: 0 0 #0000;\n      --tw-outline-style: solid;\n      --tw-blur: initial;\n      --tw-brightness: initial;\n      --tw-contrast: initial;\n      --tw-grayscale: initial;\n      --tw-hue-rotate: initial;\n      --tw-invert: initial;\n      --tw-opacity: initial;\n      --tw-saturate: initial;\n      --tw-sepia: initial;\n      --tw-drop-shadow: initial;\n      --tw-drop-shadow-color: initial;\n      --tw-drop-shadow-alpha: 100%;\n      --tw-drop-shadow-size: initial;\n      --tw-backdrop-blur: initial;\n      --tw-backdrop-brightness: initial;\n      --tw-backdrop-contrast: initial;\n      --tw-backdrop-grayscale: initial;\n      --tw-backdrop-hue-rotate: initial;\n      --tw-backdrop-invert: initial;\n      --tw-backdrop-opacity: initial;\n      --tw-backdrop-saturate: initial;\n      --tw-backdrop-sepia: initial;\n      --tw-duration: initial;\n      --tw-ease: initial;\n      --tw-content: \"\";\n    }\n  }\n}\n\n@layer theme {\n  :root, :host {\n    --color-red-300: oklch(80.8% .114 19.571);\n    --color-red-700: oklch(50.5% .213 27.518);\n    --color-red-900: oklch(39.6% .141 25.723);\n    --color-amber-300: oklch(87.9% .169 91.605);\n    --color-green-600: oklch(62.7% .194 149.214);\n    --color-blue-50: oklch(97% .014 254.604);\n    --color-blue-500: oklch(62.3% .214 259.815);\n    --color-blue-950: oklch(28.2% .091 267.935);\n    --color-slate-50: oklch(98.4% .003 247.858);\n    --color-slate-100: oklch(96.8% .007 247.896);\n    --color-slate-900: oklch(20.8% .042 265.755);\n    --color-slate-950: oklch(12.9% .042 264.695);\n    --color-gray-100: oklch(96.7% .003 264.542);\n    --color-gray-200: oklch(92.8% .006 264.531);\n    --color-gray-400: oklch(70.7% .022 261.325);\n    --color-gray-700: oklch(37.3% .034 259.733);\n    --color-gray-900: oklch(21% .034 264.665);\n    --color-black: #000;\n    --color-white: #fff;\n    --spacing: .25rem;\n    --container-xs: 20rem;\n    --container-sm: 24rem;\n    --container-md: 28rem;\n    --container-lg: 32rem;\n    --text-xs: .75rem;\n    --text-xs--line-height: calc(1 / .75);\n    --text-sm: .875rem;\n    --text-sm--line-height: calc(1.25 / .875);\n    --text-base: 1rem;\n    --text-base--line-height: calc(1.5 / 1);\n    --text-lg: 1.125rem;\n    --text-lg--line-height: calc(1.75 / 1.125);\n    --text-xl: 1.25rem;\n    --text-xl--line-height: calc(1.75 / 1.25);\n    --text-2xl: 1.5rem;\n    --text-2xl--line-height: calc(2 / 1.5);\n    --text-4xl: 2.25rem;\n    --text-4xl--line-height: calc(2.5 / 2.25);\n    --font-weight-normal: 400;\n    --font-weight-medium: 500;\n    --font-weight-semibold: 600;\n    --font-weight-bold: 700;\n    --tracking-tight: -.025em;\n    --tracking-widest: .1em;\n    --leading-snug: 1.375;\n    --leading-normal: 1.5;\n    --leading-relaxed: 1.625;\n    --radius-xs: .125rem;\n    --radius-sm: .25rem;\n    --radius-md: .375rem;\n    --radius-lg: .5rem;\n    --radius-xl: .75rem;\n    --drop-shadow-sm: 0 1px 2px #00000026;\n    --ease-out: cubic-bezier(0, 0, .2, 1);\n    --ease-in-out: cubic-bezier(.4, 0, .2, 1);\n    --animate-spin: spin 1s linear infinite;\n    --animate-pulse: pulse 2s cubic-bezier(.4, 0, .6, 1) infinite;\n    --blur-sm: 8px;\n    --aspect-video: 16 / 9;\n    --default-transition-duration: .15s;\n    --default-transition-timing-function: cubic-bezier(.4, 0, .2, 1);\n    --default-font-family: figtree, ui-sans-serif, system-ui, sans-serif;\n    --default-mono-font-family: ui-monospace, monospace;\n    --color-background: var(--background);\n    --color-foreground: var(--foreground);\n    --color-border: var(--border);\n    --color-muted: var(--muted);\n  }\n}\n\n@layer base {\n  *, :after, :before, ::backdrop {\n    box-sizing: border-box;\n    border: 0 solid;\n    margin: 0;\n    padding: 0;\n  }\n\n  ::file-selector-button {\n    box-sizing: border-box;\n    border: 0 solid;\n    margin: 0;\n    padding: 0;\n  }\n\n  html, :host {\n    -webkit-text-size-adjust: 100%;\n    tab-size: 4;\n    line-height: 1.5;\n    font-family: var(--default-font-family, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", \"Noto Sans\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\");\n    font-feature-settings: var(--default-font-feature-settings, normal);\n    font-variation-settings: var(--default-font-variation-settings, normal);\n    -webkit-tap-highlight-color: transparent;\n  }\n\n  hr {\n    height: 0;\n    color: inherit;\n    border-top-width: 1px;\n  }\n\n  abbr:where([title]) {\n    -webkit-text-decoration: underline dotted;\n    text-decoration: underline dotted;\n  }\n\n  h1, h2, h3, h4, h5, h6 {\n    font-size: inherit;\n    font-weight: inherit;\n  }\n\n  a {\n    color: inherit;\n    -webkit-text-decoration: inherit;\n    -webkit-text-decoration: inherit;\n    -webkit-text-decoration: inherit;\n    text-decoration: inherit;\n  }\n\n  b, strong {\n    font-weight: bolder;\n  }\n\n  code, kbd, samp, pre {\n    font-family: var(--default-mono-font-family, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace);\n    font-feature-settings: var(--default-mono-font-feature-settings, normal);\n    font-variation-settings: var(--default-mono-font-variation-settings, normal);\n    font-size: 1em;\n  }\n\n  small {\n    font-size: 80%;\n  }\n\n  sub, sup {\n    vertical-align: baseline;\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n  }\n\n  sub {\n    bottom: -.25em;\n  }\n\n  sup {\n    top: -.5em;\n  }\n\n  table {\n    text-indent: 0;\n    border-color: inherit;\n    border-collapse: collapse;\n  }\n\n  :-moz-focusring:where(:not(iframe)) {\n    outline: auto;\n  }\n\n  progress {\n    vertical-align: baseline;\n  }\n\n  summary {\n    display: list-item;\n  }\n\n  ol, ul, menu {\n    list-style: none;\n  }\n\n  img, svg, video, canvas, audio, iframe, embed, object {\n    vertical-align: middle;\n    display: block;\n  }\n\n  img, video {\n    max-width: 100%;\n    height: auto;\n  }\n\n  button, input, select, optgroup, textarea {\n    font: inherit;\n    font-feature-settings: inherit;\n    font-variation-settings: inherit;\n    letter-spacing: inherit;\n    color: inherit;\n    opacity: 1;\n    background-color: #0000;\n    border-radius: 0;\n  }\n\n  ::file-selector-button {\n    font: inherit;\n    font-feature-settings: inherit;\n    font-variation-settings: inherit;\n    letter-spacing: inherit;\n    color: inherit;\n    opacity: 1;\n    background-color: #0000;\n    border-radius: 0;\n  }\n\n  :where(select:is([multiple], [size])) optgroup {\n    font-weight: bolder;\n  }\n\n  :where(select:is([multiple], [size])) optgroup option {\n    padding-inline-start: 20px;\n  }\n\n  ::file-selector-button {\n    margin-inline-end: 4px;\n  }\n\n  ::placeholder {\n    opacity: 1;\n  }\n\n  @supports (not ((-webkit-appearance: -apple-pay-button))) or (contain-intrinsic-size: 1px) {\n    ::placeholder {\n      color: currentColor;\n    }\n\n    @supports (color: color-mix(in lab, red, red)) {\n      ::placeholder {\n        color: color-mix(in oklab, currentcolor 50%, transparent);\n      }\n    }\n  }\n\n  textarea {\n    resize: vertical;\n  }\n\n  ::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n\n  ::-webkit-date-and-time-value {\n    min-height: 1lh;\n    text-align: inherit;\n  }\n\n  ::-webkit-datetime-edit {\n    display: inline-flex;\n  }\n\n  ::-webkit-datetime-edit-fields-wrapper {\n    padding: 0;\n  }\n\n  ::-webkit-datetime-edit {\n    padding-block: 0;\n  }\n\n  ::-webkit-datetime-edit-year-field {\n    padding-block: 0;\n  }\n\n  ::-webkit-datetime-edit-month-field {\n    padding-block: 0;\n  }\n\n  ::-webkit-datetime-edit-day-field {\n    padding-block: 0;\n  }\n\n  ::-webkit-datetime-edit-hour-field {\n    padding-block: 0;\n  }\n\n  ::-webkit-datetime-edit-minute-field {\n    padding-block: 0;\n  }\n\n  ::-webkit-datetime-edit-second-field {\n    padding-block: 0;\n  }\n\n  ::-webkit-datetime-edit-millisecond-field {\n    padding-block: 0;\n  }\n\n  ::-webkit-datetime-edit-meridiem-field {\n    padding-block: 0;\n  }\n\n  ::-webkit-calendar-picker-indicator {\n    line-height: 1;\n  }\n\n  :-moz-ui-invalid {\n    box-shadow: none;\n  }\n\n  button, input:where([type=\"button\"], [type=\"reset\"], [type=\"submit\"]) {\n    appearance: button;\n  }\n\n  ::file-selector-button {\n    appearance: button;\n  }\n\n  ::-webkit-inner-spin-button {\n    height: auto;\n  }\n\n  ::-webkit-outer-spin-button {\n    height: auto;\n  }\n\n  [hidden]:where(:not([hidden=\"until-found\"])) {\n    display: none !important;\n  }\n\n  :root, html, body {\n    height: 100%;\n  }\n\n  html {\n    scrollbar-gutter: stable;\n  }\n\n  * {\n    border-color: var(--color-border);\n  }\n\n  body {\n    background: var(--color-background);\n    color: var(--color-foreground);\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n}\n\n@layer components;\n\n@layer utilities {\n  .\\@container\\/card-header {\n    container: card-header / inline-size;\n  }\n\n  .pointer-events-none {\n    pointer-events: none;\n  }\n\n  .collapse {\n    visibility: collapse;\n  }\n\n  .invisible {\n    visibility: hidden;\n  }\n\n  .visible {\n    visibility: visible;\n  }\n\n  .sr-only {\n    clip-path: inset(50%);\n    white-space: nowrap;\n    border-width: 0;\n    width: 1px;\n    height: 1px;\n    margin: -1px;\n    padding: 0;\n    position: absolute;\n    overflow: hidden;\n  }\n\n  .not-sr-only {\n    clip-path: none;\n    white-space: normal;\n    width: auto;\n    height: auto;\n    margin: 0;\n    padding: 0;\n    position: static;\n    overflow: visible;\n  }\n\n  .absolute {\n    position: absolute;\n  }\n\n  .fixed {\n    position: fixed;\n  }\n\n  .relative {\n    position: relative;\n  }\n\n  .static {\n    position: static;\n  }\n\n  .sticky {\n    position: sticky;\n  }\n\n  .-inset-1 {\n    inset: calc(var(--spacing) * -1);\n  }\n\n  .inset-0 {\n    inset: 0;\n  }\n\n  .inset-x-0 {\n    inset-inline: 0;\n  }\n\n  .inset-y-0 {\n    inset-block: 0;\n  }\n\n  .end-4 {\n    inset-inline-end: calc(var(--spacing) * 4);\n  }\n\n  .end-8 {\n    inset-inline-end: calc(var(--spacing) * 8);\n  }\n\n  .-top-2\\.25 {\n    top: calc(var(--spacing) * -2.25);\n  }\n\n  .-top-12 {\n    top: calc(var(--spacing) * -12);\n  }\n\n  .top-0 {\n    top: 0;\n  }\n\n  .top-1\\.5 {\n    top: calc(var(--spacing) * 1.5);\n  }\n\n  .top-1\\/2 {\n    top: 50%;\n  }\n\n  .top-3\\.5 {\n    top: calc(var(--spacing) * 3.5);\n  }\n\n  .top-4 {\n    top: calc(var(--spacing) * 4);\n  }\n\n  .top-6 {\n    top: calc(var(--spacing) * 6);\n  }\n\n  .top-\\[38px\\] {\n    top: 38px;\n  }\n\n  .top-\\[50\\%\\] {\n    top: 50%;\n  }\n\n  .-right-12 {\n    right: calc(var(--spacing) * -12);\n  }\n\n  .right-0 {\n    right: 0;\n  }\n\n  .right-1 {\n    right: var(--spacing);\n  }\n\n  .right-2 {\n    right: calc(var(--spacing) * 2);\n  }\n\n  .right-3 {\n    right: calc(var(--spacing) * 3);\n  }\n\n  .-bottom-12 {\n    bottom: calc(var(--spacing) * -12);\n  }\n\n  .bottom-0 {\n    bottom: 0;\n  }\n\n  .bottom-3 {\n    bottom: calc(var(--spacing) * 3);\n  }\n\n  .-left-12 {\n    left: calc(var(--spacing) * -12);\n  }\n\n  .left-0 {\n    left: 0;\n  }\n\n  .left-1\\/2 {\n    left: 50%;\n  }\n\n  .left-2 {\n    left: calc(var(--spacing) * 2);\n  }\n\n  .left-\\[50\\%\\] {\n    left: 50%;\n  }\n\n  .isolate {\n    isolation: isolate;\n  }\n\n  .isolation-auto {\n    isolation: auto;\n  }\n\n  .z-0 {\n    z-index: 0;\n  }\n\n  .z-10 {\n    z-index: 10;\n  }\n\n  .z-20 {\n    z-index: 20;\n  }\n\n  .z-50 {\n    z-index: 50;\n  }\n\n  .col-start-2 {\n    grid-column-start: 2;\n  }\n\n  .row-span-2 {\n    grid-row: span 2 / span 2;\n  }\n\n  .row-start-1 {\n    grid-row-start: 1;\n  }\n\n  .\\!container {\n    width: 100% !important;\n  }\n\n  @media (min-width: 40rem) {\n    .\\!container {\n      max-width: 40rem !important;\n    }\n  }\n\n  @media (min-width: 48rem) {\n    .\\!container {\n      max-width: 48rem !important;\n    }\n  }\n\n  @media (min-width: 64rem) {\n    .\\!container {\n      max-width: 64rem !important;\n    }\n  }\n\n  @media (min-width: 80rem) {\n    .\\!container {\n      max-width: 80rem !important;\n    }\n  }\n\n  @media (min-width: 96rem) {\n    .\\!container {\n      max-width: 96rem !important;\n    }\n  }\n\n  .container {\n    width: 100%;\n  }\n\n  @media (min-width: 40rem) {\n    .container {\n      max-width: 40rem;\n    }\n  }\n\n  @media (min-width: 48rem) {\n    .container {\n      max-width: 48rem;\n    }\n  }\n\n  @media (min-width: 64rem) {\n    .container {\n      max-width: 64rem;\n    }\n  }\n\n  @media (min-width: 80rem) {\n    .container {\n      max-width: 80rem;\n    }\n  }\n\n  @media (min-width: 96rem) {\n    .container {\n      max-width: 96rem;\n    }\n  }\n\n  .-mx-1 {\n    margin-inline: calc(var(--spacing) * -1);\n  }\n\n  .-mx-4 {\n    margin-inline: calc(var(--spacing) * -4);\n  }\n\n  .mx-0\\.5 {\n    margin-inline: calc(var(--spacing) * .5);\n  }\n\n  .mx-2 {\n    margin-inline: calc(var(--spacing) * 2);\n  }\n\n  .mx-3\\.5 {\n    margin-inline: calc(var(--spacing) * 3.5);\n  }\n\n  .mx-auto {\n    margin-inline: auto;\n  }\n\n  .my-0 {\n    margin-block: 0;\n  }\n\n  .my-0\\.5 {\n    margin-block: calc(var(--spacing) * .5);\n  }\n\n  .my-0\\.5\\! {\n    margin-block: calc(var(--spacing) * .5) !important;\n  }\n\n  .my-1 {\n    margin-block: var(--spacing);\n  }\n\n  .ms-auto {\n    margin-inline-start: auto;\n  }\n\n  .-mt-4 {\n    margin-top: calc(var(--spacing) * -4);\n  }\n\n  .mt-1 {\n    margin-top: var(--spacing);\n  }\n\n  .mt-2 {\n    margin-top: calc(var(--spacing) * 2);\n  }\n\n  .mt-4 {\n    margin-top: calc(var(--spacing) * 4);\n  }\n\n  .mt-\\[1px\\] {\n    margin-top: 1px;\n  }\n\n  .mt-auto {\n    margin-top: auto;\n  }\n\n  .mb-2 {\n    margin-bottom: calc(var(--spacing) * 2);\n  }\n\n  .-ml-4 {\n    margin-left: calc(var(--spacing) * -4);\n  }\n\n  .ml-0\\.5 {\n    margin-left: calc(var(--spacing) * .5);\n  }\n\n  .ml-1 {\n    margin-left: var(--spacing);\n  }\n\n  .ml-auto {\n    margin-left: auto;\n  }\n\n  .box-border {\n    box-sizing: border-box;\n  }\n\n  .line-clamp-1 {\n    -webkit-line-clamp: 1;\n    -webkit-box-orient: vertical;\n    display: -webkit-box;\n    overflow: hidden;\n  }\n\n  .line-clamp-2 {\n    -webkit-line-clamp: 2;\n    -webkit-box-orient: vertical;\n    display: -webkit-box;\n    overflow: hidden;\n  }\n\n  .block {\n    display: block;\n  }\n\n  .contents {\n    display: contents;\n  }\n\n  .flex {\n    display: flex;\n  }\n\n  .flow-root {\n    display: flow-root;\n  }\n\n  .grid {\n    display: grid;\n  }\n\n  .hidden {\n    display: none;\n  }\n\n  .hidden\\! {\n    display: none !important;\n  }\n\n  .inline {\n    display: inline;\n  }\n\n  .inline-block {\n    display: inline-block;\n  }\n\n  .inline-flex {\n    display: inline-flex;\n  }\n\n  .inline-grid {\n    display: inline-grid;\n  }\n\n  .inline-table {\n    display: inline-table;\n  }\n\n  .list-item {\n    display: list-item;\n  }\n\n  .table {\n    display: table;\n  }\n\n  .table-caption {\n    display: table-caption;\n  }\n\n  .table-cell {\n    display: table-cell;\n  }\n\n  .table-column {\n    display: table-column;\n  }\n\n  .table-column-group {\n    display: table-column-group;\n  }\n\n  .table-footer-group {\n    display: table-footer-group;\n  }\n\n  .table-header-group {\n    display: table-header-group;\n  }\n\n  .table-row {\n    display: table-row;\n  }\n\n  .table-row-group {\n    display: table-row-group;\n  }\n\n  .field-sizing-content {\n    field-sizing: content;\n  }\n\n  .aspect-square {\n    aspect-ratio: 1;\n  }\n\n  .aspect-video {\n    aspect-ratio: var(--aspect-video);\n  }\n\n  .size-\\(--cell-size\\) {\n    width: var(--cell-size);\n    height: var(--cell-size);\n  }\n\n  .size-2 {\n    width: calc(var(--spacing) * 2);\n    height: calc(var(--spacing) * 2);\n  }\n\n  .size-2\\.5 {\n    width: calc(var(--spacing) * 2.5);\n    height: calc(var(--spacing) * 2.5);\n  }\n\n  .size-3\\.5 {\n    width: calc(var(--spacing) * 3.5);\n    height: calc(var(--spacing) * 3.5);\n  }\n\n  .size-4 {\n    width: calc(var(--spacing) * 4);\n    height: calc(var(--spacing) * 4);\n  }\n\n  .size-5 {\n    width: calc(var(--spacing) * 5);\n    height: calc(var(--spacing) * 5);\n  }\n\n  .size-7 {\n    width: calc(var(--spacing) * 7);\n    height: calc(var(--spacing) * 7);\n  }\n\n  .size-8 {\n    width: calc(var(--spacing) * 8);\n    height: calc(var(--spacing) * 8);\n  }\n\n  .size-9 {\n    width: calc(var(--spacing) * 9);\n    height: calc(var(--spacing) * 9);\n  }\n\n  .size-10 {\n    width: calc(var(--spacing) * 10);\n    height: calc(var(--spacing) * 10);\n  }\n\n  .size-auto {\n    width: auto;\n    height: auto;\n  }\n\n  .size-full {\n    width: 100%;\n    height: 100%;\n  }\n\n  .h-\\(--cell-size\\) {\n    height: var(--cell-size);\n  }\n\n  .h-1 {\n    height: var(--spacing);\n  }\n\n  .h-2 {\n    height: calc(var(--spacing) * 2);\n  }\n\n  .h-2\\.5 {\n    height: calc(var(--spacing) * 2.5);\n  }\n\n  .h-4 {\n    height: calc(var(--spacing) * 4);\n  }\n\n  .h-5 {\n    height: calc(var(--spacing) * 5);\n  }\n\n  .h-7 {\n    height: calc(var(--spacing) * 7);\n  }\n\n  .h-8 {\n    height: calc(var(--spacing) * 8);\n  }\n\n  .h-9 {\n    height: calc(var(--spacing) * 9);\n  }\n\n  .h-10 {\n    height: calc(var(--spacing) * 10);\n  }\n\n  .h-12 {\n    height: calc(var(--spacing) * 12);\n  }\n\n  .h-\\[1\\.15rem\\] {\n    height: 1.15rem;\n  }\n\n  .h-\\[6px\\] {\n    height: 6px;\n  }\n\n  .h-\\[17px\\] {\n    height: 17px;\n  }\n\n  .h-\\[46px\\] {\n    height: 46px;\n  }\n\n  .h-\\[200px\\] {\n    height: 200px;\n  }\n\n  .h-\\[calc\\(100\\%-1px\\)\\] {\n    height: calc(100% - 1px);\n  }\n\n  .h-\\[var\\(--radix-select-trigger-height\\)\\] {\n    height: var(--radix-select-trigger-height);\n  }\n\n  .h-auto {\n    height: auto;\n  }\n\n  .h-full {\n    height: 100%;\n  }\n\n  .h-px {\n    height: 1px;\n  }\n\n  .h-svh {\n    height: 100svh;\n  }\n\n  .max-h-\\(--radix-dropdown-menu-content-available-height\\) {\n    max-height: var(--radix-dropdown-menu-content-available-height);\n  }\n\n  .max-h-\\(--radix-select-content-available-height\\) {\n    max-height: var(--radix-select-content-available-height);\n  }\n\n  .max-h-\\[60vh\\] {\n    max-height: 60vh;\n  }\n\n  .max-h-\\[300px\\] {\n    max-height: 300px;\n  }\n\n  .min-h-0 {\n    min-height: 0;\n  }\n\n  .min-h-4 {\n    min-height: calc(var(--spacing) * 4);\n  }\n\n  .min-h-16 {\n    min-height: calc(var(--spacing) * 16);\n  }\n\n  .min-h-\\[11rem\\] {\n    min-height: 11rem;\n  }\n\n  .min-h-screen {\n    min-height: 100vh;\n  }\n\n  .min-h-svh {\n    min-height: 100svh;\n  }\n\n  .w-\\(--cell-size\\) {\n    width: var(--cell-size);\n  }\n\n  .w-\\(--sidebar-width\\) {\n    width: var(--sidebar-width);\n  }\n\n  .w-0 {\n    width: 0;\n  }\n\n  .w-1 {\n    width: var(--spacing);\n  }\n\n  .w-2 {\n    width: calc(var(--spacing) * 2);\n  }\n\n  .w-2\\.5 {\n    width: calc(var(--spacing) * 2.5);\n  }\n\n  .w-3\\/4 {\n    width: 75%;\n  }\n\n  .w-4 {\n    width: calc(var(--spacing) * 4);\n  }\n\n  .w-5 {\n    width: calc(var(--spacing) * 5);\n  }\n\n  .w-7 {\n    width: calc(var(--spacing) * 7);\n  }\n\n  .w-8 {\n    width: calc(var(--spacing) * 8);\n  }\n\n  .w-9 {\n    width: calc(var(--spacing) * 9);\n  }\n\n  .w-48 {\n    width: calc(var(--spacing) * 48);\n  }\n\n  .w-72 {\n    width: calc(var(--spacing) * 72);\n  }\n\n  .w-\\[3px\\] {\n    width: 3px;\n  }\n\n  .w-\\[6px\\] {\n    width: 6px;\n  }\n\n  .w-\\[34px\\] {\n    width: 34px;\n  }\n\n  .w-\\[358px\\] {\n    width: 358px;\n  }\n\n  .w-auto {\n    width: auto;\n  }\n\n  .w-fit {\n    width: fit-content;\n  }\n\n  .w-full {\n    width: 100%;\n  }\n\n  .w-px {\n    width: 1px;\n  }\n\n  .max-w-\\(--skeleton-width\\) {\n    max-width: var(--skeleton-width);\n  }\n\n  .max-w-\\[300px\\] {\n    max-width: 300px;\n  }\n\n  .max-w-\\[calc\\(100\\%-2rem\\)\\] {\n    max-width: calc(100% - 2rem);\n  }\n\n  .max-w-full {\n    max-width: 100%;\n  }\n\n  .max-w-md {\n    max-width: var(--container-md);\n  }\n\n  .max-w-xs {\n    max-width: var(--container-xs);\n  }\n\n  .min-w-\\(--cell-size\\) {\n    min-width: var(--cell-size);\n  }\n\n  .min-w-0 {\n    min-width: 0;\n  }\n\n  .min-w-5 {\n    min-width: calc(var(--spacing) * 5);\n  }\n\n  .min-w-8 {\n    min-width: calc(var(--spacing) * 8);\n  }\n\n  .min-w-9 {\n    min-width: calc(var(--spacing) * 9);\n  }\n\n  .min-w-10 {\n    min-width: calc(var(--spacing) * 10);\n  }\n\n  .min-w-\\[8rem\\] {\n    min-width: 8rem;\n  }\n\n  .min-w-\\[var\\(--radix-select-trigger-width\\)\\] {\n    min-width: var(--radix-select-trigger-width);\n  }\n\n  .flex-1 {\n    flex: 1;\n  }\n\n  .flex-shrink-0 {\n    flex-shrink: 0;\n  }\n\n  .shrink {\n    flex-shrink: 1;\n  }\n\n  .shrink-0 {\n    flex-shrink: 0;\n  }\n\n  .grow {\n    flex-grow: 1;\n  }\n\n  .grow-0 {\n    flex-grow: 0;\n  }\n\n  .basis-full {\n    flex-basis: 100%;\n  }\n\n  .caption-bottom {\n    caption-side: bottom;\n  }\n\n  .border-collapse {\n    border-collapse: collapse;\n  }\n\n  .origin-\\(--radix-dropdown-menu-content-transform-origin\\) {\n    transform-origin: var(--radix-dropdown-menu-content-transform-origin);\n  }\n\n  .origin-\\(--radix-popover-content-transform-origin\\) {\n    transform-origin: var(--radix-popover-content-transform-origin);\n  }\n\n  .origin-\\(--radix-select-content-transform-origin\\) {\n    transform-origin: var(--radix-select-content-transform-origin);\n  }\n\n  .origin-\\(--radix-tooltip-content-transform-origin\\) {\n    transform-origin: var(--radix-tooltip-content-transform-origin);\n  }\n\n  .-translate-x-1\\/2 {\n    --tw-translate-x: calc(calc(1 / 2 * 100%) * -1);\n    translate: var(--tw-translate-x) var(--tw-translate-y);\n  }\n\n  .-translate-x-px {\n    --tw-translate-x: -1px;\n    translate: var(--tw-translate-x) var(--tw-translate-y);\n  }\n\n  .translate-x-\\[-50\\%\\] {\n    --tw-translate-x: -50%;\n    translate: var(--tw-translate-x) var(--tw-translate-y);\n  }\n\n  .translate-x-px {\n    --tw-translate-x: 1px;\n    translate: var(--tw-translate-x) var(--tw-translate-y);\n  }\n\n  .-translate-y-1\\/2 {\n    --tw-translate-y: calc(calc(1 / 2 * 100%) * -1);\n    translate: var(--tw-translate-x) var(--tw-translate-y);\n  }\n\n  .-translate-y-2 {\n    --tw-translate-y: calc(var(--spacing) * -2);\n    translate: var(--tw-translate-x) var(--tw-translate-y);\n  }\n\n  .-translate-y-\\[41px\\] {\n    --tw-translate-y: calc(41px * -1);\n    translate: var(--tw-translate-x) var(--tw-translate-y);\n  }\n\n  .translate-y-0 {\n    --tw-translate-y: 0px;\n    translate: var(--tw-translate-x) var(--tw-translate-y);\n  }\n\n  .translate-y-\\[-50\\%\\] {\n    --tw-translate-y: -50%;\n    translate: var(--tw-translate-x) var(--tw-translate-y);\n  }\n\n  .translate-y-\\[calc\\(-50\\%-2px\\)\\] {\n    --tw-translate-y: calc(-50% - 2px);\n    translate: var(--tw-translate-x) var(--tw-translate-y);\n  }\n\n  .translate-none {\n    translate: none;\n  }\n\n  .scale-75 {\n    --tw-scale-x: 75%;\n    --tw-scale-y: 75%;\n    --tw-scale-z: 75%;\n    scale: var(--tw-scale-x) var(--tw-scale-y);\n  }\n\n  .scale-100 {\n    --tw-scale-x: 100%;\n    --tw-scale-y: 100%;\n    --tw-scale-z: 100%;\n    scale: var(--tw-scale-x) var(--tw-scale-y);\n  }\n\n  .scale-3d {\n    scale: var(--tw-scale-x) var(--tw-scale-y) var(--tw-scale-z);\n  }\n\n  .rotate-45 {\n    rotate: 45deg;\n  }\n\n  .rotate-90 {\n    rotate: 90deg;\n  }\n\n  .rotate-180 {\n    rotate: 180deg;\n  }\n\n  .transform {\n    transform: var(--tw-rotate-x, ) var(--tw-rotate-y, ) var(--tw-rotate-z, ) var(--tw-skew-x, ) var(--tw-skew-y, );\n  }\n\n  .animate-pulse {\n    animation: var(--animate-pulse);\n  }\n\n  .animate-spin {\n    animation: var(--animate-spin);\n  }\n\n  .cursor-default {\n    cursor: default;\n  }\n\n  .cursor-default\\! {\n    cursor: default !important;\n  }\n\n  .cursor-pointer {\n    cursor: pointer;\n  }\n\n  .cursor-pointer\\! {\n    cursor: pointer !important;\n  }\n\n  .touch-pinch-zoom {\n    --tw-pinch-zoom: pinch-zoom;\n    touch-action: var(--tw-pan-x, ) var(--tw-pan-y, ) var(--tw-pinch-zoom, );\n  }\n\n  .touch-none {\n    touch-action: none;\n  }\n\n  .resize {\n    resize: both;\n  }\n\n  .scroll-my-1 {\n    scroll-margin-block: var(--spacing);\n  }\n\n  .scroll-py-1 {\n    scroll-padding-block: var(--spacing);\n  }\n\n  .auto-rows-min {\n    grid-auto-rows: min-content;\n  }\n\n  .grid-cols-\\[0_1fr\\] {\n    grid-template-columns: 0 1fr;\n  }\n\n  .grid-rows-\\[auto_auto\\] {\n    grid-template-rows: auto auto;\n  }\n\n  .flex-col {\n    flex-direction: column;\n  }\n\n  .flex-col-reverse {\n    flex-direction: column-reverse;\n  }\n\n  .flex-row {\n    flex-direction: row;\n  }\n\n  .flex-nowrap {\n    flex-wrap: nowrap;\n  }\n\n  .flex-wrap {\n    flex-wrap: wrap;\n  }\n\n  .items-center {\n    align-items: center;\n  }\n\n  .items-end {\n    align-items: flex-end;\n  }\n\n  .items-start {\n    align-items: flex-start;\n  }\n\n  .items-stretch {\n    align-items: stretch;\n  }\n\n  .justify-between {\n    justify-content: space-between;\n  }\n\n  .justify-center {\n    justify-content: center;\n  }\n\n  .justify-items-start {\n    justify-items: start;\n  }\n\n  .gap-0 {\n    gap: 0;\n  }\n\n  .gap-0\\.5 {\n    gap: calc(var(--spacing) * .5);\n  }\n\n  .gap-1 {\n    gap: var(--spacing);\n  }\n\n  .gap-1\\.5 {\n    gap: calc(var(--spacing) * 1.5);\n  }\n\n  .gap-2 {\n    gap: calc(var(--spacing) * 2);\n  }\n\n  .gap-2\\.5 {\n    gap: calc(var(--spacing) * 2.5);\n  }\n\n  .gap-3 {\n    gap: calc(var(--spacing) * 3);\n  }\n\n  .gap-4 {\n    gap: calc(var(--spacing) * 4);\n  }\n\n  :where(.space-y-2 > :not(:last-child)) {\n    --tw-space-y-reverse: 0;\n    margin-block-start: calc(calc(var(--spacing) * 2) * var(--tw-space-y-reverse));\n    margin-block-end: calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-y-reverse)));\n  }\n\n  :where(.space-y-6 > :not(:last-child)) {\n    --tw-space-y-reverse: 0;\n    margin-block-start: calc(calc(var(--spacing) * 6) * var(--tw-space-y-reverse));\n    margin-block-end: calc(calc(var(--spacing) * 6) * calc(1 - var(--tw-space-y-reverse)));\n  }\n\n  :where(.space-y-reverse > :not(:last-child)) {\n    --tw-space-y-reverse: 1;\n  }\n\n  :where(.space-x-reverse > :not(:last-child)) {\n    --tw-space-x-reverse: 1;\n  }\n\n  .gap-y-0\\.5 {\n    row-gap: calc(var(--spacing) * .5);\n  }\n\n  :where(.divide-x > :not(:last-child)) {\n    --tw-divide-x-reverse: 0;\n    border-inline-style: var(--tw-border-style);\n    border-inline-start-width: calc(1px * var(--tw-divide-x-reverse));\n    border-inline-end-width: calc(1px * calc(1 - var(--tw-divide-x-reverse)));\n  }\n\n  :where(.divide-y > :not(:last-child)) {\n    --tw-divide-y-reverse: 0;\n    border-bottom-style: var(--tw-border-style);\n    border-top-style: var(--tw-border-style);\n    border-top-width: calc(1px * var(--tw-divide-y-reverse));\n    border-bottom-width: calc(1px * calc(1 - var(--tw-divide-y-reverse)));\n  }\n\n  :where(.divide-y-reverse > :not(:last-child)) {\n    --tw-divide-y-reverse: 1;\n  }\n\n  .self-end {\n    align-self: flex-end;\n  }\n\n  .self-start {\n    align-self: flex-start;\n  }\n\n  .justify-self-end {\n    justify-self: flex-end;\n  }\n\n  .truncate {\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n  }\n\n  .\\!overflow-hidden {\n    overflow: hidden !important;\n  }\n\n  .overflow-auto {\n    overflow: auto;\n  }\n\n  .overflow-hidden {\n    overflow: hidden;\n  }\n\n  .overflow-x-auto {\n    overflow-x: auto;\n  }\n\n  .overflow-x-hidden {\n    overflow-x: hidden;\n  }\n\n  .overflow-y-auto {\n    overflow-y: auto;\n  }\n\n  .rounded {\n    border-radius: .25rem;\n  }\n\n  .rounded-\\[2px\\] {\n    border-radius: 2px;\n  }\n\n  .rounded-\\[4px\\] {\n    border-radius: 4px;\n  }\n\n  .rounded-\\[inherit\\] {\n    border-radius: inherit;\n  }\n\n  .rounded-full {\n    border-radius: 3.40282e38px;\n  }\n\n  .rounded-lg {\n    border-radius: var(--radius-lg);\n  }\n\n  .rounded-md {\n    border-radius: var(--radius-md);\n  }\n\n  .rounded-none {\n    border-radius: 0;\n  }\n\n  .rounded-sm {\n    border-radius: var(--radius-sm);\n  }\n\n  .rounded-xl {\n    border-radius: var(--radius-xl);\n  }\n\n  .rounded-xs {\n    border-radius: var(--radius-xs);\n  }\n\n  .rounded-s {\n    border-start-start-radius: .25rem;\n    border-end-start-radius: .25rem;\n  }\n\n  .rounded-ss {\n    border-start-start-radius: .25rem;\n  }\n\n  .rounded-e {\n    border-start-end-radius: .25rem;\n    border-end-end-radius: .25rem;\n  }\n\n  .rounded-se {\n    border-start-end-radius: .25rem;\n  }\n\n  .rounded-ee {\n    border-end-end-radius: .25rem;\n  }\n\n  .rounded-es {\n    border-end-start-radius: .25rem;\n  }\n\n  .rounded-t {\n    border-top-left-radius: .25rem;\n    border-top-right-radius: .25rem;\n  }\n\n  .rounded-l {\n    border-top-left-radius: .25rem;\n    border-bottom-left-radius: .25rem;\n  }\n\n  .rounded-l-md {\n    border-top-left-radius: var(--radius-md);\n    border-bottom-left-radius: var(--radius-md);\n  }\n\n  .rounded-tl {\n    border-top-left-radius: .25rem;\n  }\n\n  .rounded-r {\n    border-top-right-radius: .25rem;\n    border-bottom-right-radius: .25rem;\n  }\n\n  .rounded-r-md {\n    border-top-right-radius: var(--radius-md);\n    border-bottom-right-radius: var(--radius-md);\n  }\n\n  .rounded-tr {\n    border-top-right-radius: .25rem;\n  }\n\n  .rounded-b {\n    border-bottom-right-radius: .25rem;\n    border-bottom-left-radius: .25rem;\n  }\n\n  .rounded-b-xl {\n    border-bottom-right-radius: var(--radius-xl);\n    border-bottom-left-radius: var(--radius-xl);\n  }\n\n  .rounded-br {\n    border-bottom-right-radius: .25rem;\n  }\n\n  .rounded-bl {\n    border-bottom-left-radius: .25rem;\n  }\n\n  .border {\n    border-style: var(--tw-border-style);\n    border-width: 1px;\n  }\n\n  .border\\! {\n    border-style: var(--tw-border-style) !important;\n    border-width: 1px !important;\n  }\n\n  .border-0 {\n    border-style: var(--tw-border-style);\n    border-width: 0;\n  }\n\n  .border-\\[1\\.5px\\] {\n    border-style: var(--tw-border-style);\n    border-width: 1.5px;\n  }\n\n  .border-x {\n    border-inline-style: var(--tw-border-style);\n    border-inline-width: 1px;\n  }\n\n  .border-y {\n    border-block-style: var(--tw-border-style);\n    border-block-width: 1px;\n  }\n\n  .border-s {\n    border-inline-start-style: var(--tw-border-style);\n    border-inline-start-width: 1px;\n  }\n\n  .border-e {\n    border-inline-end-style: var(--tw-border-style);\n    border-inline-end-width: 1px;\n  }\n\n  .border-bs {\n    border-block-start-style: var(--tw-border-style);\n    border-block-start-width: 1px;\n  }\n\n  .border-be {\n    border-block-end-style: var(--tw-border-style);\n    border-block-end-width: 1px;\n  }\n\n  .border-t {\n    border-top-style: var(--tw-border-style);\n    border-top-width: 1px;\n  }\n\n  .border-r {\n    border-right-style: var(--tw-border-style);\n    border-right-width: 1px;\n  }\n\n  .border-b {\n    border-bottom-style: var(--tw-border-style);\n    border-bottom-width: 1px;\n  }\n\n  .border-l {\n    border-left-style: var(--tw-border-style);\n    border-left-width: 1px;\n  }\n\n  .border-l-4 {\n    border-left-style: var(--tw-border-style);\n    border-left-width: 4px;\n  }\n\n  .border-dashed {\n    --tw-border-style: dashed;\n    border-style: dashed;\n  }\n\n  .border-none {\n    --tw-border-style: none;\n    border-style: none;\n  }\n\n  .border-\\(--color-border\\) {\n    border-color: var(--color-border);\n  }\n\n  .border-border, .border-border\\/50 {\n    border-color: var(--border);\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .border-border\\/50 {\n      border-color: color-mix(in oklab, var(--border) 50%, transparent);\n    }\n  }\n\n  .border-gray-200 {\n    border-color: var(--color-gray-200);\n  }\n\n  .border-input {\n    border-color: var(--input);\n  }\n\n  .border-muted {\n    border-color: var(--muted);\n  }\n\n  .border-primary {\n    border-color: var(--primary);\n  }\n\n  .border-red-700 {\n    border-color: var(--color-red-700);\n  }\n\n  .border-sidebar-border {\n    border-color: var(--sidebar-border);\n  }\n\n  .border-slate-100\\! {\n    border-color: var(--color-slate-100) !important;\n  }\n\n  .border-transparent {\n    border-color: #0000;\n  }\n\n  .border-t-transparent {\n    border-top-color: #0000;\n  }\n\n  .border-r-transparent\\! {\n    border-right-color: #0000 !important;\n  }\n\n  .border-l-transparent {\n    border-left-color: #0000;\n  }\n\n  .bg-\\(--color-bg\\) {\n    background-color: var(--color-bg);\n  }\n\n  .bg-\\[\\#10b18926\\] {\n    background-color: #10b18926;\n  }\n\n  .bg-\\[\\#0045C526\\] {\n    background-color: #0045c526;\n  }\n\n  .bg-\\[\\#ed991726\\] {\n    background-color: #ed991726;\n  }\n\n  .bg-\\[\\#f6445c26\\] {\n    background-color: #f6445c26;\n  }\n\n  .bg-\\[var\\(--hds-surface-raised\\)\\] {\n    background-color: var(--hds-surface-raised);\n  }\n\n  .bg-accent {\n    background-color: var(--accent);\n  }\n\n  .bg-background {\n    background-color: var(--background);\n  }\n\n  .bg-black {\n    background-color: var(--color-black);\n  }\n\n  .bg-black\\/20 {\n    background-color: #0003;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .bg-black\\/20 {\n      background-color: color-mix(in oklab, var(--color-black) 20%, transparent);\n    }\n  }\n\n  .bg-black\\/30 {\n    background-color: #0000004d;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .bg-black\\/30 {\n      background-color: color-mix(in oklab, var(--color-black) 30%, transparent);\n    }\n  }\n\n  .bg-black\\/45 {\n    background-color: #00000073;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .bg-black\\/45 {\n      background-color: color-mix(in oklab, var(--color-black) 45%, transparent);\n    }\n  }\n\n  .bg-black\\/50 {\n    background-color: #00000080;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .bg-black\\/50 {\n      background-color: color-mix(in oklab, var(--color-black) 50%, transparent);\n    }\n  }\n\n  .bg-black\\/80 {\n    background-color: #000c;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .bg-black\\/80 {\n      background-color: color-mix(in oklab, var(--color-black) 80%, transparent);\n    }\n  }\n\n  .bg-border {\n    background-color: var(--border);\n  }\n\n  .bg-card {\n    background-color: var(--card);\n  }\n\n  .bg-destructive, .bg-destructive\\/15 {\n    background-color: var(--destructive);\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .bg-destructive\\/15 {\n      background-color: color-mix(in oklab, var(--destructive) 15%, transparent);\n    }\n  }\n\n  .bg-foreground, .bg-foreground\\/40 {\n    background-color: var(--foreground);\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .bg-foreground\\/40 {\n      background-color: color-mix(in oklab, var(--foreground) 40%, transparent);\n    }\n  }\n\n  .bg-gray-700 {\n    background-color: var(--color-gray-700);\n  }\n\n  .bg-muted, .bg-muted\\/50 {\n    background-color: var(--muted);\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .bg-muted\\/50 {\n      background-color: color-mix(in oklab, var(--muted) 50%, transparent);\n    }\n  }\n\n  .bg-popover {\n    background-color: var(--popover);\n  }\n\n  .bg-primary {\n    background-color: var(--primary);\n  }\n\n  .bg-primary-foreground {\n    background-color: var(--primary-foreground);\n  }\n\n  .bg-red-900\\/20 {\n    background-color: #82181a33;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .bg-red-900\\/20 {\n      background-color: color-mix(in oklab, var(--color-red-900) 20%, transparent);\n    }\n  }\n\n  .bg-secondary {\n    background-color: var(--secondary);\n  }\n\n  .bg-sidebar {\n    background-color: var(--sidebar);\n  }\n\n  .bg-sidebar-border {\n    background-color: var(--sidebar-border);\n  }\n\n  .bg-success {\n    background-color: var(--success);\n  }\n\n  .bg-transparent {\n    background-color: #0000;\n  }\n\n  .bg-warning, .bg-warning\\/15 {\n    background-color: var(--warning);\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .bg-warning\\/15 {\n      background-color: color-mix(in oklab, var(--warning) 15%, transparent);\n    }\n  }\n\n  .bg-white {\n    background-color: var(--color-white);\n  }\n\n  .bg-white\\/20 {\n    background-color: #fff3;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .bg-white\\/20 {\n      background-color: color-mix(in oklab, var(--color-white) 20%, transparent);\n    }\n  }\n\n  .bg-white\\/40 {\n    background-color: #fff6;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .bg-white\\/40 {\n      background-color: color-mix(in oklab, var(--color-white) 40%, transparent);\n    }\n  }\n\n  .bg-repeat {\n    background-repeat: repeat;\n  }\n\n  .mask-no-clip {\n    -webkit-mask-clip: no-clip;\n    mask-clip: no-clip;\n  }\n\n  .mask-repeat {\n    -webkit-mask-repeat: repeat;\n    mask-repeat: repeat;\n  }\n\n  .fill-current {\n    fill: currentColor;\n  }\n\n  .fill-primary {\n    fill: var(--primary);\n  }\n\n  .object-cover {\n    object-fit: cover;\n  }\n\n  .p-0 {\n    padding: 0;\n  }\n\n  .p-0\\! {\n    padding: 0 !important;\n  }\n\n  .p-1 {\n    padding: var(--spacing);\n  }\n\n  .p-2 {\n    padding: calc(var(--spacing) * 2);\n  }\n\n  .p-3 {\n    padding: calc(var(--spacing) * 3);\n  }\n\n  .p-4 {\n    padding: calc(var(--spacing) * 4);\n  }\n\n  .p-6 {\n    padding: calc(var(--spacing) * 6);\n  }\n\n  .p-\\[3px\\] {\n    padding: 3px;\n  }\n\n  .p-px {\n    padding: 1px;\n  }\n\n  .px-\\(--cell-size\\) {\n    padding-inline: var(--cell-size);\n  }\n\n  .px-1 {\n    padding-inline: var(--spacing);\n  }\n\n  .px-1\\.5 {\n    padding-inline: calc(var(--spacing) * 1.5);\n  }\n\n  .px-2 {\n    padding-inline: calc(var(--spacing) * 2);\n  }\n\n  .px-2\\.5 {\n    padding-inline: calc(var(--spacing) * 2.5);\n  }\n\n  .px-3 {\n    padding-inline: calc(var(--spacing) * 3);\n  }\n\n  .px-4 {\n    padding-inline: calc(var(--spacing) * 4);\n  }\n\n  .px-6 {\n    padding-inline: calc(var(--spacing) * 6);\n  }\n\n  .px-8 {\n    padding-inline: calc(var(--spacing) * 8);\n  }\n\n  .py-0\\.5 {\n    padding-block: calc(var(--spacing) * .5);\n  }\n\n  .py-1 {\n    padding-block: var(--spacing);\n  }\n\n  .py-1\\.5 {\n    padding-block: calc(var(--spacing) * 1.5);\n  }\n\n  .py-2 {\n    padding-block: calc(var(--spacing) * 2);\n  }\n\n  .py-2\\.5 {\n    padding-block: calc(var(--spacing) * 2.5);\n  }\n\n  .py-3 {\n    padding-block: calc(var(--spacing) * 3);\n  }\n\n  .py-3\\.5 {\n    padding-block: calc(var(--spacing) * 3.5);\n  }\n\n  .py-6 {\n    padding-block: calc(var(--spacing) * 6);\n  }\n\n  .pt-1 {\n    padding-top: var(--spacing);\n  }\n\n  .pt-3 {\n    padding-top: calc(var(--spacing) * 3);\n  }\n\n  .pt-4 {\n    padding-top: calc(var(--spacing) * 4);\n  }\n\n  .pr-1 {\n    padding-right: var(--spacing);\n  }\n\n  .pr-2 {\n    padding-right: calc(var(--spacing) * 2);\n  }\n\n  .pr-8 {\n    padding-right: calc(var(--spacing) * 8);\n  }\n\n  .pb-3 {\n    padding-bottom: calc(var(--spacing) * 3);\n  }\n\n  .pb-4 {\n    padding-bottom: calc(var(--spacing) * 4);\n  }\n\n  .pb-6 {\n    padding-bottom: calc(var(--spacing) * 6);\n  }\n\n  .pl-2 {\n    padding-left: calc(var(--spacing) * 2);\n  }\n\n  .pl-4 {\n    padding-left: calc(var(--spacing) * 4);\n  }\n\n  .pl-8 {\n    padding-left: calc(var(--spacing) * 8);\n  }\n\n  .text-center {\n    text-align: center;\n  }\n\n  .text-left {\n    text-align: left;\n  }\n\n  .text-start {\n    text-align: start;\n  }\n\n  .align-middle {\n    vertical-align: middle;\n  }\n\n  .font-mono {\n    font-family: ui-monospace, monospace;\n  }\n\n  .text-2xl {\n    font-size: var(--text-2xl);\n    line-height: var(--tw-leading, var(--text-2xl--line-height));\n  }\n\n  .text-4xl {\n    font-size: var(--text-4xl);\n    line-height: var(--tw-leading, var(--text-4xl--line-height));\n  }\n\n  .text-base {\n    font-size: var(--text-base);\n    line-height: var(--tw-leading, var(--text-base--line-height));\n  }\n\n  .text-lg {\n    font-size: var(--text-lg);\n    line-height: var(--tw-leading, var(--text-lg--line-height));\n  }\n\n  .text-sm {\n    font-size: var(--text-sm);\n    line-height: var(--tw-leading, var(--text-sm--line-height));\n  }\n\n  .text-xl {\n    font-size: var(--text-xl);\n    line-height: var(--tw-leading, var(--text-xl--line-height));\n  }\n\n  .text-xs {\n    font-size: var(--text-xs);\n    line-height: var(--tw-leading, var(--text-xs--line-height));\n  }\n\n  .text-\\[0\\.8rem\\] {\n    font-size: .8rem;\n  }\n\n  .leading-\\[1\\.4\\] {\n    --tw-leading: 1.4;\n    line-height: 1.4;\n  }\n\n  .leading-\\[120\\%\\] {\n    --tw-leading: 120%;\n    line-height: 120%;\n  }\n\n  .leading-none {\n    --tw-leading: 1;\n    line-height: 1;\n  }\n\n  .leading-normal {\n    --tw-leading: var(--leading-normal);\n    line-height: var(--leading-normal);\n  }\n\n  .leading-relaxed {\n    --tw-leading: var(--leading-relaxed);\n    line-height: var(--leading-relaxed);\n  }\n\n  .leading-snug {\n    --tw-leading: var(--leading-snug);\n    line-height: var(--leading-snug);\n  }\n\n  .font-bold {\n    --tw-font-weight: var(--font-weight-bold);\n    font-weight: var(--font-weight-bold);\n  }\n\n  .font-medium {\n    --tw-font-weight: var(--font-weight-medium);\n    font-weight: var(--font-weight-medium);\n  }\n\n  .font-normal {\n    --tw-font-weight: var(--font-weight-normal);\n    font-weight: var(--font-weight-normal);\n  }\n\n  .font-semibold {\n    --tw-font-weight: var(--font-weight-semibold);\n    font-weight: var(--font-weight-semibold);\n  }\n\n  .tracking-tight {\n    --tw-tracking: var(--tracking-tight);\n    letter-spacing: var(--tracking-tight);\n  }\n\n  .tracking-widest {\n    --tw-tracking: var(--tracking-widest);\n    letter-spacing: var(--tracking-widest);\n  }\n\n  .text-balance {\n    text-wrap: balance;\n  }\n\n  .text-wrap {\n    text-wrap: wrap;\n  }\n\n  .break-words {\n    overflow-wrap: break-word;\n  }\n\n  .text-clip {\n    text-overflow: clip;\n  }\n\n  .text-ellipsis {\n    text-overflow: ellipsis;\n  }\n\n  .whitespace-nowrap {\n    white-space: nowrap;\n  }\n\n  .whitespace-pre-line {\n    white-space: pre-line;\n  }\n\n  .\\!text-destructive {\n    color: var(--destructive) !important;\n  }\n\n  .\\!text-foreground {\n    color: var(--foreground) !important;\n  }\n\n  .\\!text-success {\n    color: var(--success) !important;\n  }\n\n  .\\!text-warning {\n    color: var(--warning) !important;\n  }\n\n  .text-\\[\\#10b189\\] {\n    color: #10b189;\n  }\n\n  .text-\\[\\#0045C5\\] {\n    color: #0045c5;\n  }\n\n  .text-\\[\\#ed9917\\] {\n    color: #ed9917;\n  }\n\n  .text-\\[\\#f6445c\\] {\n    color: #f6445c;\n  }\n\n  .text-accent-foreground {\n    color: var(--accent-foreground);\n  }\n\n  .text-amber-300 {\n    color: var(--color-amber-300);\n  }\n\n  .text-card-foreground {\n    color: var(--card-foreground);\n  }\n\n  .text-current {\n    color: currentColor;\n  }\n\n  .text-destructive {\n    color: var(--destructive);\n  }\n\n  .text-foreground {\n    color: var(--foreground);\n  }\n\n  .text-foreground-secondary {\n    color: var(--foreground-secondary);\n  }\n\n  .text-gray-400 {\n    color: var(--color-gray-400);\n  }\n\n  .text-gray-900 {\n    color: var(--color-gray-900);\n  }\n\n  .text-muted-foreground {\n    color: var(--muted-foreground);\n  }\n\n  .text-popover-foreground {\n    color: var(--popover-foreground);\n  }\n\n  .text-primary {\n    color: var(--primary);\n  }\n\n  .text-primary-foreground {\n    color: var(--primary-foreground);\n  }\n\n  .text-red-300 {\n    color: var(--color-red-300);\n  }\n\n  .text-secondary-foreground {\n    color: var(--secondary-foreground);\n  }\n\n  .text-sidebar-foreground, .text-sidebar-foreground\\/70 {\n    color: var(--sidebar-foreground);\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .text-sidebar-foreground\\/70 {\n      color: color-mix(in oklab, var(--sidebar-foreground) 70%, transparent);\n    }\n  }\n\n  .text-success-foreground {\n    color: var(--success-foreground);\n  }\n\n  .text-warning {\n    color: var(--warning);\n  }\n\n  .text-warning-foreground {\n    color: var(--warning-foreground);\n  }\n\n  .text-white {\n    color: var(--color-white);\n  }\n\n  .capitalize {\n    text-transform: capitalize;\n  }\n\n  .lowercase {\n    text-transform: lowercase;\n  }\n\n  .normal-case {\n    text-transform: none;\n  }\n\n  .uppercase {\n    text-transform: uppercase;\n  }\n\n  .italic {\n    font-style: italic;\n  }\n\n  .not-italic {\n    font-style: normal;\n  }\n\n  .diagonal-fractions {\n    --tw-numeric-fraction: diagonal-fractions;\n    font-variant-numeric: var(--tw-ordinal, ) var(--tw-slashed-zero, ) var(--tw-numeric-figure, ) var(--tw-numeric-spacing, ) var(--tw-numeric-fraction, );\n  }\n\n  .lining-nums {\n    --tw-numeric-figure: lining-nums;\n    font-variant-numeric: var(--tw-ordinal, ) var(--tw-slashed-zero, ) var(--tw-numeric-figure, ) var(--tw-numeric-spacing, ) var(--tw-numeric-fraction, );\n  }\n\n  .oldstyle-nums {\n    --tw-numeric-figure: oldstyle-nums;\n    font-variant-numeric: var(--tw-ordinal, ) var(--tw-slashed-zero, ) var(--tw-numeric-figure, ) var(--tw-numeric-spacing, ) var(--tw-numeric-fraction, );\n  }\n\n  .ordinal {\n    --tw-ordinal: ordinal;\n    font-variant-numeric: var(--tw-ordinal, ) var(--tw-slashed-zero, ) var(--tw-numeric-figure, ) var(--tw-numeric-spacing, ) var(--tw-numeric-fraction, );\n  }\n\n  .proportional-nums {\n    --tw-numeric-spacing: proportional-nums;\n    font-variant-numeric: var(--tw-ordinal, ) var(--tw-slashed-zero, ) var(--tw-numeric-figure, ) var(--tw-numeric-spacing, ) var(--tw-numeric-fraction, );\n  }\n\n  .slashed-zero {\n    --tw-slashed-zero: slashed-zero;\n    font-variant-numeric: var(--tw-ordinal, ) var(--tw-slashed-zero, ) var(--tw-numeric-figure, ) var(--tw-numeric-spacing, ) var(--tw-numeric-fraction, );\n  }\n\n  .stacked-fractions {\n    --tw-numeric-fraction: stacked-fractions;\n    font-variant-numeric: var(--tw-ordinal, ) var(--tw-slashed-zero, ) var(--tw-numeric-figure, ) var(--tw-numeric-spacing, ) var(--tw-numeric-fraction, );\n  }\n\n  .tabular-nums {\n    --tw-numeric-spacing: tabular-nums;\n    font-variant-numeric: var(--tw-ordinal, ) var(--tw-slashed-zero, ) var(--tw-numeric-figure, ) var(--tw-numeric-spacing, ) var(--tw-numeric-fraction, );\n  }\n\n  .normal-nums {\n    font-variant-numeric: normal;\n  }\n\n  .line-through {\n    text-decoration-line: line-through;\n  }\n\n  .no-underline {\n    text-decoration-line: none;\n  }\n\n  .overline {\n    text-decoration-line: overline;\n  }\n\n  .underline {\n    text-decoration-line: underline;\n  }\n\n  .underline-offset-4 {\n    text-underline-offset: 4px;\n  }\n\n  .antialiased {\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  .subpixel-antialiased {\n    -webkit-font-smoothing: auto;\n    -moz-osx-font-smoothing: auto;\n  }\n\n  .opacity-0 {\n    opacity: 0;\n  }\n\n  .opacity-50 {\n    opacity: .5;\n  }\n\n  .opacity-70 {\n    opacity: .7;\n  }\n\n  .opacity-95 {\n    opacity: .95;\n  }\n\n  .opacity-100 {\n    opacity: 1;\n  }\n\n  .shadow {\n    --tw-shadow: 0 1px 3px 0 var(--tw-shadow-color, #0000001a), 0 1px 2px -1px var(--tw-shadow-color, #0000001a);\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n\n  .shadow-\\[0_0_0_1px_hsl\\(var\\(--sidebar-border\\)\\)\\] {\n    --tw-shadow: 0 0 0 1px var(--tw-shadow-color, hsl(var(--sidebar-border)));\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n\n  .shadow-lg {\n    --tw-shadow: 0 10px 15px -3px var(--tw-shadow-color, #0000001a), 0 4px 6px -4px var(--tw-shadow-color, #0000001a);\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n\n  .shadow-md {\n    --tw-shadow: 0 4px 6px -1px var(--tw-shadow-color, #0000001a), 0 2px 4px -2px var(--tw-shadow-color, #0000001a);\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n\n  .shadow-none {\n    --tw-shadow: 0 0 #0000;\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n\n  .shadow-sm {\n    --tw-shadow: 0 1px 3px 0 var(--tw-shadow-color, #0000001a), 0 1px 2px -1px var(--tw-shadow-color, #0000001a);\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n\n  .shadow-xl {\n    --tw-shadow: 0 20px 25px -5px var(--tw-shadow-color, #0000001a), 0 8px 10px -6px var(--tw-shadow-color, #0000001a);\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n\n  .shadow-xs {\n    --tw-shadow: 0 1px 2px 0 var(--tw-shadow-color, #0000000d);\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n\n  .ring {\n    --tw-ring-shadow: var(--tw-ring-inset, ) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n\n  .ring-0 {\n    --tw-ring-shadow: var(--tw-ring-inset, ) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n\n  .inset-ring {\n    --tw-inset-ring-shadow: inset 0 0 0 1px var(--tw-inset-ring-color, currentcolor);\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n\n  .ring-ring\\/50 {\n    --tw-ring-color: var(--ring);\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .ring-ring\\/50 {\n      --tw-ring-color: color-mix(in oklab, var(--ring) 50%, transparent);\n    }\n  }\n\n  .ring-sidebar-ring {\n    --tw-ring-color: var(--sidebar-ring);\n  }\n\n  .ring-offset-background {\n    --tw-ring-offset-color: var(--background);\n  }\n\n  .outline-hidden {\n    --tw-outline-style: none;\n    outline-style: none;\n  }\n\n  @media (forced-colors: active) {\n    .outline-hidden {\n      outline-offset: 2px;\n      outline: 2px solid #0000;\n    }\n  }\n\n  .outline {\n    outline-style: var(--tw-outline-style);\n    outline-width: 1px;\n  }\n\n  .blur {\n    --tw-blur: blur(8px);\n    filter: var(--tw-blur, ) var(--tw-brightness, ) var(--tw-contrast, ) var(--tw-grayscale, ) var(--tw-hue-rotate, ) var(--tw-invert, ) var(--tw-saturate, ) var(--tw-sepia, ) var(--tw-drop-shadow, );\n  }\n\n  .drop-shadow {\n    --tw-drop-shadow-size: drop-shadow(0 1px 2px var(--tw-drop-shadow-color, #0000001a)) drop-shadow(0 1px 1px var(--tw-drop-shadow-color, #0000000f));\n    --tw-drop-shadow: drop-shadow(0 1px 2px #0000001a) drop-shadow(0 1px 1px #0000000f);\n    filter: var(--tw-blur, ) var(--tw-brightness, ) var(--tw-contrast, ) var(--tw-grayscale, ) var(--tw-hue-rotate, ) var(--tw-invert, ) var(--tw-saturate, ) var(--tw-sepia, ) var(--tw-drop-shadow, );\n  }\n\n  .drop-shadow-sm {\n    --tw-drop-shadow-size: drop-shadow(0 1px 2px var(--tw-drop-shadow-color, #00000026));\n    --tw-drop-shadow: drop-shadow(var(--drop-shadow-sm));\n    filter: var(--tw-blur, ) var(--tw-brightness, ) var(--tw-contrast, ) var(--tw-grayscale, ) var(--tw-hue-rotate, ) var(--tw-invert, ) var(--tw-saturate, ) var(--tw-sepia, ) var(--tw-drop-shadow, );\n  }\n\n  .grayscale {\n    --tw-grayscale: grayscale(100%);\n    filter: var(--tw-blur, ) var(--tw-brightness, ) var(--tw-contrast, ) var(--tw-grayscale, ) var(--tw-hue-rotate, ) var(--tw-invert, ) var(--tw-saturate, ) var(--tw-sepia, ) var(--tw-drop-shadow, );\n  }\n\n  .invert {\n    --tw-invert: invert(100%);\n    filter: var(--tw-blur, ) var(--tw-brightness, ) var(--tw-contrast, ) var(--tw-grayscale, ) var(--tw-hue-rotate, ) var(--tw-invert, ) var(--tw-saturate, ) var(--tw-sepia, ) var(--tw-drop-shadow, );\n  }\n\n  .sepia {\n    --tw-sepia: sepia(100%);\n    filter: var(--tw-blur, ) var(--tw-brightness, ) var(--tw-contrast, ) var(--tw-grayscale, ) var(--tw-hue-rotate, ) var(--tw-invert, ) var(--tw-saturate, ) var(--tw-sepia, ) var(--tw-drop-shadow, );\n  }\n\n  .filter {\n    filter: var(--tw-blur, ) var(--tw-brightness, ) var(--tw-contrast, ) var(--tw-grayscale, ) var(--tw-hue-rotate, ) var(--tw-invert, ) var(--tw-saturate, ) var(--tw-sepia, ) var(--tw-drop-shadow, );\n  }\n\n  .backdrop-blur {\n    --tw-backdrop-blur: blur(8px);\n    -webkit-backdrop-filter: var(--tw-backdrop-blur, ) var(--tw-backdrop-brightness, ) var(--tw-backdrop-contrast, ) var(--tw-backdrop-grayscale, ) var(--tw-backdrop-hue-rotate, ) var(--tw-backdrop-invert, ) var(--tw-backdrop-opacity, ) var(--tw-backdrop-saturate, ) var(--tw-backdrop-sepia, );\n    backdrop-filter: var(--tw-backdrop-blur, ) var(--tw-backdrop-brightness, ) var(--tw-backdrop-contrast, ) var(--tw-backdrop-grayscale, ) var(--tw-backdrop-hue-rotate, ) var(--tw-backdrop-invert, ) var(--tw-backdrop-opacity, ) var(--tw-backdrop-saturate, ) var(--tw-backdrop-sepia, );\n  }\n\n  .backdrop-blur-none {\n    --tw-backdrop-blur:  ;\n    -webkit-backdrop-filter: var(--tw-backdrop-blur, ) var(--tw-backdrop-brightness, ) var(--tw-backdrop-contrast, ) var(--tw-backdrop-grayscale, ) var(--tw-backdrop-hue-rotate, ) var(--tw-backdrop-invert, ) var(--tw-backdrop-opacity, ) var(--tw-backdrop-saturate, ) var(--tw-backdrop-sepia, );\n    backdrop-filter: var(--tw-backdrop-blur, ) var(--tw-backdrop-brightness, ) var(--tw-backdrop-contrast, ) var(--tw-backdrop-grayscale, ) var(--tw-backdrop-hue-rotate, ) var(--tw-backdrop-invert, ) var(--tw-backdrop-opacity, ) var(--tw-backdrop-saturate, ) var(--tw-backdrop-sepia, );\n  }\n\n  .backdrop-blur-sm {\n    --tw-backdrop-blur: blur(var(--blur-sm));\n    -webkit-backdrop-filter: var(--tw-backdrop-blur, ) var(--tw-backdrop-brightness, ) var(--tw-backdrop-contrast, ) var(--tw-backdrop-grayscale, ) var(--tw-backdrop-hue-rotate, ) var(--tw-backdrop-invert, ) var(--tw-backdrop-opacity, ) var(--tw-backdrop-saturate, ) var(--tw-backdrop-sepia, );\n    backdrop-filter: var(--tw-backdrop-blur, ) var(--tw-backdrop-brightness, ) var(--tw-backdrop-contrast, ) var(--tw-backdrop-grayscale, ) var(--tw-backdrop-hue-rotate, ) var(--tw-backdrop-invert, ) var(--tw-backdrop-opacity, ) var(--tw-backdrop-saturate, ) var(--tw-backdrop-sepia, );\n  }\n\n  .backdrop-grayscale {\n    --tw-backdrop-grayscale: grayscale(100%);\n    -webkit-backdrop-filter: var(--tw-backdrop-blur, ) var(--tw-backdrop-brightness, ) var(--tw-backdrop-contrast, ) var(--tw-backdrop-grayscale, ) var(--tw-backdrop-hue-rotate, ) var(--tw-backdrop-invert, ) var(--tw-backdrop-opacity, ) var(--tw-backdrop-saturate, ) var(--tw-backdrop-sepia, );\n    backdrop-filter: var(--tw-backdrop-blur, ) var(--tw-backdrop-brightness, ) var(--tw-backdrop-contrast, ) var(--tw-backdrop-grayscale, ) var(--tw-backdrop-hue-rotate, ) var(--tw-backdrop-invert, ) var(--tw-backdrop-opacity, ) var(--tw-backdrop-saturate, ) var(--tw-backdrop-sepia, );\n  }\n\n  .backdrop-invert {\n    --tw-backdrop-invert: invert(100%);\n    -webkit-backdrop-filter: var(--tw-backdrop-blur, ) var(--tw-backdrop-brightness, ) var(--tw-backdrop-contrast, ) var(--tw-backdrop-grayscale, ) var(--tw-backdrop-hue-rotate, ) var(--tw-backdrop-invert, ) var(--tw-backdrop-opacity, ) var(--tw-backdrop-saturate, ) var(--tw-backdrop-sepia, );\n    backdrop-filter: var(--tw-backdrop-blur, ) var(--tw-backdrop-brightness, ) var(--tw-backdrop-contrast, ) var(--tw-backdrop-grayscale, ) var(--tw-backdrop-hue-rotate, ) var(--tw-backdrop-invert, ) var(--tw-backdrop-opacity, ) var(--tw-backdrop-saturate, ) var(--tw-backdrop-sepia, );\n  }\n\n  .backdrop-sepia {\n    --tw-backdrop-sepia: sepia(100%);\n    -webkit-backdrop-filter: var(--tw-backdrop-blur, ) var(--tw-backdrop-brightness, ) var(--tw-backdrop-contrast, ) var(--tw-backdrop-grayscale, ) var(--tw-backdrop-hue-rotate, ) var(--tw-backdrop-invert, ) var(--tw-backdrop-opacity, ) var(--tw-backdrop-saturate, ) var(--tw-backdrop-sepia, );\n    backdrop-filter: var(--tw-backdrop-blur, ) var(--tw-backdrop-brightness, ) var(--tw-backdrop-contrast, ) var(--tw-backdrop-grayscale, ) var(--tw-backdrop-hue-rotate, ) var(--tw-backdrop-invert, ) var(--tw-backdrop-opacity, ) var(--tw-backdrop-saturate, ) var(--tw-backdrop-sepia, );\n  }\n\n  .backdrop-filter {\n    -webkit-backdrop-filter: var(--tw-backdrop-blur, ) var(--tw-backdrop-brightness, ) var(--tw-backdrop-contrast, ) var(--tw-backdrop-grayscale, ) var(--tw-backdrop-hue-rotate, ) var(--tw-backdrop-invert, ) var(--tw-backdrop-opacity, ) var(--tw-backdrop-saturate, ) var(--tw-backdrop-sepia, );\n    backdrop-filter: var(--tw-backdrop-blur, ) var(--tw-backdrop-brightness, ) var(--tw-backdrop-contrast, ) var(--tw-backdrop-grayscale, ) var(--tw-backdrop-hue-rotate, ) var(--tw-backdrop-invert, ) var(--tw-backdrop-opacity, ) var(--tw-backdrop-saturate, ) var(--tw-backdrop-sepia, );\n  }\n\n  .transition {\n    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to, opacity, box-shadow, transform, translate, scale, rotate, filter, -webkit-backdrop-filter, backdrop-filter, display, content-visibility, overlay, pointer-events;\n    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));\n    transition-duration: var(--tw-duration, var(--default-transition-duration));\n  }\n\n  .transition-\\[color\\,box-shadow\\] {\n    transition-property: color, box-shadow;\n    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));\n    transition-duration: var(--tw-duration, var(--default-transition-duration));\n  }\n\n  .transition-\\[left\\,right\\,width\\] {\n    transition-property: left, right, width;\n    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));\n    transition-duration: var(--tw-duration, var(--default-transition-duration));\n  }\n\n  .transition-\\[margin\\,opacity\\] {\n    transition-property: margin, opacity;\n    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));\n    transition-duration: var(--tw-duration, var(--default-transition-duration));\n  }\n\n  .transition-\\[max-height\\] {\n    transition-property: max-height;\n    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));\n    transition-duration: var(--tw-duration, var(--default-transition-duration));\n  }\n\n  .transition-\\[width\\] {\n    transition-property: width;\n    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));\n    transition-duration: var(--tw-duration, var(--default-transition-duration));\n  }\n\n  .transition-all {\n    transition-property: all;\n    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));\n    transition-duration: var(--tw-duration, var(--default-transition-duration));\n  }\n\n  .transition-colors {\n    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;\n    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));\n    transition-duration: var(--tw-duration, var(--default-transition-duration));\n  }\n\n  .transition-opacity {\n    transition-property: opacity;\n    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));\n    transition-duration: var(--tw-duration, var(--default-transition-duration));\n  }\n\n  .transition-shadow {\n    transition-property: box-shadow;\n    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));\n    transition-duration: var(--tw-duration, var(--default-transition-duration));\n  }\n\n  .transition-transform {\n    transition-property: transform, translate, scale, rotate;\n    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));\n    transition-duration: var(--tw-duration, var(--default-transition-duration));\n  }\n\n  .transition-none {\n    transition-property: none;\n  }\n\n  .duration-100 {\n    --tw-duration: .1s;\n    transition-duration: .1s;\n  }\n\n  .duration-200 {\n    --tw-duration: .2s;\n    transition-duration: .2s;\n  }\n\n  .duration-300 {\n    --tw-duration: .3s;\n    transition-duration: .3s;\n  }\n\n  .duration-1000 {\n    --tw-duration: 1s;\n    transition-duration: 1s;\n  }\n\n  .ease-in-out {\n    --tw-ease: var(--ease-in-out);\n    transition-timing-function: var(--ease-in-out);\n  }\n\n  .ease-linear {\n    --tw-ease: linear;\n    transition-timing-function: linear;\n  }\n\n  .ease-out {\n    --tw-ease: var(--ease-out);\n    transition-timing-function: var(--ease-out);\n  }\n\n  .outline-none {\n    --tw-outline-style: none;\n    outline-style: none;\n  }\n\n  .select-none {\n    -webkit-user-select: none;\n    user-select: none;\n  }\n\n  .\\[--cell-size\\:--spacing\\(8\\)\\] {\n    --cell-size: calc(var(--spacing) * 8);\n  }\n\n  :where(.divide-x-reverse > :not(:last-child)) {\n    --tw-divide-x-reverse: 1;\n  }\n\n  .ring-inset {\n    --tw-ring-inset: inset;\n  }\n\n  .group-focus-within\\/menu-item\\:opacity-100:is(:where(.group\\/menu-item):focus-within *) {\n    opacity: 1;\n  }\n\n  @media (hover: hover) {\n    .group-hover\\/menu-item\\:opacity-100:is(:where(.group\\/menu-item):hover *) {\n      opacity: 1;\n    }\n  }\n\n  .group-has-data-\\[sidebar\\=menu-action\\]\\/menu-item\\:pr-8:is(:where(.group\\/menu-item):has([data-sidebar=\"menu-action\"]) *) {\n    padding-right: calc(var(--spacing) * 8);\n  }\n\n  .group-has-\\[\\[data-slot\\=item-description\\]\\]\\/item\\:translate-y-0\\.5:is(:where(.group\\/item):has([data-slot=\"item-description\"]) *) {\n    --tw-translate-y: calc(var(--spacing) * .5);\n    translate: var(--tw-translate-x) var(--tw-translate-y);\n  }\n\n  .group-has-\\[\\[data-slot\\=item-description\\]\\]\\/item\\:self-start:is(:where(.group\\/item):has([data-slot=\"item-description\"]) *) {\n    align-self: flex-start;\n  }\n\n  .group-data-\\[collapsible\\=icon\\]\\:-mt-8:is(:where(.group)[data-collapsible=\"icon\"] *) {\n    margin-top: calc(var(--spacing) * -8);\n  }\n\n  .group-data-\\[collapsible\\=icon\\]\\:hidden:is(:where(.group)[data-collapsible=\"icon\"] *) {\n    display: none;\n  }\n\n  .group-data-\\[collapsible\\=icon\\]\\:size-8\\!:is(:where(.group)[data-collapsible=\"icon\"] *) {\n    width: calc(var(--spacing) * 8) !important;\n    height: calc(var(--spacing) * 8) !important;\n  }\n\n  .group-data-\\[collapsible\\=icon\\]\\:w-\\(--sidebar-width-icon\\):is(:where(.group)[data-collapsible=\"icon\"] *) {\n    width: var(--sidebar-width-icon);\n  }\n\n  .group-data-\\[collapsible\\=icon\\]\\:w-\\[calc\\(var\\(--sidebar-width-icon\\)\\+\\(--spacing\\(4\\)\\)\\)\\]:is(:where(.group)[data-collapsible=\"icon\"] *) {\n    width: calc(var(--sidebar-width-icon) + (calc(var(--spacing) * 4)));\n  }\n\n  .group-data-\\[collapsible\\=icon\\]\\:w-\\[calc\\(var\\(--sidebar-width-icon\\)\\+\\(--spacing\\(4\\)\\)\\+2px\\)\\]:is(:where(.group)[data-collapsible=\"icon\"] *) {\n    width: calc(var(--sidebar-width-icon) + (calc(var(--spacing) * 4)) + 2px);\n  }\n\n  .group-data-\\[collapsible\\=icon\\]\\:overflow-hidden:is(:where(.group)[data-collapsible=\"icon\"] *) {\n    overflow: hidden;\n  }\n\n  .group-data-\\[collapsible\\=icon\\]\\:p-0\\!:is(:where(.group)[data-collapsible=\"icon\"] *) {\n    padding: 0 !important;\n  }\n\n  .group-data-\\[collapsible\\=icon\\]\\:p-2\\!:is(:where(.group)[data-collapsible=\"icon\"] *) {\n    padding: calc(var(--spacing) * 2) !important;\n  }\n\n  .group-data-\\[collapsible\\=icon\\]\\:opacity-0:is(:where(.group)[data-collapsible=\"icon\"] *) {\n    opacity: 0;\n  }\n\n  .group-data-\\[collapsible\\=offcanvas\\]\\:right-\\[calc\\(var\\(--sidebar-width\\)\\*-1\\)\\]:is(:where(.group)[data-collapsible=\"offcanvas\"] *) {\n    right: calc(var(--sidebar-width) * -1);\n  }\n\n  .group-data-\\[collapsible\\=offcanvas\\]\\:left-\\[calc\\(var\\(--sidebar-width\\)\\*-1\\)\\]:is(:where(.group)[data-collapsible=\"offcanvas\"] *) {\n    left: calc(var(--sidebar-width) * -1);\n  }\n\n  .group-data-\\[collapsible\\=offcanvas\\]\\:w-0:is(:where(.group)[data-collapsible=\"offcanvas\"] *) {\n    width: 0;\n  }\n\n  .group-data-\\[collapsible\\=offcanvas\\]\\:translate-x-0:is(:where(.group)[data-collapsible=\"offcanvas\"] *) {\n    --tw-translate-x: 0px;\n    translate: var(--tw-translate-x) var(--tw-translate-y);\n  }\n\n  .group-data-\\[disabled\\=true\\]\\:pointer-events-none:is(:where(.group)[data-disabled=\"true\"] *) {\n    pointer-events: none;\n  }\n\n  .group-data-\\[disabled\\=true\\]\\:opacity-50:is(:where(.group)[data-disabled=\"true\"] *) {\n    opacity: .5;\n  }\n\n  .group-data-\\[focused\\=true\\]\\/day\\:relative:is(:where(.group\\/day)[data-focused=\"true\"] *) {\n    position: relative;\n  }\n\n  .group-data-\\[focused\\=true\\]\\/day\\:z-10:is(:where(.group\\/day)[data-focused=\"true\"] *) {\n    z-index: 10;\n  }\n\n  .group-data-\\[focused\\=true\\]\\/day\\:border-ring:is(:where(.group\\/day)[data-focused=\"true\"] *) {\n    border-color: var(--ring);\n  }\n\n  .group-data-\\[focused\\=true\\]\\/day\\:ring-\\[3px\\]:is(:where(.group\\/day)[data-focused=\"true\"] *) {\n    --tw-ring-shadow: var(--tw-ring-inset, ) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n\n  .group-data-\\[focused\\=true\\]\\/day\\:ring-ring\\/50:is(:where(.group\\/day)[data-focused=\"true\"] *) {\n    --tw-ring-color: var(--ring);\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .group-data-\\[focused\\=true\\]\\/day\\:ring-ring\\/50:is(:where(.group\\/day)[data-focused=\"true\"] *) {\n      --tw-ring-color: color-mix(in oklab, var(--ring) 50%, transparent);\n    }\n  }\n\n  .group-data-\\[side\\=left\\]\\:-right-4:is(:where(.group)[data-side=\"left\"] *) {\n    right: calc(var(--spacing) * -4);\n  }\n\n  .group-data-\\[side\\=left\\]\\:border-r:is(:where(.group)[data-side=\"left\"] *) {\n    border-right-style: var(--tw-border-style);\n    border-right-width: 1px;\n  }\n\n  .group-data-\\[side\\=right\\]\\:left-0:is(:where(.group)[data-side=\"right\"] *) {\n    left: 0;\n  }\n\n  .group-data-\\[side\\=right\\]\\:rotate-180:is(:where(.group)[data-side=\"right\"] *) {\n    rotate: 180deg;\n  }\n\n  .group-data-\\[side\\=right\\]\\:border-l:is(:where(.group)[data-side=\"right\"] *) {\n    border-left-style: var(--tw-border-style);\n    border-left-width: 1px;\n  }\n\n  .group-data-\\[size\\=sm\\]\\/item\\:gap-0:is(:where(.group\\/item)[data-size=\"sm\"] *) {\n    gap: 0;\n  }\n\n  .group-data-\\[variant\\=floating\\]\\:rounded-lg:is(:where(.group)[data-variant=\"floating\"] *) {\n    border-radius: var(--radius-lg);\n  }\n\n  .group-data-\\[variant\\=floating\\]\\:border:is(:where(.group)[data-variant=\"floating\"] *) {\n    border-style: var(--tw-border-style);\n    border-width: 1px;\n  }\n\n  .group-data-\\[variant\\=floating\\]\\:shadow-sm:is(:where(.group)[data-variant=\"floating\"] *) {\n    --tw-shadow: 0 1px 3px 0 var(--tw-shadow-color, #0000001a), 0 1px 2px -1px var(--tw-shadow-color, #0000001a);\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n\n  @media (hover: hover) {\n    .peer-hover\\/menu-button\\:text-sidebar-accent-foreground:is(:where(.peer\\/menu-button):hover ~ *) {\n      color: var(--sidebar-accent-foreground);\n    }\n  }\n\n  .peer-disabled\\:cursor-not-allowed:is(:where(.peer):disabled ~ *) {\n    cursor: not-allowed;\n  }\n\n  .peer-disabled\\:opacity-50:is(:where(.peer):disabled ~ *) {\n    opacity: .5;\n  }\n\n  .peer-data-\\[active\\=true\\]\\/menu-button\\:text-sidebar-accent-foreground:is(:where(.peer\\/menu-button)[data-active=\"true\"] ~ *) {\n    color: var(--sidebar-accent-foreground);\n  }\n\n  .peer-data-\\[size\\=default\\]\\/menu-button\\:top-1\\.5:is(:where(.peer\\/menu-button)[data-size=\"default\"] ~ *) {\n    top: calc(var(--spacing) * 1.5);\n  }\n\n  .peer-data-\\[size\\=lg\\]\\/menu-button\\:top-2\\.5:is(:where(.peer\\/menu-button)[data-size=\"lg\"] ~ *) {\n    top: calc(var(--spacing) * 2.5);\n  }\n\n  .peer-data-\\[size\\=sm\\]\\/menu-button\\:top-1:is(:where(.peer\\/menu-button)[data-size=\"sm\"] ~ *) {\n    top: var(--spacing);\n  }\n\n  .selection\\:bg-primary ::selection {\n    background-color: var(--primary);\n  }\n\n  .selection\\:bg-primary::selection {\n    background-color: var(--primary);\n  }\n\n  .selection\\:text-primary-foreground ::selection {\n    color: var(--primary-foreground);\n  }\n\n  .selection\\:text-primary-foreground::selection {\n    color: var(--primary-foreground);\n  }\n\n  .file\\:inline-flex::file-selector-button {\n    display: inline-flex;\n  }\n\n  .file\\:h-7::file-selector-button {\n    height: calc(var(--spacing) * 7);\n  }\n\n  .file\\:border-0::file-selector-button {\n    border-style: var(--tw-border-style);\n    border-width: 0;\n  }\n\n  .file\\:bg-transparent::file-selector-button {\n    background-color: #0000;\n  }\n\n  .file\\:text-sm::file-selector-button {\n    font-size: var(--text-sm);\n    line-height: var(--tw-leading, var(--text-sm--line-height));\n  }\n\n  .file\\:font-medium::file-selector-button {\n    --tw-font-weight: var(--font-weight-medium);\n    font-weight: var(--font-weight-medium);\n  }\n\n  .file\\:text-foreground::file-selector-button {\n    color: var(--foreground);\n  }\n\n  .placeholder\\:text-muted-foreground::placeholder {\n    color: var(--muted-foreground);\n  }\n\n  .after\\:absolute:after {\n    content: var(--tw-content);\n    position: absolute;\n  }\n\n  .after\\:-inset-2:after {\n    content: var(--tw-content);\n    inset: calc(var(--spacing) * -2);\n  }\n\n  .after\\:inset-y-0:after {\n    content: var(--tw-content);\n    inset-block: 0;\n  }\n\n  .after\\:left-1\\/2:after {\n    content: var(--tw-content);\n    left: 50%;\n  }\n\n  .after\\:w-\\[2px\\]:after {\n    content: var(--tw-content);\n    width: 2px;\n  }\n\n  .group-data-\\[collapsible\\=offcanvas\\]\\:after\\:left-full:is(:where(.group)[data-collapsible=\"offcanvas\"] *):after {\n    content: var(--tw-content);\n    left: 100%;\n  }\n\n  .first\\:rounded-l-md:first-child {\n    border-top-left-radius: var(--radius-md);\n    border-bottom-left-radius: var(--radius-md);\n  }\n\n  .first\\:border-l:first-child {\n    border-left-style: var(--tw-border-style);\n    border-left-width: 1px;\n  }\n\n  .first\\:ps-3:first-child {\n    padding-inline-start: calc(var(--spacing) * 3);\n  }\n\n  .last\\:rounded-r-md:last-child {\n    border-top-right-radius: var(--radius-md);\n    border-bottom-right-radius: var(--radius-md);\n  }\n\n  .last\\:pe-3:last-child {\n    padding-inline-end: calc(var(--spacing) * 3);\n  }\n\n  @media (hover: hover) {\n    .hover\\:bg-accent:hover {\n      background-color: var(--accent);\n    }\n\n    .hover\\:bg-background:hover {\n      background-color: var(--background);\n    }\n\n    .hover\\:bg-destructive\\/90:hover {\n      background-color: var(--destructive);\n    }\n\n    @supports (color: color-mix(in lab, red, red)) {\n      .hover\\:bg-destructive\\/90:hover {\n        background-color: color-mix(in oklab, var(--destructive) 90%, transparent);\n      }\n    }\n\n    .hover\\:bg-foreground\\/60:hover {\n      background-color: var(--foreground);\n    }\n\n    @supports (color: color-mix(in lab, red, red)) {\n      .hover\\:bg-foreground\\/60:hover {\n        background-color: color-mix(in oklab, var(--foreground) 60%, transparent);\n      }\n    }\n\n    .hover\\:bg-gray-100:hover {\n      background-color: var(--color-gray-100);\n    }\n\n    .hover\\:bg-muted:hover, .hover\\:bg-muted\\/50:hover {\n      background-color: var(--muted);\n    }\n\n    @supports (color: color-mix(in lab, red, red)) {\n      .hover\\:bg-muted\\/50:hover {\n        background-color: color-mix(in oklab, var(--muted) 50%, transparent);\n      }\n    }\n\n    .hover\\:bg-primary\\/90:hover {\n      background-color: var(--primary);\n    }\n\n    @supports (color: color-mix(in lab, red, red)) {\n      .hover\\:bg-primary\\/90:hover {\n        background-color: color-mix(in oklab, var(--primary) 90%, transparent);\n      }\n    }\n\n    .hover\\:bg-secondary-foreground\\/10:hover {\n      background-color: var(--secondary-foreground);\n    }\n\n    @supports (color: color-mix(in lab, red, red)) {\n      .hover\\:bg-secondary-foreground\\/10:hover {\n        background-color: color-mix(in oklab, var(--secondary-foreground) 10%, transparent);\n      }\n    }\n\n    .hover\\:bg-sidebar-accent:hover {\n      background-color: var(--sidebar-accent);\n    }\n\n    .hover\\:bg-transparent\\!:hover {\n      background-color: #0000 !important;\n    }\n\n    .hover\\:bg-white\\/60:hover {\n      background-color: #fff9;\n    }\n\n    @supports (color: color-mix(in lab, red, red)) {\n      .hover\\:bg-white\\/60:hover {\n        background-color: color-mix(in oklab, var(--color-white) 60%, transparent);\n      }\n    }\n\n    .hover\\:text-accent-foreground:hover {\n      color: var(--accent-foreground);\n    }\n\n    .hover\\:text-foreground:hover {\n      color: var(--foreground);\n    }\n\n    .hover\\:text-muted-foreground:hover {\n      color: var(--muted-foreground);\n    }\n\n    .hover\\:text-primary\\/80:hover {\n      color: var(--primary);\n    }\n\n    @supports (color: color-mix(in lab, red, red)) {\n      .hover\\:text-primary\\/80:hover {\n        color: color-mix(in oklab, var(--primary) 80%, transparent);\n      }\n    }\n\n    .hover\\:text-sidebar-accent-foreground:hover {\n      color: var(--sidebar-accent-foreground);\n    }\n\n    .hover\\:underline:hover {\n      text-decoration-line: underline;\n    }\n\n    .hover\\:opacity-80:hover {\n      opacity: .8;\n    }\n\n    .hover\\:opacity-100:hover {\n      opacity: 1;\n    }\n\n    .hover\\:shadow-\\[0_0_0_1px_hsl\\(var\\(--sidebar-accent\\)\\)\\]:hover {\n      --tw-shadow: 0 0 0 1px var(--tw-shadow-color, hsl(var(--sidebar-accent)));\n      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n    }\n\n    .hover\\:ring-4:hover {\n      --tw-ring-shadow: var(--tw-ring-inset, ) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);\n      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n    }\n\n    .hover\\:group-data-\\[collapsible\\=offcanvas\\]\\:bg-sidebar:hover:is(:where(.group)[data-collapsible=\"offcanvas\"] *) {\n      background-color: var(--sidebar);\n    }\n  }\n\n  .focus\\:bg-accent:focus {\n    background-color: var(--accent);\n  }\n\n  .focus\\:text-accent-foreground:focus {\n    color: var(--accent-foreground);\n  }\n\n  .focus\\:shadow-none\\!:focus {\n    --tw-shadow: 0 0 #0000 !important;\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow) !important;\n  }\n\n  .focus\\:ring-2:focus {\n    --tw-ring-shadow: var(--tw-ring-inset, ) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n\n  .focus\\:ring-ring:focus {\n    --tw-ring-color: var(--ring);\n  }\n\n  .focus\\:ring-offset-2:focus {\n    --tw-ring-offset-width: 2px;\n    --tw-ring-offset-shadow: var(--tw-ring-inset, ) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  }\n\n  .focus\\:outline-hidden:focus {\n    --tw-outline-style: none;\n    outline-style: none;\n  }\n\n  @media (forced-colors: active) {\n    .focus\\:outline-hidden:focus {\n      outline-offset: 2px;\n      outline: 2px solid #0000;\n    }\n  }\n\n  .focus\\:before\\:hidden\\!:focus:before, .focus\\:after\\:hidden\\!:focus:after {\n    content: var(--tw-content);\n    display: none !important;\n  }\n\n  .focus-visible\\:border-ring:focus-visible {\n    border-color: var(--ring);\n  }\n\n  .focus-visible\\:ring-0:focus-visible {\n    --tw-ring-shadow: var(--tw-ring-inset, ) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n\n  .focus-visible\\:ring-2:focus-visible {\n    --tw-ring-shadow: var(--tw-ring-inset, ) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n\n  .focus-visible\\:ring-4:focus-visible {\n    --tw-ring-shadow: var(--tw-ring-inset, ) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n\n  .focus-visible\\:ring-\\[3px\\]:focus-visible {\n    --tw-ring-shadow: var(--tw-ring-inset, ) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n\n  .focus-visible\\:ring-destructive\\/20:focus-visible {\n    --tw-ring-color: var(--destructive);\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .focus-visible\\:ring-destructive\\/20:focus-visible {\n      --tw-ring-color: color-mix(in oklab, var(--destructive) 20%, transparent);\n    }\n  }\n\n  .focus-visible\\:ring-ring\\/50:focus-visible {\n    --tw-ring-color: var(--ring);\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .focus-visible\\:ring-ring\\/50:focus-visible {\n      --tw-ring-color: color-mix(in oklab, var(--ring) 50%, transparent);\n    }\n  }\n\n  .focus-visible\\:ring-offset-0:focus-visible {\n    --tw-ring-offset-width: 0px;\n    --tw-ring-offset-shadow: var(--tw-ring-inset, ) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  }\n\n  .focus-visible\\:outline-hidden:focus-visible {\n    --tw-outline-style: none;\n    outline-style: none;\n  }\n\n  @media (forced-colors: active) {\n    .focus-visible\\:outline-hidden:focus-visible {\n      outline-offset: 2px;\n      outline: 2px solid #0000;\n    }\n  }\n\n  .focus-visible\\:outline-1:focus-visible {\n    outline-style: var(--tw-outline-style);\n    outline-width: 1px;\n  }\n\n  .focus-visible\\:outline-ring:focus-visible {\n    outline-color: var(--ring);\n  }\n\n  .focus-visible\\:outline-none:focus-visible {\n    --tw-outline-style: none;\n    outline-style: none;\n  }\n\n  .active\\:bg-sidebar-accent:active {\n    background-color: var(--sidebar-accent);\n  }\n\n  .active\\:text-sidebar-accent-foreground:active {\n    color: var(--sidebar-accent-foreground);\n  }\n\n  .disabled\\:pointer-events-none:disabled {\n    pointer-events: none;\n  }\n\n  .disabled\\:cursor-not-allowed:disabled {\n    cursor: not-allowed;\n  }\n\n  .disabled\\:text-secondary-foreground\\/50:disabled {\n    color: var(--secondary-foreground);\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .disabled\\:text-secondary-foreground\\/50:disabled {\n      color: color-mix(in oklab, var(--secondary-foreground) 50%, transparent);\n    }\n  }\n\n  .disabled\\:opacity-50:disabled {\n    opacity: .5;\n  }\n\n  :where([data-side=\"left\"]) .in-data-\\[side\\=left\\]\\:cursor-w-resize {\n    cursor: w-resize;\n  }\n\n  :where([data-side=\"right\"]) .in-data-\\[side\\=right\\]\\:cursor-e-resize {\n    cursor: e-resize;\n  }\n\n  .has-focus\\:border-ring:has(:focus) {\n    border-color: var(--ring);\n  }\n\n  .has-focus\\:ring-\\[3px\\]:has(:focus) {\n    --tw-ring-shadow: var(--tw-ring-inset, ) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n\n  .has-focus\\:ring-ring\\/50:has(:focus) {\n    --tw-ring-color: var(--ring);\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .has-focus\\:ring-ring\\/50:has(:focus) {\n      --tw-ring-color: color-mix(in oklab, var(--ring) 50%, transparent);\n    }\n  }\n\n  .has-disabled\\:opacity-50:has(:disabled) {\n    opacity: .5;\n  }\n\n  .has-data-\\[slot\\=card-action\\]\\:grid-cols-\\[1fr_auto\\]:has([data-slot=\"card-action\"]) {\n    grid-template-columns: 1fr auto;\n  }\n\n  .has-data-\\[variant\\=inset\\]\\:bg-sidebar:has([data-variant=\"inset\"]) {\n    background-color: var(--sidebar);\n  }\n\n  .has-\\[\\>svg\\]\\:grid-cols-\\[calc\\(var\\(--spacing\\)\\*4\\)_1fr\\]:has( > svg) {\n    grid-template-columns: calc(var(--spacing) * 4) 1fr;\n  }\n\n  .has-\\[\\>svg\\]\\:gap-x-3:has( > svg) {\n    column-gap: calc(var(--spacing) * 3);\n  }\n\n  .has-\\[\\>svg\\]\\:px-1\\.5:has( > svg) {\n    padding-inline: calc(var(--spacing) * 1.5);\n  }\n\n  .has-\\[\\>svg\\]\\:px-2\\.5:has( > svg) {\n    padding-inline: calc(var(--spacing) * 2.5);\n  }\n\n  .has-\\[\\>svg\\]\\:px-3:has( > svg) {\n    padding-inline: calc(var(--spacing) * 3);\n  }\n\n  .has-\\[\\>svg\\]\\:px-4:has( > svg) {\n    padding-inline: calc(var(--spacing) * 4);\n  }\n\n  .aria-disabled\\:pointer-events-none[aria-disabled=\"true\"] {\n    pointer-events: none;\n  }\n\n  .aria-disabled\\:opacity-50[aria-disabled=\"true\"] {\n    opacity: .5;\n  }\n\n  .aria-invalid\\:border-destructive[aria-invalid=\"true\"] {\n    border-color: var(--destructive);\n  }\n\n  .aria-invalid\\:ring-destructive\\/20[aria-invalid=\"true\"] {\n    --tw-ring-color: var(--destructive);\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .aria-invalid\\:ring-destructive\\/20[aria-invalid=\"true\"] {\n      --tw-ring-color: color-mix(in oklab, var(--destructive) 20%, transparent);\n    }\n  }\n\n  .aria-selected\\:text-muted-foreground[aria-selected=\"true\"] {\n    color: var(--muted-foreground);\n  }\n\n  .data-\\[active\\=true\\]\\:z-10[data-active=\"true\"] {\n    z-index: 10;\n  }\n\n  .data-\\[active\\=true\\]\\:border-ring[data-active=\"true\"] {\n    border-color: var(--ring);\n  }\n\n  .data-\\[active\\=true\\]\\:bg-primary[data-active=\"true\"] {\n    background-color: var(--primary);\n  }\n\n  .data-\\[active\\=true\\]\\:bg-sidebar-accent[data-active=\"true\"] {\n    background-color: var(--sidebar-accent);\n  }\n\n  .data-\\[active\\=true\\]\\:text-primary-foreground[data-active=\"true\"] {\n    color: var(--primary-foreground);\n  }\n\n  .data-\\[active\\=true\\]\\:text-sidebar-accent-foreground[data-active=\"true\"] {\n    color: var(--sidebar-accent-foreground);\n  }\n\n  .data-\\[active\\=true\\]\\:shadow-sm[data-active=\"true\"] {\n    --tw-shadow: 0 1px 3px 0 var(--tw-shadow-color, #0000001a), 0 1px 2px -1px var(--tw-shadow-color, #0000001a);\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n\n  .data-\\[active\\=true\\]\\:ring-\\[3px\\][data-active=\"true\"] {\n    --tw-ring-shadow: var(--tw-ring-inset, ) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n\n  .data-\\[active\\=true\\]\\:ring-ring\\/50[data-active=\"true\"] {\n    --tw-ring-color: var(--ring);\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .data-\\[active\\=true\\]\\:ring-ring\\/50[data-active=\"true\"] {\n      --tw-ring-color: color-mix(in oklab, var(--ring) 50%, transparent);\n    }\n  }\n\n  .data-\\[active\\=true\\]\\:aria-invalid\\:border-destructive[data-active=\"true\"][aria-invalid=\"true\"] {\n    border-color: var(--destructive);\n  }\n\n  .data-\\[active\\=true\\]\\:aria-invalid\\:ring-destructive\\/20[data-active=\"true\"][aria-invalid=\"true\"] {\n    --tw-ring-color: var(--destructive);\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .data-\\[active\\=true\\]\\:aria-invalid\\:ring-destructive\\/20[data-active=\"true\"][aria-invalid=\"true\"] {\n      --tw-ring-color: color-mix(in oklab, var(--destructive) 20%, transparent);\n    }\n  }\n\n  .data-\\[disabled\\]\\:pointer-events-none[data-disabled] {\n    pointer-events: none;\n  }\n\n  .data-\\[disabled\\]\\:opacity-50[data-disabled] {\n    opacity: .5;\n  }\n\n  .data-\\[disabled\\=true\\]\\:pointer-events-none[data-disabled=\"true\"] {\n    pointer-events: none;\n  }\n\n  .data-\\[disabled\\=true\\]\\:opacity-50[data-disabled=\"true\"] {\n    opacity: .5;\n  }\n\n  .data-\\[error\\=true\\]\\:text-destructive[data-error=\"true\"] {\n    color: var(--destructive);\n  }\n\n  .data-\\[inset\\]\\:pl-8[data-inset] {\n    padding-left: calc(var(--spacing) * 8);\n  }\n\n  .data-\\[orientation\\=horizontal\\]\\:h-1\\.5[data-orientation=\"horizontal\"] {\n    height: calc(var(--spacing) * 1.5);\n  }\n\n  .data-\\[orientation\\=horizontal\\]\\:h-full[data-orientation=\"horizontal\"] {\n    height: 100%;\n  }\n\n  .data-\\[orientation\\=horizontal\\]\\:h-px[data-orientation=\"horizontal\"] {\n    height: 1px;\n  }\n\n  .data-\\[orientation\\=horizontal\\]\\:w-full[data-orientation=\"horizontal\"] {\n    width: 100%;\n  }\n\n  .data-\\[orientation\\=vertical\\]\\:h-full[data-orientation=\"vertical\"] {\n    height: 100%;\n  }\n\n  .data-\\[orientation\\=vertical\\]\\:min-h-44[data-orientation=\"vertical\"] {\n    min-height: calc(var(--spacing) * 44);\n  }\n\n  .data-\\[orientation\\=vertical\\]\\:w-1\\.5[data-orientation=\"vertical\"] {\n    width: calc(var(--spacing) * 1.5);\n  }\n\n  .data-\\[orientation\\=vertical\\]\\:w-auto[data-orientation=\"vertical\"] {\n    width: auto;\n  }\n\n  .data-\\[orientation\\=vertical\\]\\:w-full[data-orientation=\"vertical\"] {\n    width: 100%;\n  }\n\n  .data-\\[orientation\\=vertical\\]\\:w-px[data-orientation=\"vertical\"] {\n    width: 1px;\n  }\n\n  .data-\\[orientation\\=vertical\\]\\:flex-col[data-orientation=\"vertical\"] {\n    flex-direction: column;\n  }\n\n  .data-\\[placeholder\\]\\:text-muted-foreground[data-placeholder] {\n    color: var(--muted-foreground);\n  }\n\n  .data-\\[range-end\\=true\\]\\:rounded-md[data-range-end=\"true\"] {\n    border-radius: var(--radius-md);\n  }\n\n  .data-\\[range-end\\=true\\]\\:rounded-r-md[data-range-end=\"true\"] {\n    border-top-right-radius: var(--radius-md);\n    border-bottom-right-radius: var(--radius-md);\n  }\n\n  .data-\\[range-end\\=true\\]\\:bg-primary[data-range-end=\"true\"] {\n    background-color: var(--primary);\n  }\n\n  .data-\\[range-end\\=true\\]\\:text-primary-foreground[data-range-end=\"true\"] {\n    color: var(--primary-foreground);\n  }\n\n  .data-\\[range-middle\\=true\\]\\:rounded-none[data-range-middle=\"true\"] {\n    border-radius: 0;\n  }\n\n  .data-\\[range-middle\\=true\\]\\:bg-accent[data-range-middle=\"true\"] {\n    background-color: var(--accent);\n  }\n\n  .data-\\[range-middle\\=true\\]\\:text-accent-foreground[data-range-middle=\"true\"] {\n    color: var(--accent-foreground);\n  }\n\n  .data-\\[range-start\\=true\\]\\:rounded-md[data-range-start=\"true\"] {\n    border-radius: var(--radius-md);\n  }\n\n  .data-\\[range-start\\=true\\]\\:rounded-l-md[data-range-start=\"true\"] {\n    border-top-left-radius: var(--radius-md);\n    border-bottom-left-radius: var(--radius-md);\n  }\n\n  .data-\\[range-start\\=true\\]\\:bg-primary[data-range-start=\"true\"] {\n    background-color: var(--primary);\n  }\n\n  .data-\\[range-start\\=true\\]\\:text-primary-foreground[data-range-start=\"true\"] {\n    color: var(--primary-foreground);\n  }\n\n  .data-\\[selected-single\\=true\\]\\:bg-primary[data-selected-single=\"true\"] {\n    background-color: var(--primary);\n  }\n\n  .data-\\[selected-single\\=true\\]\\:text-primary-foreground[data-selected-single=\"true\"] {\n    color: var(--primary-foreground);\n  }\n\n  .data-\\[selected\\=true\\]\\:rounded-none[data-selected=\"true\"] {\n    border-radius: 0;\n  }\n\n  .data-\\[selected\\=true\\]\\:bg-accent[data-selected=\"true\"] {\n    background-color: var(--accent);\n  }\n\n  .data-\\[selected\\=true\\]\\:text-accent-foreground[data-selected=\"true\"] {\n    color: var(--accent-foreground);\n  }\n\n  .data-\\[side\\=bottom\\]\\:translate-y-1[data-side=\"bottom\"] {\n    --tw-translate-y: var(--spacing);\n    translate: var(--tw-translate-x) var(--tw-translate-y);\n  }\n\n  .data-\\[side\\=left\\]\\:-translate-x-1[data-side=\"left\"] {\n    --tw-translate-x: calc(var(--spacing) * -1);\n    translate: var(--tw-translate-x) var(--tw-translate-y);\n  }\n\n  .data-\\[side\\=right\\]\\:translate-x-1[data-side=\"right\"] {\n    --tw-translate-x: var(--spacing);\n    translate: var(--tw-translate-x) var(--tw-translate-y);\n  }\n\n  .data-\\[side\\=top\\]\\:-translate-y-1[data-side=\"top\"] {\n    --tw-translate-y: calc(var(--spacing) * -1);\n    translate: var(--tw-translate-x) var(--tw-translate-y);\n  }\n\n  .data-\\[size\\=default\\]\\:h-9[data-size=\"default\"] {\n    height: calc(var(--spacing) * 9);\n  }\n\n  .data-\\[size\\=sm\\]\\:h-8[data-size=\"sm\"] {\n    height: calc(var(--spacing) * 8);\n  }\n\n  :is(.\\*\\:data-\\[slot\\=alert-description\\]\\:text-destructive\\/90 > *)[data-slot=\"alert-description\"] {\n    color: var(--destructive);\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    :is(.\\*\\:data-\\[slot\\=alert-description\\]\\:text-destructive\\/90 > *)[data-slot=\"alert-description\"] {\n      color: color-mix(in oklab, var(--destructive) 90%, transparent);\n    }\n  }\n\n  :is(.\\*\\:data-\\[slot\\=alert-description\\]\\:text-foreground > *)[data-slot=\"alert-description\"] {\n    color: var(--foreground);\n  }\n\n  :is(.\\*\\*\\:data-\\[slot\\=command-input-wrapper\\]\\:h-12 *)[data-slot=\"command-input-wrapper\"] {\n    height: calc(var(--spacing) * 12);\n  }\n\n  :is(.\\*\\:data-\\[slot\\=select-value\\]\\:line-clamp-1 > *)[data-slot=\"select-value\"] {\n    -webkit-line-clamp: 1;\n    -webkit-box-orient: vertical;\n    display: -webkit-box;\n    overflow: hidden;\n  }\n\n  :is(.\\*\\:data-\\[slot\\=select-value\\]\\:flex > *)[data-slot=\"select-value\"] {\n    display: flex;\n  }\n\n  :is(.\\*\\:data-\\[slot\\=select-value\\]\\:items-center > *)[data-slot=\"select-value\"] {\n    align-items: center;\n  }\n\n  :is(.\\*\\:data-\\[slot\\=select-value\\]\\:gap-2 > *)[data-slot=\"select-value\"] {\n    gap: calc(var(--spacing) * 2);\n  }\n\n  .data-\\[state\\=active\\]\\:bg-background[data-state=\"active\"] {\n    background-color: var(--background);\n  }\n\n  .data-\\[state\\=active\\]\\:shadow-sm[data-state=\"active\"] {\n    --tw-shadow: 0 1px 3px 0 var(--tw-shadow-color, #0000001a), 0 1px 2px -1px var(--tw-shadow-color, #0000001a);\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n\n  .data-\\[state\\=checked\\]\\:border-primary[data-state=\"checked\"] {\n    border-color: var(--primary);\n  }\n\n  .data-\\[state\\=checked\\]\\:bg-primary[data-state=\"checked\"] {\n    background-color: var(--primary);\n  }\n\n  .data-\\[state\\=checked\\]\\:text-primary-foreground[data-state=\"checked\"] {\n    color: var(--primary-foreground);\n  }\n\n  .data-\\[state\\=closed\\]\\:duration-300[data-state=\"closed\"] {\n    --tw-duration: .3s;\n    transition-duration: .3s;\n  }\n\n  .data-\\[state\\=on\\]\\:bg-accent[data-state=\"on\"] {\n    background-color: var(--accent);\n  }\n\n  .data-\\[state\\=on\\]\\:text-accent-foreground[data-state=\"on\"] {\n    color: var(--accent-foreground);\n  }\n\n  .data-\\[state\\=open\\]\\:bg-accent[data-state=\"open\"] {\n    background-color: var(--accent);\n  }\n\n  .data-\\[state\\=open\\]\\:bg-secondary[data-state=\"open\"] {\n    background-color: var(--secondary);\n  }\n\n  .data-\\[state\\=open\\]\\:text-accent-foreground[data-state=\"open\"] {\n    color: var(--accent-foreground);\n  }\n\n  .data-\\[state\\=open\\]\\:text-muted-foreground[data-state=\"open\"] {\n    color: var(--muted-foreground);\n  }\n\n  .data-\\[state\\=open\\]\\:opacity-100[data-state=\"open\"] {\n    opacity: 1;\n  }\n\n  .data-\\[state\\=open\\]\\:duration-500[data-state=\"open\"] {\n    --tw-duration: .5s;\n    transition-duration: .5s;\n  }\n\n  @media (hover: hover) {\n    .data-\\[state\\=open\\]\\:hover\\:bg-sidebar-accent[data-state=\"open\"]:hover {\n      background-color: var(--sidebar-accent);\n    }\n\n    .data-\\[state\\=open\\]\\:hover\\:text-sidebar-accent-foreground[data-state=\"open\"]:hover {\n      color: var(--sidebar-accent-foreground);\n    }\n  }\n\n  .data-\\[state\\=selected\\]\\:bg-muted[data-state=\"selected\"] {\n    background-color: var(--muted);\n  }\n\n  .data-\\[state\\=unchecked\\]\\:translate-x-0[data-state=\"unchecked\"] {\n    --tw-translate-x: 0px;\n    translate: var(--tw-translate-x) var(--tw-translate-y);\n  }\n\n  .data-\\[state\\=unchecked\\]\\:bg-input[data-state=\"unchecked\"] {\n    background-color: var(--input);\n  }\n\n  .data-\\[variant\\=destructive\\]\\:text-destructive[data-variant=\"destructive\"] {\n    color: var(--destructive);\n  }\n\n  .data-\\[variant\\=destructive\\]\\:focus\\:bg-destructive\\/10[data-variant=\"destructive\"]:focus {\n    background-color: var(--destructive);\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .data-\\[variant\\=destructive\\]\\:focus\\:bg-destructive\\/10[data-variant=\"destructive\"]:focus {\n      background-color: color-mix(in oklab, var(--destructive) 10%, transparent);\n    }\n  }\n\n  .data-\\[variant\\=destructive\\]\\:focus\\:text-destructive[data-variant=\"destructive\"]:focus {\n    color: var(--destructive);\n  }\n\n  @media not all and (min-width: 48rem) {\n    .max-md\\:hidden {\n      display: none;\n    }\n  }\n\n  @media (min-width: 40rem) {\n    .sm\\:block {\n      display: block;\n    }\n\n    .sm\\:flex {\n      display: flex;\n    }\n\n    .sm\\:max-w-lg {\n      max-width: var(--container-lg);\n    }\n\n    .sm\\:max-w-md {\n      max-width: var(--container-md);\n    }\n\n    .sm\\:max-w-sm {\n      max-width: var(--container-sm);\n    }\n\n    .sm\\:flex-row {\n      flex-direction: row;\n    }\n\n    .sm\\:justify-end {\n      justify-content: flex-end;\n    }\n\n    .sm\\:pr-2\\.5 {\n      padding-right: calc(var(--spacing) * 2.5);\n    }\n\n    .sm\\:pl-2\\.5 {\n      padding-left: calc(var(--spacing) * 2.5);\n    }\n\n    .sm\\:text-start {\n      text-align: start;\n    }\n  }\n\n  @media (min-width: 48rem) {\n    .md\\:block {\n      display: block;\n    }\n\n    .md\\:flex {\n      display: flex;\n    }\n\n    .md\\:flex-row {\n      flex-direction: row;\n    }\n\n    .md\\:text-sm {\n      font-size: var(--text-sm);\n      line-height: var(--tw-leading, var(--text-sm--line-height));\n    }\n\n    .md\\:opacity-0 {\n      opacity: 0;\n    }\n\n    .md\\:peer-data-\\[variant\\=inset\\]\\:m-2:is(:where(.peer)[data-variant=\"inset\"] ~ *) {\n      margin: calc(var(--spacing) * 2);\n    }\n\n    .md\\:peer-data-\\[variant\\=inset\\]\\:ml-0:is(:where(.peer)[data-variant=\"inset\"] ~ *) {\n      margin-left: 0;\n    }\n\n    .md\\:peer-data-\\[variant\\=inset\\]\\:rounded-xl:is(:where(.peer)[data-variant=\"inset\"] ~ *) {\n      border-radius: var(--radius-xl);\n    }\n\n    .md\\:peer-data-\\[variant\\=inset\\]\\:shadow-sm:is(:where(.peer)[data-variant=\"inset\"] ~ *) {\n      --tw-shadow: 0 1px 3px 0 var(--tw-shadow-color, #0000001a), 0 1px 2px -1px var(--tw-shadow-color, #0000001a);\n      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n    }\n\n    .md\\:peer-data-\\[variant\\=inset\\]\\:peer-data-\\[state\\=collapsed\\]\\:ml-2:is(:where(.peer)[data-variant=\"inset\"] ~ *):is(:where(.peer)[data-state=\"collapsed\"] ~ *) {\n      margin-left: calc(var(--spacing) * 2);\n    }\n\n    .md\\:after\\:hidden:after {\n      content: var(--tw-content);\n      display: none;\n    }\n  }\n\n  .ltr\\:data-\\[state\\=checked\\]\\:translate-x-\\[calc\\(100\\%-2px\\)\\]:where(:dir(ltr), [dir=\"ltr\"], [dir=\"ltr\"] *)[data-state=\"checked\"] {\n    --tw-translate-x: calc(100% - 2px);\n    translate: var(--tw-translate-x) var(--tw-translate-y);\n  }\n\n  .rtl\\:rotate-180:where(:dir(rtl), [dir=\"rtl\"], [dir=\"rtl\"] *) {\n    rotate: 180deg;\n  }\n\n  .rtl\\:data-\\[state\\=checked\\]\\:-translate-x-\\[calc\\(100\\%-2px\\)\\]:where(:dir(rtl), [dir=\"rtl\"], [dir=\"rtl\"] *)[data-state=\"checked\"] {\n    --tw-translate-x: calc(calc(100% - 2px) * -1);\n    translate: var(--tw-translate-x) var(--tw-translate-y);\n  }\n\n  .dark .dark\\:border-input {\n    border-color: var(--input);\n  }\n\n  .dark .dark\\:border-slate-900\\! {\n    border-color: var(--color-slate-900) !important;\n  }\n\n  .dark .dark\\:bg-destructive\\/60 {\n    background-color: var(--destructive);\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .dark .dark\\:bg-destructive\\/60 {\n      background-color: color-mix(in oklab, var(--destructive) 60%, transparent);\n    }\n  }\n\n  .dark .dark\\:bg-input\\/30 {\n    background-color: var(--input);\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .dark .dark\\:bg-input\\/30 {\n      background-color: color-mix(in oklab, var(--input) 30%, transparent);\n    }\n  }\n\n  .dark .dark\\:text-muted-foreground {\n    color: var(--muted-foreground);\n  }\n\n  .dark .dark\\:text-primary-foreground {\n    color: var(--primary-foreground);\n  }\n\n  @media (hover: hover) {\n    .dark .dark\\:hover\\:bg-accent\\/50:hover {\n      background-color: var(--accent);\n    }\n\n    @supports (color: color-mix(in lab, red, red)) {\n      .dark .dark\\:hover\\:bg-accent\\/50:hover {\n        background-color: color-mix(in oklab, var(--accent) 50%, transparent);\n      }\n    }\n\n    .dark .dark\\:hover\\:bg-input\\/50:hover {\n      background-color: var(--input);\n    }\n\n    @supports (color: color-mix(in lab, red, red)) {\n      .dark .dark\\:hover\\:bg-input\\/50:hover {\n        background-color: color-mix(in oklab, var(--input) 50%, transparent);\n      }\n    }\n\n    .dark .dark\\:hover\\:text-accent-foreground:hover {\n      color: var(--accent-foreground);\n    }\n  }\n\n  .dark .dark\\:focus-visible\\:ring-destructive\\/40:focus-visible {\n    --tw-ring-color: var(--destructive);\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .dark .dark\\:focus-visible\\:ring-destructive\\/40:focus-visible {\n      --tw-ring-color: color-mix(in oklab, var(--destructive) 40%, transparent);\n    }\n  }\n\n  .dark .dark\\:aria-invalid\\:ring-destructive\\/40[aria-invalid=\"true\"] {\n    --tw-ring-color: var(--destructive);\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .dark .dark\\:aria-invalid\\:ring-destructive\\/40[aria-invalid=\"true\"] {\n      --tw-ring-color: color-mix(in oklab, var(--destructive) 40%, transparent);\n    }\n  }\n\n  .dark .dark\\:data-\\[active\\=true\\]\\:aria-invalid\\:ring-destructive\\/40[data-active=\"true\"][aria-invalid=\"true\"] {\n    --tw-ring-color: var(--destructive);\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .dark .dark\\:data-\\[active\\=true\\]\\:aria-invalid\\:ring-destructive\\/40[data-active=\"true\"][aria-invalid=\"true\"] {\n      --tw-ring-color: color-mix(in oklab, var(--destructive) 40%, transparent);\n    }\n  }\n\n  .dark .dark\\:data-\\[state\\=active\\]\\:border-input[data-state=\"active\"] {\n    border-color: var(--input);\n  }\n\n  .dark .dark\\:data-\\[state\\=active\\]\\:bg-background[data-state=\"active\"] {\n    background-color: var(--background);\n  }\n\n  .dark .dark\\:data-\\[state\\=active\\]\\:text-foreground[data-state=\"active\"] {\n    color: var(--foreground);\n  }\n\n  .dark .dark\\:data-\\[state\\=checked\\]\\:bg-primary[data-state=\"checked\"] {\n    background-color: var(--primary);\n  }\n\n  .dark .dark\\:data-\\[state\\=checked\\]\\:bg-primary-foreground[data-state=\"checked\"] {\n    background-color: var(--primary-foreground);\n  }\n\n  .dark .dark\\:data-\\[state\\=unchecked\\]\\:bg-foreground[data-state=\"unchecked\"] {\n    background-color: var(--foreground);\n  }\n\n  .dark .dark\\:data-\\[state\\=unchecked\\]\\:bg-input\\/80[data-state=\"unchecked\"] {\n    background-color: var(--input);\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .dark .dark\\:data-\\[state\\=unchecked\\]\\:bg-input\\/80[data-state=\"unchecked\"] {\n      background-color: color-mix(in oklab, var(--input) 80%, transparent);\n    }\n  }\n\n  .dark .dark\\:data-\\[variant\\=destructive\\]\\:focus\\:bg-destructive\\/20[data-variant=\"destructive\"]:focus {\n    background-color: var(--destructive);\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .dark .dark\\:data-\\[variant\\=destructive\\]\\:focus\\:bg-destructive\\/20[data-variant=\"destructive\"]:focus {\n      background-color: color-mix(in oklab, var(--destructive) 20%, transparent);\n    }\n  }\n\n  .fc-day-today.\\[_\\.fc-day-today\\&_\\.fc-daygrid-day-number\\]\\:h-6 .fc-daygrid-day-number {\n    height: calc(var(--spacing) * 6);\n  }\n\n  .fc-day-today.\\[_\\.fc-day-today\\&_\\.fc-daygrid-day-number\\]\\:w-6 .fc-daygrid-day-number {\n    width: calc(var(--spacing) * 6);\n  }\n\n  .fc-day-today.\\[_\\.fc-day-today\\&_\\.fc-daygrid-day-number\\]\\:rounded-full .fc-daygrid-day-number {\n    border-radius: 3.40282e38px;\n  }\n\n  .fc-day-today.\\[_\\.fc-day-today\\&_\\.fc-daygrid-day-number\\]\\:bg-blue-500 .fc-daygrid-day-number {\n    background-color: var(--color-blue-500);\n  }\n\n  .fc-day-today.\\[_\\.fc-day-today\\&_\\.fc-daygrid-day-number\\]\\:text-white .fc-daygrid-day-number {\n    color: var(--color-white);\n  }\n\n  .\\[\\&_\\.fc\\]\\:h-full .fc {\n    height: 100%;\n  }\n\n  .\\[\\&_\\.fc-daygrid-day-number\\]\\:flex .fc-daygrid-day-number {\n    display: flex;\n  }\n\n  .\\[\\&_\\.fc-daygrid-day-number\\]\\:justify-center .fc-daygrid-day-number {\n    justify-content: center;\n  }\n\n  .\\[\\&_\\.fc-daygrid-day-top\\]\\:flex-row\\! .fc-daygrid-day-top {\n    flex-direction: row !important;\n  }\n\n  .\\[\\&_\\.fc-daygrid-day-top\\]\\:text-xs .fc-daygrid-day-top {\n    font-size: var(--text-xs);\n    line-height: var(--tw-leading, var(--text-xs--line-height));\n  }\n\n  .\\[\\&_\\.fc-scrollgrid\\]\\:border-none\\! .fc-scrollgrid, .\\[\\&_\\.fc-scrollgrid\\>tbody\\>tr\\>td\\]\\:border-none\\! .fc-scrollgrid > tbody > tr > td, .\\[\\&_\\.fc-scrollgrid\\>thead\\>tr\\>th\\]\\:border-none\\! .fc-scrollgrid > thead > tr > th {\n    --tw-border-style: none !important;\n    border-style: none !important;\n  }\n\n  .\\[\\&_\\.recharts-cartesian-axis-tick_text\\]\\:fill-muted-foreground .recharts-cartesian-axis-tick text {\n    fill: var(--muted-foreground);\n  }\n\n  .\\[\\&_\\.recharts-cartesian-grid_line\\[stroke\\=\\'\\#ccc\\'\\]\\]\\:stroke-border\\/50 .recharts-cartesian-grid line[stroke=\"#ccc\"] {\n    stroke: var(--border);\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .\\[\\&_\\.recharts-cartesian-grid_line\\[stroke\\=\\'\\#ccc\\'\\]\\]\\:stroke-border\\/50 .recharts-cartesian-grid line[stroke=\"#ccc\"] {\n      stroke: color-mix(in oklab, var(--border) 50%, transparent);\n    }\n  }\n\n  .\\[\\&_\\.recharts-curve\\.recharts-tooltip-cursor\\]\\:stroke-border .recharts-curve.recharts-tooltip-cursor {\n    stroke: var(--border);\n  }\n\n  .\\[\\&_\\.recharts-dot\\[stroke\\=\\'\\#fff\\'\\]\\]\\:stroke-transparent .recharts-dot[stroke=\"#fff\"] {\n    stroke: #0000;\n  }\n\n  .\\[\\&_\\.recharts-layer\\]\\:outline-hidden .recharts-layer {\n    --tw-outline-style: none;\n    outline-style: none;\n  }\n\n  @media (forced-colors: active) {\n    .\\[\\&_\\.recharts-layer\\]\\:outline-hidden .recharts-layer {\n      outline-offset: 2px;\n      outline: 2px solid #0000;\n    }\n  }\n\n  .\\[\\&_\\.recharts-polar-grid_\\[stroke\\=\\'\\#ccc\\'\\]\\]\\:stroke-border .recharts-polar-grid [stroke=\"#ccc\"] {\n    stroke: var(--border);\n  }\n\n  .\\[\\&_\\.recharts-radial-bar-background-sector\\]\\:fill-muted .recharts-radial-bar-background-sector, .\\[\\&_\\.recharts-rectangle\\.recharts-tooltip-cursor\\]\\:fill-muted .recharts-rectangle.recharts-tooltip-cursor {\n    fill: var(--muted);\n  }\n\n  .\\[\\&_\\.recharts-reference-line_\\[stroke\\=\\'\\#ccc\\'\\]\\]\\:stroke-border .recharts-reference-line [stroke=\"#ccc\"] {\n    stroke: var(--border);\n  }\n\n  .\\[\\&_\\.recharts-sector\\]\\:outline-hidden .recharts-sector {\n    --tw-outline-style: none;\n    outline-style: none;\n  }\n\n  @media (forced-colors: active) {\n    .\\[\\&_\\.recharts-sector\\]\\:outline-hidden .recharts-sector {\n      outline-offset: 2px;\n      outline: 2px solid #0000;\n    }\n  }\n\n  .\\[\\&_\\.recharts-sector\\[stroke\\=\\'\\#fff\\'\\]\\]\\:stroke-transparent .recharts-sector[stroke=\"#fff\"] {\n    stroke: #0000;\n  }\n\n  .\\[\\&_\\.recharts-surface\\]\\:outline-hidden .recharts-surface {\n    --tw-outline-style: none;\n    outline-style: none;\n  }\n\n  @media (forced-colors: active) {\n    .\\[\\&_\\.recharts-surface\\]\\:outline-hidden .recharts-surface {\n      outline-offset: 2px;\n      outline: 2px solid #0000;\n    }\n  }\n\n  .\\[\\&_\\[cmdk-group-heading\\]\\]\\:px-2 [cmdk-group-heading] {\n    padding-inline: calc(var(--spacing) * 2);\n  }\n\n  .\\[\\&_\\[cmdk-group-heading\\]\\]\\:py-1\\.5 [cmdk-group-heading] {\n    padding-block: calc(var(--spacing) * 1.5);\n  }\n\n  .\\[\\&_\\[cmdk-group-heading\\]\\]\\:text-xs [cmdk-group-heading] {\n    font-size: var(--text-xs);\n    line-height: var(--tw-leading, var(--text-xs--line-height));\n  }\n\n  .\\[\\&_\\[cmdk-group-heading\\]\\]\\:font-medium [cmdk-group-heading] {\n    --tw-font-weight: var(--font-weight-medium);\n    font-weight: var(--font-weight-medium);\n  }\n\n  .\\[\\&_\\[cmdk-group-heading\\]\\]\\:text-muted-foreground [cmdk-group-heading] {\n    color: var(--muted-foreground);\n  }\n\n  .\\[\\&_\\[cmdk-group\\]\\]\\:px-2 [cmdk-group] {\n    padding-inline: calc(var(--spacing) * 2);\n  }\n\n  .\\[\\&_\\[cmdk-group\\]\\:not\\(\\[hidden\\]\\)_\\~\\[cmdk-group\\]\\]\\:pt-0 [cmdk-group]:not([hidden]) ~ [cmdk-group] {\n    padding-top: 0;\n  }\n\n  .\\[\\&_\\[cmdk-input-wrapper\\]_svg\\]\\:h-5 [cmdk-input-wrapper] svg {\n    height: calc(var(--spacing) * 5);\n  }\n\n  .\\[\\&_\\[cmdk-input-wrapper\\]_svg\\]\\:w-5 [cmdk-input-wrapper] svg {\n    width: calc(var(--spacing) * 5);\n  }\n\n  .\\[\\&_\\[cmdk-input\\]\\]\\:h-12 [cmdk-input] {\n    height: calc(var(--spacing) * 12);\n  }\n\n  .\\[\\&_\\[cmdk-item\\]\\]\\:px-2 [cmdk-item] {\n    padding-inline: calc(var(--spacing) * 2);\n  }\n\n  .\\[\\&_\\[cmdk-item\\]\\]\\:py-3 [cmdk-item] {\n    padding-block: calc(var(--spacing) * 3);\n  }\n\n  .\\[\\&_\\[cmdk-item\\]_svg\\]\\:h-5 [cmdk-item] svg {\n    height: calc(var(--spacing) * 5);\n  }\n\n  .\\[\\&_\\[cmdk-item\\]_svg\\]\\:w-5 [cmdk-item] svg {\n    width: calc(var(--spacing) * 5);\n  }\n\n  .\\[\\&_img\\]\\:size-full img {\n    width: 100%;\n    height: 100%;\n  }\n\n  .\\[\\&_img\\]\\:object-cover img {\n    object-fit: cover;\n  }\n\n  .\\[\\&_p\\]\\:leading-relaxed p {\n    --tw-leading: var(--leading-relaxed);\n    line-height: var(--leading-relaxed);\n  }\n\n  .\\[\\&_svg\\]\\:pointer-events-none svg {\n    pointer-events: none;\n  }\n\n  .\\[\\&_svg\\]\\:size-4 svg {\n    width: calc(var(--spacing) * 4);\n    height: calc(var(--spacing) * 4);\n  }\n\n  .\\[\\&_svg\\]\\:shrink-0 svg {\n    flex-shrink: 0;\n  }\n\n  .\\[\\&_svg\\]\\:text-current svg {\n    color: currentColor;\n  }\n\n  .\\[\\&_svg\\:not\\(\\[class\\*\\=\\'size-\\'\\]\\)\\]\\:size-4 svg:not([class*=\"size-\"]) {\n    width: calc(var(--spacing) * 4);\n    height: calc(var(--spacing) * 4);\n  }\n\n  .\\[\\&_svg\\:not\\(\\[class\\*\\=\\'text-\\'\\]\\)\\]\\:text-muted-foreground svg:not([class*=\"text-\"]) {\n    color: var(--muted-foreground);\n  }\n\n  .\\[\\&_tr\\]\\:border-b tr {\n    border-bottom-style: var(--tw-border-style);\n    border-bottom-width: 1px;\n  }\n\n  .\\[\\&_tr\\:hover\\]\\:bg-muted\\/50 tr:hover {\n    background-color: var(--muted);\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .\\[\\&_tr\\:hover\\]\\:bg-muted\\/50 tr:hover {\n      background-color: color-mix(in oklab, var(--muted) 50%, transparent);\n    }\n  }\n\n  .\\[\\&_tr\\:last-child\\]\\:border-0 tr:last-child {\n    border-style: var(--tw-border-style);\n    border-width: 0;\n  }\n\n  .\\[\\&\\+\\[data-slot\\=item-content\\]\\]\\:flex-none + [data-slot=\"item-content\"] {\n    flex: none;\n  }\n\n  .\\[\\&\\:first-child\\[data-selected\\=true\\]_button\\]\\:rounded-l-md:first-child[data-selected=\"true\"] button {\n    border-top-left-radius: var(--radius-md);\n    border-bottom-left-radius: var(--radius-md);\n  }\n\n  .\\[\\&\\:has\\(\\.fc-daygrid-event\\,\\.fc-daygrid-more-link\\)\\]\\:cursor-pointer:has(.fc-daygrid-event, .fc-daygrid-more-link) {\n    cursor: pointer;\n  }\n\n  .\\[\\&\\:has\\(\\[role\\=checkbox\\]\\)\\]\\:pe-0:has([role=\"checkbox\"]) {\n    padding-inline-end: 0;\n  }\n\n  .\\[_\\.fc-day-other\\]\\:bg-muted.fc-day-other {\n    background-color: var(--muted);\n  }\n\n  .\\[_\\.fc-day-sat\\.fc-daygrid-day\\]\\:bg-slate-50.fc-day-sat.fc-daygrid-day {\n    background-color: var(--color-slate-50);\n  }\n\n  .dark .\\[_\\.fc-day-sat\\.fc-daygrid-day\\]\\:dark\\:bg-slate-950.fc-day-sat.fc-daygrid-day {\n    background-color: var(--color-slate-950);\n  }\n\n  .\\[_\\.fc-day-sun\\.fc-daygrid-day\\]\\:bg-slate-50.fc-day-sun.fc-daygrid-day {\n    background-color: var(--color-slate-50);\n  }\n\n  .dark .\\[_\\.fc-day-sun\\.fc-daygrid-day\\]\\:dark\\:bg-slate-950.fc-day-sun.fc-daygrid-day {\n    background-color: var(--color-slate-950);\n  }\n\n  .\\[_\\.fc-day-today\\]\\:bg-blue-50\\!.fc-day-today {\n    background-color: var(--color-blue-50) !important;\n  }\n\n  .dark .\\[_\\.fc-day-today\\]\\:dark\\:bg-blue-950\\!.fc-day-today {\n    background-color: var(--color-blue-950) !important;\n  }\n\n  .\\[\\.border-b\\]\\:pb-6.border-b {\n    padding-bottom: calc(var(--spacing) * 6);\n  }\n\n  .\\[\\.border-t\\]\\:pt-6.border-t {\n    padding-top: calc(var(--spacing) * 6);\n  }\n\n  :is(.rtl\\:\\*\\*\\:\\[\\.rdp-button\\\\\\\\_next\\>svg\\]\\:rotate-180:where(:dir(rtl), [dir=\"rtl\"], [dir=\"rtl\"] *) *):is(.rdp-button_next > svg), :is(.rtl\\:\\*\\*\\:\\[\\.rdp-button\\\\\\\\_previous\\>svg\\]\\:rotate-180:where(:dir(rtl), [dir=\"rtl\"], [dir=\"rtl\"] *) *):is(.rdp-button_previous > svg), :is(.rtl\\:\\*\\*\\:\\[\\.rdp-button\\\\_next\\>svg\\]\\:rotate-180:where(:dir(rtl), [dir=\"rtl\"], [dir=\"rtl\"] *) *):is(.rdp-button_next > svg), :is(.rtl\\:\\*\\*\\:\\[\\.rdp-button\\\\_previous\\>svg\\]\\:rotate-180:where(:dir(rtl), [dir=\"rtl\"], [dir=\"rtl\"] *) *):is(.rdp-button_previous > svg) {\n    rotate: 180deg;\n  }\n\n  .\\[a\\]\\:transition-colors:is(a) {\n    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;\n    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));\n    transition-duration: var(--tw-duration, var(--default-transition-duration));\n  }\n\n  @media (hover: hover) {\n    .\\[a\\]\\:hover\\:bg-accent\\/50:is(a):hover {\n      background-color: var(--accent);\n    }\n\n    @supports (color: color-mix(in lab, red, red)) {\n      .\\[a\\]\\:hover\\:bg-accent\\/50:is(a):hover {\n        background-color: color-mix(in oklab, var(--accent) 50%, transparent);\n      }\n    }\n  }\n\n  :is(.\\*\\:\\[span\\]\\:last\\:flex > *):is(span):last-child {\n    display: flex;\n  }\n\n  :is(.\\*\\:\\[span\\]\\:last\\:items-center > *):is(span):last-child {\n    align-items: center;\n  }\n\n  :is(.\\*\\:\\[span\\]\\:last\\:gap-2 > *):is(span):last-child {\n    gap: calc(var(--spacing) * 2);\n  }\n\n  :is(.data-\\[variant\\=destructive\\]\\:\\*\\:\\[svg\\]\\:\\!text-destructive[data-variant=\"destructive\"] > *):is(svg) {\n    color: var(--destructive) !important;\n  }\n\n  .\\[\\&\\:last-child\\[data-selected\\=true\\]_button\\]\\:rounded-r-md:last-child[data-selected=\"true\"] button {\n    border-top-right-radius: var(--radius-md);\n    border-bottom-right-radius: var(--radius-md);\n  }\n\n  .\\[\\&\\:nth-child\\(2\\)\\[data-selected\\=true\\]_button\\]\\:rounded-l-md:nth-child(2)[data-selected=\"true\"] button {\n    border-top-left-radius: var(--radius-md);\n    border-bottom-left-radius: var(--radius-md);\n  }\n\n  .\\[\\&\\>\\*\\]\\:pointer-events-auto > * {\n    pointer-events: auto;\n  }\n\n  .\\[\\&\\>\\[role\\=checkbox\\]\\]\\:translate-y-\\[2px\\] > [role=\"checkbox\"] {\n    --tw-translate-y: 2px;\n    translate: var(--tw-translate-x) var(--tw-translate-y);\n  }\n\n  .\\[\\&\\>a\\]\\:underline > a {\n    text-decoration-line: underline;\n  }\n\n  .\\[\\&\\>a\\]\\:underline-offset-4 > a {\n    text-underline-offset: 4px;\n  }\n\n  .\\[\\&\\>a\\:hover\\]\\:text-primary > a:hover {\n    color: var(--primary);\n  }\n\n  .\\[\\&\\>button\\]\\:hidden > button {\n    display: none;\n  }\n\n  .\\[\\&\\>img\\]\\:block > img {\n    display: block;\n  }\n\n  .\\[\\&\\>img\\]\\:size-full > img {\n    width: 100%;\n    height: 100%;\n  }\n\n  .\\[\\&\\>img\\]\\:object-cover > img {\n    object-fit: cover;\n  }\n\n  .\\[\\&\\>picture\\]\\:block > picture {\n    display: block;\n  }\n\n  .\\[\\&\\>picture\\]\\:size-full > picture, .\\[\\&\\>picture\\>img\\]\\:size-full > picture > img {\n    width: 100%;\n    height: 100%;\n  }\n\n  .\\[\\&\\>picture\\>img\\]\\:object-cover > picture > img {\n    object-fit: cover;\n  }\n\n  .\\[\\&\\>span\\]\\:text-xs > span {\n    font-size: var(--text-xs);\n    line-height: var(--tw-leading, var(--text-xs--line-height));\n  }\n\n  .\\[\\&\\>span\\]\\:opacity-70 > span {\n    opacity: .7;\n  }\n\n  .\\[\\&\\>span\\:last-child\\]\\:truncate > span:last-child {\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n  }\n\n  .\\[\\&\\>svg\\]\\:pointer-events-none > svg {\n    pointer-events: none;\n  }\n\n  .\\[\\&\\>svg\\]\\:size-3 > svg {\n    width: calc(var(--spacing) * 3);\n    height: calc(var(--spacing) * 3);\n  }\n\n  .\\[\\&\\>svg\\]\\:size-3\\.5 > svg {\n    width: calc(var(--spacing) * 3.5);\n    height: calc(var(--spacing) * 3.5);\n  }\n\n  .\\[\\&\\>svg\\]\\:size-4 > svg {\n    width: calc(var(--spacing) * 4);\n    height: calc(var(--spacing) * 4);\n  }\n\n  .\\[\\&\\>svg\\]\\:h-2\\.5 > svg {\n    height: calc(var(--spacing) * 2.5);\n  }\n\n  .\\[\\&\\>svg\\]\\:h-3 > svg {\n    height: calc(var(--spacing) * 3);\n  }\n\n  .\\[\\&\\>svg\\]\\:w-2\\.5 > svg {\n    width: calc(var(--spacing) * 2.5);\n  }\n\n  .\\[\\&\\>svg\\]\\:w-3 > svg {\n    width: calc(var(--spacing) * 3);\n  }\n\n  .\\[\\&\\>svg\\]\\:shrink-0 > svg {\n    flex-shrink: 0;\n  }\n\n  .\\[\\&\\>svg\\]\\:translate-y-0\\.5 > svg {\n    --tw-translate-y: calc(var(--spacing) * .5);\n    translate: var(--tw-translate-x) var(--tw-translate-y);\n  }\n\n  .\\[\\&\\>svg\\]\\:text-current > svg {\n    color: currentColor;\n  }\n\n  .\\[\\&\\>svg\\]\\:text-muted-foreground > svg {\n    color: var(--muted-foreground);\n  }\n\n  .\\[\\&\\>svg\\]\\:text-sidebar-accent-foreground > svg {\n    color: var(--sidebar-accent-foreground);\n  }\n\n  .\\[\\&\\>svg\\]\\:text-warning > svg {\n    color: var(--warning);\n  }\n\n  .\\[\\&\\>tr\\]\\:last\\:border-b-0 > tr:last-child {\n    border-bottom-style: var(--tw-border-style);\n    border-bottom-width: 0;\n  }\n\n  .\\[\\&\\>video\\]\\:block > video {\n    display: block;\n  }\n\n  .\\[\\&\\>video\\]\\:size-full > video {\n    width: 100%;\n    height: 100%;\n  }\n\n  .\\[\\&\\>video\\]\\:object-cover > video {\n    object-fit: cover;\n  }\n\n  [data-side=\"left\"][data-collapsible=\"offcanvas\"] .\\[\\[data-side\\=left\\]\\[data-collapsible\\=offcanvas\\]_\\&\\]\\:-right-2 {\n    right: calc(var(--spacing) * -2);\n  }\n\n  [data-side=\"left\"][data-state=\"collapsed\"] .\\[\\[data-side\\=left\\]\\[data-state\\=collapsed\\]_\\&\\]\\:cursor-e-resize {\n    cursor: e-resize;\n  }\n\n  [data-side=\"right\"][data-collapsible=\"offcanvas\"] .\\[\\[data-side\\=right\\]\\[data-collapsible\\=offcanvas\\]_\\&\\]\\:-left-2 {\n    left: calc(var(--spacing) * -2);\n  }\n\n  [data-side=\"right\"][data-state=\"collapsed\"] .\\[\\[data-side\\=right\\]\\[data-state\\=collapsed\\]_\\&\\]\\:cursor-w-resize {\n    cursor: w-resize;\n  }\n\n  [data-slot=\"card-content\"] .\\[\\[data-slot\\=card-content\\]_\\&\\]\\:bg-transparent, [data-slot=\"popover-content\"] .\\[\\[data-slot\\=popover-content\\]_\\&\\]\\:bg-transparent {\n    background-color: #0000;\n  }\n\n  @media (hover: hover) {\n    a.\\[a\\&\\]\\:hover\\:bg-accent:hover {\n      background-color: var(--accent);\n    }\n\n    a.\\[a\\&\\]\\:hover\\:bg-destructive\\/90:hover {\n      background-color: var(--destructive);\n    }\n\n    @supports (color: color-mix(in lab, red, red)) {\n      a.\\[a\\&\\]\\:hover\\:bg-destructive\\/90:hover {\n        background-color: color-mix(in oklab, var(--destructive) 90%, transparent);\n      }\n    }\n\n    a.\\[a\\&\\]\\:hover\\:bg-primary\\/90:hover {\n      background-color: var(--primary);\n    }\n\n    @supports (color: color-mix(in lab, red, red)) {\n      a.\\[a\\&\\]\\:hover\\:bg-primary\\/90:hover {\n        background-color: color-mix(in oklab, var(--primary) 90%, transparent);\n      }\n    }\n\n    a.\\[a\\&\\]\\:hover\\:bg-secondary\\/90:hover {\n      background-color: var(--secondary);\n    }\n\n    @supports (color: color-mix(in lab, red, red)) {\n      a.\\[a\\&\\]\\:hover\\:bg-secondary\\/90:hover {\n        background-color: color-mix(in oklab, var(--secondary) 90%, transparent);\n      }\n    }\n\n    a.\\[a\\&\\]\\:hover\\:bg-white\\/30:hover {\n      background-color: #ffffff4d;\n    }\n\n    @supports (color: color-mix(in lab, red, red)) {\n      a.\\[a\\&\\]\\:hover\\:bg-white\\/30:hover {\n        background-color: color-mix(in oklab, var(--color-white) 30%, transparent);\n      }\n    }\n\n    a.\\[a\\&\\]\\:hover\\:text-accent-foreground:hover {\n      color: var(--accent-foreground);\n    }\n  }\n\n  .scrollbar-hide {\n    -ms-overflow-style: none;\n    scrollbar-width: none;\n  }\n\n  .scrollbar-hide::-webkit-scrollbar {\n    display: none;\n  }\n\n  .scrollbar-thin-track {\n    --scrollbar-track: 35 35 35;\n    --scrollbar-thumb: 70 70 70;\n  }\n\n  .scrollbar-thin-track [data-radix-scroll-area-viewport]::-webkit-scrollbar {\n    width: 8px;\n  }\n\n  .scrollbar-thin-track [data-radix-scroll-area-viewport]::-webkit-scrollbar-track {\n    background: rgb(var(--scrollbar-track));\n  }\n\n  .scrollbar-thin-track [data-radix-scroll-area-viewport]::-webkit-scrollbar-thumb {\n    background: rgb(var(--scrollbar-thumb));\n    border-radius: 9999px;\n  }\n\n  .container {\n    width: 100%;\n    max-width: 1600px;\n    margin-left: auto;\n    margin-right: auto;\n    padding: 1.5rem 1rem;\n    animation: .3s ease-out fadeIn;\n  }\n\n  @media (min-width: 640px) {\n    .container {\n      padding-left: 1.5rem;\n      padding-right: 1.5rem;\n    }\n  }\n\n  @media (min-width: 1024px) {\n    .container {\n      padding-left: 2rem;\n      padding-right: 2rem;\n    }\n  }\n\n  @media (min-width: 1280px) {\n    .container {\n      padding-left: 3rem;\n      padding-right: 3rem;\n    }\n  }\n\n  @media (min-width: 1536px) {\n    .container {\n      padding-left: 4rem;\n      padding-right: 4rem;\n    }\n  }\n\n  .header-title-offset {\n    margin-left: max(0px, 60px - 1rem);\n  }\n\n  @media (min-width: 640px) {\n    .header-title-offset {\n      margin-left: max(0px, 60px - 1.5rem);\n    }\n  }\n\n  @media (min-width: 1024px) {\n    .header-title-offset {\n      margin-left: max(0px, 60px - 2rem);\n    }\n  }\n\n  @media (min-width: 1280px) {\n    .header-title-offset {\n      margin-left: max(0px, 60px - 3rem);\n    }\n  }\n\n  @media (min-width: 1536px) {\n    .header-title-offset {\n      margin-left: max(0px, 60px - 4rem);\n    }\n  }\n}\n\n:root {\n  --hds-2xs: 8;\n  --hds-xs: 8;\n  --hds-sm: 12;\n  --hds-md: 16;\n  --hds-lg: 24;\n  --hds-prim-neutral-regular-0: #fff;\n  --hds-prim-neutral-regular-20: #fafafa;\n  --hds-prim-neutral-regular-45: #f4f4f4;\n  --hds-prim-neutral-regular-50: #f2f2f2;\n  --hds-prim-neutral-regular-60: #f0f0f0;\n  --hds-prim-neutral-regular-100: #e4e4e4;\n  --hds-prim-neutral-regular-150: #d9d9d9;\n  --hds-prim-neutral-regular-200: #ccc;\n  --hds-prim-neutral-regular-300: #b2b2b2;\n  --hds-prim-neutral-regular-350: #a6a6a6;\n  --hds-prim-neutral-regular-400: #999;\n  --hds-prim-neutral-regular-500: gray;\n  --hds-prim-neutral-regular-600: #666;\n  --hds-prim-neutral-regular-700: #4d4d4d;\n  --hds-prim-neutral-regular-900: #1a1a1a;\n  --hds-prim-neutral-regular-1000: #000;\n  --hds-prim-neutral-transparent-white-white0: #fff0;\n  --hds-prim-neutral-transparent-white-white100: #ffffff1a;\n  --hds-prim-neutral-transparent-white-white200: #fff3;\n  --hds-prim-neutral-transparent-white-white300: #ffffff4d;\n  --hds-prim-neutral-transparent-white-white400: #fff6;\n  --hds-prim-neutral-transparent-white-white500: #ffffff80;\n  --hds-prim-neutral-transparent-white-white600: #fff9;\n  --hds-prim-neutral-transparent-white-white700: #ffffffb3;\n  --hds-prim-neutral-transparent-white-white800: #fffc;\n  --hds-prim-neutral-transparent-white-white900: #ffffffe6;\n  --hds-prim-neutral-transparent-black-black0: #0000;\n  --hds-prim-neutral-transparent-black-black40: #00000005;\n  --hds-prim-neutral-transparent-black-black50: #0000000d;\n  --hds-prim-neutral-transparent-black-black100: #0000001a;\n  --hds-prim-neutral-transparent-black-black200: #0003;\n  --hds-prim-neutral-transparent-black-black300: #0000004d;\n  --hds-prim-neutral-transparent-black-black400: #0006;\n  --hds-prim-neutral-transparent-black-black500: #00000080;\n  --hds-prim-neutral-transparent-black-black600: #0009;\n  --hds-prim-neutral-transparent-black-black700: #000000b3;\n  --hds-prim-neutral-transparent-black-black800: #000c;\n  --hds-prim-neutral-transparent-black-black900: #000000e6;\n  --hds-prim-accent-regular-teal: #008894;\n  --hds-prim-accent-regular-terracotta: #db6638;\n  --hds-prim-accent-regular-indigo: #5959f4;\n  --hds-prim-accent-regular-orchid: #cd52c3;\n  --hds-prim-accent-regular-olive: #8ca875;\n  --hds-prim-accent-regular-green: #10b189;\n  --hds-prim-accent-regular-orange: #ed9917;\n  --hds-prim-accent-regular-red: #f6445c;\n  --hds-prim-accent-transparent-teal-teal100: #0088941a;\n  --hds-prim-accent-transparent-teal-teal150: #00889426;\n  --hds-prim-accent-transparent-teal-teal200: #00889433;\n  --hds-prim-accent-transparent-teal-teal300: #0088944d;\n  --hds-prim-accent-transparent-teal-teal400: #00889466;\n  --hds-prim-accent-transparent-teal-teal500: #00889480;\n  --hds-prim-accent-transparent-teal-teal600: #00889499;\n  --hds-prim-accent-transparent-teal-teal700: #008894b3;\n  --hds-prim-accent-transparent-teal-teal800: #008894cc;\n  --hds-prim-accent-transparent-teal-teal900: #008894e6;\n  --hds-prim-accent-transparent-terracotta-terracotta100: #db66381a;\n  --hds-prim-accent-transparent-terracotta-terracotta150: #db663826;\n  --hds-prim-accent-transparent-terracotta-terracotta200: #db663833;\n  --hds-prim-accent-transparent-terracotta-terracotta300: #db66384d;\n  --hds-prim-accent-transparent-terracotta-terracotta400: #db663866;\n  --hds-prim-accent-transparent-terracotta-terracotta500: #db663880;\n  --hds-prim-accent-transparent-terracotta-terracotta600: #db663899;\n  --hds-prim-accent-transparent-terracotta-terracotta700: #db6638b3;\n  --hds-prim-accent-transparent-terracotta-terracotta800: #db6638cc;\n  --hds-prim-accent-transparent-terracotta-terracotta900: #db6638e6;\n  --hds-prim-accent-transparent-indigo-indigo100: #5959f41a;\n  --hds-prim-accent-transparent-indigo-indigo150: #5959f426;\n  --hds-prim-accent-transparent-indigo-indigo200: #5959f433;\n  --hds-prim-accent-transparent-indigo-indigo300: #5959f44d;\n  --hds-prim-accent-transparent-indigo-indigo400: #5959f466;\n  --hds-prim-accent-transparent-indigo-indigo500: #5959f480;\n  --hds-prim-accent-transparent-indigo-indigo600: #5959f499;\n  --hds-prim-accent-transparent-indigo-indigo700: #5959f4b3;\n  --hds-prim-accent-transparent-indigo-indigo800: #5959f4cc;\n  --hds-prim-accent-transparent-indigo-indigo900: #5959f4e6;\n  --hds-prim-accent-transparent-orchid-indigo100: #cd52c31a;\n  --hds-prim-accent-transparent-orchid-indigo150: #cd52c326;\n  --hds-prim-accent-transparent-orchid-indigo200: #cd52c333;\n  --hds-prim-accent-transparent-orchid-indigo300: #cd52c34d;\n  --hds-prim-accent-transparent-orchid-indigo400: #cd52c366;\n  --hds-prim-accent-transparent-orchid-indigo500: #cd52c380;\n  --hds-prim-accent-transparent-orchid-indigo600: #cd52c399;\n  --hds-prim-accent-transparent-orchid-indigo700: #cd52c3b3;\n  --hds-prim-accent-transparent-orchid-indigo800: #cd52c3cc;\n  --hds-prim-accent-transparent-orchid-indigo900: #9c4f96e6;\n  --hds-prim-accent-transparent-olive-olive100: #8ca8751a;\n  --hds-prim-accent-transparent-olive-olive150: #8ca87526;\n  --hds-prim-accent-transparent-olive-olive200: #8ca87533;\n  --hds-prim-accent-transparent-olive-olive300: #8ca8754d;\n  --hds-prim-accent-transparent-olive-olive400: #8ca87566;\n  --hds-prim-accent-transparent-olive-olive500: #8ca87580;\n  --hds-prim-accent-transparent-olive-olive600: #8ca87599;\n  --hds-prim-accent-transparent-olive-olive700: #8ca875b3;\n  --hds-prim-accent-transparent-olive-olive800: #8ca875cc;\n  --hds-prim-accent-transparent-olive-olive900: #8ca875e6;\n  --hds-prim-accent-transparent-green-green100: #10b1891a;\n  --hds-prim-accent-transparent-green-green150: #10b18926;\n  --hds-prim-accent-transparent-green-green200: #10b18933;\n  --hds-prim-accent-transparent-green-green300: #10b1894d;\n  --hds-prim-accent-transparent-green-green400: #10b18966;\n  --hds-prim-accent-transparent-green-green500: #10b18980;\n  --hds-prim-accent-transparent-green-green600: #10b18999;\n  --hds-prim-accent-transparent-green-green700: #10b189b3;\n  --hds-prim-accent-transparent-green-green800: #10b189cc;\n  --hds-prim-accent-transparent-green-green900: #10b189e6;\n  --hds-prim-accent-transparent-orange-orange100: #ed99171a;\n  --hds-prim-accent-transparent-orange-orange150: #ed991726;\n  --hds-prim-accent-transparent-orange-orange200: #ed991733;\n  --hds-prim-accent-transparent-orange-orange300: #ed99174d;\n  --hds-prim-accent-transparent-orange-orange400: #ed991766;\n  --hds-prim-accent-transparent-orange-orange500: #ed991780;\n  --hds-prim-accent-transparent-orange-orange600: #ed991799;\n  --hds-prim-accent-transparent-orange-orange700: #ed9917b3;\n  --hds-prim-accent-transparent-orange-orange800: #ed9917cc;\n  --hds-prim-accent-transparent-orange-orange900: #ed9917e6;\n  --hds-prim-accent-transparent-red-red100: #f6445c1a;\n  --hds-prim-accent-transparent-red-red150: #f6445c26;\n  --hds-prim-accent-transparent-red-red200: #f6445c33;\n  --hds-prim-accent-transparent-red-red300: #f6445c4d;\n  --hds-prim-accent-transparent-red-red400: #f6445c66;\n  --hds-prim-accent-transparent-red-red500: #f6445c80;\n  --hds-prim-accent-transparent-red-red600: #f6445c99;\n  --hds-prim-accent-transparent-red-red700: #f6445cb3;\n  --hds-prim-accent-transparent-red-red800: #f6445ccc;\n  --hds-prim-accent-transparent-red-red900: #f6445ce6;\n  --hds-spacing-0: 0;\n  --hds-spacing-2: 2;\n  --hds-spacing-4: 4;\n  --hds-spacing-6: 6;\n  --hds-spacing-8: 8;\n  --hds-spacing-10: 10;\n  --hds-spacing-12: 12;\n  --hds-spacing-16: -16;\n  --hds-spacing-20: 20;\n  --hds-spacing-24: 24;\n  --hds-spacing-28: 28;\n  --hds-spacing-32: -32;\n  --hds-spacing-40: 40;\n  --hds-spacing-48: 48;\n  --hds-spacing-56: 56;\n  --hds-spacing-64: 64;\n  --hds-spacing-80: 80;\n  --hds-spacing-96: 96;\n  --hds-spacing-128: 128;\n  --hds-spacing-160: 160;\n  --hds-font-size-8: 8;\n  --hds-font-size-10: 10;\n  --hds-font-size-12: 12;\n  --hds-font-size-14: 14;\n  --hds-font-size-16: 16;\n  --hds-font-size-18: 18;\n  --hds-font-size-20: 20;\n  --hds-font-size-22: 22;\n  --hds-font-size-24: 24;\n  --hds-font-size-26: 26;\n  --hds-font-size-28: 28;\n  --hds-font-size-30: 30;\n  --hds-font-size-32: 32;\n  --hds-font-size-48: 48;\n  --hds-font-size-72: 72;\n  --hds-font-weight-light-300: 300;\n  --hds-font-weight-regular-400: 400;\n  --hds-font-weight-medium-500: 500;\n  --hds-font-weight-semi-bold-600: 600;\n  --hds-font-weight-bold-700: 700;\n  --hds-font-weight-extra-bold-800: 800;\n  --hds-font-weight-black-900: 900;\n  --hds-xl: 100;\n  --hds-background-default: var(--hds-prim-neutral-regular-45);\n  --hds-background-inverse: var(--hds-prim-neutral-regular-900);\n  --hds-background-overlay: var(--hds-prim-neutral-transparent-black-black700);\n  --hds-surface-widget: var(--hds-prim-neutral-regular-0);\n  --hds-surface-widget-pressed: var(--hds-prim-neutral-regular-100);\n  --hds-surface-widget-alpha: var(--hds-prim-neutral-transparent-white-white100);\n  --hds-surface-widget-alpha-pressed: var(--hds-prim-neutral-transparent-white-white200);\n  --hds-surface-accent: var(--hds-prim-neutral-regular-900);\n  --hds-surface-accent-pressed: var(--hds-prim-neutral-regular-700);\n  --hds-surface-accent-alternate: var(--hds-prim-neutral-regular-0);\n  --hds-surface-accent-alternate-pressed: var(--hds-prim-neutral-regular-100);\n  --hds-surface-subdued: var(--hds-prim-neutral-regular-100);\n  --hds-surface-subdued-pressed: var(--hds-prim-neutral-regular-200);\n  --hds-surface-subdued-alpha: var(--hds-prim-neutral-transparent-white-white200);\n  --hds-surface-subdued-alpha-pressed: var(--hds-prim-neutral-transparent-white-white400);\n  --hds-surface-active: var(--hds-prim-neutral-regular-900);\n  --hds-surface-active-alternate: var(--hds-prim-neutral-regular-0);\n  --hds-surface-raised: var(--hds-prim-neutral-transparent-black-black50);\n  --hds-surface-raised-pressed: var(--hds-prim-neutral-transparent-black-black100);\n  --hds-surface-raised-inverse: var(--hds-prim-neutral-regular-600);\n  --hds-surface-raised-alpha: var(--hds-prim-neutral-transparent-white-white100);\n  --hds-surface-disabled: var(--hds-prim-neutral-regular-100);\n  --hds-surface-disabled-alternate: var(--hds-prim-neutral-transparent-white-white100);\n  --hds-surface-placeholder: var(--hds-prim-neutral-transparent-black-black40);\n  --hds-surface-teal: var(--hds-prim-accent-regular-teal);\n  --hds-surface-teal-alpha15: var(--hds-prim-accent-transparent-teal-teal150);\n  --hds-surface-teal-alpha20: var(--hds-prim-accent-transparent-teal-teal200);\n  --hds-surface-terracotta: var(--hds-prim-accent-regular-terracotta);\n  --hds-surface-terracotta-alpha15: var(--hds-prim-accent-transparent-terracotta-terracotta150);\n  --hds-surface-terracotta-alpha20: var(--hds-prim-accent-transparent-terracotta-terracotta200);\n  --hds-surface-indigo: var(--hds-prim-accent-regular-indigo);\n  --hds-surface-indigo-alpha15: var(--hds-prim-accent-transparent-indigo-indigo150);\n  --hds-surface-indigo-alpha20: var(--hds-prim-accent-transparent-indigo-indigo200);\n  --hds-surface-orchid: var(--hds-prim-accent-regular-orchid);\n  --hds-surface-orchid-alpha15: var(--hds-prim-accent-transparent-orchid-indigo150);\n  --hds-surface-orchid-alpha20: var(--hds-prim-accent-transparent-orchid-indigo200);\n  --hds-surface-olive: var(--hds-prim-accent-regular-olive);\n  --hds-surface-olive-alpha15: var(--hds-prim-accent-transparent-olive-olive150);\n  --hds-surface-olive-alpha20: var(--hds-prim-accent-transparent-olive-olive200);\n  --hds-surface-green: var(--hds-prim-accent-regular-green);\n  --hds-surface-green-alpha15: var(--hds-prim-accent-transparent-green-green150);\n  --hds-surface-green-alpha20: var(--hds-prim-accent-transparent-green-green200);\n  --hds-surface-green-alpha40: var(--hds-prim-accent-transparent-green-green400);\n  --hds-surface-orange: var(--hds-prim-accent-regular-orange);\n  --hds-surface-orange-alpha15: var(--hds-prim-accent-transparent-orange-orange150);\n  --hds-surface-orange-alpha20: var(--hds-prim-accent-transparent-orange-orange200);\n  --hds-surface-red: var(--hds-prim-accent-regular-red);\n  --hds-surface-red-alpha15: var(--hds-prim-accent-transparent-red-red150);\n  --hds-surface-red-alpha20: var(--hds-prim-accent-transparent-red-red200);\n  --hds-surface-red-alpha40: var(--hds-prim-accent-transparent-red-red400);\n  --hds-surface-destructive: var(--hds-prim-accent-regular-red);\n  --hds-foreground-primary: var(--hds-prim-neutral-regular-900);\n  --hds-foreground-primary-inverse: var(--hds-prim-neutral-regular-0);\n  --hds-foreground-primary-inverse-alpha20: var(--hds-prim-neutral-transparent-white-white200);\n  --hds-foreground-secondary: var(--hds-prim-neutral-regular-500);\n  --hds-foreground-secondary-inverse: var(--hds-prim-neutral-regular-350);\n  --hds-foreground-secondary-inverse-alpha70: var(--hds-prim-neutral-transparent-white-white700);\n  --hds-foreground-secondary-inverse-alpha50: var(--hds-prim-neutral-transparent-white-white500);\n  --hds-foreground-disabled: var(--hds-prim-neutral-regular-300);\n  --hds-foreground-disabled-alternate: var(--hds-prim-neutral-regular-700);\n  --hds-foreground-teal: var(--hds-prim-accent-regular-teal);\n  --hds-foreground-terracotta: var(--hds-prim-accent-regular-terracotta);\n  --hds-foreground-indigo: var(--hds-prim-accent-regular-indigo);\n  --hds-foreground-orchid: var(--hds-prim-accent-regular-orchid);\n  --hds-foreground-olive: var(--hds-prim-accent-regular-olive);\n  --hds-foreground-green: var(--hds-prim-accent-regular-green);\n  --hds-foreground-orange: var(--hds-prim-accent-regular-orange);\n  --hds-foreground-red: var(--hds-prim-accent-regular-red);\n  --hds-border-primary: var(--hds-prim-neutral-regular-150);\n  --hds-border-primary-inverse: var(--hds-prim-neutral-transparent-white-white200);\n  --hds-border-focus: var(--hds-prim-neutral-regular-900);\n  --hds-border-focus-inverse: var(--hds-prim-neutral-transparent-white-white900);\n  --hds-border-destructive: var(--hds-prim-accent-regular-red);\n  --hds-border-disabled: var(--hds-prim-neutral-regular-60);\n  --hds-border-disabled-alternate: var(--hds-prim-neutral-transparent-white-white100);\n  --hds-border-teal10-t: var(--hds-prim-accent-transparent-teal-teal100);\n  --hds-border-terracotta-alpha10: var(--hds-prim-accent-transparent-terracotta-terracotta100);\n  --hds-border-indigo-alpha10: var(--hds-prim-accent-transparent-indigo-indigo100);\n  --hds-border-orchid-alpha10: var(--hds-prim-accent-transparent-orchid-indigo100);\n  --hds-border-olive-alpha10: var(--hds-prim-accent-transparent-olive-olive100);\n  --hds-border-green-alpha10: var(--hds-prim-accent-transparent-green-green100);\n  --hds-border-orange-alpha10: var(--hds-prim-accent-transparent-orange-orange100);\n  --hds-border-red-alpha10: var(--hds-prim-accent-transparent-red-red100);\n  --hds-padding-2xs: var(--hds-spacing-2);\n  --hds-padding-xs: var(--hds-spacing-4);\n  --hds-padding-sm: var(--hds-spacing-8);\n  --hds-padding-md: var(--hds-spacing-12);\n  --hds-padding-lg: var(--hds-spacing-16);\n  --hds-padding-xl: var(--hds-spacing-24);\n  --hds-padding-2xl: var(--hds-spacing-32);\n  --hds-padding-negative-lg: var(--hds-spacing-16);\n  --hds-padding-negative-2xl: var(--hds-spacing-32);\n  --hds-margin-2xs: var(--hds-spacing-2);\n  --hds-margin-xs: var(--hds-spacing-4);\n  --hds-margin-sm: var(--hds-spacing-8);\n  --hds-margin-md: var(--hds-spacing-12);\n  --hds-margin-lg: var(--hds-spacing-16);\n  --hds-margin-xl: var(--hds-spacing-24);\n  --hds-margin-2xl: var(--hds-spacing-32);\n  --hds-margin-negative-lg: var(--hds-spacing-16);\n  --hds-margin-negative-2xl: var(--hds-spacing-32);\n  --hds-title-large-size: var(--hds-font-size-18);\n  --hds-title-large-weight: var(--hds-font-weight-semi-bold-600);\n  --hds-title-medium-size: var(--hds-font-size-16);\n  --hds-title-medium-weight: var(--hds-font-weight-semi-bold-600);\n  --hds-title-small-size: var(--hds-font-size-14);\n  --hds-title-small-weight: var(--hds-font-weight-semi-bold-600);\n  --hds-heading-extra-large-size: var(--hds-font-size-32);\n  --hds-heading-extra-large-weight: var(--hds-font-weight-semi-bold-600);\n  --hds-heading-large-size: var(--hds-font-size-28);\n  --hds-heading-large-weight: var(--hds-font-weight-semi-bold-600);\n  --hds-heading-medium-size: var(--hds-font-size-24);\n  --hds-heading-medium-weight: var(--hds-font-weight-semi-bold-600);\n  --hds-heading-small-size: var(--hds-font-size-20);\n  --hds-heading-small-weight: var(--hds-font-weight-semi-bold-600);\n  --hds-tiny-medium-size: var(--hds-font-size-10);\n  --hds-tiny-medium-weight: var(--hds-font-weight-semi-bold-600);\n  --hds-tiny-small-size: var(--hds-font-size-8);\n  --hds-tiny-small-weight: var(--hds-font-weight-semi-bold-600);\n  --hds-body-regular-large-size: var(--hds-font-size-16);\n  --hds-body-regular-large-weight: var(--hds-font-weight-regular-400);\n  --hds-body-regular-medium-size: var(--hds-font-size-14);\n  --hds-body-regular-medium-weight: var(--hds-font-weight-regular-400);\n  --hds-body-regular-small-size: var(--hds-font-size-12);\n  --hds-body-regular-small-weight: var(--hds-font-weight-regular-400);\n  --hds-body-accent-large-size: var(--hds-font-size-16);\n  --hds-body-accent-large-weight: var(--hds-font-weight-semi-bold-600);\n  --hds-body-accent-medium-size: var(--hds-font-size-14);\n  --hds-body-accent-medium-weight: var(--hds-font-weight-semi-bold-600);\n  --hds-body-accent-small-size: var(--hds-font-size-12);\n  --hds-body-accent-small-weight: var(--hds-font-weight-semi-bold-600);\n  --background: var(--hds-prim-neutral-regular-20);\n  --foreground: var(--hds-prim-neutral-regular-900);\n  --foreground-secondary: var(--hds-prim-neutral-regular-600);\n  --surface-teal-alpha-15: var(--hds-surface-teal-alpha15);\n  --foreground-teal: var(--hds-foreground-teal);\n  --accent-teal: 185 100% 29%;\n  --surface-terracotta-alpha-15: var(--hds-surface-terracotta-alpha15);\n  --foreground-terracotta: var(--hds-foreground-terracotta);\n  --surface-indigo-alpha-15: var(--hds-surface-indigo-alpha15);\n  --foreground-indigo: var(--hds-foreground-indigo);\n  --surface-orchid-alpha-15: var(--hds-surface-orchid-alpha15);\n  --foreground-orchid: var(--hds-foreground-orchid);\n  --card: var(--hds-prim-neutral-regular-0);\n  --card-foreground: var(--hds-prim-neutral-regular-900);\n  --popover: var(--hds-prim-neutral-regular-0);\n  --popover-foreground: var(--hds-prim-neutral-regular-900);\n  --primary: var(--hds-foreground-primary);\n  --primary-foreground: var(--hds-prim-neutral-regular-0);\n  --secondary: var(--hds-prim-neutral-regular-50);\n  --secondary-foreground: var(--hds-prim-neutral-regular-900);\n  --muted: var(--hds-prim-neutral-regular-50);\n  --muted-foreground: var(--hds-prim-neutral-regular-500);\n  --accent: var(--hds-prim-neutral-regular-50);\n  --accent-foreground: var(--hds-prim-neutral-regular-900);\n  --destructive: var(--hds-prim-accent-regular-red);\n  --success: var(--hds-prim-accent-regular-green);\n  --success-foreground: var(--hds-prim-neutral-regular-0);\n  --warning: var(--hds-prim-accent-regular-orange);\n  --warning-foreground: var(--hds-prim-neutral-regular-900);\n  --border: var(--hds-border-primary);\n  --input: var(--hds-prim-neutral-regular-100);\n  --ring: var(--hds-prim-neutral-regular-900);\n  --chart-1: oklch(64.6% .222 41.116);\n  --chart-2: oklch(60% .118 184.704);\n  --chart-3: oklch(39.8% .07 227.392);\n  --chart-4: oklch(82.8% .189 84.429);\n  --chart-5: oklch(76.9% .188 70.08);\n  --sidebar: var(--hds-prim-neutral-regular-0);\n  --sidebar-foreground: var(--hds-prim-neutral-regular-900);\n  --sidebar-primary: var(--hds-prim-neutral-regular-900);\n  --sidebar-primary-foreground: var(--hds-prim-neutral-regular-0);\n  --sidebar-accent: var(--hds-prim-neutral-regular-50);\n  --sidebar-accent-foreground: var(--hds-prim-neutral-regular-900);\n  --sidebar-border: var(--hds-prim-neutral-regular-100);\n  --sidebar-ring: var(--hds-prim-neutral-regular-900);\n  --color-status-success: #22c55e;\n  --color-status-pending: #60a5fa;\n  --color-status-warning: #f59e0b;\n  --color-status-error: #ef4444;\n  --color-status-neutral: #9ca3af;\n  --color-status-primary: #261e50;\n  --color-status-secondary: #e5e5f0;\n}\n\n.dark [role=\"tablist\"] [data-state=\"active\"] {\n  background-color: var(--hds-prim-neutral-regular-0);\n  color: var(--hds-prim-neutral-regular-900);\n}\n\n.dark {\n  --background: var(--hds-prim-neutral-regular-1000);\n  --foreground: var(--hds-foreground-primary-inverse);\n  --foreground-secondary: var(--hds-foreground-secondary-inverse);\n  --surface-teal-alpha-15: var(--hds-surface-teal-alpha15);\n  --foreground-teal: var(--hds-foreground-teal);\n  --surface-terracotta-alpha-15: var(--hds-surface-terracotta-alpha15);\n  --foreground-terracotta: var(--hds-foreground-terracotta);\n  --surface-indigo-alpha-15: var(--hds-surface-indigo-alpha15);\n  --foreground-indigo: var(--hds-foreground-indigo);\n  --surface-orchid-alpha-15: var(--hds-surface-orchid-alpha15);\n  --foreground-orchid: var(--hds-foreground-orchid);\n  --card: #0d0d0d;\n  --card-foreground: var(--hds-foreground-primary-inverse);\n  --popover: #0d0d0d;\n  --popover-foreground: var(--hds-foreground-primary-inverse);\n  --primary: var(--hds-foreground-primary-inverse);\n  --primary-foreground: var(--hds-foreground-primary);\n  --secondary: var(--hds-prim-neutral-regular-600);\n  --secondary-foreground: var(--hds-foreground-primary-inverse);\n  --muted: var(--hds-prim-neutral-regular-900);\n  --muted-foreground: var(--hds-foreground-secondary-inverse);\n  --accent: var(--hds-prim-neutral-regular-600);\n  --accent-foreground: var(--hds-foreground-primary-inverse);\n  --destructive: var(--hds-surface-destructive);\n  --success: var(--hds-surface-green);\n  --success-foreground: var(--hds-foreground-primary-inverse);\n  --warning: var(--hds-surface-orange);\n  --warning-foreground: var(--hds-foreground-primary);\n  --border: var(--hds-border-primary-inverse);\n  --input: var(--hds-prim-neutral-regular-700);\n  --ring: var(--hds-border-focus-inverse);\n  --chart-1: oklch(48.8% .243 264.376);\n  --chart-2: oklch(69.6% .17 162.48);\n  --chart-3: oklch(76.9% .188 70.08);\n  --chart-4: oklch(62.7% .265 303.9);\n  --chart-5: oklch(64.5% .246 16.439);\n  --sidebar: var(--hds-background-inverse);\n  --sidebar-foreground: var(--hds-foreground-primary-inverse);\n  --sidebar-primary: var(--hds-foreground-primary-inverse);\n  --sidebar-primary-foreground: var(--hds-foreground-primary);\n  --sidebar-accent: var(--hds-prim-neutral-regular-600);\n  --sidebar-accent-foreground: var(--hds-foreground-primary-inverse);\n  --sidebar-border: var(--hds-border-primary-inverse);\n  --sidebar-ring: var(--hds-border-focus-inverse);\n  --color-status-success: var(--color-green-600);\n}\n\ninput[type=\"search\"]::-webkit-search-cancel-button {\n  appearance: none;\n  background-color: var(--color-muted);\n  border-radius: 9999px;\n  width: 1.25rem;\n  height: 1.25rem;\n}\n\n@supports (color: color-mix(in lab, red, red)) {\n  input[type=\"search\"]::-webkit-search-cancel-button {\n    background-color: color-mix(in srgb, var(--color-muted) 50%, transparent);\n  }\n}\n\ninput[type=\"search\"]::-webkit-search-cancel-button {\n  cursor: pointer;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2.5' stroke-linecap='round'%3E%3Cpath d='M18 6L6 18M6 6l12 12'/%3E%3C/svg%3E\");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: .6rem;\n  transition: background-color .15s;\n}\n\ninput[type=\"search\"]:hover::-webkit-search-cancel-button {\n  background-color: var(--color-muted);\n}\n\n@media (prefers-reduced-motion: reduce) {\n  *, :before, :after {\n    scroll-behavior: auto !important;\n    transition-duration: .01ms !important;\n    animation-duration: .01ms !important;\n    animation-iteration-count: 1 !important;\n  }\n}\n\n@keyframes schedule-item-in {\n  from {\n    opacity: 0;\n    transform: translateY(8px);\n  }\n\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n@property --tw-translate-x {\n  syntax: \"*\";\n  inherits: false;\n  initial-value: 0;\n}\n\n@property --tw-translate-y {\n  syntax: \"*\";\n  inherits: false;\n  initial-value: 0;\n}\n\n@property --tw-translate-z {\n  syntax: \"*\";\n  inherits: false;\n  initial-value: 0;\n}\n\n@property --tw-scale-x {\n  syntax: \"*\";\n  inherits: false;\n  initial-value: 1;\n}\n\n@property --tw-scale-y {\n  syntax: \"*\";\n  inherits: false;\n  initial-value: 1;\n}\n\n@property --tw-scale-z {\n  syntax: \"*\";\n  inherits: false;\n  initial-value: 1;\n}\n\n@property --tw-rotate-x {\n  syntax: \"*\";\n  inherits: false\n}\n\n@property --tw-rotate-y {\n  syntax: \"*\";\n  inherits: false\n}\n\n@property --tw-rotate-z {\n  syntax: \"*\";\n  inherits: false\n}\n\n@property --tw-skew-x {\n  syntax: \"*\";\n  inherits: false\n}\n\n@property --tw-skew-y {\n  syntax: \"*\";\n  inherits: false\n}\n\n@property --tw-pan-x {\n  syntax: \"*\";\n  inherits: false\n}\n\n@property --tw-pan-y {\n  syntax: \"*\";\n  inherits: false\n}\n\n@property --tw-pinch-zoom {\n  syntax: \"*\";\n  inherits: false\n}\n\n@property --tw-space-y-reverse {\n  syntax: \"*\";\n  inherits: false;\n  initial-value: 0;\n}\n\n@property --tw-space-x-reverse {\n  syntax: \"*\";\n  inherits: false;\n  initial-value: 0;\n}\n\n@property --tw-divide-x-reverse {\n  syntax: \"*\";\n  inherits: false;\n  initial-value: 0;\n}\n\n@property --tw-border-style {\n  syntax: \"*\";\n  inherits: false;\n  initial-value: solid;\n}\n\n@property --tw-divide-y-reverse {\n  syntax: \"*\";\n  inherits: false;\n  initial-value: 0;\n}\n\n@property --tw-leading {\n  syntax: \"*\";\n  inherits: false\n}\n\n@property --tw-font-weight {\n  syntax: \"*\";\n  inherits: false\n}\n\n@property --tw-tracking {\n  syntax: \"*\";\n  inherits: false\n}\n\n@property --tw-ordinal {\n  syntax: \"*\";\n  inherits: false\n}\n\n@property --tw-slashed-zero {\n  syntax: \"*\";\n  inherits: false\n}\n\n@property --tw-numeric-figure {\n  syntax: \"*\";\n  inherits: false\n}\n\n@property --tw-numeric-spacing {\n  syntax: \"*\";\n  inherits: false\n}\n\n@property --tw-numeric-fraction {\n  syntax: \"*\";\n  inherits: false\n}\n\n@property --tw-shadow {\n  syntax: \"*\";\n  inherits: false;\n  initial-value: 0 0 #0000;\n}\n\n@property --tw-shadow-color {\n  syntax: \"*\";\n  inherits: false\n}\n\n@property --tw-shadow-alpha {\n  syntax: \"<percentage>\";\n  inherits: false;\n  initial-value: 100%;\n}\n\n@property --tw-inset-shadow {\n  syntax: \"*\";\n  inherits: false;\n  initial-value: 0 0 #0000;\n}\n\n@property --tw-inset-shadow-color {\n  syntax: \"*\";\n  inherits: false\n}\n\n@property --tw-inset-shadow-alpha {\n  syntax: \"<percentage>\";\n  inherits: false;\n  initial-value: 100%;\n}\n\n@property --tw-ring-color {\n  syntax: \"*\";\n  inherits: false\n}\n\n@property --tw-ring-shadow {\n  syntax: \"*\";\n  inherits: false;\n  initial-value: 0 0 #0000;\n}\n\n@property --tw-inset-ring-color {\n  syntax: \"*\";\n  inherits: false\n}\n\n@property --tw-inset-ring-shadow {\n  syntax: \"*\";\n  inherits: false;\n  initial-value: 0 0 #0000;\n}\n\n@property --tw-ring-inset {\n  syntax: \"*\";\n  inherits: false\n}\n\n@property --tw-ring-offset-width {\n  syntax: \"<length>\";\n  inherits: false;\n  initial-value: 0;\n}\n\n@property --tw-ring-offset-color {\n  syntax: \"*\";\n  inherits: false;\n  initial-value: #fff;\n}\n\n@property --tw-ring-offset-shadow {\n  syntax: \"*\";\n  inherits: false;\n  initial-value: 0 0 #0000;\n}\n\n@property --tw-outline-style {\n  syntax: \"*\";\n  inherits: false;\n  initial-value: solid;\n}\n\n@property --tw-blur {\n  syntax: \"*\";\n  inherits: false\n}\n\n@property --tw-brightness {\n  syntax: \"*\";\n  inherits: false\n}\n\n@property --tw-contrast {\n  syntax: \"*\";\n  inherits: false\n}\n\n@property --tw-grayscale {\n  syntax: \"*\";\n  inherits: false\n}\n\n@property --tw-hue-rotate {\n  syntax: \"*\";\n  inherits: false\n}\n\n@property --tw-invert {\n  syntax: \"*\";\n  inherits: false\n}\n\n@property --tw-opacity {\n  syntax: \"*\";\n  inherits: false\n}\n\n@property --tw-saturate {\n  syntax: \"*\";\n  inherits: false\n}\n\n@property --tw-sepia {\n  syntax: \"*\";\n  inherits: false\n}\n\n@property --tw-drop-shadow {\n  syntax: \"*\";\n  inherits: false\n}\n\n@property --tw-drop-shadow-color {\n  syntax: \"*\";\n  inherits: false\n}\n\n@property --tw-drop-shadow-alpha {\n  syntax: \"<percentage>\";\n  inherits: false;\n  initial-value: 100%;\n}\n\n@property --tw-drop-shadow-size {\n  syntax: \"*\";\n  inherits: false\n}\n\n@property --tw-backdrop-blur {\n  syntax: \"*\";\n  inherits: false\n}\n\n@property --tw-backdrop-brightness {\n  syntax: \"*\";\n  inherits: false\n}\n\n@property --tw-backdrop-contrast {\n  syntax: \"*\";\n  inherits: false\n}\n\n@property --tw-backdrop-grayscale {\n  syntax: \"*\";\n  inherits: false\n}\n\n@property --tw-backdrop-hue-rotate {\n  syntax: \"*\";\n  inherits: false\n}\n\n@property --tw-backdrop-invert {\n  syntax: \"*\";\n  inherits: false\n}\n\n@property --tw-backdrop-opacity {\n  syntax: \"*\";\n  inherits: false\n}\n\n@property --tw-backdrop-saturate {\n  syntax: \"*\";\n  inherits: false\n}\n\n@property --tw-backdrop-sepia {\n  syntax: \"*\";\n  inherits: false\n}\n\n@property --tw-duration {\n  syntax: \"*\";\n  inherits: false\n}\n\n@property --tw-ease {\n  syntax: \"*\";\n  inherits: false\n}\n\n@property --tw-content {\n  syntax: \"*\";\n  inherits: false;\n  initial-value: \"\";\n}\n\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes pulse {\n  50% {\n    opacity: .5;\n  }\n}"));document.head.appendChild(elementStyle);}}catch(e){console.error('vite-plugin-css-injected-by-js', e);}

})();
System.register(['react'], (function (exports, module) {
  'use strict';
  var forwardRef, createElement, React$1, React__default, isValidElement, useState;
  return {
    setters: [module => {
      forwardRef = module.forwardRef;
      createElement = module.createElement;
      React$1 = module;
      React__default = module.default;
      isValidElement = module.isValidElement;
      useState = module.useState;
    }],
    execute: (function () {

      /**
       * @license lucide-react v0.563.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */

      const mergeClasses = (...classes) => classes.filter((className, index, array) => {
        return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
      }).join(" ").trim();

      /**
       * @license lucide-react v0.563.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */

      const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();

      /**
       * @license lucide-react v0.563.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */

      const toCamelCase = (string) => string.replace(
        /^([A-Z])|[\s-_]+(\w)/g,
        (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
      );

      /**
       * @license lucide-react v0.563.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */


      const toPascalCase = (string) => {
        const camelCase = toCamelCase(string);
        return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
      };

      /**
       * @license lucide-react v0.563.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */

      var defaultAttributes = {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round"
      };

      /**
       * @license lucide-react v0.563.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */

      const hasA11yProp = (props) => {
        for (const prop in props) {
          if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
            return true;
          }
        }
        return false;
      };

      /**
       * @license lucide-react v0.563.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */


      const Icon = forwardRef(
        ({
          color = "currentColor",
          size = 24,
          strokeWidth = 2,
          absoluteStrokeWidth,
          className = "",
          children,
          iconNode,
          ...rest
        }, ref) => createElement(
          "svg",
          {
            ref,
            ...defaultAttributes,
            width: size,
            height: size,
            stroke: color,
            strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
            className: mergeClasses("lucide", className),
            ...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
            ...rest
          },
          [
            ...iconNode.map(([tag, attrs]) => createElement(tag, attrs)),
            ...Array.isArray(children) ? children : [children]
          ]
        )
      );

      /**
       * @license lucide-react v0.563.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */


      const createLucideIcon = (iconName, iconNode) => {
        const Component = forwardRef(
          ({ className, ...props }, ref) => createElement(Icon, {
            ref,
            iconNode,
            className: mergeClasses(
              `lucide-${toKebabCase(toPascalCase(iconName))}`,
              `lucide-${iconName}`,
              className
            ),
            ...props
          })
        );
        Component.displayName = toPascalCase(iconName);
        return Component;
      };

      /**
       * @license lucide-react v0.563.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */


      const __iconNode = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]];
      const LoaderCircle = createLucideIcon("loader-circle", __iconNode);

      function getDefaultExportFromCjs (x) {
      	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
      }

      var jsxRuntime = {exports: {}};

      var reactJsxRuntime_production = {};

      /**
       * @license React
       * react-jsx-runtime.production.js
       *
       * Copyright (c) Meta Platforms, Inc. and affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */

      var hasRequiredReactJsxRuntime_production;

      function requireReactJsxRuntime_production () {
      	if (hasRequiredReactJsxRuntime_production) return reactJsxRuntime_production;
      	hasRequiredReactJsxRuntime_production = 1;
      	var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"),
      	  REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
      	function jsxProd(type, config, maybeKey) {
      	  var key = null;
      	  void 0 !== maybeKey && (key = "" + maybeKey);
      	  void 0 !== config.key && (key = "" + config.key);
      	  if ("key" in config) {
      	    maybeKey = {};
      	    for (var propName in config)
      	      "key" !== propName && (maybeKey[propName] = config[propName]);
      	  } else maybeKey = config;
      	  config = maybeKey.ref;
      	  return {
      	    $$typeof: REACT_ELEMENT_TYPE,
      	    type: type,
      	    key: key,
      	    ref: void 0 !== config ? config : null,
      	    props: maybeKey
      	  };
      	}
      	reactJsxRuntime_production.Fragment = REACT_FRAGMENT_TYPE;
      	reactJsxRuntime_production.jsx = jsxProd;
      	reactJsxRuntime_production.jsxs = jsxProd;
      	return reactJsxRuntime_production;
      }

      var hasRequiredJsxRuntime;

      function requireJsxRuntime () {
      	if (hasRequiredJsxRuntime) return jsxRuntime.exports;
      	hasRequiredJsxRuntime = 1;
      	{
      	  jsxRuntime.exports = requireReactJsxRuntime_production();
      	}
      	return jsxRuntime.exports;
      }

      var jsxRuntimeExports = requireJsxRuntime();

      function h({ className: c }) {
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: c, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z",
              fill: "#4285F4"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z",
              fill: "#34A853"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z",
              fill: "#FBBC05"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z",
              fill: "#EA4335"
            }
          )
        ] });
      }

      function l$1(n, o) {
        if (typeof n == "function")
          return n(o);
        n != null && (n.current = o);
      }
      function i$2(...n) {
        return (o) => {
          let u = false;
          const c = n.map((t) => {
            const e = l$1(t, o);
            return !u && typeof e == "function" && (u = true), e;
          });
          if (u)
            return () => {
              for (let t = 0; t < c.length; t++) {
                const e = c[t];
                typeof e == "function" ? e() : l$1(n[t], null);
              }
            };
        };
      }

      // @__NO_SIDE_EFFECTS__
      function g(e) {
        const t = /* @__PURE__ */ E(e), r = React$1.forwardRef((o, n) => {
          const { children: i, ...a } = o, s = React$1.Children.toArray(i), c = s.find(C$1);
          if (c) {
            const f = c.props.children, m = s.map((u) => u === c ? React$1.Children.count(f) > 1 ? React$1.Children.only(null) : React$1.isValidElement(f) ? f.props.children : null : u);
            return /* @__PURE__ */ jsxRuntimeExports.jsx(t, { ...a, ref: n, children: React$1.isValidElement(f) ? React$1.cloneElement(f, void 0, m) : null });
          }
          return /* @__PURE__ */ jsxRuntimeExports.jsx(t, { ...a, ref: n, children: i });
        });
        return r.displayName = `${e}.Slot`, r;
      }
      var x = /* @__PURE__ */ g("Slot");
      // @__NO_SIDE_EFFECTS__
      function E(e) {
        const t = React$1.forwardRef((r, o) => {
          const { children: n, ...i } = r;
          if (React$1.isValidElement(n)) {
            const a = b(n), s = R(i, n.props);
            return n.type !== React$1.Fragment && (s.ref = o ? i$2(o, a) : a), React$1.cloneElement(n, s);
          }
          return React$1.Children.count(n) > 1 ? React$1.Children.only(null) : null;
        });
        return t.displayName = `${e}.SlotClone`, t;
      }
      var d$2 = /* @__PURE__ */ Symbol("radix.slottable");
      function C$1(e) {
        return React$1.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === d$2;
      }
      function R(e, t) {
        const r = { ...t };
        for (const o in t) {
          const n = e[o], i = t[o];
          /^on[A-Z]/.test(o) ? n && i ? r[o] = (...s) => {
            const c = i(...s);
            return n(...s), c;
          } : n && (r[o] = n) : o === "style" ? r[o] = { ...n, ...i } : o === "className" && (r[o] = [n, i].filter(Boolean).join(" "));
        }
        return { ...e, ...r };
      }
      function b(e) {
        let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning;
        return r ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
      }

      function a$1(r) {
        var n, f, t = "";
        if (typeof r == "string" || typeof r == "number") t += r;
        else if (typeof r == "object") if (Array.isArray(r)) {
          var o = r.length;
          for (n = 0; n < o; n++) r[n] && (f = a$1(r[n])) && (t && (t += " "), t += f);
        } else for (f in r) r[f] && (t && (t += " "), t += f);
        return t;
      }
      function i$1() {
        for (var r, n, f = 0, t = "", o = arguments.length; f < o; f++) (r = arguments[f]) && (n = a$1(r)) && (t && (t += " "), t += n);
        return t;
      }

      const m$1 = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, y = i$1, j = (e, l) => (n) => {
        var s;
        if (l?.variants == null) return y(e, n?.class, n?.className);
        const { variants: r, defaultVariants: d } = l, V = Object.keys(r).map((t) => {
          const a = n?.[t], u = d?.[t];
          if (a === null) return null;
          const i = m$1(a) || m$1(u);
          return r[t][i];
        }), v = n && Object.entries(n).reduce((t, a) => {
          let [u, i] = a;
          return i === void 0 || (t[u] = i), t;
        }, {}), N = l == null || (s = l.compoundVariants) === null || s === void 0 ? void 0 : s.reduce((t, a) => {
          let { class: u, className: i, ...f } = a;
          return Object.entries(f).every((C) => {
            let [c, o] = C;
            return Array.isArray(o) ? o.includes({
              ...d,
              ...v
            }[c]) : {
              ...d,
              ...v
            }[c] === o;
          }) ? [
            ...t,
            u,
            i
          ] : t;
        }, []);
        return y(e, V, N, n?.class, n?.className);
      };

      const Oe = (e, t) => {
        const o = new Array(e.length + t.length);
        for (let r = 0; r < e.length; r++)
          o[r] = e[r];
        for (let r = 0; r < t.length; r++)
          o[e.length + r] = t[r];
        return o;
      }, Ee = (e, t) => ({
        classGroupId: e,
        validator: t
      }), we$1 = (e = /* @__PURE__ */ new Map(), t = null, o) => ({
        nextPart: e,
        validators: t,
        classGroupId: o
      });
      const be$1 = [], Ge = "arbitrary..", _e = (e) => {
        const t = Ne(e), {
          conflictingClassGroups: o,
          conflictingClassGroupModifiers: r
        } = e;
        return {
          getClassGroupId: (a) => {
            if (a.startsWith("[") && a.endsWith("]"))
              return Le(a);
            const b = a.split("-"), d = b[0] === "" && b.length > 1 ? 1 : 0;
            return ke(b, d, t);
          },
          getConflictingClassGroupIds: (a, b) => {
            if (b) {
              const d = r[a], u = o[a];
              return d ? u ? Oe(u, d) : d : u || be$1;
            }
            return o[a] || be$1;
          }
        };
      }, ke = (e, t, o) => {
        if (e.length - t === 0)
          return o.classGroupId;
        const c = e[t], m = o.nextPart.get(c);
        if (m) {
          const u = ke(e, t + 1, m);
          if (u) return u;
        }
        const a = o.validators;
        if (a === null)
          return;
        const b = t === 0 ? e.join("-") : e.slice(t).join("-"), d = a.length;
        for (let u = 0; u < d; u++) {
          const h = a[u];
          if (h.validator(b))
            return h.classGroupId;
        }
      }, Le = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
        const t = e.slice(1, -1), o = t.indexOf(":"), r = t.slice(0, o);
        return r ? Ge + r : void 0;
      })(), Ne = (e) => {
        const {
          theme: t,
          classGroups: o
        } = e;
        return je(o, t);
      }, je = (e, t) => {
        const o = we$1();
        for (const r in e) {
          const c = e[r];
          te$1(c, o, r, t);
        }
        return o;
      }, te$1 = (e, t, o, r) => {
        const c = e.length;
        for (let m = 0; m < c; m++) {
          const a = e[m];
          Fe(a, t, o, r);
        }
      }, Fe = (e, t, o, r) => {
        if (typeof e == "string") {
          Ve(e, t, o);
          return;
        }
        if (typeof e == "function") {
          We(e, t, o, r);
          return;
        }
        Be(e, t, o, r);
      }, Ve = (e, t, o) => {
        const r = e === "" ? t : xe$1(t, e);
        r.classGroupId = o;
      }, We = (e, t, o, r) => {
        if (De(e)) {
          te$1(e(r), t, o, r);
          return;
        }
        t.validators === null && (t.validators = []), t.validators.push(Ee(o, e));
      }, Be = (e, t, o, r) => {
        const c = Object.entries(e), m = c.length;
        for (let a = 0; a < m; a++) {
          const [b, d] = c[a];
          te$1(d, xe$1(t, b), o, r);
        }
      }, xe$1 = (e, t) => {
        let o = e;
        const r = t.split("-"), c = r.length;
        for (let m = 0; m < c; m++) {
          const a = r[m];
          let b = o.nextPart.get(a);
          b || (b = we$1(), o.nextPart.set(a, b)), o = b;
        }
        return o;
      }, De = (e) => "isThemeGetter" in e && e.isThemeGetter === true, $e = (e) => {
        if (e < 1)
          return {
            get: () => {
            },
            set: () => {
            }
          };
        let t = 0, o = /* @__PURE__ */ Object.create(null), r = /* @__PURE__ */ Object.create(null);
        const c = (m, a) => {
          o[m] = a, t++, t > e && (t = 0, r = o, o = /* @__PURE__ */ Object.create(null));
        };
        return {
          get(m) {
            let a = o[m];
            if (a !== void 0)
              return a;
            if ((a = r[m]) !== void 0)
              return c(m, a), a;
          },
          set(m, a) {
            m in o ? o[m] = a : c(m, a);
          }
        };
      };
      const Ue = [], ue = (e, t, o, r, c) => ({
        modifiers: e,
        hasImportantModifier: t,
        baseClassName: o,
        maybePostfixModifierPosition: r,
        isExternal: c
      }), Ye = (e) => {
        const {
          prefix: t,
          experimentalParseClassName: o
        } = e;
        let r = (c) => {
          const m = [];
          let a = 0, b = 0, d = 0, u;
          const h = c.length;
          for (let A = 0; A < h; A++) {
            const x = c[A];
            if (a === 0 && b === 0) {
              if (x === ":") {
                m.push(c.slice(d, A)), d = A + 1;
                continue;
              }
              if (x === "/") {
                u = A;
                continue;
              }
            }
            x === "[" ? a++ : x === "]" ? a-- : x === "(" ? b++ : x === ")" && b--;
          }
          const v = m.length === 0 ? c : c.slice(d);
          let R = v, T = false;
          v.endsWith("!") ? (R = v.slice(0, -1), T = true) : (
            /**
             * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
             * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
             */
            v.startsWith("!") && (R = v.slice(1), T = true)
          );
          const M = u && u > d ? u - d : void 0;
          return ue(m, T, R, M);
        };
        if (t) {
          const c = t + ":", m = r;
          r = (a) => a.startsWith(c) ? m(a.slice(c.length)) : ue(Ue, false, a, void 0, true);
        }
        if (o) {
          const c = r;
          r = (m) => o({
            className: m,
            parseClassName: c
          });
        }
        return r;
      }, qe = (e) => {
        const t = /* @__PURE__ */ new Map();
        return e.orderSensitiveModifiers.forEach((o, r) => {
          t.set(o, 1e6 + r);
        }), (o) => {
          const r = [];
          let c = [];
          for (let m = 0; m < o.length; m++) {
            const a = o[m], b = a[0] === "[", d = t.has(a);
            b || d ? (c.length > 0 && (c.sort(), r.push(...c), c = []), r.push(a)) : c.push(a);
          }
          return c.length > 0 && (c.sort(), r.push(...c)), r;
        };
      }, Xe = (e) => ({
        cache: $e(e.cacheSize),
        parseClassName: Ye(e),
        sortModifiers: qe(e),
        ..._e(e)
      }), Je = /\s+/, He = (e, t) => {
        const {
          parseClassName: o,
          getClassGroupId: r,
          getConflictingClassGroupIds: c,
          sortModifiers: m
        } = t, a = [], b = e.trim().split(Je);
        let d = "";
        for (let u = b.length - 1; u >= 0; u -= 1) {
          const h = b[u], {
            isExternal: v,
            modifiers: R,
            hasImportantModifier: T,
            baseClassName: M,
            maybePostfixModifierPosition: A
          } = o(h);
          if (v) {
            d = h + (d.length > 0 ? " " + d : d);
            continue;
          }
          let x = !!A, O = r(x ? M.substring(0, A) : M);
          if (!O) {
            if (!x) {
              d = h + (d.length > 0 ? " " + d : d);
              continue;
            }
            if (O = r(M), !O) {
              d = h + (d.length > 0 ? " " + d : d);
              continue;
            }
            x = false;
          }
          const D = R.length === 0 ? "" : R.length === 1 ? R[0] : m(R).join(":"), V = T ? D + "!" : D, N = V + O;
          if (a.indexOf(N) > -1)
            continue;
          a.push(N);
          const j = c(O, x);
          for (let E = 0; E < j.length; ++E) {
            const W = j[E];
            a.push(V + W);
          }
          d = h + (d.length > 0 ? " " + d : d);
        }
        return d;
      }, Ke = (...e) => {
        let t = 0, o, r, c = "";
        for (; t < e.length; )
          (o = e[t++]) && (r = ye$1(o)) && (c && (c += " "), c += r);
        return c;
      }, ye$1 = (e) => {
        if (typeof e == "string")
          return e;
        let t, o = "";
        for (let r = 0; r < e.length; r++)
          e[r] && (t = ye$1(e[r])) && (o && (o += " "), o += t);
        return o;
      }, Qe = (e, ...t) => {
        let o, r, c, m;
        const a = (d) => {
          const u = t.reduce((h, v) => v(h), e());
          return o = Xe(u), r = o.cache.get, c = o.cache.set, m = b, b(d);
        }, b = (d) => {
          const u = r(d);
          if (u)
            return u;
          const h = He(d, o);
          return c(d, h), h;
        };
        return m = a, (...d) => m(Ke(...d));
      }, Ze = [], f$2 = (e) => {
        const t = (o) => o[e] || Ze;
        return t.isThemeGetter = true, t;
      }, ve$1 = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Ae = /^\((?:(\w[\w-]*):)?(.+)\)$/i, eo = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, oo = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, ro = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, to = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, so = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, no = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, C = (e) => eo.test(e), p = (e) => !!e && !Number.isNaN(Number(e)), I = (e) => !!e && Number.isInteger(Number(e)), re = (e) => e.endsWith("%") && p(e.slice(0, -1)), S = (e) => oo.test(e), ze = () => true, ao = (e) => (
        // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
        // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
        // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
        ro.test(e) && !to.test(e)
      ), se$1 = () => false, io = (e) => so.test(e), lo = (e) => no.test(e), co = (e) => !s$1(e) && !n$2(e), mo = (e) => P(e, Ce, se$1), s$1 = (e) => ve$1.test(e), _ = (e) => P(e, Ie, ao), fe = (e) => P(e, ko, p), po = (e) => P(e, Te$1, ze), bo = (e) => P(e, Pe, se$1), ge$1 = (e) => P(e, Re, se$1), uo = (e) => P(e, Se, lo), J = (e) => P(e, Me, io), n$2 = (e) => Ae.test(e), B = (e) => L(e, Ie), fo = (e) => L(e, Pe), he$1 = (e) => L(e, Re), go = (e) => L(e, Ce), ho = (e) => L(e, Se), H = (e) => L(e, Me, true), wo = (e) => L(e, Te$1, true), P = (e, t, o) => {
        const r = ve$1.exec(e);
        return r ? r[1] ? t(r[1]) : o(r[2]) : false;
      }, L = (e, t, o = false) => {
        const r = Ae.exec(e);
        return r ? r[1] ? t(r[1]) : o : false;
      }, Re = (e) => e === "position" || e === "percentage", Se = (e) => e === "image" || e === "url", Ce = (e) => e === "length" || e === "size" || e === "bg-size", Ie = (e) => e === "length", ko = (e) => e === "number", Pe = (e) => e === "family-name", Te$1 = (e) => e === "number" || e === "weight", Me = (e) => e === "shadow", xo = () => {
        const e = f$2("color"), t = f$2("font"), o = f$2("text"), r = f$2("font-weight"), c = f$2("tracking"), m = f$2("leading"), a = f$2("breakpoint"), b = f$2("container"), d = f$2("spacing"), u = f$2("radius"), h = f$2("shadow"), v = f$2("inset-shadow"), R = f$2("text-shadow"), T = f$2("drop-shadow"), M = f$2("blur"), A = f$2("perspective"), x = f$2("aspect"), O = f$2("ease"), D = f$2("animate"), V = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], N = () => [
          "center",
          "top",
          "bottom",
          "left",
          "right",
          "top-left",
          // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
          "left-top",
          "top-right",
          // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
          "right-top",
          "bottom-right",
          // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
          "right-bottom",
          "bottom-left",
          // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
          "left-bottom"
        ], j = () => [...N(), n$2, s$1], E = () => ["auto", "hidden", "clip", "visible", "scroll"], W = () => ["auto", "contain", "none"], i = () => [n$2, s$1, d], y = () => [C, "full", "auto", ...i()], ne = () => [I, "none", "subgrid", n$2, s$1], ae = () => ["auto", {
          span: ["full", I, n$2, s$1]
        }, I, n$2, s$1], $ = () => [I, "auto", n$2, s$1], ie = () => ["auto", "min", "max", "fr", n$2, s$1], K = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], F = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], z = () => ["auto", ...i()], G = () => [C, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...i()], Q = () => [C, "screen", "full", "dvw", "lvw", "svw", "min", "max", "fit", ...i()], Z = () => [C, "screen", "full", "lh", "dvh", "lvh", "svh", "min", "max", "fit", ...i()], l = () => [e, n$2, s$1], le = () => [...N(), he$1, ge$1, {
          position: [n$2, s$1]
        }], ce = () => ["no-repeat", {
          repeat: ["", "x", "y", "space", "round"]
        }], de = () => ["auto", "cover", "contain", go, mo, {
          size: [n$2, s$1]
        }], ee = () => [re, B, _], w = () => [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          "full",
          u,
          n$2,
          s$1
        ], k = () => ["", p, B, _], U = () => ["solid", "dashed", "dotted", "double"], me = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], g = () => [p, re, he$1, ge$1], pe = () => [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          M,
          n$2,
          s$1
        ], Y = () => ["none", p, n$2, s$1], q = () => ["none", p, n$2, s$1], oe = () => [p, n$2, s$1], X = () => [C, "full", ...i()];
        return {
          cacheSize: 500,
          theme: {
            animate: ["spin", "ping", "pulse", "bounce"],
            aspect: ["video"],
            blur: [S],
            breakpoint: [S],
            color: [ze],
            container: [S],
            "drop-shadow": [S],
            ease: ["in", "out", "in-out"],
            font: [co],
            "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
            "inset-shadow": [S],
            leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
            perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
            radius: [S],
            shadow: [S],
            spacing: ["px", p],
            text: [S],
            "text-shadow": [S],
            tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
          },
          classGroups: {
            // --------------
            // --- Layout ---
            // --------------
            /**
             * Aspect Ratio
             * @see https://tailwindcss.com/docs/aspect-ratio
             */
            aspect: [{
              aspect: ["auto", "square", C, s$1, n$2, x]
            }],
            /**
             * Container
             * @see https://tailwindcss.com/docs/container
             * @deprecated since Tailwind CSS v4.0.0
             */
            container: ["container"],
            /**
             * Columns
             * @see https://tailwindcss.com/docs/columns
             */
            columns: [{
              columns: [p, s$1, n$2, b]
            }],
            /**
             * Break After
             * @see https://tailwindcss.com/docs/break-after
             */
            "break-after": [{
              "break-after": V()
            }],
            /**
             * Break Before
             * @see https://tailwindcss.com/docs/break-before
             */
            "break-before": [{
              "break-before": V()
            }],
            /**
             * Break Inside
             * @see https://tailwindcss.com/docs/break-inside
             */
            "break-inside": [{
              "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
            }],
            /**
             * Box Decoration Break
             * @see https://tailwindcss.com/docs/box-decoration-break
             */
            "box-decoration": [{
              "box-decoration": ["slice", "clone"]
            }],
            /**
             * Box Sizing
             * @see https://tailwindcss.com/docs/box-sizing
             */
            box: [{
              box: ["border", "content"]
            }],
            /**
             * Display
             * @see https://tailwindcss.com/docs/display
             */
            display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
            /**
             * Screen Reader Only
             * @see https://tailwindcss.com/docs/display#screen-reader-only
             */
            sr: ["sr-only", "not-sr-only"],
            /**
             * Floats
             * @see https://tailwindcss.com/docs/float
             */
            float: [{
              float: ["right", "left", "none", "start", "end"]
            }],
            /**
             * Clear
             * @see https://tailwindcss.com/docs/clear
             */
            clear: [{
              clear: ["left", "right", "both", "none", "start", "end"]
            }],
            /**
             * Isolation
             * @see https://tailwindcss.com/docs/isolation
             */
            isolation: ["isolate", "isolation-auto"],
            /**
             * Object Fit
             * @see https://tailwindcss.com/docs/object-fit
             */
            "object-fit": [{
              object: ["contain", "cover", "fill", "none", "scale-down"]
            }],
            /**
             * Object Position
             * @see https://tailwindcss.com/docs/object-position
             */
            "object-position": [{
              object: j()
            }],
            /**
             * Overflow
             * @see https://tailwindcss.com/docs/overflow
             */
            overflow: [{
              overflow: E()
            }],
            /**
             * Overflow X
             * @see https://tailwindcss.com/docs/overflow
             */
            "overflow-x": [{
              "overflow-x": E()
            }],
            /**
             * Overflow Y
             * @see https://tailwindcss.com/docs/overflow
             */
            "overflow-y": [{
              "overflow-y": E()
            }],
            /**
             * Overscroll Behavior
             * @see https://tailwindcss.com/docs/overscroll-behavior
             */
            overscroll: [{
              overscroll: W()
            }],
            /**
             * Overscroll Behavior X
             * @see https://tailwindcss.com/docs/overscroll-behavior
             */
            "overscroll-x": [{
              "overscroll-x": W()
            }],
            /**
             * Overscroll Behavior Y
             * @see https://tailwindcss.com/docs/overscroll-behavior
             */
            "overscroll-y": [{
              "overscroll-y": W()
            }],
            /**
             * Position
             * @see https://tailwindcss.com/docs/position
             */
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            /**
             * Inset
             * @see https://tailwindcss.com/docs/top-right-bottom-left
             */
            inset: [{
              inset: y()
            }],
            /**
             * Inset Inline
             * @see https://tailwindcss.com/docs/top-right-bottom-left
             */
            "inset-x": [{
              "inset-x": y()
            }],
            /**
             * Inset Block
             * @see https://tailwindcss.com/docs/top-right-bottom-left
             */
            "inset-y": [{
              "inset-y": y()
            }],
            /**
             * Inset Inline Start
             * @see https://tailwindcss.com/docs/top-right-bottom-left
             * @todo class group will be renamed to `inset-s` in next major release
             */
            start: [{
              "inset-s": y(),
              /**
               * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-s-*` utilities.
               * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
               */
              start: y()
            }],
            /**
             * Inset Inline End
             * @see https://tailwindcss.com/docs/top-right-bottom-left
             * @todo class group will be renamed to `inset-e` in next major release
             */
            end: [{
              "inset-e": y(),
              /**
               * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-e-*` utilities.
               * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
               */
              end: y()
            }],
            /**
             * Inset Block Start
             * @see https://tailwindcss.com/docs/top-right-bottom-left
             */
            "inset-bs": [{
              "inset-bs": y()
            }],
            /**
             * Inset Block End
             * @see https://tailwindcss.com/docs/top-right-bottom-left
             */
            "inset-be": [{
              "inset-be": y()
            }],
            /**
             * Top
             * @see https://tailwindcss.com/docs/top-right-bottom-left
             */
            top: [{
              top: y()
            }],
            /**
             * Right
             * @see https://tailwindcss.com/docs/top-right-bottom-left
             */
            right: [{
              right: y()
            }],
            /**
             * Bottom
             * @see https://tailwindcss.com/docs/top-right-bottom-left
             */
            bottom: [{
              bottom: y()
            }],
            /**
             * Left
             * @see https://tailwindcss.com/docs/top-right-bottom-left
             */
            left: [{
              left: y()
            }],
            /**
             * Visibility
             * @see https://tailwindcss.com/docs/visibility
             */
            visibility: ["visible", "invisible", "collapse"],
            /**
             * Z-Index
             * @see https://tailwindcss.com/docs/z-index
             */
            z: [{
              z: [I, "auto", n$2, s$1]
            }],
            // ------------------------
            // --- Flexbox and Grid ---
            // ------------------------
            /**
             * Flex Basis
             * @see https://tailwindcss.com/docs/flex-basis
             */
            basis: [{
              basis: [C, "full", "auto", b, ...i()]
            }],
            /**
             * Flex Direction
             * @see https://tailwindcss.com/docs/flex-direction
             */
            "flex-direction": [{
              flex: ["row", "row-reverse", "col", "col-reverse"]
            }],
            /**
             * Flex Wrap
             * @see https://tailwindcss.com/docs/flex-wrap
             */
            "flex-wrap": [{
              flex: ["nowrap", "wrap", "wrap-reverse"]
            }],
            /**
             * Flex
             * @see https://tailwindcss.com/docs/flex
             */
            flex: [{
              flex: [p, C, "auto", "initial", "none", s$1]
            }],
            /**
             * Flex Grow
             * @see https://tailwindcss.com/docs/flex-grow
             */
            grow: [{
              grow: ["", p, n$2, s$1]
            }],
            /**
             * Flex Shrink
             * @see https://tailwindcss.com/docs/flex-shrink
             */
            shrink: [{
              shrink: ["", p, n$2, s$1]
            }],
            /**
             * Order
             * @see https://tailwindcss.com/docs/order
             */
            order: [{
              order: [I, "first", "last", "none", n$2, s$1]
            }],
            /**
             * Grid Template Columns
             * @see https://tailwindcss.com/docs/grid-template-columns
             */
            "grid-cols": [{
              "grid-cols": ne()
            }],
            /**
             * Grid Column Start / End
             * @see https://tailwindcss.com/docs/grid-column
             */
            "col-start-end": [{
              col: ae()
            }],
            /**
             * Grid Column Start
             * @see https://tailwindcss.com/docs/grid-column
             */
            "col-start": [{
              "col-start": $()
            }],
            /**
             * Grid Column End
             * @see https://tailwindcss.com/docs/grid-column
             */
            "col-end": [{
              "col-end": $()
            }],
            /**
             * Grid Template Rows
             * @see https://tailwindcss.com/docs/grid-template-rows
             */
            "grid-rows": [{
              "grid-rows": ne()
            }],
            /**
             * Grid Row Start / End
             * @see https://tailwindcss.com/docs/grid-row
             */
            "row-start-end": [{
              row: ae()
            }],
            /**
             * Grid Row Start
             * @see https://tailwindcss.com/docs/grid-row
             */
            "row-start": [{
              "row-start": $()
            }],
            /**
             * Grid Row End
             * @see https://tailwindcss.com/docs/grid-row
             */
            "row-end": [{
              "row-end": $()
            }],
            /**
             * Grid Auto Flow
             * @see https://tailwindcss.com/docs/grid-auto-flow
             */
            "grid-flow": [{
              "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
            }],
            /**
             * Grid Auto Columns
             * @see https://tailwindcss.com/docs/grid-auto-columns
             */
            "auto-cols": [{
              "auto-cols": ie()
            }],
            /**
             * Grid Auto Rows
             * @see https://tailwindcss.com/docs/grid-auto-rows
             */
            "auto-rows": [{
              "auto-rows": ie()
            }],
            /**
             * Gap
             * @see https://tailwindcss.com/docs/gap
             */
            gap: [{
              gap: i()
            }],
            /**
             * Gap X
             * @see https://tailwindcss.com/docs/gap
             */
            "gap-x": [{
              "gap-x": i()
            }],
            /**
             * Gap Y
             * @see https://tailwindcss.com/docs/gap
             */
            "gap-y": [{
              "gap-y": i()
            }],
            /**
             * Justify Content
             * @see https://tailwindcss.com/docs/justify-content
             */
            "justify-content": [{
              justify: [...K(), "normal"]
            }],
            /**
             * Justify Items
             * @see https://tailwindcss.com/docs/justify-items
             */
            "justify-items": [{
              "justify-items": [...F(), "normal"]
            }],
            /**
             * Justify Self
             * @see https://tailwindcss.com/docs/justify-self
             */
            "justify-self": [{
              "justify-self": ["auto", ...F()]
            }],
            /**
             * Align Content
             * @see https://tailwindcss.com/docs/align-content
             */
            "align-content": [{
              content: ["normal", ...K()]
            }],
            /**
             * Align Items
             * @see https://tailwindcss.com/docs/align-items
             */
            "align-items": [{
              items: [...F(), {
                baseline: ["", "last"]
              }]
            }],
            /**
             * Align Self
             * @see https://tailwindcss.com/docs/align-self
             */
            "align-self": [{
              self: ["auto", ...F(), {
                baseline: ["", "last"]
              }]
            }],
            /**
             * Place Content
             * @see https://tailwindcss.com/docs/place-content
             */
            "place-content": [{
              "place-content": K()
            }],
            /**
             * Place Items
             * @see https://tailwindcss.com/docs/place-items
             */
            "place-items": [{
              "place-items": [...F(), "baseline"]
            }],
            /**
             * Place Self
             * @see https://tailwindcss.com/docs/place-self
             */
            "place-self": [{
              "place-self": ["auto", ...F()]
            }],
            // Spacing
            /**
             * Padding
             * @see https://tailwindcss.com/docs/padding
             */
            p: [{
              p: i()
            }],
            /**
             * Padding Inline
             * @see https://tailwindcss.com/docs/padding
             */
            px: [{
              px: i()
            }],
            /**
             * Padding Block
             * @see https://tailwindcss.com/docs/padding
             */
            py: [{
              py: i()
            }],
            /**
             * Padding Inline Start
             * @see https://tailwindcss.com/docs/padding
             */
            ps: [{
              ps: i()
            }],
            /**
             * Padding Inline End
             * @see https://tailwindcss.com/docs/padding
             */
            pe: [{
              pe: i()
            }],
            /**
             * Padding Block Start
             * @see https://tailwindcss.com/docs/padding
             */
            pbs: [{
              pbs: i()
            }],
            /**
             * Padding Block End
             * @see https://tailwindcss.com/docs/padding
             */
            pbe: [{
              pbe: i()
            }],
            /**
             * Padding Top
             * @see https://tailwindcss.com/docs/padding
             */
            pt: [{
              pt: i()
            }],
            /**
             * Padding Right
             * @see https://tailwindcss.com/docs/padding
             */
            pr: [{
              pr: i()
            }],
            /**
             * Padding Bottom
             * @see https://tailwindcss.com/docs/padding
             */
            pb: [{
              pb: i()
            }],
            /**
             * Padding Left
             * @see https://tailwindcss.com/docs/padding
             */
            pl: [{
              pl: i()
            }],
            /**
             * Margin
             * @see https://tailwindcss.com/docs/margin
             */
            m: [{
              m: z()
            }],
            /**
             * Margin Inline
             * @see https://tailwindcss.com/docs/margin
             */
            mx: [{
              mx: z()
            }],
            /**
             * Margin Block
             * @see https://tailwindcss.com/docs/margin
             */
            my: [{
              my: z()
            }],
            /**
             * Margin Inline Start
             * @see https://tailwindcss.com/docs/margin
             */
            ms: [{
              ms: z()
            }],
            /**
             * Margin Inline End
             * @see https://tailwindcss.com/docs/margin
             */
            me: [{
              me: z()
            }],
            /**
             * Margin Block Start
             * @see https://tailwindcss.com/docs/margin
             */
            mbs: [{
              mbs: z()
            }],
            /**
             * Margin Block End
             * @see https://tailwindcss.com/docs/margin
             */
            mbe: [{
              mbe: z()
            }],
            /**
             * Margin Top
             * @see https://tailwindcss.com/docs/margin
             */
            mt: [{
              mt: z()
            }],
            /**
             * Margin Right
             * @see https://tailwindcss.com/docs/margin
             */
            mr: [{
              mr: z()
            }],
            /**
             * Margin Bottom
             * @see https://tailwindcss.com/docs/margin
             */
            mb: [{
              mb: z()
            }],
            /**
             * Margin Left
             * @see https://tailwindcss.com/docs/margin
             */
            ml: [{
              ml: z()
            }],
            /**
             * Space Between X
             * @see https://tailwindcss.com/docs/margin#adding-space-between-children
             */
            "space-x": [{
              "space-x": i()
            }],
            /**
             * Space Between X Reverse
             * @see https://tailwindcss.com/docs/margin#adding-space-between-children
             */
            "space-x-reverse": ["space-x-reverse"],
            /**
             * Space Between Y
             * @see https://tailwindcss.com/docs/margin#adding-space-between-children
             */
            "space-y": [{
              "space-y": i()
            }],
            /**
             * Space Between Y Reverse
             * @see https://tailwindcss.com/docs/margin#adding-space-between-children
             */
            "space-y-reverse": ["space-y-reverse"],
            // --------------
            // --- Sizing ---
            // --------------
            /**
             * Size
             * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
             */
            size: [{
              size: G()
            }],
            /**
             * Inline Size
             * @see https://tailwindcss.com/docs/width
             */
            "inline-size": [{
              inline: ["auto", ...Q()]
            }],
            /**
             * Min-Inline Size
             * @see https://tailwindcss.com/docs/min-width
             */
            "min-inline-size": [{
              "min-inline": ["auto", ...Q()]
            }],
            /**
             * Max-Inline Size
             * @see https://tailwindcss.com/docs/max-width
             */
            "max-inline-size": [{
              "max-inline": ["none", ...Q()]
            }],
            /**
             * Block Size
             * @see https://tailwindcss.com/docs/height
             */
            "block-size": [{
              block: ["auto", ...Z()]
            }],
            /**
             * Min-Block Size
             * @see https://tailwindcss.com/docs/min-height
             */
            "min-block-size": [{
              "min-block": ["auto", ...Z()]
            }],
            /**
             * Max-Block Size
             * @see https://tailwindcss.com/docs/max-height
             */
            "max-block-size": [{
              "max-block": ["none", ...Z()]
            }],
            /**
             * Width
             * @see https://tailwindcss.com/docs/width
             */
            w: [{
              w: [b, "screen", ...G()]
            }],
            /**
             * Min-Width
             * @see https://tailwindcss.com/docs/min-width
             */
            "min-w": [{
              "min-w": [
                b,
                "screen",
                /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
                "none",
                ...G()
              ]
            }],
            /**
             * Max-Width
             * @see https://tailwindcss.com/docs/max-width
             */
            "max-w": [{
              "max-w": [
                b,
                "screen",
                "none",
                /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
                "prose",
                /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
                {
                  screen: [a]
                },
                ...G()
              ]
            }],
            /**
             * Height
             * @see https://tailwindcss.com/docs/height
             */
            h: [{
              h: ["screen", "lh", ...G()]
            }],
            /**
             * Min-Height
             * @see https://tailwindcss.com/docs/min-height
             */
            "min-h": [{
              "min-h": ["screen", "lh", "none", ...G()]
            }],
            /**
             * Max-Height
             * @see https://tailwindcss.com/docs/max-height
             */
            "max-h": [{
              "max-h": ["screen", "lh", ...G()]
            }],
            // ------------------
            // --- Typography ---
            // ------------------
            /**
             * Font Size
             * @see https://tailwindcss.com/docs/font-size
             */
            "font-size": [{
              text: ["base", o, B, _]
            }],
            /**
             * Font Smoothing
             * @see https://tailwindcss.com/docs/font-smoothing
             */
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            /**
             * Font Style
             * @see https://tailwindcss.com/docs/font-style
             */
            "font-style": ["italic", "not-italic"],
            /**
             * Font Weight
             * @see https://tailwindcss.com/docs/font-weight
             */
            "font-weight": [{
              font: [r, wo, po]
            }],
            /**
             * Font Stretch
             * @see https://tailwindcss.com/docs/font-stretch
             */
            "font-stretch": [{
              "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", re, s$1]
            }],
            /**
             * Font Family
             * @see https://tailwindcss.com/docs/font-family
             */
            "font-family": [{
              font: [fo, bo, t]
            }],
            /**
             * Font Feature Settings
             * @see https://tailwindcss.com/docs/font-feature-settings
             */
            "font-features": [{
              "font-features": [s$1]
            }],
            /**
             * Font Variant Numeric
             * @see https://tailwindcss.com/docs/font-variant-numeric
             */
            "fvn-normal": ["normal-nums"],
            /**
             * Font Variant Numeric
             * @see https://tailwindcss.com/docs/font-variant-numeric
             */
            "fvn-ordinal": ["ordinal"],
            /**
             * Font Variant Numeric
             * @see https://tailwindcss.com/docs/font-variant-numeric
             */
            "fvn-slashed-zero": ["slashed-zero"],
            /**
             * Font Variant Numeric
             * @see https://tailwindcss.com/docs/font-variant-numeric
             */
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            /**
             * Font Variant Numeric
             * @see https://tailwindcss.com/docs/font-variant-numeric
             */
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            /**
             * Font Variant Numeric
             * @see https://tailwindcss.com/docs/font-variant-numeric
             */
            "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
            /**
             * Letter Spacing
             * @see https://tailwindcss.com/docs/letter-spacing
             */
            tracking: [{
              tracking: [c, n$2, s$1]
            }],
            /**
             * Line Clamp
             * @see https://tailwindcss.com/docs/line-clamp
             */
            "line-clamp": [{
              "line-clamp": [p, "none", n$2, fe]
            }],
            /**
             * Line Height
             * @see https://tailwindcss.com/docs/line-height
             */
            leading: [{
              leading: [
                /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
                m,
                ...i()
              ]
            }],
            /**
             * List Style Image
             * @see https://tailwindcss.com/docs/list-style-image
             */
            "list-image": [{
              "list-image": ["none", n$2, s$1]
            }],
            /**
             * List Style Position
             * @see https://tailwindcss.com/docs/list-style-position
             */
            "list-style-position": [{
              list: ["inside", "outside"]
            }],
            /**
             * List Style Type
             * @see https://tailwindcss.com/docs/list-style-type
             */
            "list-style-type": [{
              list: ["disc", "decimal", "none", n$2, s$1]
            }],
            /**
             * Text Alignment
             * @see https://tailwindcss.com/docs/text-align
             */
            "text-alignment": [{
              text: ["left", "center", "right", "justify", "start", "end"]
            }],
            /**
             * Placeholder Color
             * @deprecated since Tailwind CSS v3.0.0
             * @see https://v3.tailwindcss.com/docs/placeholder-color
             */
            "placeholder-color": [{
              placeholder: l()
            }],
            /**
             * Text Color
             * @see https://tailwindcss.com/docs/text-color
             */
            "text-color": [{
              text: l()
            }],
            /**
             * Text Decoration
             * @see https://tailwindcss.com/docs/text-decoration
             */
            "text-decoration": ["underline", "overline", "line-through", "no-underline"],
            /**
             * Text Decoration Style
             * @see https://tailwindcss.com/docs/text-decoration-style
             */
            "text-decoration-style": [{
              decoration: [...U(), "wavy"]
            }],
            /**
             * Text Decoration Thickness
             * @see https://tailwindcss.com/docs/text-decoration-thickness
             */
            "text-decoration-thickness": [{
              decoration: [p, "from-font", "auto", n$2, _]
            }],
            /**
             * Text Decoration Color
             * @see https://tailwindcss.com/docs/text-decoration-color
             */
            "text-decoration-color": [{
              decoration: l()
            }],
            /**
             * Text Underline Offset
             * @see https://tailwindcss.com/docs/text-underline-offset
             */
            "underline-offset": [{
              "underline-offset": [p, "auto", n$2, s$1]
            }],
            /**
             * Text Transform
             * @see https://tailwindcss.com/docs/text-transform
             */
            "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
            /**
             * Text Overflow
             * @see https://tailwindcss.com/docs/text-overflow
             */
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            /**
             * Text Wrap
             * @see https://tailwindcss.com/docs/text-wrap
             */
            "text-wrap": [{
              text: ["wrap", "nowrap", "balance", "pretty"]
            }],
            /**
             * Text Indent
             * @see https://tailwindcss.com/docs/text-indent
             */
            indent: [{
              indent: i()
            }],
            /**
             * Vertical Alignment
             * @see https://tailwindcss.com/docs/vertical-align
             */
            "vertical-align": [{
              align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", n$2, s$1]
            }],
            /**
             * Whitespace
             * @see https://tailwindcss.com/docs/whitespace
             */
            whitespace: [{
              whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
            }],
            /**
             * Word Break
             * @see https://tailwindcss.com/docs/word-break
             */
            break: [{
              break: ["normal", "words", "all", "keep"]
            }],
            /**
             * Overflow Wrap
             * @see https://tailwindcss.com/docs/overflow-wrap
             */
            wrap: [{
              wrap: ["break-word", "anywhere", "normal"]
            }],
            /**
             * Hyphens
             * @see https://tailwindcss.com/docs/hyphens
             */
            hyphens: [{
              hyphens: ["none", "manual", "auto"]
            }],
            /**
             * Content
             * @see https://tailwindcss.com/docs/content
             */
            content: [{
              content: ["none", n$2, s$1]
            }],
            // -------------------
            // --- Backgrounds ---
            // -------------------
            /**
             * Background Attachment
             * @see https://tailwindcss.com/docs/background-attachment
             */
            "bg-attachment": [{
              bg: ["fixed", "local", "scroll"]
            }],
            /**
             * Background Clip
             * @see https://tailwindcss.com/docs/background-clip
             */
            "bg-clip": [{
              "bg-clip": ["border", "padding", "content", "text"]
            }],
            /**
             * Background Origin
             * @see https://tailwindcss.com/docs/background-origin
             */
            "bg-origin": [{
              "bg-origin": ["border", "padding", "content"]
            }],
            /**
             * Background Position
             * @see https://tailwindcss.com/docs/background-position
             */
            "bg-position": [{
              bg: le()
            }],
            /**
             * Background Repeat
             * @see https://tailwindcss.com/docs/background-repeat
             */
            "bg-repeat": [{
              bg: ce()
            }],
            /**
             * Background Size
             * @see https://tailwindcss.com/docs/background-size
             */
            "bg-size": [{
              bg: de()
            }],
            /**
             * Background Image
             * @see https://tailwindcss.com/docs/background-image
             */
            "bg-image": [{
              bg: ["none", {
                linear: [{
                  to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                }, I, n$2, s$1],
                radial: ["", n$2, s$1],
                conic: [I, n$2, s$1]
              }, ho, uo]
            }],
            /**
             * Background Color
             * @see https://tailwindcss.com/docs/background-color
             */
            "bg-color": [{
              bg: l()
            }],
            /**
             * Gradient Color Stops From Position
             * @see https://tailwindcss.com/docs/gradient-color-stops
             */
            "gradient-from-pos": [{
              from: ee()
            }],
            /**
             * Gradient Color Stops Via Position
             * @see https://tailwindcss.com/docs/gradient-color-stops
             */
            "gradient-via-pos": [{
              via: ee()
            }],
            /**
             * Gradient Color Stops To Position
             * @see https://tailwindcss.com/docs/gradient-color-stops
             */
            "gradient-to-pos": [{
              to: ee()
            }],
            /**
             * Gradient Color Stops From
             * @see https://tailwindcss.com/docs/gradient-color-stops
             */
            "gradient-from": [{
              from: l()
            }],
            /**
             * Gradient Color Stops Via
             * @see https://tailwindcss.com/docs/gradient-color-stops
             */
            "gradient-via": [{
              via: l()
            }],
            /**
             * Gradient Color Stops To
             * @see https://tailwindcss.com/docs/gradient-color-stops
             */
            "gradient-to": [{
              to: l()
            }],
            // ---------------
            // --- Borders ---
            // ---------------
            /**
             * Border Radius
             * @see https://tailwindcss.com/docs/border-radius
             */
            rounded: [{
              rounded: w()
            }],
            /**
             * Border Radius Start
             * @see https://tailwindcss.com/docs/border-radius
             */
            "rounded-s": [{
              "rounded-s": w()
            }],
            /**
             * Border Radius End
             * @see https://tailwindcss.com/docs/border-radius
             */
            "rounded-e": [{
              "rounded-e": w()
            }],
            /**
             * Border Radius Top
             * @see https://tailwindcss.com/docs/border-radius
             */
            "rounded-t": [{
              "rounded-t": w()
            }],
            /**
             * Border Radius Right
             * @see https://tailwindcss.com/docs/border-radius
             */
            "rounded-r": [{
              "rounded-r": w()
            }],
            /**
             * Border Radius Bottom
             * @see https://tailwindcss.com/docs/border-radius
             */
            "rounded-b": [{
              "rounded-b": w()
            }],
            /**
             * Border Radius Left
             * @see https://tailwindcss.com/docs/border-radius
             */
            "rounded-l": [{
              "rounded-l": w()
            }],
            /**
             * Border Radius Start Start
             * @see https://tailwindcss.com/docs/border-radius
             */
            "rounded-ss": [{
              "rounded-ss": w()
            }],
            /**
             * Border Radius Start End
             * @see https://tailwindcss.com/docs/border-radius
             */
            "rounded-se": [{
              "rounded-se": w()
            }],
            /**
             * Border Radius End End
             * @see https://tailwindcss.com/docs/border-radius
             */
            "rounded-ee": [{
              "rounded-ee": w()
            }],
            /**
             * Border Radius End Start
             * @see https://tailwindcss.com/docs/border-radius
             */
            "rounded-es": [{
              "rounded-es": w()
            }],
            /**
             * Border Radius Top Left
             * @see https://tailwindcss.com/docs/border-radius
             */
            "rounded-tl": [{
              "rounded-tl": w()
            }],
            /**
             * Border Radius Top Right
             * @see https://tailwindcss.com/docs/border-radius
             */
            "rounded-tr": [{
              "rounded-tr": w()
            }],
            /**
             * Border Radius Bottom Right
             * @see https://tailwindcss.com/docs/border-radius
             */
            "rounded-br": [{
              "rounded-br": w()
            }],
            /**
             * Border Radius Bottom Left
             * @see https://tailwindcss.com/docs/border-radius
             */
            "rounded-bl": [{
              "rounded-bl": w()
            }],
            /**
             * Border Width
             * @see https://tailwindcss.com/docs/border-width
             */
            "border-w": [{
              border: k()
            }],
            /**
             * Border Width Inline
             * @see https://tailwindcss.com/docs/border-width
             */
            "border-w-x": [{
              "border-x": k()
            }],
            /**
             * Border Width Block
             * @see https://tailwindcss.com/docs/border-width
             */
            "border-w-y": [{
              "border-y": k()
            }],
            /**
             * Border Width Inline Start
             * @see https://tailwindcss.com/docs/border-width
             */
            "border-w-s": [{
              "border-s": k()
            }],
            /**
             * Border Width Inline End
             * @see https://tailwindcss.com/docs/border-width
             */
            "border-w-e": [{
              "border-e": k()
            }],
            /**
             * Border Width Block Start
             * @see https://tailwindcss.com/docs/border-width
             */
            "border-w-bs": [{
              "border-bs": k()
            }],
            /**
             * Border Width Block End
             * @see https://tailwindcss.com/docs/border-width
             */
            "border-w-be": [{
              "border-be": k()
            }],
            /**
             * Border Width Top
             * @see https://tailwindcss.com/docs/border-width
             */
            "border-w-t": [{
              "border-t": k()
            }],
            /**
             * Border Width Right
             * @see https://tailwindcss.com/docs/border-width
             */
            "border-w-r": [{
              "border-r": k()
            }],
            /**
             * Border Width Bottom
             * @see https://tailwindcss.com/docs/border-width
             */
            "border-w-b": [{
              "border-b": k()
            }],
            /**
             * Border Width Left
             * @see https://tailwindcss.com/docs/border-width
             */
            "border-w-l": [{
              "border-l": k()
            }],
            /**
             * Divide Width X
             * @see https://tailwindcss.com/docs/border-width#between-children
             */
            "divide-x": [{
              "divide-x": k()
            }],
            /**
             * Divide Width X Reverse
             * @see https://tailwindcss.com/docs/border-width#between-children
             */
            "divide-x-reverse": ["divide-x-reverse"],
            /**
             * Divide Width Y
             * @see https://tailwindcss.com/docs/border-width#between-children
             */
            "divide-y": [{
              "divide-y": k()
            }],
            /**
             * Divide Width Y Reverse
             * @see https://tailwindcss.com/docs/border-width#between-children
             */
            "divide-y-reverse": ["divide-y-reverse"],
            /**
             * Border Style
             * @see https://tailwindcss.com/docs/border-style
             */
            "border-style": [{
              border: [...U(), "hidden", "none"]
            }],
            /**
             * Divide Style
             * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
             */
            "divide-style": [{
              divide: [...U(), "hidden", "none"]
            }],
            /**
             * Border Color
             * @see https://tailwindcss.com/docs/border-color
             */
            "border-color": [{
              border: l()
            }],
            /**
             * Border Color Inline
             * @see https://tailwindcss.com/docs/border-color
             */
            "border-color-x": [{
              "border-x": l()
            }],
            /**
             * Border Color Block
             * @see https://tailwindcss.com/docs/border-color
             */
            "border-color-y": [{
              "border-y": l()
            }],
            /**
             * Border Color Inline Start
             * @see https://tailwindcss.com/docs/border-color
             */
            "border-color-s": [{
              "border-s": l()
            }],
            /**
             * Border Color Inline End
             * @see https://tailwindcss.com/docs/border-color
             */
            "border-color-e": [{
              "border-e": l()
            }],
            /**
             * Border Color Block Start
             * @see https://tailwindcss.com/docs/border-color
             */
            "border-color-bs": [{
              "border-bs": l()
            }],
            /**
             * Border Color Block End
             * @see https://tailwindcss.com/docs/border-color
             */
            "border-color-be": [{
              "border-be": l()
            }],
            /**
             * Border Color Top
             * @see https://tailwindcss.com/docs/border-color
             */
            "border-color-t": [{
              "border-t": l()
            }],
            /**
             * Border Color Right
             * @see https://tailwindcss.com/docs/border-color
             */
            "border-color-r": [{
              "border-r": l()
            }],
            /**
             * Border Color Bottom
             * @see https://tailwindcss.com/docs/border-color
             */
            "border-color-b": [{
              "border-b": l()
            }],
            /**
             * Border Color Left
             * @see https://tailwindcss.com/docs/border-color
             */
            "border-color-l": [{
              "border-l": l()
            }],
            /**
             * Divide Color
             * @see https://tailwindcss.com/docs/divide-color
             */
            "divide-color": [{
              divide: l()
            }],
            /**
             * Outline Style
             * @see https://tailwindcss.com/docs/outline-style
             */
            "outline-style": [{
              outline: [...U(), "none", "hidden"]
            }],
            /**
             * Outline Offset
             * @see https://tailwindcss.com/docs/outline-offset
             */
            "outline-offset": [{
              "outline-offset": [p, n$2, s$1]
            }],
            /**
             * Outline Width
             * @see https://tailwindcss.com/docs/outline-width
             */
            "outline-w": [{
              outline: ["", p, B, _]
            }],
            /**
             * Outline Color
             * @see https://tailwindcss.com/docs/outline-color
             */
            "outline-color": [{
              outline: l()
            }],
            // ---------------
            // --- Effects ---
            // ---------------
            /**
             * Box Shadow
             * @see https://tailwindcss.com/docs/box-shadow
             */
            shadow: [{
              shadow: [
                // Deprecated since Tailwind CSS v4.0.0
                "",
                "none",
                h,
                H,
                J
              ]
            }],
            /**
             * Box Shadow Color
             * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
             */
            "shadow-color": [{
              shadow: l()
            }],
            /**
             * Inset Box Shadow
             * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
             */
            "inset-shadow": [{
              "inset-shadow": ["none", v, H, J]
            }],
            /**
             * Inset Box Shadow Color
             * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
             */
            "inset-shadow-color": [{
              "inset-shadow": l()
            }],
            /**
             * Ring Width
             * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
             */
            "ring-w": [{
              ring: k()
            }],
            /**
             * Ring Width Inset
             * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
             * @deprecated since Tailwind CSS v4.0.0
             * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
             */
            "ring-w-inset": ["ring-inset"],
            /**
             * Ring Color
             * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
             */
            "ring-color": [{
              ring: l()
            }],
            /**
             * Ring Offset Width
             * @see https://v3.tailwindcss.com/docs/ring-offset-width
             * @deprecated since Tailwind CSS v4.0.0
             * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
             */
            "ring-offset-w": [{
              "ring-offset": [p, _]
            }],
            /**
             * Ring Offset Color
             * @see https://v3.tailwindcss.com/docs/ring-offset-color
             * @deprecated since Tailwind CSS v4.0.0
             * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
             */
            "ring-offset-color": [{
              "ring-offset": l()
            }],
            /**
             * Inset Ring Width
             * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
             */
            "inset-ring-w": [{
              "inset-ring": k()
            }],
            /**
             * Inset Ring Color
             * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
             */
            "inset-ring-color": [{
              "inset-ring": l()
            }],
            /**
             * Text Shadow
             * @see https://tailwindcss.com/docs/text-shadow
             */
            "text-shadow": [{
              "text-shadow": ["none", R, H, J]
            }],
            /**
             * Text Shadow Color
             * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
             */
            "text-shadow-color": [{
              "text-shadow": l()
            }],
            /**
             * Opacity
             * @see https://tailwindcss.com/docs/opacity
             */
            opacity: [{
              opacity: [p, n$2, s$1]
            }],
            /**
             * Mix Blend Mode
             * @see https://tailwindcss.com/docs/mix-blend-mode
             */
            "mix-blend": [{
              "mix-blend": [...me(), "plus-darker", "plus-lighter"]
            }],
            /**
             * Background Blend Mode
             * @see https://tailwindcss.com/docs/background-blend-mode
             */
            "bg-blend": [{
              "bg-blend": me()
            }],
            /**
             * Mask Clip
             * @see https://tailwindcss.com/docs/mask-clip
             */
            "mask-clip": [{
              "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
            }, "mask-no-clip"],
            /**
             * Mask Composite
             * @see https://tailwindcss.com/docs/mask-composite
             */
            "mask-composite": [{
              mask: ["add", "subtract", "intersect", "exclude"]
            }],
            /**
             * Mask Image
             * @see https://tailwindcss.com/docs/mask-image
             */
            "mask-image-linear-pos": [{
              "mask-linear": [p]
            }],
            "mask-image-linear-from-pos": [{
              "mask-linear-from": g()
            }],
            "mask-image-linear-to-pos": [{
              "mask-linear-to": g()
            }],
            "mask-image-linear-from-color": [{
              "mask-linear-from": l()
            }],
            "mask-image-linear-to-color": [{
              "mask-linear-to": l()
            }],
            "mask-image-t-from-pos": [{
              "mask-t-from": g()
            }],
            "mask-image-t-to-pos": [{
              "mask-t-to": g()
            }],
            "mask-image-t-from-color": [{
              "mask-t-from": l()
            }],
            "mask-image-t-to-color": [{
              "mask-t-to": l()
            }],
            "mask-image-r-from-pos": [{
              "mask-r-from": g()
            }],
            "mask-image-r-to-pos": [{
              "mask-r-to": g()
            }],
            "mask-image-r-from-color": [{
              "mask-r-from": l()
            }],
            "mask-image-r-to-color": [{
              "mask-r-to": l()
            }],
            "mask-image-b-from-pos": [{
              "mask-b-from": g()
            }],
            "mask-image-b-to-pos": [{
              "mask-b-to": g()
            }],
            "mask-image-b-from-color": [{
              "mask-b-from": l()
            }],
            "mask-image-b-to-color": [{
              "mask-b-to": l()
            }],
            "mask-image-l-from-pos": [{
              "mask-l-from": g()
            }],
            "mask-image-l-to-pos": [{
              "mask-l-to": g()
            }],
            "mask-image-l-from-color": [{
              "mask-l-from": l()
            }],
            "mask-image-l-to-color": [{
              "mask-l-to": l()
            }],
            "mask-image-x-from-pos": [{
              "mask-x-from": g()
            }],
            "mask-image-x-to-pos": [{
              "mask-x-to": g()
            }],
            "mask-image-x-from-color": [{
              "mask-x-from": l()
            }],
            "mask-image-x-to-color": [{
              "mask-x-to": l()
            }],
            "mask-image-y-from-pos": [{
              "mask-y-from": g()
            }],
            "mask-image-y-to-pos": [{
              "mask-y-to": g()
            }],
            "mask-image-y-from-color": [{
              "mask-y-from": l()
            }],
            "mask-image-y-to-color": [{
              "mask-y-to": l()
            }],
            "mask-image-radial": [{
              "mask-radial": [n$2, s$1]
            }],
            "mask-image-radial-from-pos": [{
              "mask-radial-from": g()
            }],
            "mask-image-radial-to-pos": [{
              "mask-radial-to": g()
            }],
            "mask-image-radial-from-color": [{
              "mask-radial-from": l()
            }],
            "mask-image-radial-to-color": [{
              "mask-radial-to": l()
            }],
            "mask-image-radial-shape": [{
              "mask-radial": ["circle", "ellipse"]
            }],
            "mask-image-radial-size": [{
              "mask-radial": [{
                closest: ["side", "corner"],
                farthest: ["side", "corner"]
              }]
            }],
            "mask-image-radial-pos": [{
              "mask-radial-at": N()
            }],
            "mask-image-conic-pos": [{
              "mask-conic": [p]
            }],
            "mask-image-conic-from-pos": [{
              "mask-conic-from": g()
            }],
            "mask-image-conic-to-pos": [{
              "mask-conic-to": g()
            }],
            "mask-image-conic-from-color": [{
              "mask-conic-from": l()
            }],
            "mask-image-conic-to-color": [{
              "mask-conic-to": l()
            }],
            /**
             * Mask Mode
             * @see https://tailwindcss.com/docs/mask-mode
             */
            "mask-mode": [{
              mask: ["alpha", "luminance", "match"]
            }],
            /**
             * Mask Origin
             * @see https://tailwindcss.com/docs/mask-origin
             */
            "mask-origin": [{
              "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
            }],
            /**
             * Mask Position
             * @see https://tailwindcss.com/docs/mask-position
             */
            "mask-position": [{
              mask: le()
            }],
            /**
             * Mask Repeat
             * @see https://tailwindcss.com/docs/mask-repeat
             */
            "mask-repeat": [{
              mask: ce()
            }],
            /**
             * Mask Size
             * @see https://tailwindcss.com/docs/mask-size
             */
            "mask-size": [{
              mask: de()
            }],
            /**
             * Mask Type
             * @see https://tailwindcss.com/docs/mask-type
             */
            "mask-type": [{
              "mask-type": ["alpha", "luminance"]
            }],
            /**
             * Mask Image
             * @see https://tailwindcss.com/docs/mask-image
             */
            "mask-image": [{
              mask: ["none", n$2, s$1]
            }],
            // ---------------
            // --- Filters ---
            // ---------------
            /**
             * Filter
             * @see https://tailwindcss.com/docs/filter
             */
            filter: [{
              filter: [
                // Deprecated since Tailwind CSS v3.0.0
                "",
                "none",
                n$2,
                s$1
              ]
            }],
            /**
             * Blur
             * @see https://tailwindcss.com/docs/blur
             */
            blur: [{
              blur: pe()
            }],
            /**
             * Brightness
             * @see https://tailwindcss.com/docs/brightness
             */
            brightness: [{
              brightness: [p, n$2, s$1]
            }],
            /**
             * Contrast
             * @see https://tailwindcss.com/docs/contrast
             */
            contrast: [{
              contrast: [p, n$2, s$1]
            }],
            /**
             * Drop Shadow
             * @see https://tailwindcss.com/docs/drop-shadow
             */
            "drop-shadow": [{
              "drop-shadow": [
                // Deprecated since Tailwind CSS v4.0.0
                "",
                "none",
                T,
                H,
                J
              ]
            }],
            /**
             * Drop Shadow Color
             * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
             */
            "drop-shadow-color": [{
              "drop-shadow": l()
            }],
            /**
             * Grayscale
             * @see https://tailwindcss.com/docs/grayscale
             */
            grayscale: [{
              grayscale: ["", p, n$2, s$1]
            }],
            /**
             * Hue Rotate
             * @see https://tailwindcss.com/docs/hue-rotate
             */
            "hue-rotate": [{
              "hue-rotate": [p, n$2, s$1]
            }],
            /**
             * Invert
             * @see https://tailwindcss.com/docs/invert
             */
            invert: [{
              invert: ["", p, n$2, s$1]
            }],
            /**
             * Saturate
             * @see https://tailwindcss.com/docs/saturate
             */
            saturate: [{
              saturate: [p, n$2, s$1]
            }],
            /**
             * Sepia
             * @see https://tailwindcss.com/docs/sepia
             */
            sepia: [{
              sepia: ["", p, n$2, s$1]
            }],
            /**
             * Backdrop Filter
             * @see https://tailwindcss.com/docs/backdrop-filter
             */
            "backdrop-filter": [{
              "backdrop-filter": [
                // Deprecated since Tailwind CSS v3.0.0
                "",
                "none",
                n$2,
                s$1
              ]
            }],
            /**
             * Backdrop Blur
             * @see https://tailwindcss.com/docs/backdrop-blur
             */
            "backdrop-blur": [{
              "backdrop-blur": pe()
            }],
            /**
             * Backdrop Brightness
             * @see https://tailwindcss.com/docs/backdrop-brightness
             */
            "backdrop-brightness": [{
              "backdrop-brightness": [p, n$2, s$1]
            }],
            /**
             * Backdrop Contrast
             * @see https://tailwindcss.com/docs/backdrop-contrast
             */
            "backdrop-contrast": [{
              "backdrop-contrast": [p, n$2, s$1]
            }],
            /**
             * Backdrop Grayscale
             * @see https://tailwindcss.com/docs/backdrop-grayscale
             */
            "backdrop-grayscale": [{
              "backdrop-grayscale": ["", p, n$2, s$1]
            }],
            /**
             * Backdrop Hue Rotate
             * @see https://tailwindcss.com/docs/backdrop-hue-rotate
             */
            "backdrop-hue-rotate": [{
              "backdrop-hue-rotate": [p, n$2, s$1]
            }],
            /**
             * Backdrop Invert
             * @see https://tailwindcss.com/docs/backdrop-invert
             */
            "backdrop-invert": [{
              "backdrop-invert": ["", p, n$2, s$1]
            }],
            /**
             * Backdrop Opacity
             * @see https://tailwindcss.com/docs/backdrop-opacity
             */
            "backdrop-opacity": [{
              "backdrop-opacity": [p, n$2, s$1]
            }],
            /**
             * Backdrop Saturate
             * @see https://tailwindcss.com/docs/backdrop-saturate
             */
            "backdrop-saturate": [{
              "backdrop-saturate": [p, n$2, s$1]
            }],
            /**
             * Backdrop Sepia
             * @see https://tailwindcss.com/docs/backdrop-sepia
             */
            "backdrop-sepia": [{
              "backdrop-sepia": ["", p, n$2, s$1]
            }],
            // --------------
            // --- Tables ---
            // --------------
            /**
             * Border Collapse
             * @see https://tailwindcss.com/docs/border-collapse
             */
            "border-collapse": [{
              border: ["collapse", "separate"]
            }],
            /**
             * Border Spacing
             * @see https://tailwindcss.com/docs/border-spacing
             */
            "border-spacing": [{
              "border-spacing": i()
            }],
            /**
             * Border Spacing X
             * @see https://tailwindcss.com/docs/border-spacing
             */
            "border-spacing-x": [{
              "border-spacing-x": i()
            }],
            /**
             * Border Spacing Y
             * @see https://tailwindcss.com/docs/border-spacing
             */
            "border-spacing-y": [{
              "border-spacing-y": i()
            }],
            /**
             * Table Layout
             * @see https://tailwindcss.com/docs/table-layout
             */
            "table-layout": [{
              table: ["auto", "fixed"]
            }],
            /**
             * Caption Side
             * @see https://tailwindcss.com/docs/caption-side
             */
            caption: [{
              caption: ["top", "bottom"]
            }],
            // ---------------------------------
            // --- Transitions and Animation ---
            // ---------------------------------
            /**
             * Transition Property
             * @see https://tailwindcss.com/docs/transition-property
             */
            transition: [{
              transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", n$2, s$1]
            }],
            /**
             * Transition Behavior
             * @see https://tailwindcss.com/docs/transition-behavior
             */
            "transition-behavior": [{
              transition: ["normal", "discrete"]
            }],
            /**
             * Transition Duration
             * @see https://tailwindcss.com/docs/transition-duration
             */
            duration: [{
              duration: [p, "initial", n$2, s$1]
            }],
            /**
             * Transition Timing Function
             * @see https://tailwindcss.com/docs/transition-timing-function
             */
            ease: [{
              ease: ["linear", "initial", O, n$2, s$1]
            }],
            /**
             * Transition Delay
             * @see https://tailwindcss.com/docs/transition-delay
             */
            delay: [{
              delay: [p, n$2, s$1]
            }],
            /**
             * Animation
             * @see https://tailwindcss.com/docs/animation
             */
            animate: [{
              animate: ["none", D, n$2, s$1]
            }],
            // ------------------
            // --- Transforms ---
            // ------------------
            /**
             * Backface Visibility
             * @see https://tailwindcss.com/docs/backface-visibility
             */
            backface: [{
              backface: ["hidden", "visible"]
            }],
            /**
             * Perspective
             * @see https://tailwindcss.com/docs/perspective
             */
            perspective: [{
              perspective: [A, n$2, s$1]
            }],
            /**
             * Perspective Origin
             * @see https://tailwindcss.com/docs/perspective-origin
             */
            "perspective-origin": [{
              "perspective-origin": j()
            }],
            /**
             * Rotate
             * @see https://tailwindcss.com/docs/rotate
             */
            rotate: [{
              rotate: Y()
            }],
            /**
             * Rotate X
             * @see https://tailwindcss.com/docs/rotate
             */
            "rotate-x": [{
              "rotate-x": Y()
            }],
            /**
             * Rotate Y
             * @see https://tailwindcss.com/docs/rotate
             */
            "rotate-y": [{
              "rotate-y": Y()
            }],
            /**
             * Rotate Z
             * @see https://tailwindcss.com/docs/rotate
             */
            "rotate-z": [{
              "rotate-z": Y()
            }],
            /**
             * Scale
             * @see https://tailwindcss.com/docs/scale
             */
            scale: [{
              scale: q()
            }],
            /**
             * Scale X
             * @see https://tailwindcss.com/docs/scale
             */
            "scale-x": [{
              "scale-x": q()
            }],
            /**
             * Scale Y
             * @see https://tailwindcss.com/docs/scale
             */
            "scale-y": [{
              "scale-y": q()
            }],
            /**
             * Scale Z
             * @see https://tailwindcss.com/docs/scale
             */
            "scale-z": [{
              "scale-z": q()
            }],
            /**
             * Scale 3D
             * @see https://tailwindcss.com/docs/scale
             */
            "scale-3d": ["scale-3d"],
            /**
             * Skew
             * @see https://tailwindcss.com/docs/skew
             */
            skew: [{
              skew: oe()
            }],
            /**
             * Skew X
             * @see https://tailwindcss.com/docs/skew
             */
            "skew-x": [{
              "skew-x": oe()
            }],
            /**
             * Skew Y
             * @see https://tailwindcss.com/docs/skew
             */
            "skew-y": [{
              "skew-y": oe()
            }],
            /**
             * Transform
             * @see https://tailwindcss.com/docs/transform
             */
            transform: [{
              transform: [n$2, s$1, "", "none", "gpu", "cpu"]
            }],
            /**
             * Transform Origin
             * @see https://tailwindcss.com/docs/transform-origin
             */
            "transform-origin": [{
              origin: j()
            }],
            /**
             * Transform Style
             * @see https://tailwindcss.com/docs/transform-style
             */
            "transform-style": [{
              transform: ["3d", "flat"]
            }],
            /**
             * Translate
             * @see https://tailwindcss.com/docs/translate
             */
            translate: [{
              translate: X()
            }],
            /**
             * Translate X
             * @see https://tailwindcss.com/docs/translate
             */
            "translate-x": [{
              "translate-x": X()
            }],
            /**
             * Translate Y
             * @see https://tailwindcss.com/docs/translate
             */
            "translate-y": [{
              "translate-y": X()
            }],
            /**
             * Translate Z
             * @see https://tailwindcss.com/docs/translate
             */
            "translate-z": [{
              "translate-z": X()
            }],
            /**
             * Translate None
             * @see https://tailwindcss.com/docs/translate
             */
            "translate-none": ["translate-none"],
            // ---------------------
            // --- Interactivity ---
            // ---------------------
            /**
             * Accent Color
             * @see https://tailwindcss.com/docs/accent-color
             */
            accent: [{
              accent: l()
            }],
            /**
             * Appearance
             * @see https://tailwindcss.com/docs/appearance
             */
            appearance: [{
              appearance: ["none", "auto"]
            }],
            /**
             * Caret Color
             * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
             */
            "caret-color": [{
              caret: l()
            }],
            /**
             * Color Scheme
             * @see https://tailwindcss.com/docs/color-scheme
             */
            "color-scheme": [{
              scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
            }],
            /**
             * Cursor
             * @see https://tailwindcss.com/docs/cursor
             */
            cursor: [{
              cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", n$2, s$1]
            }],
            /**
             * Field Sizing
             * @see https://tailwindcss.com/docs/field-sizing
             */
            "field-sizing": [{
              "field-sizing": ["fixed", "content"]
            }],
            /**
             * Pointer Events
             * @see https://tailwindcss.com/docs/pointer-events
             */
            "pointer-events": [{
              "pointer-events": ["auto", "none"]
            }],
            /**
             * Resize
             * @see https://tailwindcss.com/docs/resize
             */
            resize: [{
              resize: ["none", "", "y", "x"]
            }],
            /**
             * Scroll Behavior
             * @see https://tailwindcss.com/docs/scroll-behavior
             */
            "scroll-behavior": [{
              scroll: ["auto", "smooth"]
            }],
            /**
             * Scroll Margin
             * @see https://tailwindcss.com/docs/scroll-margin
             */
            "scroll-m": [{
              "scroll-m": i()
            }],
            /**
             * Scroll Margin Inline
             * @see https://tailwindcss.com/docs/scroll-margin
             */
            "scroll-mx": [{
              "scroll-mx": i()
            }],
            /**
             * Scroll Margin Block
             * @see https://tailwindcss.com/docs/scroll-margin
             */
            "scroll-my": [{
              "scroll-my": i()
            }],
            /**
             * Scroll Margin Inline Start
             * @see https://tailwindcss.com/docs/scroll-margin
             */
            "scroll-ms": [{
              "scroll-ms": i()
            }],
            /**
             * Scroll Margin Inline End
             * @see https://tailwindcss.com/docs/scroll-margin
             */
            "scroll-me": [{
              "scroll-me": i()
            }],
            /**
             * Scroll Margin Block Start
             * @see https://tailwindcss.com/docs/scroll-margin
             */
            "scroll-mbs": [{
              "scroll-mbs": i()
            }],
            /**
             * Scroll Margin Block End
             * @see https://tailwindcss.com/docs/scroll-margin
             */
            "scroll-mbe": [{
              "scroll-mbe": i()
            }],
            /**
             * Scroll Margin Top
             * @see https://tailwindcss.com/docs/scroll-margin
             */
            "scroll-mt": [{
              "scroll-mt": i()
            }],
            /**
             * Scroll Margin Right
             * @see https://tailwindcss.com/docs/scroll-margin
             */
            "scroll-mr": [{
              "scroll-mr": i()
            }],
            /**
             * Scroll Margin Bottom
             * @see https://tailwindcss.com/docs/scroll-margin
             */
            "scroll-mb": [{
              "scroll-mb": i()
            }],
            /**
             * Scroll Margin Left
             * @see https://tailwindcss.com/docs/scroll-margin
             */
            "scroll-ml": [{
              "scroll-ml": i()
            }],
            /**
             * Scroll Padding
             * @see https://tailwindcss.com/docs/scroll-padding
             */
            "scroll-p": [{
              "scroll-p": i()
            }],
            /**
             * Scroll Padding Inline
             * @see https://tailwindcss.com/docs/scroll-padding
             */
            "scroll-px": [{
              "scroll-px": i()
            }],
            /**
             * Scroll Padding Block
             * @see https://tailwindcss.com/docs/scroll-padding
             */
            "scroll-py": [{
              "scroll-py": i()
            }],
            /**
             * Scroll Padding Inline Start
             * @see https://tailwindcss.com/docs/scroll-padding
             */
            "scroll-ps": [{
              "scroll-ps": i()
            }],
            /**
             * Scroll Padding Inline End
             * @see https://tailwindcss.com/docs/scroll-padding
             */
            "scroll-pe": [{
              "scroll-pe": i()
            }],
            /**
             * Scroll Padding Block Start
             * @see https://tailwindcss.com/docs/scroll-padding
             */
            "scroll-pbs": [{
              "scroll-pbs": i()
            }],
            /**
             * Scroll Padding Block End
             * @see https://tailwindcss.com/docs/scroll-padding
             */
            "scroll-pbe": [{
              "scroll-pbe": i()
            }],
            /**
             * Scroll Padding Top
             * @see https://tailwindcss.com/docs/scroll-padding
             */
            "scroll-pt": [{
              "scroll-pt": i()
            }],
            /**
             * Scroll Padding Right
             * @see https://tailwindcss.com/docs/scroll-padding
             */
            "scroll-pr": [{
              "scroll-pr": i()
            }],
            /**
             * Scroll Padding Bottom
             * @see https://tailwindcss.com/docs/scroll-padding
             */
            "scroll-pb": [{
              "scroll-pb": i()
            }],
            /**
             * Scroll Padding Left
             * @see https://tailwindcss.com/docs/scroll-padding
             */
            "scroll-pl": [{
              "scroll-pl": i()
            }],
            /**
             * Scroll Snap Align
             * @see https://tailwindcss.com/docs/scroll-snap-align
             */
            "snap-align": [{
              snap: ["start", "end", "center", "align-none"]
            }],
            /**
             * Scroll Snap Stop
             * @see https://tailwindcss.com/docs/scroll-snap-stop
             */
            "snap-stop": [{
              snap: ["normal", "always"]
            }],
            /**
             * Scroll Snap Type
             * @see https://tailwindcss.com/docs/scroll-snap-type
             */
            "snap-type": [{
              snap: ["none", "x", "y", "both"]
            }],
            /**
             * Scroll Snap Type Strictness
             * @see https://tailwindcss.com/docs/scroll-snap-type
             */
            "snap-strictness": [{
              snap: ["mandatory", "proximity"]
            }],
            /**
             * Touch Action
             * @see https://tailwindcss.com/docs/touch-action
             */
            touch: [{
              touch: ["auto", "none", "manipulation"]
            }],
            /**
             * Touch Action X
             * @see https://tailwindcss.com/docs/touch-action
             */
            "touch-x": [{
              "touch-pan": ["x", "left", "right"]
            }],
            /**
             * Touch Action Y
             * @see https://tailwindcss.com/docs/touch-action
             */
            "touch-y": [{
              "touch-pan": ["y", "up", "down"]
            }],
            /**
             * Touch Action Pinch Zoom
             * @see https://tailwindcss.com/docs/touch-action
             */
            "touch-pz": ["touch-pinch-zoom"],
            /**
             * User Select
             * @see https://tailwindcss.com/docs/user-select
             */
            select: [{
              select: ["none", "text", "all", "auto"]
            }],
            /**
             * Will Change
             * @see https://tailwindcss.com/docs/will-change
             */
            "will-change": [{
              "will-change": ["auto", "scroll", "contents", "transform", n$2, s$1]
            }],
            // -----------
            // --- SVG ---
            // -----------
            /**
             * Fill
             * @see https://tailwindcss.com/docs/fill
             */
            fill: [{
              fill: ["none", ...l()]
            }],
            /**
             * Stroke Width
             * @see https://tailwindcss.com/docs/stroke-width
             */
            "stroke-w": [{
              stroke: [p, B, _, fe]
            }],
            /**
             * Stroke
             * @see https://tailwindcss.com/docs/stroke
             */
            stroke: [{
              stroke: ["none", ...l()]
            }],
            // ---------------------
            // --- Accessibility ---
            // ---------------------
            /**
             * Forced Color Adjust
             * @see https://tailwindcss.com/docs/forced-color-adjust
             */
            "forced-color-adjust": [{
              "forced-color-adjust": ["auto", "none"]
            }]
          },
          conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: ["inset-x", "inset-y", "inset-bs", "inset-be", "start", "end", "top", "right", "bottom", "left"],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pbs", "pbe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mbs", "mbe", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-bs", "border-w-be", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-bs", "border-color-be", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            translate: ["translate-x", "translate-y", "translate-none"],
            "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
            "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mbs", "scroll-mbe", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pbs", "scroll-pbe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"]
          },
          conflictingClassGroupModifiers: {
            "font-size": ["leading"]
          },
          orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
        };
      }, yo = /* @__PURE__ */ Qe(xo);

      function n$1(...r) {
        return yo(i$1(r));
      }

      const f$1 = j(
        "focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        {
          variants: {
            variant: {
              default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-xs border border-transparent",
              destructive: "bg-destructive hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60 text-white shadow-xs",
              outline: "hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 border bg-white",
              // No shadow: the grey button is a flat surface, and lifting it made
              // small round ones (carousel arrows, close buttons) look like they
              // were peeling off the page on hover.
              secondary: "bg-secondary disabled:text-secondary-foreground/50 text-secondary-foreground hover:bg-secondary-foreground/10",
              ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
              link: "text-primary dark:text-primary-foreground underline-offset-4 hover:underline"
            },
            size: {
              default: "h-10 px-4 py-2 has-[>svg]:px-3",
              xs: "h-7 gap-1 px-2 text-xs has-[>svg]:px-1.5",
              sm: "h-8 gap-1.5 px-3 font-normal has-[>svg]:px-2.5",
              lg: "h-12 px-6 has-[>svg]:px-4",
              icon: "size-9"
            }
          },
          defaultVariants: {
            variant: "default",
            size: "default"
          }
        }
      );
      function w$1({
        className: i,
        variant: o,
        size: s,
        asChild: n = false,
        loading: e = false,
        disabled: a = false,
        children: r,
        ...d
      }) {
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          n ? x : "button",
          {
            "data-slot": "button",
            className: n$1(f$1({ variant: o, size: s, className: i })),
            disabled: e || a,
            ...d,
            children: e ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              r,
              /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "animate-spin" })
            ] }) : r
          }
        );
      }

      const m = (t) => /* @__PURE__ */ jsxRuntimeExports.jsx(w$1, { ...t });

      var u$1 = [
        "a",
        "button",
        "div",
        "form",
        "h2",
        "h3",
        "img",
        "input",
        "label",
        "li",
        "nav",
        "ol",
        "p",
        "select",
        "span",
        "svg",
        "ul"
      ], w = u$1.reduce((r, i) => {
        const o = g(`Primitive.${i}`), t = React$1.forwardRef((e, m) => {
          const { asChild: s, ...a } = e, n = s ? o : i;
          return typeof window < "u" && (window[/* @__PURE__ */ Symbol.for("radix-ui")] = true), /* @__PURE__ */ jsxRuntimeExports.jsx(n, { ...a, ref: m });
        });
        return t.displayName = `Primitive.${i}`, { ...r, [i]: t };
      }, {});

      function n({ className: t, ...r }) {
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            "data-slot": "card",
            className: n$1(
              "bg-card text-card-foreground flex flex-col gap-2 rounded-xl border-none py-6 shadow-none",
              t
            ),
            ...r
          }
        );
      }
      function s({ className: t, ...r }) {
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            "data-slot": "card-header",
            className: n$1(
              "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
              t
            ),
            ...r
          }
        );
      }
      function c({ className: t, ...r }) {
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            "data-slot": "card-title",
            className: n$1("text-2xl leading-none font-semibold", t),
            ...r
          }
        );
      }
      function u({ className: t, ...r }) {
        return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-slot": "card-content", className: n$1("px-6", t), ...r });
      }

      var d$1 = "Separator", a = "horizontal", l = ["horizontal", "vertical"], i = React$1.forwardRef((r, n) => {
        const { decorative: e, orientation: t = a, ...s } = r, o = f(t) ? t : a, c = e ? { role: "none" } : { "aria-orientation": o === "vertical" ? o : void 0, role: "separator" };
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          w.div,
          {
            "data-orientation": o,
            ...c,
            ...s,
            ref: n
          }
        );
      });
      i.displayName = d$1;
      function f(r) {
        return l.includes(r);
      }
      var T = i;

      function d({
        className: t,
        orientation: o = "horizontal",
        decorative: r = true,
        ...a
      }) {
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          T,
          {
            "data-slot": "separator",
            decorative: r,
            orientation: o,
            className: n$1(
              "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
              t
            ),
            ...a
          }
        );
      }

      var reactDom = {exports: {}};

      var reactDom_production = {};

      /**
       * @license React
       * react-dom.production.js
       *
       * Copyright (c) Meta Platforms, Inc. and affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */

      var hasRequiredReactDom_production;

      function requireReactDom_production () {
      	if (hasRequiredReactDom_production) return reactDom_production;
      	hasRequiredReactDom_production = 1;
      	var React = React__default;
      	function formatProdErrorMessage(code) {
      	  var url = "https://react.dev/errors/" + code;
      	  if (1 < arguments.length) {
      	    url += "?args[]=" + encodeURIComponent(arguments[1]);
      	    for (var i = 2; i < arguments.length; i++)
      	      url += "&args[]=" + encodeURIComponent(arguments[i]);
      	  }
      	  return (
      	    "Minified React error #" +
      	    code +
      	    "; visit " +
      	    url +
      	    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
      	  );
      	}
      	function noop() {}
      	var Internals = {
      	    d: {
      	      f: noop,
      	      r: function () {
      	        throw Error(formatProdErrorMessage(522));
      	      },
      	      D: noop,
      	      C: noop,
      	      L: noop,
      	      m: noop,
      	      X: noop,
      	      S: noop,
      	      M: noop
      	    },
      	    p: 0,
      	    findDOMNode: null
      	  },
      	  REACT_PORTAL_TYPE = Symbol.for("react.portal");
      	function createPortal$1(children, containerInfo, implementation) {
      	  var key =
      	    3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
      	  return {
      	    $$typeof: REACT_PORTAL_TYPE,
      	    key: null == key ? null : "" + key,
      	    children: children,
      	    containerInfo: containerInfo,
      	    implementation: implementation
      	  };
      	}
      	var ReactSharedInternals =
      	  React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
      	function getCrossOriginStringAs(as, input) {
      	  if ("font" === as) return "";
      	  if ("string" === typeof input)
      	    return "use-credentials" === input ? input : "";
      	}
      	reactDom_production.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE =
      	  Internals;
      	reactDom_production.createPortal = function (children, container) {
      	  var key =
      	    2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
      	  if (
      	    !container ||
      	    (1 !== container.nodeType &&
      	      9 !== container.nodeType &&
      	      11 !== container.nodeType)
      	  )
      	    throw Error(formatProdErrorMessage(299));
      	  return createPortal$1(children, container, null, key);
      	};
      	reactDom_production.flushSync = function (fn) {
      	  var previousTransition = ReactSharedInternals.T,
      	    previousUpdatePriority = Internals.p;
      	  try {
      	    if (((ReactSharedInternals.T = null), (Internals.p = 2), fn)) return fn();
      	  } finally {
      	    (ReactSharedInternals.T = previousTransition),
      	      (Internals.p = previousUpdatePriority),
      	      Internals.d.f();
      	  }
      	};
      	reactDom_production.preconnect = function (href, options) {
      	  "string" === typeof href &&
      	    (options
      	      ? ((options = options.crossOrigin),
      	        (options =
      	          "string" === typeof options
      	            ? "use-credentials" === options
      	              ? options
      	              : ""
      	            : void 0))
      	      : (options = null),
      	    Internals.d.C(href, options));
      	};
      	reactDom_production.prefetchDNS = function (href) {
      	  "string" === typeof href && Internals.d.D(href);
      	};
      	reactDom_production.preinit = function (href, options) {
      	  if ("string" === typeof href && options && "string" === typeof options.as) {
      	    var as = options.as,
      	      crossOrigin = getCrossOriginStringAs(as, options.crossOrigin),
      	      integrity =
      	        "string" === typeof options.integrity ? options.integrity : void 0,
      	      fetchPriority =
      	        "string" === typeof options.fetchPriority
      	          ? options.fetchPriority
      	          : void 0;
      	    "style" === as
      	      ? Internals.d.S(
      	          href,
      	          "string" === typeof options.precedence ? options.precedence : void 0,
      	          {
      	            crossOrigin: crossOrigin,
      	            integrity: integrity,
      	            fetchPriority: fetchPriority
      	          }
      	        )
      	      : "script" === as &&
      	        Internals.d.X(href, {
      	          crossOrigin: crossOrigin,
      	          integrity: integrity,
      	          fetchPriority: fetchPriority,
      	          nonce: "string" === typeof options.nonce ? options.nonce : void 0
      	        });
      	  }
      	};
      	reactDom_production.preinitModule = function (href, options) {
      	  if ("string" === typeof href)
      	    if ("object" === typeof options && null !== options) {
      	      if (null == options.as || "script" === options.as) {
      	        var crossOrigin = getCrossOriginStringAs(
      	          options.as,
      	          options.crossOrigin
      	        );
      	        Internals.d.M(href, {
      	          crossOrigin: crossOrigin,
      	          integrity:
      	            "string" === typeof options.integrity ? options.integrity : void 0,
      	          nonce: "string" === typeof options.nonce ? options.nonce : void 0
      	        });
      	      }
      	    } else null == options && Internals.d.M(href);
      	};
      	reactDom_production.preload = function (href, options) {
      	  if (
      	    "string" === typeof href &&
      	    "object" === typeof options &&
      	    null !== options &&
      	    "string" === typeof options.as
      	  ) {
      	    var as = options.as,
      	      crossOrigin = getCrossOriginStringAs(as, options.crossOrigin);
      	    Internals.d.L(href, as, {
      	      crossOrigin: crossOrigin,
      	      integrity:
      	        "string" === typeof options.integrity ? options.integrity : void 0,
      	      nonce: "string" === typeof options.nonce ? options.nonce : void 0,
      	      type: "string" === typeof options.type ? options.type : void 0,
      	      fetchPriority:
      	        "string" === typeof options.fetchPriority
      	          ? options.fetchPriority
      	          : void 0,
      	      referrerPolicy:
      	        "string" === typeof options.referrerPolicy
      	          ? options.referrerPolicy
      	          : void 0,
      	      imageSrcSet:
      	        "string" === typeof options.imageSrcSet ? options.imageSrcSet : void 0,
      	      imageSizes:
      	        "string" === typeof options.imageSizes ? options.imageSizes : void 0,
      	      media: "string" === typeof options.media ? options.media : void 0
      	    });
      	  }
      	};
      	reactDom_production.preloadModule = function (href, options) {
      	  if ("string" === typeof href)
      	    if (options) {
      	      var crossOrigin = getCrossOriginStringAs(options.as, options.crossOrigin);
      	      Internals.d.m(href, {
      	        as:
      	          "string" === typeof options.as && "script" !== options.as
      	            ? options.as
      	            : void 0,
      	        crossOrigin: crossOrigin,
      	        integrity:
      	          "string" === typeof options.integrity ? options.integrity : void 0
      	      });
      	    } else Internals.d.m(href);
      	};
      	reactDom_production.requestFormReset = function (form) {
      	  Internals.d.r(form);
      	};
      	reactDom_production.unstable_batchedUpdates = function (fn, a) {
      	  return fn(a);
      	};
      	reactDom_production.useFormState = function (action, initialState, permalink) {
      	  return ReactSharedInternals.H.useFormState(action, initialState, permalink);
      	};
      	reactDom_production.useFormStatus = function () {
      	  return ReactSharedInternals.H.useHostTransitionStatus();
      	};
      	reactDom_production.version = "19.2.5";
      	return reactDom_production;
      }

      var hasRequiredReactDom;

      function requireReactDom () {
      	if (hasRequiredReactDom) return reactDom.exports;
      	hasRequiredReactDom = 1;
      	function checkDCE() {
      	  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
      	    return;
      	  }
      	  try {
      	    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
      	  } catch (err) {
      	    console.error(err);
      	  }
      	}
      	{
      	  checkDCE();
      	  reactDom.exports = requireReactDom_production();
      	}
      	return reactDom.exports;
      }

      var reactDomExports = requireReactDom();
      const vt = /*@__PURE__*/getDefaultExportFromCjs(reactDomExports);

      var jt=n=>{switch(n){case "success":return ee;case "info":return ae;case "warning":return oe;case "error":return se;default:return null}},te=Array(12).fill(0),Yt=({visible:n,className:e})=>React__default.createElement("div",{className:["sonner-loading-wrapper",e].filter(Boolean).join(" "),"data-visible":n},React__default.createElement("div",{className:"sonner-spinner"},te.map((t,a)=>React__default.createElement("div",{className:"sonner-loading-bar",key:`spinner-bar-${a}`})))),ee=React__default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},React__default.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",clipRule:"evenodd"})),oe=React__default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",height:"20",width:"20"},React__default.createElement("path",{fillRule:"evenodd",d:"M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",clipRule:"evenodd"})),ae=React__default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},React__default.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",clipRule:"evenodd"})),se=React__default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},React__default.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"})),Ot=React__default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},React__default.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),React__default.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"}));var Ft=()=>{let[n,e]=React__default.useState(document.hidden);return React__default.useEffect(()=>{let t=()=>{e(document.hidden);};return document.addEventListener("visibilitychange",t),()=>window.removeEventListener("visibilitychange",t)},[]),n};var bt=1,yt=class{constructor(){this.subscribe=e=>(this.subscribers.push(e),()=>{let t=this.subscribers.indexOf(e);this.subscribers.splice(t,1);});this.publish=e=>{this.subscribers.forEach(t=>t(e));};this.addToast=e=>{this.publish(e),this.toasts=[...this.toasts,e];};this.create=e=>{var S;let{message:t,...a}=e,u=typeof(e==null?void 0:e.id)=="number"||((S=e.id)==null?void 0:S.length)>0?e.id:bt++,f=this.toasts.find(g=>g.id===u),w=e.dismissible===void 0?true:e.dismissible;return this.dismissedToasts.has(u)&&this.dismissedToasts.delete(u),f?this.toasts=this.toasts.map(g=>g.id===u?(this.publish({...g,...e,id:u,title:t}),{...g,...e,id:u,dismissible:w,title:t}):g):this.addToast({title:t,...a,dismissible:w,id:u}),u};this.dismiss=e=>(this.dismissedToasts.add(e),e||this.toasts.forEach(t=>{this.subscribers.forEach(a=>a({id:t.id,dismiss:true}));}),this.subscribers.forEach(t=>t({id:e,dismiss:true})),e);this.message=(e,t)=>this.create({...t,message:e});this.error=(e,t)=>this.create({...t,message:e,type:"error"});this.success=(e,t)=>this.create({...t,type:"success",message:e});this.info=(e,t)=>this.create({...t,type:"info",message:e});this.warning=(e,t)=>this.create({...t,type:"warning",message:e});this.loading=(e,t)=>this.create({...t,type:"loading",message:e});this.promise=(e,t)=>{if(!t)return;let a;t.loading!==void 0&&(a=this.create({...t,promise:e,type:"loading",message:t.loading,description:typeof t.description!="function"?t.description:void 0}));let u=e instanceof Promise?e:e(),f=a!==void 0,w,S=u.then(async i=>{if(w=["resolve",i],React__default.isValidElement(i))f=false,this.create({id:a,type:"default",message:i});else if(ie(i)&&!i.ok){f=false;let T=typeof t.error=="function"?await t.error(`HTTP error! status: ${i.status}`):t.error,F=typeof t.description=="function"?await t.description(`HTTP error! status: ${i.status}`):t.description;this.create({id:a,type:"error",message:T,description:F});}else if(t.success!==void 0){f=false;let T=typeof t.success=="function"?await t.success(i):t.success,F=typeof t.description=="function"?await t.description(i):t.description;this.create({id:a,type:"success",message:T,description:F});}}).catch(async i=>{if(w=["reject",i],t.error!==void 0){f=false;let D=typeof t.error=="function"?await t.error(i):t.error,T=typeof t.description=="function"?await t.description(i):t.description;this.create({id:a,type:"error",message:D,description:T});}}).finally(()=>{var i;f&&(this.dismiss(a),a=void 0),(i=t.finally)==null||i.call(t);}),g=()=>new Promise((i,D)=>S.then(()=>w[0]==="reject"?D(w[1]):i(w[1])).catch(D));return typeof a!="string"&&typeof a!="number"?{unwrap:g}:Object.assign(a,{unwrap:g})};this.custom=(e,t)=>{let a=(t==null?void 0:t.id)||bt++;return this.create({jsx:e(a),id:a,...t}),a};this.getActiveToasts=()=>this.toasts.filter(e=>!this.dismissedToasts.has(e.id));this.subscribers=[],this.toasts=[],this.dismissedToasts=new Set;}},v=new yt,ne=(n,e)=>{let t=(e==null?void 0:e.id)||bt++;return v.addToast({title:n,...e,id:t}),t},ie=n=>n&&typeof n=="object"&&"ok"in n&&typeof n.ok=="boolean"&&"status"in n&&typeof n.status=="number",le=ne,ce=()=>v.toasts,de=()=>v.getActiveToasts();Object.assign(le,{success:v.success,info:v.info,warning:v.warning,error:v.error,custom:v.custom,message:v.message,promise:v.promise,dismiss:v.dismiss,loading:v.loading},{getHistory:ce,getToasts:de});function wt(n,{insertAt:e}={}){if(typeof document=="undefined")return;let t=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css",e==="top"&&t.firstChild?t.insertBefore(a,t.firstChild):t.appendChild(a),a.styleSheet?a.styleSheet.cssText=n:a.appendChild(document.createTextNode(n));}wt(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);function tt(n){return n.label!==void 0}var pe=3,me="32px",ge="16px",Wt=4e3,he=356,be=14,ye=20,we=200;function M(...n){return n.filter(Boolean).join(" ")}function xe(n){let[e,t]=n.split("-"),a=[];return e&&a.push(e),t&&a.push(t),a}var ve=n=>{var Dt,Pt,Nt,Bt,Ct,kt,It,Mt,Ht,At,Lt;let{invert:e,toast:t,unstyled:a,interacting:u,setHeights:f,visibleToasts:w,heights:S,index:g,toasts:i,expanded:D,removeToast:T,defaultRichColors:F,closeButton:et,style:ut,cancelButtonStyle:ft,actionButtonStyle:l,className:ot="",descriptionClassName:at="",duration:X,position:st,gap:pt,loadingIcon:rt,expandByDefault:B,classNames:s,icons:P,closeButtonAriaLabel:nt="Close toast",pauseWhenPageIsHidden:it}=n,[Y,C]=React__default.useState(null),[lt,J]=React__default.useState(null),[W,H]=React__default.useState(false),[A,mt]=React__default.useState(false),[L,z]=React__default.useState(false),[ct,d]=React__default.useState(false),[h,y]=React__default.useState(false),[R,j]=React__default.useState(0),[p,_]=React__default.useState(0),O=React__default.useRef(t.duration||X||Wt),G=React__default.useRef(null),k=React__default.useRef(null),Vt=g===0,Ut=g+1<=w,N=t.type,V=t.dismissible!==false,Kt=t.className||"",Xt=t.descriptionClassName||"",dt=React__default.useMemo(()=>S.findIndex(r=>r.toastId===t.id)||0,[S,t.id]),Jt=React__default.useMemo(()=>{var r;return (r=t.closeButton)!=null?r:et},[t.closeButton,et]),Tt=React__default.useMemo(()=>t.duration||X||Wt,[t.duration,X]),gt=React__default.useRef(0),U=React__default.useRef(0),St=React__default.useRef(0),K=React__default.useRef(null),[Gt,Qt]=st.split("-"),Rt=React__default.useMemo(()=>S.reduce((r,m,c)=>c>=dt?r:r+m.height,0),[S,dt]),Et=Ft(),qt=t.invert||e,ht=N==="loading";U.current=React__default.useMemo(()=>dt*pt+Rt,[dt,Rt]),React__default.useEffect(()=>{O.current=Tt;},[Tt]),React__default.useEffect(()=>{H(true);},[]),React__default.useEffect(()=>{let r=k.current;if(r){let m=r.getBoundingClientRect().height;return _(m),f(c=>[{toastId:t.id,height:m,position:t.position},...c]),()=>f(c=>c.filter(b=>b.toastId!==t.id))}},[f,t.id]),React__default.useLayoutEffect(()=>{if(!W)return;let r=k.current,m=r.style.height;r.style.height="auto";let c=r.getBoundingClientRect().height;r.style.height=m,_(c),f(b=>b.find(x=>x.toastId===t.id)?b.map(x=>x.toastId===t.id?{...x,height:c}:x):[{toastId:t.id,height:c,position:t.position},...b]);},[W,t.title,t.description,f,t.id]);let $=React__default.useCallback(()=>{mt(true),j(U.current),f(r=>r.filter(m=>m.toastId!==t.id)),setTimeout(()=>{T(t);},we);},[t,T,f,U]);React__default.useEffect(()=>{if(t.promise&&N==="loading"||t.duration===1/0||t.type==="loading")return;let r;return D||u||it&&Et?(()=>{if(St.current<gt.current){let b=new Date().getTime()-gt.current;O.current=O.current-b;}St.current=new Date().getTime();})():(()=>{O.current!==1/0&&(gt.current=new Date().getTime(),r=setTimeout(()=>{var b;(b=t.onAutoClose)==null||b.call(t,t),$();},O.current));})(),()=>clearTimeout(r)},[D,u,t,N,it,Et,$]),React__default.useEffect(()=>{t.delete&&$();},[$,t.delete]);function Zt(){var r,m,c;return P!=null&&P.loading?React__default.createElement("div",{className:M(s==null?void 0:s.loader,(r=t==null?void 0:t.classNames)==null?void 0:r.loader,"sonner-loader"),"data-visible":N==="loading"},P.loading):rt?React__default.createElement("div",{className:M(s==null?void 0:s.loader,(m=t==null?void 0:t.classNames)==null?void 0:m.loader,"sonner-loader"),"data-visible":N==="loading"},rt):React__default.createElement(Yt,{className:M(s==null?void 0:s.loader,(c=t==null?void 0:t.classNames)==null?void 0:c.loader),visible:N==="loading"})}return React__default.createElement("li",{tabIndex:0,ref:k,className:M(ot,Kt,s==null?void 0:s.toast,(Dt=t==null?void 0:t.classNames)==null?void 0:Dt.toast,s==null?void 0:s.default,s==null?void 0:s[N],(Pt=t==null?void 0:t.classNames)==null?void 0:Pt[N]),"data-sonner-toast":"","data-rich-colors":(Nt=t.richColors)!=null?Nt:F,"data-styled":!(t.jsx||t.unstyled||a),"data-mounted":W,"data-promise":!!t.promise,"data-swiped":h,"data-removed":A,"data-visible":Ut,"data-y-position":Gt,"data-x-position":Qt,"data-index":g,"data-front":Vt,"data-swiping":L,"data-dismissible":V,"data-type":N,"data-invert":qt,"data-swipe-out":ct,"data-swipe-direction":lt,"data-expanded":!!(D||B&&W),style:{"--index":g,"--toasts-before":g,"--z-index":i.length-g,"--offset":`${A?R:U.current}px`,"--initial-height":B?"auto":`${p}px`,...ut,...t.style},onDragEnd:()=>{z(false),C(null),K.current=null;},onPointerDown:r=>{ht||!V||(G.current=new Date,j(U.current),r.target.setPointerCapture(r.pointerId),r.target.tagName!=="BUTTON"&&(z(true),K.current={x:r.clientX,y:r.clientY}));},onPointerUp:()=>{var x,Q,q,Z;if(ct||!V)return;K.current=null;let r=Number(((x=k.current)==null?void 0:x.style.getPropertyValue("--swipe-amount-x").replace("px",""))||0),m=Number(((Q=k.current)==null?void 0:Q.style.getPropertyValue("--swipe-amount-y").replace("px",""))||0),c=new Date().getTime()-((q=G.current)==null?void 0:q.getTime()),b=Y==="x"?r:m,I=Math.abs(b)/c;if(Math.abs(b)>=ye||I>.11){j(U.current),(Z=t.onDismiss)==null||Z.call(t,t),J(Y==="x"?r>0?"right":"left":m>0?"down":"up"),$(),d(true),y(false);return}z(false),C(null);},onPointerMove:r=>{var Q,q,Z,zt;if(!K.current||!V||((Q=window.getSelection())==null?void 0:Q.toString().length)>0)return;let c=r.clientY-K.current.y,b=r.clientX-K.current.x,I=(q=n.swipeDirections)!=null?q:xe(st);!Y&&(Math.abs(b)>1||Math.abs(c)>1)&&C(Math.abs(b)>Math.abs(c)?"x":"y");let x={x:0,y:0};Y==="y"?(I.includes("top")||I.includes("bottom"))&&(I.includes("top")&&c<0||I.includes("bottom")&&c>0)&&(x.y=c):Y==="x"&&(I.includes("left")||I.includes("right"))&&(I.includes("left")&&b<0||I.includes("right")&&b>0)&&(x.x=b),(Math.abs(x.x)>0||Math.abs(x.y)>0)&&y(true),(Z=k.current)==null||Z.style.setProperty("--swipe-amount-x",`${x.x}px`),(zt=k.current)==null||zt.style.setProperty("--swipe-amount-y",`${x.y}px`);}},Jt&&!t.jsx?React__default.createElement("button",{"aria-label":nt,"data-disabled":ht,"data-close-button":true,onClick:ht||!V?()=>{}:()=>{var r;$(),(r=t.onDismiss)==null||r.call(t,t);},className:M(s==null?void 0:s.closeButton,(Bt=t==null?void 0:t.classNames)==null?void 0:Bt.closeButton)},(Ct=P==null?void 0:P.close)!=null?Ct:Ot):null,t.jsx||isValidElement(t.title)?t.jsx?t.jsx:typeof t.title=="function"?t.title():t.title:React__default.createElement(React__default.Fragment,null,N||t.icon||t.promise?React__default.createElement("div",{"data-icon":"",className:M(s==null?void 0:s.icon,(kt=t==null?void 0:t.classNames)==null?void 0:kt.icon)},t.promise||t.type==="loading"&&!t.icon?t.icon||Zt():null,t.type!=="loading"?t.icon||(P==null?void 0:P[N])||jt(N):null):null,React__default.createElement("div",{"data-content":"",className:M(s==null?void 0:s.content,(It=t==null?void 0:t.classNames)==null?void 0:It.content)},React__default.createElement("div",{"data-title":"",className:M(s==null?void 0:s.title,(Mt=t==null?void 0:t.classNames)==null?void 0:Mt.title)},typeof t.title=="function"?t.title():t.title),t.description?React__default.createElement("div",{"data-description":"",className:M(at,Xt,s==null?void 0:s.description,(Ht=t==null?void 0:t.classNames)==null?void 0:Ht.description)},typeof t.description=="function"?t.description():t.description):null),isValidElement(t.cancel)?t.cancel:t.cancel&&tt(t.cancel)?React__default.createElement("button",{"data-button":true,"data-cancel":true,style:t.cancelButtonStyle||ft,onClick:r=>{var m,c;tt(t.cancel)&&V&&((c=(m=t.cancel).onClick)==null||c.call(m,r),$());},className:M(s==null?void 0:s.cancelButton,(At=t==null?void 0:t.classNames)==null?void 0:At.cancelButton)},t.cancel.label):null,isValidElement(t.action)?t.action:t.action&&tt(t.action)?React__default.createElement("button",{"data-button":true,"data-action":true,style:t.actionButtonStyle||l,onClick:r=>{var m,c;tt(t.action)&&((c=(m=t.action).onClick)==null||c.call(m,r),!r.defaultPrevented&&$());},className:M(s==null?void 0:s.actionButton,(Lt=t==null?void 0:t.classNames)==null?void 0:Lt.actionButton)},t.action.label):null))};function _t(){if(typeof window=="undefined"||typeof document=="undefined")return "ltr";let n=document.documentElement.getAttribute("dir");return n==="auto"||!n?window.getComputedStyle(document.documentElement).direction:n}function Te(n,e){let t={};return [n,e].forEach((a,u)=>{let f=u===1,w=f?"--mobile-offset":"--offset",S=f?ge:me;function g(i){["top","right","bottom","left"].forEach(D=>{t[`${w}-${D}`]=typeof i=="number"?`${i}px`:i;});}typeof a=="number"||typeof a=="string"?g(a):typeof a=="object"?["top","right","bottom","left"].forEach(i=>{a[i]===void 0?t[`${w}-${i}`]=S:t[`${w}-${i}`]=typeof a[i]=="number"?`${a[i]}px`:a[i];}):g(S);}),t}forwardRef(function(e,t){let{invert:a,position:u="bottom-right",hotkey:f=["altKey","KeyT"],expand:w,closeButton:S,className:g,offset:i,mobileOffset:D,theme:T="light",richColors:F,duration:et,style:ut,visibleToasts:ft=pe,toastOptions:l,dir:ot=_t(),gap:at=be,loadingIcon:X,icons:st,containerAriaLabel:pt="Notifications",pauseWhenPageIsHidden:rt}=e,[B,s]=React__default.useState([]),P=React__default.useMemo(()=>Array.from(new Set([u].concat(B.filter(d=>d.position).map(d=>d.position)))),[B,u]),[nt,it]=React__default.useState([]),[Y,C]=React__default.useState(false),[lt,J]=React__default.useState(false),[W,H]=React__default.useState(T!=="system"?T:typeof window!="undefined"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),A=React__default.useRef(null),mt=f.join("+").replace(/Key/g,"").replace(/Digit/g,""),L=React__default.useRef(null),z=React__default.useRef(false),ct=React__default.useCallback(d=>{s(h=>{var y;return (y=h.find(R=>R.id===d.id))!=null&&y.delete||v.dismiss(d.id),h.filter(({id:R})=>R!==d.id)});},[]);return React__default.useEffect(()=>v.subscribe(d=>{if(d.dismiss){s(h=>h.map(y=>y.id===d.id?{...y,delete:true}:y));return}setTimeout(()=>{vt.flushSync(()=>{s(h=>{let y=h.findIndex(R=>R.id===d.id);return y!==-1?[...h.slice(0,y),{...h[y],...d},...h.slice(y+1)]:[d,...h]});});});}),[]),React__default.useEffect(()=>{if(T!=="system"){H(T);return}if(T==="system"&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?H("dark"):H("light")),typeof window=="undefined")return;let d=window.matchMedia("(prefers-color-scheme: dark)");try{d.addEventListener("change",({matches:h})=>{H(h?"dark":"light");});}catch(h){d.addListener(({matches:y})=>{try{H(y?"dark":"light");}catch(R){console.error(R);}});}},[T]),React__default.useEffect(()=>{B.length<=1&&C(false);},[B]),React__default.useEffect(()=>{let d=h=>{var R,j;f.every(p=>h[p]||h.code===p)&&(C(true),(R=A.current)==null||R.focus()),h.code==="Escape"&&(document.activeElement===A.current||(j=A.current)!=null&&j.contains(document.activeElement))&&C(false);};return document.addEventListener("keydown",d),()=>document.removeEventListener("keydown",d)},[f]),React__default.useEffect(()=>{if(A.current)return ()=>{L.current&&(L.current.focus({preventScroll:true}),L.current=null,z.current=false);}},[A.current]),React__default.createElement("section",{ref:t,"aria-label":`${pt} ${mt}`,tabIndex:-1,"aria-live":"polite","aria-relevant":"additions text","aria-atomic":"false",suppressHydrationWarning:true},P.map((d,h)=>{var j;let[y,R]=d.split("-");return B.length?React__default.createElement("ol",{key:d,dir:ot==="auto"?_t():ot,tabIndex:-1,ref:A,className:g,"data-sonner-toaster":true,"data-theme":W,"data-y-position":y,"data-lifted":Y&&B.length>1&&!w,"data-x-position":R,style:{"--front-toast-height":`${((j=nt[0])==null?void 0:j.height)||0}px`,"--width":`${he}px`,"--gap":`${at}px`,...ut,...Te(i,D)},onBlur:p=>{z.current&&!p.currentTarget.contains(p.relatedTarget)&&(z.current=false,L.current&&(L.current.focus({preventScroll:true}),L.current=null));},onFocus:p=>{p.target instanceof HTMLElement&&p.target.dataset.dismissible==="false"||z.current||(z.current=true,L.current=p.relatedTarget);},onMouseEnter:()=>C(true),onMouseMove:()=>C(true),onMouseLeave:()=>{lt||C(false);},onDragEnd:()=>C(false),onPointerDown:p=>{p.target instanceof HTMLElement&&p.target.dataset.dismissible==="false"||J(true);},onPointerUp:()=>J(false)},B.filter(p=>!p.position&&h===0||p.position===d).map((p,_)=>{var O,G;return React__default.createElement(ve,{key:p.id,icons:st,index:_,toast:p,defaultRichColors:F,duration:(O=l==null?void 0:l.duration)!=null?O:et,className:l==null?void 0:l.className,descriptionClassName:l==null?void 0:l.descriptionClassName,invert:a,visibleToasts:ft,closeButton:(G=l==null?void 0:l.closeButton)!=null?G:S,interacting:lt,position:d,style:l==null?void 0:l.style,unstyled:l==null?void 0:l.unstyled,classNames:l==null?void 0:l.classNames,cancelButtonStyle:l==null?void 0:l.cancelButtonStyle,actionButtonStyle:l==null?void 0:l.actionButtonStyle,removeToast:ct,toasts:B.filter(k=>k.position==p.position),heights:nt.filter(k=>k.position==p.position),setHeights:it,expandByDefault:w,gap:at,loadingIcon:X,expanded:Y,pauseWhenPageIsHidden:rt,swipeDirections:e.swipeDirections})})):null}))});

      const getEnvironmentLabel = () => {
        const hostname = window.location.hostname;
        if (hostname === "localhost" || hostname.includes("dev")) return "Development";
        if (hostname.includes("staging")) return "Staging";
        return "Production";
      };

      function CreditOpsLoginPage() {
        const [status, setStatus] = useState("idle");
        const [error, setError] = useState(null);
        const isLoading = status === "loading";
        const handleGoogleLogin = () => {
          try {
            setStatus("loading");
            setError(null);
            window.huspy.auth.login({ idpHint: "google", prompt: "login" });
          } catch (err) {
            setStatus("error");
            setError(err instanceof Error ? err.message : "Login failed. Please try again.");
          }
        };
        return /* @__PURE__ */ React.createElement("div", { className: "min-h-screen bg-white flex items-center justify-center p-4" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-xs" }, /* @__PURE__ */ React.createElement(n, { className: "bg-black border-0 shadow-xl" }, /* @__PURE__ */ React.createElement(s, { className: "text-center pb-6" }, /* @__PURE__ */ React.createElement(c, { className: "text-4xl font-bold text-white" }, "Huspy", /* @__PURE__ */ React.createElement("span", { className: "text-sm relative -top-2.25" }, "™"), /* @__PURE__ */ React.createElement("br", null), "Credit Ops")), /* @__PURE__ */ React.createElement(u, { className: "space-y-6" }, /* @__PURE__ */ React.createElement("div", { className: "flex justify-center" }, /* @__PURE__ */ React.createElement(
          m,
          {
            onClick: handleGoogleLogin,
            disabled: isLoading,
            className: n$1(
              "h-12 bg-white text-gray-900 hover:bg-gray-100 flex items-center justify-center gap-3 font-medium text-base border border-gray-200 shadow-sm px-8 cursor-pointer w-48 rounded-md"
            )
          },
          /* @__PURE__ */ React.createElement(h, { className: "h-5 w-5" }),
          isLoading ? "Logging in..." : "Log in with Google"
        )), error && /* @__PURE__ */ React.createElement("div", { className: "p-3 bg-red-900/20 border border-red-700 rounded-md" }, /* @__PURE__ */ React.createElement("p", { className: "text-red-300 text-sm" }, error)), /* @__PURE__ */ React.createElement(d, { className: "bg-gray-700" }), /* @__PURE__ */ React.createElement("div", { className: "text-center" }, /* @__PURE__ */ React.createElement("p", { className: "text-gray-400 text-sm" }, "You are logging into:", " ", /* @__PURE__ */ React.createElement("p", { className: "text-amber-300" }, getEnvironmentLabel(), " environment")))))));
      }

      const entity = exports("default", {
        Component: CreditOpsLoginPage
      });

    })
  };
}));
//# sourceMappingURL=fe-page-credit-ops-login.js.map
