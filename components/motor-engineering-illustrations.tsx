"use client"

import { motion, useReducedMotion } from "framer-motion"

type IllustrationProps = {
  className?: string
}

function gearPath(cx: number, cy: number, rootRadius: number, tipRadius: number, teeth: number) {
  const points: string[] = []
  const steps = teeth * 4
  for (let i = 0; i < steps; i += 1) {
    const angle = (Math.PI * 2 * i) / steps - Math.PI / 2
    const phase = i % 4
    const radius = phase === 1 || phase === 2 ? tipRadius : rootRadius
    const x = cx + Math.cos(angle) * radius
    const y = cy + Math.sin(angle) * radius
    points.push((i === 0 ? "M " : "L ") + x.toFixed(2) + " " + y.toFixed(2))
  }
  return points.join(" ") + " Z"
}

/** Cutaway-inspired piston, connecting rod and crank assembly. */
export function EnginePistonIllustration({ className = "" }: IllustrationProps) {
  const reduceMotion = useReducedMotion()
  return (
    <motion.svg
      viewBox="0 0 620 300"
      className={className}
      role="img"
      aria-label="Animated technical illustration of an internal-combustion engine piston and crank assembly"
      initial={false}
    >
      <defs>
        <filter id="piston-technical-glow" x="-60%" y="-60%" width="220%" height="220%"><feGaussianBlur stdDeviation="4" result="blur"/><feComposite in="SourceGraphic" in2="blur" operator="over"/></filter>
        <linearGradient id="piston-technical-edge" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#f7e7a7" stopOpacity=".75"/><stop offset="48%" stopColor="#8fb4d1" stopOpacity=".18"/><stop offset="100%" stopColor="#d4af37" stopOpacity=".55"/></linearGradient>
        <linearGradient id="piston-metal" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f8fafc" />
          <stop offset="48%" stopColor="#9fb6c9" />
          <stop offset="100%" stopColor="#47627b" />
        </linearGradient>
        <linearGradient id="piston-gold" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#9f7b21" />
          <stop offset="50%" stopColor="#f0d878" />
          <stop offset="100%" stopColor="#c69d32" />
        </linearGradient>
        <pattern id="piston-grid" width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#8da7bd" strokeOpacity=".12" strokeWidth="1" />
        </pattern>
      </defs>

      <rect x="1" y="1" width="618" height="298" rx="20" fill="#061326" stroke="#b9d0e2" strokeOpacity=".18" strokeWidth="1" />
      <rect x="1" y="1" width="618" height="298" rx="20" fill="url(#piston-grid)" />
      <rect x="2" y="2" width="616" height="296" rx="19" fill="none" stroke="url(#piston-technical-edge)" strokeOpacity=".65"/>
      <circle cx="310" cy="156" r="118" fill="none" stroke="#8fb4d1" strokeOpacity=".08" strokeDasharray="2 8"/>
      <circle cx="310" cy="145" r="76" fill="#27739a" fillOpacity=".09" filter="url(#piston-technical-glow)" />
      <path d="M196 82 H424 M196 88 H224 M396 88 H424 M196 244 H424" fill="none" stroke="#9bb8cd" strokeOpacity=".22" strokeDasharray="2 6" />
      <path d="M190 104 V231 M430 104 V231" stroke="#d4af37" strokeOpacity=".18" strokeDasharray="3 8" />
      <path d="M28 42 H592 M28 258 H592" stroke="#a6bfd3" strokeOpacity=".14" strokeDasharray="3 7" />
      <path d="M82 72 H186 M82 78 H142 M434 70 H538 M478 76 H538" stroke="#a6bfd3" strokeOpacity=".25" strokeWidth="1.5" />
      <text x="34" y="30" fill="#e0c56d" fontSize="10" fontFamily="monospace" letterSpacing="2.4">POWERTRAIN / CUTAWAY 01</text>
      <text x="584" y="30" fill="#91a9bd" fontSize="9" textAnchor="end" fontFamily="monospace">04-CYL / STUDY</text>

      <path d="M220 64 H400 L414 91 V230 H206 V91 Z" fill="#193653" stroke="#6f91ad" strokeOpacity=".75" strokeWidth="2" />
      <path d="M236 78 H384 V218 H236 Z" fill="#0b203a" stroke="#8da7bd" strokeOpacity=".28" strokeWidth="1.5" />
      <path d="M247 78 V210 M373 78 V210" stroke="#7190a8" strokeOpacity=".28" strokeWidth="5" />
      <path d="M250 82 H370 V193 H250 Z" fill="#102b49" stroke="#e0c56d" strokeOpacity=".28" strokeWidth="1.5" />
      <path d="M255 88 H365 M255 185 H365" stroke="#eef5fa" strokeOpacity=".22" strokeWidth="1.5" />
      <path d="M258 94 V181 M362 94 V181" stroke="#d4af37" strokeOpacity=".16" strokeDasharray="2 5" />
      <circle cx="228" cy="94" r="3" fill="#b4c9d9" /><circle cx="392" cy="94" r="3" fill="#b4c9d9" />
      <circle cx="228" cy="222" r="3" fill="#b4c9d9" /><circle cx="392" cy="222" r="3" fill="#b4c9d9" />

      <motion.g
        animate={reduceMotion ? undefined : { y: [0, 13, 0] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <rect x="260" y="112" width="100" height="58" rx="8" fill="url(#piston-metal)" stroke="#e8f0f6" strokeOpacity=".72" strokeWidth="2" />
        <path d="M264 121 H356 M264 128 H356 M264 135 H356" stroke="#344f69" strokeWidth="2" />
        <path d="M267 117 H353" stroke="#ffffff" strokeOpacity=".55" strokeWidth="1.5" />
        <path d="M269 143 H351" stroke="#e6eef5" strokeOpacity=".2" strokeWidth="1" />
        <path d="M264 151 H356 M264 160 H356" stroke="#6e879c" strokeOpacity=".8" strokeWidth="2" />
        <circle cx="310" cy="167" r="8" fill="#d4af37" stroke="#fff6d8" strokeWidth="2.5" filter="url(#piston-technical-glow)" />
        <circle cx="310" cy="167" r="3" fill="#0d2344" />
      </motion.g>

      <motion.g
        style={{ transformOrigin: "310px 238px" }}
        animate={reduceMotion ? undefined : { rotate: [0, 360] }}
        transition={{ duration: 7.5, repeat: Infinity, ease: "linear" }}
      >
        <circle cx="310" cy="238" r="34" fill="#102d4b" stroke="#7090a9" strokeWidth="6" />
        <circle cx="310" cy="238" r="29" fill="none" stroke="#dce8f1" strokeOpacity=".16" strokeWidth="1.4" />
        <circle cx="310" cy="238" r="25" fill="none" stroke="#d4af37" strokeOpacity=".9" strokeWidth="3" strokeDasharray="2 6" />
        <circle cx="310" cy="205" r="2.7" fill="#f1d987" /><circle cx="343" cy="238" r="2.7" fill="#f1d987" /><circle cx="310" cy="271" r="2.7" fill="#f1d987" /><circle cx="277" cy="238" r="2.7" fill="#f1d987" />
        <path d="M310 203 V273 M275 238 H345 M285 213 L335 263 M335 213 L285 263" stroke="#9ab1c5" strokeWidth="4" strokeLinecap="round" />
        <circle cx="310" cy="238" r="10" fill="url(#piston-gold)" stroke="#fff6d8" strokeWidth="2.5" filter="url(#piston-technical-glow)" />
        <circle cx="310" cy="238" r="3" fill="#0d2344" />
      </motion.g>

      <motion.g
        animate={reduceMotion ? undefined : { rotate: [-13, 13, -13] }}
        style={{ transformOrigin: "310px 238px" }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <path d="M310 167 L323 183 L337 221 L321 229 L306 189 L296 174 Z" fill="url(#piston-metal)" stroke="#dce8f1" strokeWidth="2" />
        <circle cx="310" cy="167" r="7" fill="#d4af37" stroke="#fff6d8" strokeWidth="2.5" filter="url(#piston-technical-glow)" />
        <circle cx="310" cy="238" r="9" fill="#d4af37" stroke="#fff6d8" strokeWidth="2.5" filter="url(#piston-technical-glow)" />
      </motion.g>

      <path d="M205 219 H245 M375 219 H415" stroke="#7895ad" strokeWidth="5" strokeLinecap="round" />
      <path d="M202 224 H418" stroke="#d4af37" strokeOpacity=".55" strokeWidth="2" />
      <path d="M179 111 H236 M179 111 V154 H224" fill="none" stroke="#d4af37" strokeOpacity=".75" strokeWidth="1.5" />
      <path d="M179 111 H146 V96" fill="none" stroke="#8fb4d1" strokeOpacity=".55" strokeWidth="1" strokeDasharray="2 4" />
      <text x="42" y="92" fill="#8fb4d1" fontSize="8" fontFamily="monospace" letterSpacing="1">BORE / 86 MM</text>
      <motion.path d="M266 101 H354" stroke="#f4df9a" strokeWidth="2" strokeLinecap="round" filter="url(#piston-technical-glow)" animate={reduceMotion ? undefined : { opacity: [.1, .8, .1], pathLength: [.25, 1, .25] }} transition={{ duration: 3.1, repeat: Infinity, ease: "easeInOut" }} />
      <circle cx="179" cy="111" r="3" fill="#e8cd76" />
      <text x="42" y="108" fill="#e8cd76" fontSize="10" fontFamily="monospace" letterSpacing="1">PISTON</text>
      <text x="42" y="123" fill="#8ea7bc" fontSize="9" fontFamily="monospace">LINEAR MOTION</text>
      <path d="M398 238 H452 V203 H475" fill="none" stroke="#d4af37" strokeOpacity=".75" strokeWidth="1.5" />
      <circle cx="398" cy="238" r="3" fill="#e8cd76" />
      <text x="482" y="199" fill="#e8cd76" fontSize="10" fontFamily="monospace">CRANK</text>
      <text x="482" y="214" fill="#8ea7bc" fontSize="9" fontFamily="monospace">ROTATION</text>
      <text x="34" y="280" fill="#7893aa" fontSize="9" fontFamily="monospace" letterSpacing="1.7">MECHANICAL TECHNOLOGY / MOTION TRANSFER</text>
      <circle cx="579" cy="274" r="3" fill="#d4af37" />
    </motion.svg>
  )
}

/** Intermeshing gear pair with counter-rotating shafts. */
export function TransmissionGearIllustration({ className = "" }: IllustrationProps) {
  const reduceMotion = useReducedMotion()
  const gearA = gearPath(250, 170, 54, 65, 16)
  const gearB = gearPath(374, 170, 40, 49, 12)
  return (
    <motion.svg
      viewBox="0 0 620 300"
      className={className}
      role="img"
      aria-label="Animated cutaway illustration of a two-stage transmission gear train"
      initial={false}
    >
      <defs>
        <filter id="gear-technical-glow" x="-60%" y="-60%" width="220%" height="220%"><feGaussianBlur stdDeviation="4" result="blur"/><feComposite in="SourceGraphic" in2="blur" operator="over"/></filter>
        <linearGradient id="gear-technical-edge" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#f7e7a7" stopOpacity=".75"/><stop offset="48%" stopColor="#8fb4d1" stopOpacity=".18"/><stop offset="100%" stopColor="#d4af37" stopOpacity=".55"/></linearGradient>
        <linearGradient id="gear-steel" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#dce8f2" />
          <stop offset="50%" stopColor="#7e9bb3" />
          <stop offset="100%" stopColor="#344e69" />
        </linearGradient>
        <radialGradient id="gear-hub">
          <stop offset="0%" stopColor="#f5dd8c" />
          <stop offset="100%" stopColor="#a77f20" />
        </radialGradient>
        <pattern id="gear-grid" width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#8da7bd" strokeOpacity=".12" strokeWidth="1" />
        </pattern>
      </defs>

      <rect x="1" y="1" width="618" height="298" rx="20" fill="#061326" stroke="#b9d0e2" strokeOpacity=".18" strokeWidth="1" />
      <rect x="1" y="1" width="618" height="298" rx="20" fill="url(#gear-grid)" />
      <rect x="2" y="2" width="616" height="296" rx="19" fill="none" stroke="url(#gear-technical-edge)" strokeOpacity=".65"/>
      <circle cx="312" cy="170" r="138" fill="none" stroke="#8fb4d1" strokeOpacity=".08" strokeDasharray="2 8"/>
      <motion.path d="M160 96 A126 126 0 0 1 311 53" fill="none" stroke="#d4af37" strokeWidth="1.5" strokeDasharray="4 8" animate={reduceMotion ? undefined : { strokeDashoffset: [0, -48], opacity: [.3, .85, .3] }} transition={{ duration: 5.5, repeat: Infinity, ease: "linear" }} />
      <path d="M438 86 A104 104 0 0 1 493 166" fill="none" stroke="#8fb4d1" strokeOpacity=".45" strokeWidth="1.2" strokeDasharray="3 7" />
      <text x="34" y="30" fill="#e0c56d" fontSize="10" fontFamily="monospace" letterSpacing="2.4">TRANSMISSION / GEAR TRAIN 02</text>
      <text x="584" y="30" fill="#91a9bd" fontSize="9" textAnchor="end" fontFamily="monospace">TORQUE TRANSFER</text>
      <path d="M76 170 H544" stroke="#7d98af" strokeOpacity=".22" strokeDasharray="5 7" />
      <path d="M250 64 V254 M374 88 V252" stroke="#8ba6bb" strokeOpacity=".2" strokeDasharray="3 7" />

      <circle cx="250" cy="170" r="76" fill="#0c213a" stroke="#718da5" strokeOpacity=".3" strokeWidth="2" />
      <circle cx="374" cy="170" r="59" fill="#0c213a" stroke="#718da5" strokeOpacity=".3" strokeWidth="2" />

      <motion.g
        style={{ transformOrigin: "250px 170px" }}
        animate={reduceMotion ? undefined : { rotate: 360 }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
      >
        <path d={gearA} fill="url(#gear-steel)" stroke="#fff2c5" strokeOpacity=".95" strokeWidth="2.5" filter="url(#gear-technical-glow)" />
        <circle cx="250" cy="170" r="43" fill="#0a1e36" stroke="#d4af37" strokeWidth="2" />
        <circle cx="250" cy="170" r="37" fill="none" stroke="#dbe7ef" strokeOpacity=".2" strokeWidth="1" strokeDasharray="2 4" />
        <circle cx="250" cy="135" r="3" fill="#fff0b3" /><circle cx="285" cy="170" r="3" fill="#fff0b3" /><circle cx="250" cy="205" r="3" fill="#fff0b3" /><circle cx="215" cy="170" r="3" fill="#fff0b3" />
        <circle cx="225.25" cy="145.25" r="2.2" fill="#a8bfd1" /><circle cx="274.75" cy="145.25" r="2.2" fill="#a8bfd1" /><circle cx="274.75" cy="194.75" r="2.2" fill="#a8bfd1" /><circle cx="225.25" cy="194.75" r="2.2" fill="#a8bfd1" />
        <path d="M250 127 V213 M207 170 H293 M220 140 L280 200 M280 140 L220 200" stroke="#86a1b8" strokeWidth="7" strokeLinecap="round" />
        <circle cx="250" cy="170" r="19" fill="url(#gear-hub)" stroke="#fff6d8" strokeWidth="2.5" filter="url(#gear-technical-glow)" />
        <circle cx="250" cy="170" r="6" fill="#0b203a" />
      </motion.g>

      <motion.g
        style={{ transformOrigin: "374px 170px" }}
        animate={reduceMotion ? undefined : { rotate: -360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      >
        <path d={gearB} fill="url(#gear-steel)" stroke="#fff2c5" strokeOpacity=".95" strokeWidth="2.5" filter="url(#gear-technical-glow)" />
        <circle cx="374" cy="170" r="31" fill="#0a1e36" stroke="#d4af37" strokeWidth="2" />
        <circle cx="374" cy="170" r="26" fill="none" stroke="#dbe7ef" strokeOpacity=".2" strokeWidth="1" strokeDasharray="2 4" />
        <circle cx="374" cy="146" r="2.5" fill="#fff0b3" /><circle cx="398" cy="170" r="2.5" fill="#fff0b3" /><circle cx="374" cy="194" r="2.5" fill="#fff0b3" /><circle cx="350" cy="170" r="2.5" fill="#fff0b3" />
        <path d="M374 139 V201 M343 170 H405 M352 148 L396 192 M396 148 L352 192" stroke="#86a1b8" strokeWidth="5" strokeLinecap="round" />
        <circle cx="374" cy="170" r="14" fill="url(#gear-hub)" stroke="#fff6d8" strokeWidth="2.5" filter="url(#gear-technical-glow)" />
        <circle cx="374" cy="170" r="4" fill="#0b203a" />
      </motion.g>

      <path d="M250 246 V265 H164" fill="none" stroke="#d4af37" strokeOpacity=".75" strokeWidth="1.5" />
      <path d="M250 258 V274 M244 258 H256" stroke="#e5cf82" strokeOpacity=".55" strokeWidth="1" />
      <text x="64" y="278" fill="#8fa8bc" fontSize="8" fontFamily="monospace" letterSpacing="1">INPUT / SHAFT DRIVE</text>
      <circle cx="250" cy="246" r="3" fill="#e8cd76" />
      <text x="64" y="263" fill="#e8cd76" fontSize="10" fontFamily="monospace">INPUT SHAFT</text>
      <path d="M374 229 V265 H470" fill="none" stroke="#d4af37" strokeOpacity=".75" strokeWidth="1.5" />
      <circle cx="374" cy="229" r="3" fill="#e8cd76" />
      <text x="478" y="263" fill="#e8cd76" fontSize="10" fontFamily="monospace">OUTPUT</text>
      <text x="34" y="286" fill="#7893aa" fontSize="9" fontFamily="monospace" letterSpacing="1.5">GEAR RATIO / SPEED &amp; TORQUE / ROTATIONAL MOTION</text>
      <path d="M476 98 H550 M512 91 V105" stroke="#d4af37" strokeOpacity=".7" strokeWidth="1.5" />
      <text x="514" y="84" fill="#8ea7bc" fontSize="9" textAnchor="middle" fontFamily="monospace">STAGE 02</text>
    </motion.svg>
  )
}

/** Cutaway-inspired electric traction motor with a turning rotor and pulsing stator windings. */
export function ElectricMotorIllustration({ className = "" }: IllustrationProps) {
  const reduceMotion = useReducedMotion()
  const coils = Array.from({ length: 12 }, (_, index) => {
    const angle = (Math.PI * 2 * index) / 12
    const x = 300 + Math.cos(angle) * 104
    const y = 158 + Math.sin(angle) * 104
    return { x, y, angle: (angle * 180) / Math.PI }
  })
  return (
    <motion.svg
      viewBox="0 0 620 300"
      className={className}
      role="img"
      aria-label="Animated technical illustration of an electric traction motor stator and rotor"
      initial={false}
    >
      <defs>
        <filter id="motor-technical-glow" x="-60%" y="-60%" width="220%" height="220%"><feGaussianBlur stdDeviation="4" result="blur"/><feComposite in="SourceGraphic" in2="blur" operator="over"/></filter>
        <linearGradient id="motor-technical-edge" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#f7e7a7" stopOpacity=".75"/><stop offset="48%" stopColor="#8fb4d1" stopOpacity=".18"/><stop offset="100%" stopColor="#d4af37" stopOpacity=".55"/></linearGradient>
        <linearGradient id="motor-shell" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#dae7f1" />
          <stop offset="50%" stopColor="#829db4" />
          <stop offset="100%" stopColor="#344f68" />
        </linearGradient>
        <radialGradient id="motor-rotor">
          <stop offset="0%" stopColor="#f4df9a" />
          <stop offset="46%" stopColor="#c79b2f" />
          <stop offset="100%" stopColor="#8c6b22" />
        </radialGradient>
        <pattern id="motor-grid" width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#8da7bd" strokeOpacity=".12" strokeWidth="1" />
        </pattern>
      </defs>

      <rect x="1" y="1" width="618" height="298" rx="20" fill="#061326" stroke="#b9d0e2" strokeOpacity=".18" strokeWidth="1" />
      <rect x="1" y="1" width="618" height="298" rx="20" fill="url(#motor-grid)" />
      <rect x="2" y="2" width="616" height="296" rx="19" fill="none" stroke="url(#motor-technical-edge)" strokeOpacity=".65"/>
      <circle cx="300" cy="158" r="139" fill="none" stroke="#8fb4d1" strokeOpacity=".1" strokeDasharray="2 8"/>
      <motion.circle cx="300" cy="158" r="96" fill="none" stroke="#65c6dc" strokeOpacity=".48" strokeWidth="1.4" strokeDasharray="5 10" animate={reduceMotion ? undefined : { strokeDashoffset: [0, -60], opacity: [.3, .8, .3] }} transition={{ duration: 6, repeat: Infinity, ease: "linear" }} />
      {Array.from({ length: 8 }, (_, index) => {
        const angle = (Math.PI * 2 * index) / 8
        const x = 300 + Math.cos(angle) * 122
        const y = 158 + Math.sin(angle) * 122
        return <circle key={index} cx={x} cy={y} r="3.2" fill="#d9e7f1" stroke="#6988a4" strokeWidth="1" />
      })}
      <text x="34" y="30" fill="#e0c56d" fontSize="10" fontFamily="monospace" letterSpacing="2.4">E-DRIVE / MOTOR CUTAWAY 03</text>
      <text x="584" y="30" fill="#91a9bd" fontSize="9" textAnchor="end" fontFamily="monospace">TRACTION SYSTEM</text>

      <circle cx="300" cy="158" r="128" fill="#102b48" stroke="#6d8ba5" strokeWidth="7" />
      <circle cx="300" cy="158" r="116" fill="#071c34" stroke="#d4af37" strokeOpacity=".45" strokeWidth="2" />
      <circle cx="300" cy="158" r="88" fill="#0a2039" stroke="#91a9bd" strokeOpacity=".3" strokeWidth="2" />
      <circle cx="300" cy="158" r="82" fill="none" stroke="#e0edf5" strokeOpacity=".16" strokeWidth="1" strokeDasharray="2 5" />
      <path d="M300 70 V82 M388 158 H376 M300 246 V234 M212 158 H224" stroke="#d4af37" strokeOpacity=".46" strokeWidth="2" />

      {coils.map((coil, index) => (
        <motion.g
          key={index}
          style={{ transformOrigin: coil.x + "px " + coil.y + "px" }}
          animate={reduceMotion ? undefined : { opacity: [0.55, 1, 0.55] }}
          transition={{ duration: 2.4, repeat: Infinity, delay: index * 0.11, ease: "easeInOut" }}
        >
          <rect
            x={coil.x - 9}
            y={coil.y - 19}
            width="18"
            height="38"
            rx="8"
            transform={"rotate(" + coil.angle + " " + coil.x + " " + coil.y + ")"}
            fill="#d4af37"
            fillOpacity=".75"
            stroke="#f3df9a"
            strokeWidth="1.5"
          />
          <rect x={coil.x - 4.5} y={coil.y - 13} width="9" height="26" rx="4.5" transform={"rotate(" + coil.angle + " " + coil.x + " " + coil.y + ")"} fill="#f1c85b" fillOpacity=".48" />
        </motion.g>
      ))}

      <motion.g
        style={{ transformOrigin: "300px 158px" }}
        animate={reduceMotion ? undefined : { rotate: 360 }}
        transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
      >
        <circle cx="300" cy="158" r="72" fill="#183a5a" stroke="#b2c6d6" strokeWidth="4" filter="url(#motor-technical-glow)" />
        <circle cx="300" cy="158" r="65" fill="none" stroke="#dce8f1" strokeOpacity=".2" strokeWidth="1.2" strokeDasharray="2 5" />
        <path d="M300 94 V222 M236 158 H364 M255 113 L345 203 M345 113 L255 203" stroke="#9db4c8" strokeWidth="12" strokeLinecap="round" />
        <path d="M300 101 V215 M243 158 H357 M261 119 L339 197 M339 119 L261 197" stroke="#e7f0f6" strokeOpacity=".26" strokeWidth="2.2" strokeLinecap="round" />
        <circle cx="300" cy="158" r="39" fill="url(#motor-rotor)" stroke="#fff6d8" strokeWidth="2.5" filter="url(#motor-technical-glow)" />
        <circle cx="300" cy="158" r="13" fill="#09203a" stroke="#f5df98" strokeWidth="3" />
        <path d="M300 119 V197 M261 158 H339" stroke="#fff0b3" strokeOpacity=".72" strokeWidth="3" />
      </motion.g>

      <path d="M300 25 V48 M300 268 V291" stroke="#d4af37" strokeOpacity=".8" strokeWidth="2" />
      <path d="M167 158 H142 M433 158 H458" stroke="#d4af37" strokeOpacity=".8" strokeWidth="2" />
      <path d="M430 70 H520 V90" fill="none" stroke="#d4af37" strokeOpacity=".7" strokeWidth="1.5" />
      <text x="526" y="101" textAnchor="end" fill="#e8cd76" fontSize="10" fontFamily="monospace">STATOR</text>
      <path d="M365 218 H490 V235" fill="none" stroke="#d4af37" strokeOpacity=".7" strokeWidth="1.5" />
      <text x="496" y="248" fill="#e8cd76" fontSize="10" fontFamily="monospace">ROTOR</text>
      <text x="34" y="278" fill="#7893aa" fontSize="9" fontFamily="monospace" letterSpacing="1.5">ELECTROMAGNETIC FORCE / ROTATIONAL OUTPUT</text>
      <circle cx="580" cy="274" r="3" fill="#d4af37" />
    </motion.svg>
  )
}
