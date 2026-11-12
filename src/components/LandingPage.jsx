import { useState, useEffect } from 'react'
import { Box, Button } from '@mui/material'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'

const adityaLogo = '/Aditya University White Logo.png'
const aiuLogo = '/AIU_Logo.webp'
const landscapeBg = '/Lanscape_2.webp'
const portraitBg = '/Potrait_1.webp'

function LandingPage({
  targetUrl = import.meta.env.VITE_CHESS_MEN || import.meta.env.CHESS_MEN,
}) {
  const [isExiting, setIsExiting] = useState(false)

  const handleExploreClick = (e) => {
    e.preventDefault()
    setIsExiting(true)
    setTimeout(() => {
      window.location.href = targetUrl
    }, 550)
  }

  useEffect(() => {
    // Reset slide-up animation if navigating back via browser history
    const handlePageShow = () => {
      setIsExiting(false)
    }

    window.addEventListener('pageshow', handlePageShow)
    return () => {
      window.removeEventListener('pageshow', handlePageShow)
    }
  }, [])

  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundImage: `url("${landscapeBg}")`,
        '@media (orientation: portrait)': {
          backgroundImage: `url("${portraitBg}")`,
        },
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#030712',
        transition: 'transform 0.55s cubic-bezier(0.7, 0, 0.3, 1), opacity 0.45s ease',
        willChange: 'transform',
        transform: isExiting ? 'translateY(-100vh)' : 'translateY(0)',
        opacity: isExiting ? 0.85 : 1,
        overflow: 'hidden',
      }}
    >
      {/* Header & Logos */}
      <Box
        component="header"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          padding: {
            xs: 'clamp(18px, 4vw, 28px) clamp(16px, 4vw, 24px) 10px',
            md: 'clamp(25px, 4vw, 45px) 20px 15px',
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: { xs: 'space-between', md: 'center' },
            width: { xs: '100%', md: 'auto' },
            gap: { xs: '12px', md: 'clamp(24px, 3.5vw, 42px)' },
          }}
        >
          <Box
            component="img"
            src={adityaLogo}
            alt="Aditya University Logo"
            sx={{
              height: {
                xs: 'clamp(60px, 15vw, 85px)',
                md: 'clamp(70px, 8.5vw, 115px)',
              },
              width: 'auto',
              objectFit: 'contain',
              filter: 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.5))',
            }}
          />

          <Box
            sx={{
              display: { xs: 'none', md: 'block' },
              width: '2px',
              height: 'clamp(65px, 8vw, 95px)',
              backgroundColor: 'rgba(255, 255, 255, 0.65)',
              borderRadius: '1px',
            }}
          />

          <Box
            component="img"
            src={aiuLogo}
            alt="AIU Logo"
            sx={{
              height: {
                xs: 'clamp(72px, 18vw, 105px)',
                md: 'clamp(80px, 9.5vw, 130px)',
              },
              width: 'auto',
              objectFit: 'contain',
              filter: 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.5))',
            }}
          />
        </Box>
      </Box>

      {/* Main Content Area */}
      <Box component="main" sx={{ flex: 1 }} />

      {/* Bottom CTA Button Section */}
      <Box
        component="footer"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          padding: {
            xs: '15px 15px 35px',
            md: '20px 20px clamp(35px, 6vh, 65px)',
          },
        }}
      >
        <Button
          component="a"
          href={targetUrl}
          onClick={handleExploreClick}
          variant="outlined"
          disableRipple={false}
          endIcon={
            <ArrowRightIcon
              className="btn-arrow"
              sx={{
                fontSize: '1.45rem !important',
                transition: 'transform 0.25s ease',
                display: 'flex',
                alignItems: 'center',
                ml: 0.5,
              }}
            />
          }
          sx={{
            position: 'relative',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: { xs: '10px', md: '12px' },
            padding: { xs: '12px 26px', md: '14px 34px' },
            background: '#0b0e14',
            color: '#ffffff',
            fontSize: { xs: '0.95rem', md: 'clamp(0.95rem, 1.2vw, 1.1rem)' },
            fontWeight: 500,
            textTransform: 'none',
            fontFamily: 'inherit',
            letterSpacing: '0.3px',
            borderRadius: '9999px',
            border: '1.5px solid #d49f57',
            boxShadow:
              '0 0 20px rgba(212, 159, 87, 0.4), 0 8px 25px rgba(0, 0, 0, 0.6)',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            userSelect: 'none',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '115%',
              height: '140%',
              background:
                'radial-gradient(ellipse at center, rgba(212, 159, 87, 0.4) 0%, rgba(212, 159, 87, 0) 70%)',
              borderRadius: '9999px',
              zIndex: -1,
              filter: 'blur(10px)',
              pointerEvents: 'none',
              transition: 'all 0.3s ease',
            },
            '&:hover': {
              background: '#0b0e14',
              transform: 'translateY(-2px)',
              borderColor: '#f0ba75',
              boxShadow:
                '0 0 28px rgba(240, 186, 117, 0.6), 0 12px 30px rgba(0, 0, 0, 0.8)',
              color: '#ffffff',
              '&::before': {
                width: '125%',
                height: '160%',
                background:
                  'radial-gradient(ellipse at center, rgba(240, 186, 117, 0.55) 0%, rgba(240, 186, 117, 0) 70%)',
              },
              '& .btn-arrow': {
                transform: 'translateX(5px)',
              },
            },
            '&:active': {
              transform: 'translateY(0)',
            },
          }}
        >
          Explore The Tournament
        </Button>
      </Box>
    </Box>
  )
}

export default LandingPage

