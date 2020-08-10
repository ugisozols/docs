const tailwindSyntax = ({addBase, theme}) => {
  const fallback = {
    color: {
      background: '#292929',
      border: '#e1e1e8',
      base: '#fff',
      debug: 'red',
      fade: '#fff',
      comment: '#6f705e',
      keyword: '#f12770',
      value: '#76d9e6',
      string: '#babef1',
      name: '#e6d06c',
      number: '#fff',
      variable: '#fff',
      selector: '#a6e22d',
      punctuation: '#fff',
    },
    tabSize: 2,
    hyphens: 'none',
    blockPadding: '2px',
    inlinePadding: '2px 6px',
    border: {
      width: '1px',
      style: 'solid',
      radius: '5px',
    },
    weight: {
      important: 'bold',
      normal: 'normal',
    },
    boxShadow: '1px 1px 0.3em -0.1em #000 inset',
    textShadow: '0 1px 0 #000',
    highlight: {
      lineHeight: 1.4,
      marginTop: '0.85rem',
      marginBottom: '0.85rem',
    },
    namespace: {
      opacity: 0.7,
    },
  }

  addBase({
    '#app div[class^="language-"]': {
      whiteSpace: 'pre',
      wordBreak: 'break-all',
      wordWrap: 'break-word',
      borderRadius: theme(`syntax.border.radius`, fallback.border.radius),
      borderWidth: theme(
        `syntax.border.width`,
        theme(`syntax.border.width`, fallback.border.width),
      ),
      borderStyle: theme(
        `syntax.border.style`,
        theme(`syntax.border.style`, fallback.border.style),
      ),
      borderColor: theme(
        `syntax.border.color`,
        theme(`syntax.border.color`, fallback.border.color),
      ),
      boxShadow: theme(
        `syntax.boxShadow`,
        theme(`syntax.boxShadow`, fallback.boxShadow),
      ),
      tabSize: theme(`syntax.tabSize`, theme(`syntax.tabSize`, fallback.tabSize)),
      hyphens: theme(`syntax.hyphens`, theme(`syntax.hyphens`, fallback.hyphens)),
      color: theme(
        `syntax.color.base`,
        theme(`syntax.color.base`, fallback.color.base),
      ),
      textShadow: theme(
        `syntax.textShadow`,
        theme(`syntax.textShadow`, fallback.textShadow),
      ),
      background: theme(
        `syntax.color.background`,
        theme(`syntax.color.background`, fallback.color.background),
      ),
      '.highlight-lines': {
        lineHeight: theme(
          `syntax.lineHeight`,
          theme(`syntax.lineHeight`, fallback.lineHeight),
        ),
        marginTop: theme(
          `syntax.marginTop`,
          theme(`syntax.marginTop`, fallback.marginTop),
        ),
        marginBottom: theme(
          `syntax.marginBottom`,
          theme(`syntax.marginBottom`, fallback.marginBottom),
        ),
      },
      code: {
        color: theme(
          `syntax.color.base`,
          theme(`syntax.color.base`, fallback.color.base),
        ),
        '.namespace': {
          opacity: theme(
            `syntax.namespace`,
            theme(`syntax.namespace`, fallback.namespace),
          ),
        },
        '.token.comment': {
          color: theme(
            `syntax.color.comment`,
            theme(`syntax.color.comment`, fallback.color.comment),
          ),
        },
        '.token.prolog': {
          color: theme(
            `syntax.color.comment`,
            theme(`syntax.color.comment`, fallback.color.comment),
          ),
        },
        '.token.doctype': {
          color: theme(
            `syntax.color.comment`,
            theme(`syntax.color.comment`, fallback.color.comment),
          ),
        },
        '.token.cdata': {
          color: theme(
            `syntax.color.comment`,
            theme(`syntax.color.comment`, fallback.color.comment),
          ),
        },
        '.token.null': {
          color: theme(
            `syntax.color.number`,
            theme(`syntax.color.number`, fallback.color.number),
          ),
        },
        '.token.operator': {
          color: theme(
            `syntax.color.number`,
            theme(`syntax.color.number`, fallback.color.number),
          ),
        },
        '.token.boolean': {
          color: theme(
            `syntax.color.number`,
            theme(`syntax.color.number`, fallback.color.number),
          ),
        },
        '.token.number': {
          color: theme(
            `syntax.color.number`,
            theme(`syntax.color.number`, fallback.color.number),
          ),
        },
        '.token.attr-name': {
          color: theme(
            `syntax.color.string`,
            theme(`syntax.color.string`, fallback.color.string),
          ),
        },
        '.token.string': {
          color: theme(
            `syntax.color.string`,
            theme(`syntax.color.string`, fallback.color.string),
          ),
        },
        '.token.entity': {
          color: theme(
            `syntax.color.string`,
            theme(`syntax.color.string`, fallback.color.string),
          ),
        },
        '.token.url': {
          color: theme(
            `syntax.color.string`,
            theme(`syntax.color.string`, fallback.color.string),
          ),
        },
        '.token.style &.string': {
          color: theme(
            `syntax.color.string`,
            theme(`syntax.color.string`, fallback.color.string),
          ),
        },
        '.token.selector': {
          color: theme(
            `syntax.color.selector`,
            theme(`syntax.color.selector`, fallback.color.selector),
          ),
        },
        '.token.atrule': {
          color: theme(
            `syntax.color.keyword`,
            theme(`syntax.color.keyword`, fallback.color.keyword),
          ),
        },
        '.token.attr-value': {
          color: theme(
            `syntax.color.keyword`,
            theme(`syntax.color.keyword`, fallback.color.keyword),
          ),
        },
        '.token.keyword': {
          color: theme(
            `syntax.color.keyword`,
            theme(`syntax.color.keyword`, fallback.color.keyword),
          ),
        },
        '.token.directive': {
          color: theme(
            `syntax.color.keyword`,
            theme(`syntax.color.keyword`, fallback.color.keyword),
          ),
        },
        '.token.control': {
          color: theme(
            `syntax.color.keyword`,
            theme(`syntax.color.keyword`, fallback.color.keyword),
          ),
        },
        '.token.important': {
          color: theme(
            `syntax.color.keyword`,
            theme(`syntax.color.keyword`, fallback.color.keyword),
          ),
          fontWeight: theme(
            `syntax.weight.important`,
            theme(`syntax.weight.important`, fallback.weight.important),
          ),
        },
        '.token.unit': {
          color: theme(
            `syntax.color.keyword`,
            theme(`syntax.color.keyword`, fallback.color.keyword),
          ),
        },
        '.token.function': {
          color: theme(
            `syntax.color.keyword`,
            theme(`syntax.color.keyword`, fallback.color.keyword),
          ),
        },
        '.token.regex': {
          color: theme(
            `syntax.color.value`,
            theme(`syntax.color.value`, fallback.color.value),
          ),
        },
        '.token.statement': {
          color: theme(
            `syntax.color.value`,
            theme(`syntax.color.value`, fallback.color.value),
          ),
          fontWeight: theme(
            `syntax.weight.important`,
            theme(`syntax.weight.important`, fallback.weight.important),
          ),
        },
        '.token.placeholder': {
          color: theme(
            `syntax.color.variable`,
            theme(`syntax.color.variable`, fallback.color.variable),
          ),
        },
        '.token.variable': {
          color: theme(
            `syntax.color.variable`,
            theme(`syntax.color.variable`, fallback.color.variable),
          ),
        },
        '.token.property': {
          fontStyle: 'italic',
        },
        '.token.tag': {
          fontStyle: 'italic',
        },
        '.token.punctuation': {
          color: theme(
            `syntax.color.punctuation`,
            theme(`syntax.color.punctuation`, fallback.color.punctuation),
          ),
        },
        '.token.entity': {
          cursor: 'help',
        },
        '.token.debug': {
          color: theme(
            `syntax.color.debug`,
            theme(`syntax.color.debug`, fallback.color.debug),
          ),
        },
      },
    },
  })
}

module.exports = tailwindSyntax
