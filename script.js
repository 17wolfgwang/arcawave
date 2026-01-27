// Three.js Scene Setup
let scene, camera, renderer, controls;
let mesh, wireframe;
let is3DMode = false;
let transitionProgress = 0;
let mouseX = 0, mouseY = 0;
let targetRotationX = 0, targetRotationY = 0;
let currentRotationX = 0, currentRotationY = 0;

// Canvas setup
const canvas = document.getElementById('artwork-canvas');
const container = canvas.parentElement;

// Initialize Three.js Scene
function initScene() {
    // Scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);
    
    // Camera
    const aspect = container.clientWidth / container.clientHeight;
    camera = new THREE.PerspectiveCamera(50, aspect, 0.1, 1000);
    camera.position.set(0, 0, 5);
    
    // Renderer
    renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        antialias: true,
        alpha: true,
        powerPreference: "high-performance"
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    
    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);
    
    const directionalLight1 = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight1.position.set(5, 5, 5);
    directionalLight1.castShadow = true;
    scene.add(directionalLight1);
    
    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.4);
    directionalLight2.position.set(-5, -5, -5);
    scene.add(directionalLight2);
    
    // Create 2D painting effect (simulated with particles/geometry)
    create2DPainting();
    
    // Create 3D wireframe mesh
    create3DWireframe();
    
    // Event listeners
    setupEventListeners();
    
    // Start animation loop
    animate();
}

// Create 2D painting effect with brushstroke-like geometry
function create2DPainting() {
    const geometry = new THREE.PlaneGeometry(4, 4, 150, 150);
    const material = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        roughness: 0.4,
        metalness: 0.05,
        flatShading: false
    });
    
    mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.x = -Math.PI / 2;
    mesh.position.y = 0;
    
    // Create sophisticated brushstroke-like patterns with vertex displacement
    const positions = geometry.attributes.position;
    const colors = [];
    const originalPositions = [];
    
    // Store original positions
    for (let i = 0; i < positions.count; i++) {
        originalPositions.push(
            positions.getX(i),
            positions.getY(i),
            positions.getZ(i)
        );
    }
    
    for (let i = 0; i < positions.count; i++) {
        const x = positions.getX(i);
        const y = positions.getY(i);
        
        // Create more complex brushstroke patterns
        const brush1 = Math.sin(x * 12 + y * 6) * Math.cos(x * 8 - y * 7);
        const brush2 = Math.cos(x * 15 - y * 9) * Math.sin(x * 6 + y * 11);
        const brush3 = Math.sin((x + y) * 10) * 0.5;
        
        // Combine brushstrokes with varying intensities
        const displacement = (brush1 * 0.15 + brush2 * 0.12 + brush3 * 0.08);
        
        positions.setZ(i, displacement);
        
        // Add sophisticated color variation simulating paint texture
        const color = new THREE.Color();
        const hue = 0.55 + Math.sin(x * 4 + y * 3) * 0.15;
        const saturation = 0.25 + Math.cos(x * 5 - y * 4) * 0.25;
        const lightness = 0.85 + displacement * 0.8 + Math.sin(x * 2) * 0.1;
        color.setHSL(hue, saturation, lightness);
        colors.push(color.r, color.g, color.b);
    }
    
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    geometry.computeVertexNormals();
    
    // Store original positions for transition
    mesh.userData.originalPositions = originalPositions;
    mesh.userData.geometry = geometry;
    
    material.vertexColors = true;
    scene.add(mesh);
}

// Create 3D wireframe mesh
function create3DWireframe() {
    // Create a more sophisticated wireframe structure
    const geometry = new THREE.BoxGeometry(3, 3, 3, 25, 25, 25);
    
    // Main wireframe material with gradient-like effect
    const wireframeMaterial = new THREE.MeshBasicMaterial({
        color: 0x374cc1,
        wireframe: true,
        transparent: true,
        opacity: 0.85,
        side: THREE.DoubleSide
    });
    
    wireframe = new THREE.Mesh(geometry, wireframeMaterial);
    wireframe.visible = false;
    wireframe.rotation.x = Math.PI / 4;
    wireframe.rotation.y = Math.PI / 4;
    scene.add(wireframe);
    
    // Add outer glow effect
    const glowGeometry = new THREE.BoxGeometry(3.15, 3.15, 3.15, 25, 25, 25);
    const glowMaterial = new THREE.MeshBasicMaterial({
        color: 0x374cc1,
        wireframe: true,
        transparent: true,
        opacity: 0.25
    });
    const glow = new THREE.Mesh(glowGeometry, glowMaterial);
    glow.rotation.x = Math.PI / 4;
    glow.rotation.y = Math.PI / 4;
    wireframe.add(glow);
    
    // Add inner subtle wireframe
    const innerGeometry = new THREE.BoxGeometry(2.8, 2.8, 2.8, 20, 20, 20);
    const innerMaterial = new THREE.MeshBasicMaterial({
        color: 0x50308e,
        wireframe: true,
        transparent: true,
        opacity: 0.3
    });
    const inner = new THREE.Mesh(innerGeometry, innerMaterial);
    inner.rotation.x = Math.PI / 4;
    inner.rotation.y = Math.PI / 4;
    wireframe.add(inner);
}

