import { useSpring, animated } from "react-spring"

export function ModernLogo() {
  const logoAnimation = useSpring({
    from: { scale: 0.5, opacity: 0 },
    to: { scale: 1, opacity: 1 },
    config: { duration: 500 },
  })

  const circleAnimation = useSpring({
    from: { strokeDashoffset: 345 },
    to: { strokeDashoffset: 0 },
    config: { duration: 1000 },
  })

  const triangleAnimation = useSpring({
    from: { strokeDashoffset: 240 },
    to: { strokeDashoffset: 0 },
    config: { duration: 1000, delay: 500 },
  })

  const lineAnimation = useSpring({
    from: { strokeDashoffset: 24 },
    to: { strokeDashoffset: 0 },
    config: { duration: 500, delay: 1000 },
  })

  return (
    <animated.svg
      width="120"
      height="120"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={logoAnimation}
    >
      <animated.circle
        cx="60"
        cy="60"
        r="55"
        stroke="url(#gradient)"
        strokeWidth="10"
        strokeDasharray="345"
        style={circleAnimation}
      />
      <animated.path
        d="M40 80L60 40L80 80"
        stroke="url(#gradient)"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="240"
        style={triangleAnimation}
      />
      <animated.path
        d="M48 64H72"
        stroke="url(#gradient)"
        strokeWidth="8"
        strokeLinecap="round"
        strokeDasharray="24"
        style={lineAnimation}
      />
      <defs>
        <linearGradient id="gradient" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4A90B9" />
          <stop offset="1" stopColor="#1E3A8A" />
        </linearGradient>
      </defs>
    </animated.svg>
  )
}

