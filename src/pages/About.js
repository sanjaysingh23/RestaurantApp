import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Typography } from '@mui/material'

const About = () => {
  return (
    <Layout>
        <Box sx={{my:15, textAlign: 'center',padding:4, "& h4":{fontWeight:'bold', my:2}, "& p":{textAlign:"justify"},
      "@media(max-width:600px)":{mt:4}}}>
          <Typography variant='h4'>
            Welcome to my restusent
          </Typography>
          <p>
            loremugfdxddfukhukjfdydyhghjgc hjhgxhgjk ghcxgftubvhgc bnchdtgtukvhfc cfuygjhgxdfdfyhbb  gfxuyjgnvchg 
          </p>
        </Box>
    </Layout>
  )
}

export default About