// Smooth transition from 2D to 3D with morphing effect
function transitionTo3D() {
    if (transitionProgress >= 1) return;
    
    transitionProgress += 0.015;
    transitionProgress = Math.min(transitionProgress, 1);
    
    // Smooth ease function
    const ease = (t) => {
        return t < 0.5 
            ? 2 * t * t 
            : -1 + (4 - 2 * t) * t;
    };
    const eased = ease(transitionProgress);
    
    // Morph 2D brushstrokes into 3D wireframe
    if (mesh && mesh.userData.geometry) {
        const positions = mesh.userData.geometry.attributes.position;
        const originalPositions = mesh.userData.originalPositions;
        
        // Gradually flatten the brushstrokes while transitioning
        for (let i = 0; i < positions.count; i++) {
            const x = originalPositions[i * 3];
            const y = originalPositions[i * 3 + 1];
            const z = originalPositions[i * 3 + 2];
            
            const currentZ = positions.getZ(i);
            const targetZ = z * (1 - eased * 0.8); // Flatten towards original
            positions.setZ(i, currentZ * (1 - eased) + targetZ * eased);
        }
        
        positions.needsUpdate = true;
        mesh.userData.geometry.computeVertexNormals();
        
        mesh.scale.setScalar(1 - eased * 0.6);
        mesh.rotation.x = -Math.PI / 2 + eased * (Math.PI / 2 + 0.2);
        mesh.rotation.y = eased * Math.PI / 3;
        mesh.position.y = eased * 0.6;
        mesh.material.opacity = Math.max(0, 1 - eased * 1.2);
    }
    
    if (wireframe) {
        wireframe.visible = true;
        const scale = 0.3 + eased * 0.7;
        wireframe.scale.setScalar(scale);
        wireframe.material.opacity = eased * 0.85;
        wireframe.rotation.x = Math.PI / 4;
        wireframe.rotation.y = Math.PI / 4 + eased * 0.3;
    }
    
    // Smooth camera movement
    camera.position.z = 5 - eased * 2.5;
    camera.position.y = eased * 0.6;
    camera.lookAt(0, 0, 0);
}

// Transition back to 2D
function transitionTo2D() {
    if (transitionProgress <= 0) return;
    
    transitionProgress -= 0.015;
    transitionProgress = Math.max(transitionProgress, 0);
    
    const ease = (t) => {
        return t < 0.5 
            ? 2 * t * t 
            : -1 + (4 - 2 * t) * t;
    };
    const eased = ease(transitionProgress);
    
    // Restore brushstroke geometry
    if (mesh && mesh.userData.geometry) {
        const positions = mesh.userData.geometry.attributes.position;
        const originalPositions = mesh.userData.originalPositions;
        
        // Restore brushstroke displacement
        for (let i = 0; i < positions.count; i++) {
            const x = originalPositions[i * 3];
            const y = originalPositions[i * 3 + 1];
            
            // Recalculate brushstroke pattern
            const brush1 = Math.sin(x * 12 + y * 6) * Math.cos(x * 8 - y * 7);
            const brush2 = Math.cos(x * 15 - y * 9) * Math.sin(x * 6 + y * 11);
            const brush3 = Math.sin((x + y) * 10) * 0.5;
            const displacement = (brush1 * 0.15 + brush2 * 0.12 + brush3 * 0.08);
            
            const currentZ = positions.getZ(i);
            const targetZ = displacement;
            positions.setZ(i, currentZ * eased + targetZ * (1 - eased));
        }
        
        positions.needsUpdate = true;
        mesh.userData.geometry.computeVertexNormals();
        
        mesh.scale.setScalar(1 - eased * 0.6);
        mesh.rotation.x = -Math.PI / 2 + eased * (Math.PI / 2 + 0.2);
        mesh.rotation.y = eased * Math.PI / 3;
        mesh.position.y = eased * 0.6;
        mesh.material.opacity = Math.max(0, 1 - eased * 1.2);
    }
    
    if (wireframe) {
        const scale = 0.3 + eased * 0.7;
        wireframe.scale.setScalar(scale);
        wireframe.material.opacity = eased * 0.85;
        wireframe.rotation.x = Math.PI / 4;
        wireframe.rotation.y = Math.PI / 4 + eased * 0.3;
    }
    
    camera.position.z = 5 - eased * 2.5;
    camera.position.y = eased * 0.6;
    camera.lookAt(0, 0, 0);
}

