# How to use the plugin

Include these two tags inside your html `<head/>` tag

```html
<script type="application/javascript" defer src="https://cdn.jsdelivr.net/gh/TheEhsanSarshar/hyphen-widget@0.1.4/doc/hyphen-widget.js"/>
<link href="https://cdn.jsdelivr.net/gh/TheEhsanSarshar/hyphen-widget@0.1.4/doc/main.css" rel="stylesheet" />
```
Include this tag inside your html `<body/>` tag
```html
<div id="hyphen-widget-app"/>
```

 ### Here is a demo
 https://stackblitz.com/edit/vitejs-vite-lg2vsg?file=index.html

to popup the plugin you can call `window.toggleHyphenWidgetVisibility()` funcation from inside your app.

to customize the colors and fonts of the plugin
you can override these variables inside your css file
```css
#hyphen-widget-app {
  --hyphen-default: 97, 92, 205;
  --hyphen-dark: 63, 60, 126;
  --hyphen-mid: 70, 68, 112;
  --hyphen-darker: 53, 51, 88;
  --font-regular: url(/assets/fonts/Inter-Regular.ttf);
  --font-medium: url(/assets/fonts/Inter-Regular.ttf/Inter-Medium.ttf);
  --font-bold: url(/assets/fonts/Inter-Regular.ttf/Inter-Bold.ttf);
  --font-semibold: url(/assets/fonts/Inter-Regular.ttf/Inter-SemiBold.ttf);
}
```
Note: please make sure to provide colors as `rgb`. and the syntax of rgb should not inclulde `rgb()` function
```css
  --hyphen-default: rgb(97, 92, 205); // ❌
  --hyphen-default: 97, 92, 205; // ✅
```


## Available Scripts

In the project directory, you can run:

## yarn run start
start the project for local testing

## yarn run build:widget:prod
Build the widget and copy the files to the doc directory
