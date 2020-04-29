import isFunction from 'lodash/isFunction'
import { createGlobalStyle, css, DefaultTheme } from 'styled-components'

import { app } from '@/app'

const getSiteStyle = (props: DefaultTheme) => {
  try {
    const siteStyle = app.styled.globalStyle
    return !isFunction(siteStyle) ? siteStyle : siteStyle(props)
  } catch (_) {
    //
  }

  return undefined
}

// 全局样式
const GlobalStyle = createGlobalStyle`
  /** lib 全局样式 */
  .app-root {
    position: relative;
    width: 100%;
    height: 100%;
    opacity: 1;
    transition: 'opacity' 100ms ease-in;
  }

  .glyphicon {
    display: inline-block;
    font: normal normal normal 14px/1 FontAwesome;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &-th:before {
      content: "\f009";
    }
    &-sort:before {
      content: "\f0ec";
      transform: rotate(90deg);
    }
    &-remove:before {
      content: "\f00d";
    }
  }

  .form-control-static {
    min-height: 34px;
    padding-top: 7px;
    padding-bottom: 7px;
    margin-bottom: 0;
  }

  .clickable {
    user-select: none;
    cursor: pointer;
  }

  .lh-1 {
    line-height: 1;
  }

  /** lib 主题相关的全局样式 */
  ${({ theme: { ns, colors } }) => css`
    body > div {
      color: ${colors.text};
    }

    .${ns}Chart {
      min-width: 100px !important;
      min-height: 100px !important;
    }

    .${ns}DateRangePicker {
      align-items: center;
    }
  `}

  /** site 全局样式 */
  ${({ theme }) => getSiteStyle(theme)}
`

export default GlobalStyle