// Event Listeners
function setupEventListeners() {
    // Mouse movement for 3D interaction
    container.addEventListener('mousemove', (e) => {
        const rect = container.getBoundingClientRect();
        mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        mouseY = -((e.clientY - rect.top) / rect.height) * 2 + 1;
        
        if (is3DMode) {
            targetRotationY = mouseX * 0.5;
            targetRotationX = mouseY * 0.3;
        }
    });
    
    // Click to toggle 3D mode
    container.addEventListener('click', () => {
        is3DMode = !is3DMode;
    });
    
    // Auto-transition on scroll into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !is3DMode) {
                // Start transition after a delay
                setTimeout(() => {
                    is3DMode = true;
                }, 1000);
            }
        });
    }, { threshold: 0.5 });
    
    observer.observe(container);
    
    // Window resize
    window.addEventListener('resize', () => {
        const width = container.clientWidth;
        const height = container.clientHeight;
        
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        
        renderer.setSize(width, height);
    });
}

// Animation Loop
function animate() {
    requestAnimationFrame(animate);
    
    // Smooth rotation interpolation
    currentRotationX += (targetRotationX - currentRotationX) * 0.05;
    currentRotationY += (targetRotationY - currentRotationY) * 0.05;
    
    // Apply rotations
    if (wireframe && is3DMode) {
        wireframe.rotation.x = Math.PI / 4 + currentRotationX;
        wireframe.rotation.y = Math.PI / 4 + currentRotationY;
    }
    
    // Handle transitions
    if (is3DMode && transitionProgress < 1) {
        transitionTo3D();
    } else if (!is3DMode && transitionProgress > 0) {
        transitionTo2D();
    }
    
    // Subtle animation for 2D mesh
    if (mesh && !is3DMode) {
        const time = Date.now() * 0.001;
        mesh.rotation.z = Math.sin(time * 0.5) * 0.02;
    }
    
    // Render
    renderer.render(scene, camera);
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initScene);
} else {
    initScene();
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Gallery item hover effects
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    const artworkCanvas = document.getElementById('artwork-canvas');
    
    if (hero && heroContent) {
        // Hero content만 사라지도록
        heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
        heroContent.style.opacity = Math.max(0, 1 - scrolled / 600);
    }
    
    // Artwork canvas만 내부에서 살짝 움직이도록 (container는 고정)
    if (artworkCanvas) {
        const parallaxOffset = scrolled * 0.15;
        artworkCanvas.style.transform = `translateY(${parallaxOffset}px)`;
    }
});

// Number counter animation
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16); // 60fps
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        
        // Format number based on target
        if (target >= 1000) {
            element.textContent = Math.floor(current).toLocaleString();
        } else if (target >= 100) {
            element.textContent = Math.floor(current);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Observe About section for counter animation
const aboutSection = document.getElementById('about');
if (aboutSection) {
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumbers = entry.target.querySelectorAll('.stat-number');
                statNumbers.forEach(stat => {
                    const target = parseInt(stat.getAttribute('data-target'));
                    if (!stat.hasAttribute('data-animated')) {
                        stat.setAttribute('data-animated', 'true');
                        animateCounter(stat, target);
                    }
                });
            }
        });
    }, { threshold: 0.3 });
    
    statsObserver.observe(aboutSection);
}

// Contact form submission
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        // Simple form validation
        if (!name || !email || !message) {
            alert('Please fill in all fields.');
            return;
        }
        
        // Here you would typically send the form data to a server
        // For now, we'll just show a success message
        const submitBtn = contactForm.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        // Simulate form submission
        setTimeout(() => {
            submitBtn.textContent = 'Message Sent!';
            submitBtn.style.background = '#34a853';
            contactForm.reset();
            
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.style.background = '';
                submitBtn.disabled = false;
            }, 3000);
        }, 1000);
        
        // In production, you would send the data to your backend:
        // fetch('/api/contact', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ name, email, message })
        // })
        // .then(response => response.json())
        // .then(data => { /* handle success */ })
        // .catch(error => { /* handle error */ });
    });
}


