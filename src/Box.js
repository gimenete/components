import {LAYOUT, COMMON} from './constants'
import styled from 'styled-components'
import theme from './theme'

const Box = styled.div`
  ${LAYOUT} ${COMMON};
`

Box.defaultProps = {
  theme
}

Box.propTypes = {
  ...LAYOUT.propTypes,
  ...COMMON.propTypes
}

export default Box
