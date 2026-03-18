import { useEffect, useRef } from 'react'
import { useColorModeValue } from '@chakra-ui/react'
import * as THREE from 'three'

const randomBetween = (min, max) => min + Math.random() * (max - min)

const HomeThreeBg = () => {
  const ref = useRef(null)
  const fogColor = useColorModeValue(0xf2e8da, 0x050816)
  const ambientColor = useColorModeValue(0xd7f3ff, 0x88aaff)
  const keyColor = useColorModeValue(0x7cc7ff, 0x6ee7ff)
  const fillColor = useColorModeValue(0xffd8a8, 0xff7ad9)
  const coreColor = useColorModeValue(0x234e70, 0x9be7ff)
  const shellColor = useColorModeValue(0x8b5cf6, 0x7c3aed)
  const particleColor = useColorModeValue(0x4b5563, 0xffffff)
  const orbColor = useColorModeValue(0xd97706, 0xffd166)

  useEffect(() => {
    const container = ref.current
    if (!container) return undefined

    const scene = new THREE.Scene()
    scene.fog = new THREE.FogExp2(fogColor, 0.03)

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    )
    camera.position.set(0, 1.5, 8)

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true
    })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(container.clientWidth, container.clientHeight)
    renderer.setClearColor(0x000000, 0)
    renderer.outputEncoding = THREE.sRGBEncoding
    container.appendChild(renderer.domElement)

    const root = new THREE.Group()
    scene.add(root)

    const ambient = new THREE.AmbientLight(ambientColor, 1.2)
    scene.add(ambient)

    const keyLight = new THREE.DirectionalLight(keyColor, 1.8)
    keyLight.position.set(3, 5, 4)
    scene.add(keyLight)

    const fillLight = new THREE.PointLight(fillColor, 2.4, 30)
    fillLight.position.set(-4, -2, 5)
    scene.add(fillLight)

    const coreGroup = new THREE.Group()
    root.add(coreGroup)

    const coreGeometry = new THREE.IcosahedronGeometry(1.45, 1)
    const coreMaterial = new THREE.MeshPhysicalMaterial({
      color: coreColor,
      metalness: 0.18,
      roughness: 0.24,
      clearcoat: 0.8,
      clearcoatRoughness: 0.18,
      emissive: 0x0b2233,
      emissiveIntensity: 0.35
    })
    const core = new THREE.Mesh(coreGeometry, coreMaterial)
    coreGroup.add(core)

    const coreHaloGeometry = new THREE.SphereGeometry(2.15, 48, 48)
    const coreHaloMaterial = new THREE.MeshPhysicalMaterial({
      color: shellColor,
      transparent: true,
      opacity: 0.08,
      metalness: 0.05,
      roughness: 0.95,
      clearcoat: 0.15,
      side: THREE.BackSide
    })
    const coreHalo = new THREE.Mesh(coreHaloGeometry, coreHaloMaterial)
    coreGroup.add(coreHalo)

    const particleGeometry = new THREE.BufferGeometry()
    const particleCount = 180
    const positions = new Float32Array(particleCount * 3)
    for (let i = 0; i < particleCount; i += 1) {
      positions[i * 3] = randomBetween(-8, 8)
      positions[i * 3 + 1] = randomBetween(-5, 5)
      positions[i * 3 + 2] = randomBetween(-8, 8)
    }
    particleGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(positions, 3)
    )

    const particleMaterial = new THREE.PointsMaterial({
      color: particleColor,
      size: 0.035,
      transparent: true,
      opacity: 0.85
    })
    const particles = new THREE.Points(particleGeometry, particleMaterial)
    scene.add(particles)

    const orbits = new THREE.Group()
    scene.add(orbits)
    const orbGeometry = new THREE.SphereGeometry(0.12, 24, 24)
    const orbMaterial = new THREE.MeshPhysicalMaterial({
      color: orbColor,
      emissive: 0x5f4b00,
      emissiveIntensity: 0.18,
      metalness: 0.08,
      roughness: 0.28,
      clearcoat: 1,
      clearcoatRoughness: 0.08,
      reflectivity: 0.55
    })

    const orbitItems = Array.from({ length: 6 }, (_, index) => {
      const orb = new THREE.Mesh(orbGeometry, orbMaterial)
      const angle = (index / 6) * Math.PI * 2
      const radius = 3.4
      const orbHue = [0x7dd3fc, 0xa78bfa, 0xf9a8d4, 0xfbbf24, 0x86efac, 0x93c5fd][
        index
      ]
      orb.material = orbMaterial.clone()
      orb.material.color.setHex(orbHue)
      orb.position.set(
        Math.cos(angle) * radius,
        Math.sin(angle * 1.5) * 1.1,
        Math.sin(angle) * radius
      )
      orbits.add(orb)
      return { mesh: orb, angle, radius, speed: 0.3 + index * 0.035 }
    })

    let frameId = 0
    const animate = () => {
      frameId = window.requestAnimationFrame(animate)
      const t = performance.now() * 0.001

      root.rotation.y = t * 0.25
      root.rotation.x = Math.sin(t * 0.35) * 0.14
      coreGroup.rotation.y = t * 0.18
      coreGroup.rotation.x = Math.sin(t * 0.22) * 0.12
      particles.rotation.y = -t * 0.06

      orbitItems.forEach((item, index) => {
        const offset = t * item.speed + index
        item.mesh.position.x = Math.cos(item.angle + offset) * item.radius
        item.mesh.position.z = Math.sin(item.angle + offset) * item.radius
        item.mesh.position.y = Math.sin(offset * 1.8) * 1.25
      })

      fillLight.position.x = Math.sin(t * 0.7) * 5
      fillLight.position.y = Math.cos(t * 0.9) * 2
      keyLight.position.z = Math.cos(t * 0.5) * 4

      renderer.render(scene, camera)
    }

    const handleResize = () => {
      const { clientWidth, clientHeight } = container
      camera.aspect = clientWidth / clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(clientWidth, clientHeight)
    }

    window.addEventListener('resize', handleResize)
    animate()

    return () => {
      window.removeEventListener('resize', handleResize)
      window.cancelAnimationFrame(frameId)
      coreGeometry.dispose()
      coreMaterial.dispose()
      coreHaloGeometry.dispose()
      coreHaloMaterial.dispose()
      particleGeometry.dispose()
      particleMaterial.dispose()
      orbGeometry.dispose()
      orbMaterial.dispose()
      orbitItems.forEach(item => item.mesh.material.dispose())
      renderer.dispose()
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
    }
  }, [
    fogColor,
    ambientColor,
    keyColor,
    fillColor,
    coreColor,
    shellColor,
    particleColor,
    orbColor
  ])

  return (
    <div
      ref={ref}
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden'
      }}
    />
  )
}

export default HomeThreeBg
