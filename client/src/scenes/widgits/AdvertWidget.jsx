import { Typography, useTheme } from '@mui/material'
import { fontSize } from '@mui/system'
import FlexBetween from 'components/FlexBetween'
import WidgetWrapper from 'components/WidgetWrapper'

const AdvertWidget = () => {
  const { palette } = useTheme()
  const dark = palette.neutral.dark
  const main = palette.neutral.main
  const medium = palette.neutral.medium

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant='h5'>
          Sponsored
        </Typography>
        <Typography
          color={medium}
          sx={{
            '&:hover': {
              cursor: 'pointer',
              textDecoration: 'underline',
              color: medium,
            },
          }}
        >
          Create Ad
        </Typography>
      </FlexBetween>
      <img
        src='http://localhost:3001/assets/info4.jpeg'
        alt='advert'
        width='100%'
        height='auto'
        style={{ borderRadius: '0.75rem', margin: '0.75rem 0' }}
      />
      <FlexBetween>
        <Typography color={main} sx={{ fontWeight: 'bold', fontSize: '18px' }}>
          Mika
        </Typography>
        <Typography
          color={main}
          sx={{
            '&:hover': {
              cursor: 'pointer',
              textDecoration: 'underline',
              color: medium,
            },
          }}
        >
          mikacosmetics.com
        </Typography>
      </FlexBetween>
      <Typography color={medium} sx={{ fontWeight: '500', fontSize: '16px' }}>
        Your pathway to stunning beauty
      </Typography>
    </WidgetWrapper>
  )
}

export default AdvertWidget
