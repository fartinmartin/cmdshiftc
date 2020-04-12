import prism from "@theme-ui/prism/presets/theme-ui"
import "../css/rc-collapse.css"
require("typeface-open-sans")

export default {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: "inherit",
    monospace: "Menlo, monospace",
    adobe: "'Open Sans', sans-serif",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  letterSpacings: {
    body: "normal",
    caps: "0.2em",
  },
  colors: {
    text: "#000",
    background: "#fff",
    primary: "#07c",
    secondary: "#30c",
    muted: "#f6f6f6",
    modes: {
      dark: {
        text: "#fff",
        background: "#000",
        primary: "#0cf",
      },
    },
  },
  sizes: {
    container: 1280,
  },
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
      fontSize: 2,
      "& kbd": {
        variant: "kbd.primary",
      },
    },
    h1: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 5,
    },
    h2: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 4,
    },
    h3: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 3,
    },
    h4: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 2,
    },
    h5: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 1,
    },
    h6: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 0,
    },
    p: {
      color: "text",
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
    },
    a: {
      color: "primary",
    },
    code: {
      ...prism,
    },
    table: {
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: 0,
    },
    th: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    td: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    img: {
      maxWidth: "100%",
    },
  },
  kbd: {
    primary: {
      fontFamily: "body",
      display: "inline-block",
      px: 2,
      py: 1,
      // verticalAlign: 1,
      mx: 1,
      fontSize: 0,
      color: "#000",
      bg: "muted",
      borderRadius: `.125em`,
      boxShadow: `inset 0.25px 0.25px 0 0.25px hsl(0, 0%, 100%),
        0 0 0 1px hsl(0, 0%, 85%), 1px 1px 0 1px hsl(0, 0%, 98%);`,
    },
  },
  breakpoints: ["40em", "56em", "64em"],
  useColorSchemeMediaQuery: true,
}
