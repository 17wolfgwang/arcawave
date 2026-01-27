import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export const useArtwork3D = (canvasRef, containerRef, type = 'scalable') => {
  const sceneRef = useRef(null)
  const cameraRef = useRef(null)
  const rendererRef = useRef(null)
  const meshRef = useRef(null)
  const wireframeRef = useRef(null)
  const is3DModeRef = useRef(false)
  const transitionProgressRef = useRef(0)
  const mouseXRef = useRef(0)
  const mouseYRef = useRef(0)
  const targetRotationXRef = useRef(0)
  const targetRotationYRef = useRef(0)
  const currentRotationXRef = useRef(0)
  const currentRotationYRef = useRef(0)
  const animationFrameRef = useRef(null)

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return

    const canvas = canvasRef.current
    const container = containerRef.current

    // Initialize Three.js Scene
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0xffffff)
    sceneRef.current = scene

    const aspect = container.clientWidth / container.clientHeight
    const camera = new THREE.PerspectiveCamera(50, aspect, 0.1, 1000)
    camera.position.set(0, 0, 5)
    cameraRef.current = camera

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
      alpha: true,
      powerPreference: "high-performance"
    })
    renderer.setSize(container.clientWidth, container.clientHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    rendererRef.current = renderer

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
    scene.add(ambientLight)

    const directionalLight1 = new THREE.DirectionalLight(0xffffff, 0.8)
    directionalLight1.position.set(5, 5, 5)
    directionalLight1.castShadow = true
    scene.add(directionalLight1)

    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.4)
    directionalLight2.position.set(-5, -5, -5)
    scene.add(directionalLight2)

    // Create 2D painting
    const geometry = new THREE.PlaneGeometry(4, 4, 150, 150)
    const material = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.4,
      metalness: 0.05,
      flatShading: false
    })

    const mesh = new THREE.Mesh(geometry, material)
    mesh.rotation.x = -Math.PI / 2
    mesh.position.y = 0

    const positions = geometry.attributes.position
    const originalPositions = []

    for (let i = 0; i < positions.count; i++) {
      originalPositions.push(
        positions.getX(i),
        positions.getY(i),
        positions.getZ(i)
      )
    }

    for (let i = 0; i < positions.count; i++) {
      const x = positions.getX(i)
      const y = positions.getY(i)

      const brush1 = Math.sin(x * 12 + y * 6) * Math.cos(x * 8 - y * 7)
      const brush2 = Math.cos(x * 15 - y * 9) * Math.sin(x * 6 + y * 11)
      const brush3 = Math.sin((x + y) * 10) * 0.5

      const displacement = (brush1 * 0.15 + brush2 * 0.12 + brush3 * 0.08)
      positions.setZ(i, displacement)

      const color = new THREE.Color()
      const hue = 0.55 + Math.sin(x * 4 + y * 3) * 0.15
      const saturation = 0.25 + Math.cos(x * 5 - y * 4) * 0.25
      const lightness = 0.85 + displacement * 0.8 + Math.sin(x * 2) * 0.1
      color.setHSL(hue, saturation, lightness)
    }

    geometry.setAttribute('color', new THREE.Float32BufferAttribute(
      Array.from({ length: positions.count * 3 }, (_, i) => {
        const idx = Math.floor(i / 3)
        const x = positions.getX(idx)
        const y = positions.getY(idx)
        const color = new THREE.Color()
        const hue = 0.55 + Math.sin(x * 4 + y * 3) * 0.15
        const saturation = 0.25 + Math.cos(x * 5 - y * 4) * 0.25
        const lightness = 0.85 + (positions.getZ(idx) || 0) * 0.8 + Math.sin(x * 2) * 0.1
        color.setHSL(hue, saturation, lightness)
        return i % 3 === 0 ? color.r : i % 3 === 1 ? color.g : color.b
      }), 3
    ))
    geometry.computeVertexNormals()

    material.vertexColors = true
    mesh.userData.originalPositions = originalPositions
    mesh.userData.geometry = geometry
    scene.add(mesh)
    meshRef.current = mesh

    // Create 3D wireframe based on type
    let wireframeGeometry, glowGeometry, innerGeometry
    let wireframeColor = 0x374cc1
    let innerColor = 0x50308e

    if (type === 'scalable') {
      // Scalable: Expanding layers
      wireframeGeometry = new THREE.BoxGeometry(3, 3, 3, 25, 25, 25)
      glowGeometry = new THREE.BoxGeometry(3.15, 3.15, 3.15, 25, 25, 25)
      innerGeometry = new THREE.BoxGeometry(2.8, 2.8, 2.8, 20, 20, 20)
    } else if (type === 'copyright-free') {
      // Copyright-free: Protective sphere
      wireframeGeometry = new THREE.SphereGeometry(2, 32, 32)
      glowGeometry = new THREE.SphereGeometry(2.15, 32, 32)
      innerGeometry = new THREE.SphereGeometry(1.8, 24, 24)
    } else if (type === 'real-world-utility') {
      // Real-world Utility: Connected nodes
      wireframeGeometry = new THREE.OctahedronGeometry(2, 2)
      glowGeometry = new THREE.OctahedronGeometry(2.15, 2)
      innerGeometry = new THREE.OctahedronGeometry(1.8, 1)
    } else {
      // Default
      wireframeGeometry = new THREE.BoxGeometry(3, 3, 3, 25, 25, 25)
      glowGeometry = new THREE.BoxGeometry(3.15, 3.15, 3.15, 25, 25, 25)
      innerGeometry = new THREE.BoxGeometry(2.8, 2.8, 2.8, 20, 20, 20)
    }

    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: wireframeColor,
      wireframe: true,
      transparent: true,
      opacity: 0.85,
      side: THREE.DoubleSide
    })

    const wireframe = new THREE.Mesh(wireframeGeometry, wireframeMaterial)
    wireframe.visible = false
    wireframe.rotation.x = Math.PI / 4
    wireframe.rotation.y = Math.PI / 4
    scene.add(wireframe)
    wireframeRef.current = wireframe

    // Add glow effect
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: wireframeColor,
      wireframe: true,
      transparent: true,
      opacity: 0.25
    })
    const glow = new THREE.Mesh(glowGeometry, glowMaterial)
    if (type !== 'copyright-free') {
      glow.rotation.x = Math.PI / 4
      glow.rotation.y = Math.PI / 4
    }
    wireframe.add(glow)

    const innerMaterial = new THREE.MeshBasicMaterial({
      color: innerColor,
      wireframe: true,
      transparent: true,
      opacity: 0.3
    })
    const inner = new THREE.Mesh(innerGeometry, innerMaterial)
    if (type !== 'copyright-free') {
      inner.rotation.x = Math.PI / 4
      inner.rotation.y = Math.PI / 4
    }
    wireframe.add(inner)

    // Event listeners
    const handleClick = () => {
      is3DModeRef.current = !is3DModeRef.current
    }

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect()
      mouseXRef.current = ((e.clientX - rect.left) / rect.width) * 2 - 1
      mouseYRef.current = -((e.clientY - rect.top) / rect.height) * 2 + 1

      if (is3DModeRef.current) {
        targetRotationYRef.current = mouseXRef.current * 0.5
        targetRotationXRef.current = mouseYRef.current * 0.3
      }
    }

    container.addEventListener('click', handleClick)
    container.addEventListener('mousemove', handleMouseMove)

    // Auto-transition observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !is3DModeRef.current) {
          setTimeout(() => {
            is3DModeRef.current = true
          }, 1000)
        }
      })
    }, { threshold: 0.5 })

    observer.observe(container)

    // Animation loop
    const animate = () => {
      animationFrameRef.current = requestAnimationFrame(animate)

      // Smooth rotation interpolation
      currentRotationXRef.current += (targetRotationXRef.current - currentRotationXRef.current) * 0.05
      currentRotationYRef.current += (targetRotationYRef.current - currentRotationYRef.current) * 0.05

      if (wireframeRef.current && is3DModeRef.current) {
        wireframeRef.current.rotation.x = Math.PI / 4 + currentRotationXRef.current
        wireframeRef.current.rotation.y = Math.PI / 4 + currentRotationYRef.current
      }

      // Handle transitions
      if (is3DModeRef.current && transitionProgressRef.current < 1) {
        transitionProgressRef.current += 0.015
        transitionProgressRef.current = Math.min(transitionProgressRef.current, 1)

        const ease = (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
        const eased = ease(transitionProgressRef.current)

        if (meshRef.current && meshRef.current.userData.geometry) {
          const positions = meshRef.current.userData.geometry.attributes.position
          const originalPositions = meshRef.current.userData.originalPositions

          for (let i = 0; i < positions.count; i++) {
            const x = originalPositions[i * 3]
            const y = originalPositions[i * 3 + 1]
            const z = originalPositions[i * 3 + 2]
            const currentZ = positions.getZ(i)
            const targetZ = z * (1 - eased * 0.8)
            positions.setZ(i, currentZ * (1 - eased) + targetZ * eased)
          }

          positions.needsUpdate = true
          meshRef.current.userData.geometry.computeVertexNormals()

          meshRef.current.scale.setScalar(1 - eased * 0.6)
          meshRef.current.rotation.x = -Math.PI / 2 + eased * (Math.PI / 2 + 0.2)
          meshRef.current.rotation.y = eased * Math.PI / 3
          meshRef.current.position.y = eased * 0.6
          meshRef.current.material.opacity = Math.max(0, 1 - eased * 1.2)
        }

        if (wireframeRef.current) {
          const scale = 0.3 + eased * 0.7
          wireframeRef.current.scale.setScalar(scale)
          wireframeRef.current.material.opacity = eased * 0.85
          wireframeRef.current.rotation.x = Math.PI / 4
          wireframeRef.current.rotation.y = Math.PI / 4 + eased * 0.3
          wireframeRef.current.visible = true
        }

        camera.position.z = 5 - eased * 2.5
        camera.position.y = eased * 0.6
        camera.lookAt(0, 0, 0)
      } else if (!is3DModeRef.current && transitionProgressRef.current > 0) {
        transitionProgressRef.current -= 0.015
        transitionProgressRef.current = Math.max(transitionProgressRef.current, 0)

        const ease = (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
        const eased = ease(transitionProgressRef.current)

        if (meshRef.current && meshRef.current.userData.geometry) {
          const positions = meshRef.current.userData.geometry.attributes.position
          const originalPositions = meshRef.current.userData.originalPositions

          for (let i = 0; i < positions.count; i++) {
            const x = originalPositions[i * 3]
            const y = originalPositions[i * 3 + 1]

            const brush1 = Math.sin(x * 12 + y * 6) * Math.cos(x * 8 - y * 7)
            const brush2 = Math.cos(x * 15 - y * 9) * Math.sin(x * 6 + y * 11)
            const brush3 = Math.sin((x + y) * 10) * 0.5
            const displacement = (brush1 * 0.15 + brush2 * 0.12 + brush3 * 0.08)

            const currentZ = positions.getZ(i)
            const targetZ = displacement
            positions.setZ(i, currentZ * eased + targetZ * (1 - eased))
          }

          positions.needsUpdate = true
          meshRef.current.userData.geometry.computeVertexNormals()

          meshRef.current.scale.setScalar(1 - eased * 0.6)
          meshRef.current.rotation.x = -Math.PI / 2 + eased * (Math.PI / 2 + 0.2)
          meshRef.current.rotation.y = eased * Math.PI / 3
          meshRef.current.position.y = eased * 0.6
          meshRef.current.material.opacity = Math.max(0, 1 - eased * 1.2)
        }

        if (wireframeRef.current) {
          const scale = 0.3 + eased * 0.7
          wireframeRef.current.scale.setScalar(scale)
          wireframeRef.current.material.opacity = eased * 0.85
          wireframeRef.current.rotation.x = Math.PI / 4
          wireframeRef.current.rotation.y = Math.PI / 4 + eased * 0.3
        }

        camera.position.z = 5 - eased * 2.5
        camera.position.y = eased * 0.6
        camera.lookAt(0, 0, 0)
      }

      if (meshRef.current && !is3DModeRef.current) {
        const time = Date.now() * 0.001
        meshRef.current.rotation.z = Math.sin(time * 0.5) * 0.02
      }

      renderer.render(scene, camera)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      const width = container.clientWidth
      const height = container.clientHeight

      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }

    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      container.removeEventListener('click', handleClick)
      container.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      observer.disconnect()
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
      renderer.dispose()
    }
  }, [canvasRef, containerRef])
}

