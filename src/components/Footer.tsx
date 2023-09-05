import { Terms } from './Terms'
import { Box } from '@mui/material'
import styled from '@emotion/styled'

type Props = {}

const CustomFooter = styled(Box)`
  padding: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #D3E3DA;
`

export const Footer = (props: Props) => {
  return (
    <CustomFooter><Terms/></CustomFooter>
  )
}