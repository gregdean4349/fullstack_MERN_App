import { Box, useMediaQuery } from '@mui/material'
import { useSelector } from 'react-redux'
import Navbar from 'scenes/navbar'
import AdvertWidget from 'scenes/widgits/AdvertWidget'
import FriendListWidget from 'scenes/widgits/FriendListWidget'
import MyPostWidget from 'scenes/widgits/MyPostWidget'
import PostsWidget from 'scenes/widgits/PostsWidget'
import UserWidget from 'scenes/widgits/UserWidget'

const HomePage = () => {
  const isNonMobileScreens = useMediaQuery('(min-width: 1000px)')
  const { _id, picturePath } = useSelector((state) => state.user)

  return (
    <Box>
      <Box
        sx={{
          position: 'sticky',
          top: 0,
          zIndex: 50,
        }}
      >
        <Navbar />
      </Box>

      <Box
        width='100%'
        padding='2rem 6%'
        display={isNonMobileScreens ? 'flex' : 'block'}
        gap='0.5rem'
        justifyContent='space-between'
      >
        <Box flexBasis={isNonMobileScreens ? '26%' : undefined}>
          <UserWidget userId={_id} picturePath={picturePath} />
        </Box>
        <Box
          flexBasis={isNonMobileScreens ? '42%' : undefined}
          mt={isNonMobileScreens ? undefined : '2rem'}
        >
          <MyPostWidget picturePath={picturePath} />
          <PostsWidget userId={_id} />
        </Box>
        {isNonMobileScreens && (
          <Box flexBasis='26%'>
            <AdvertWidget />
            <Box m='2rem 0' />
            <FriendListWidget userId={_id} />
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default HomePage
