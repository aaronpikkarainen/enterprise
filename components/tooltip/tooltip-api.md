<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### Table of Contents

-   [Tooltip](#tooltip)

## Tooltip

Tooltip and Popover Control

**Parameters**

-   `element` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** 
-   `options` **([Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) \| [Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function))** 
    -   `options.content` **([string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) \| [Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function))?** Takes title attribute or feed content. Can be a string or jQuery markup
    -   `options.offset` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** How much room to leave (optional, default `{top:10,left:10}`)
    -   `options.placement` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)**  (optional, default `top|bottom|right|offset`)
    -   `options.trigger` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** supports click and immediate and hover (and maybe in future focus) (optional, default `hover`)
    -   `options.title` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)?** Title for Infor Tips
    -   `options.beforeShow` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)?** Call back for ajax tooltip
    -   `options.popover` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)?** force it to be a popover (no content)
    -   `options.closebutton` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)?** Show X close button next to title in popover
    -   `options.isError` **[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** Add error classes (optional, default `false`)
    -   `options.isErrorColor` **[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** Add error color only not description (optional, default `false`)
    -   `options.tooltipElement` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)?** ID selector for an alternate element to use to contain the tooltip classes
    -   `options.parentElement` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** jQuery-wrapped element that gets passed to the 'place' behavior as the element to place the tooltip against. (optional, default `this.element`)
    -   `options.keepOpen` **[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** Forces the tooltip to stay open in situations where it would normally close. (optional, default `false`)
    -   `options.extraClass` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)?** Extra css class
    -   `options.maxWidth` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)?** Toolip max width