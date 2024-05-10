/* Planets by notchris */

import * as THREE from "https://cdn.skypack.dev/three@0.136.0";

import {
	CSS2DRenderer,
	CSS2DObject
} from 'https://cdn.skypack.dev/three@0.136.0/examples/jsm/renderers/CSS2DRenderer.js'

import gsap from "https://cdn.skypack.dev/gsap@3.9.1";

import {
  OrbitControls
} from "https://cdn.skypack.dev/three@0.136.0/examples/jsm/controls/OrbitControls";


		let renderer,
			labelRenderer,
			scene,
			camera,
			clock,
			planets,
			controls,
			mainObj,
			activePlanet
		const el = document.querySelector('#render')
		const { width, height } = el.getBoundingClientRect()
		const size = new THREE.Vector3()
		const center = new THREE.Vector3()
		const box = new THREE.Box3()
		init()

		const planetArr = [
			'sun',
			'mercury',
			'venus',
			'earth',
			'mars',
			'jupiter',
			'saturn',
			'uranus',
			'neptune'
		]

		const planetEls = document.querySelectorAll('.pallete > div')
		planetEls.forEach((p, i) => {
			p.addEventListener('mouseover', () => {
				activePlanet = planetArr[i]

				gsap.to(mainObj.rotation, {
					duration: 0.3,
					x: Math.PI / 2,
					ease: 'none',
					paused: false
				})
				gsap.to(mainObj.position, {
					duration: 0.3,
					z: 200,
					ease: 'none',
					paused: false
				})

				const mesh = scene.getObjectByName(planetArr[i])
				mesh.children[0].visible = true
				activePlanet = mesh
			})
			p.addEventListener('mouseleave', () => {
				gsap.to(mainObj.rotation, {
					duration: 0.3,
					x: 0.1,
					ease: 'none',
					paused: false
				})
				gsap.to(mainObj.position, {
					duration: 0.3,
					z: 0,
					ease: 'none',
					paused: false
				})
				const mesh = scene.getObjectByName(planetArr[i])
				mesh.children[0].visible = false
				activePlanet = null
			})
		})

		animate()

		function fitCameraToSelection(camera, controls, selection, fitOffset) {
			box.makeEmpty()
			for (const object of selection) {
				box.expandByObject(object)
			}

			box.getSize(size)
			box.getCenter(center)

			const maxSize = Math.max(size.x, size.y, size.z)
			const fitHeightDistance =
				maxSize / (2 * Math.atan((Math.PI * camera.fov) / 360))
			const fitWidthDistance = fitHeightDistance / camera.aspect
			const distance = fitOffset * Math.max(fitHeightDistance, fitWidthDistance)

			const direction = controls.target
				.clone()
				.sub(camera.position)
				.normalize()
				.multiplyScalar(distance)

			controls.maxDistance = distance * 10

			controls.target.copy(center)

			camera.near = distance / 100
			camera.far = distance * 100
			camera.updateProjectionMatrix()

			camera.position.copy(controls.target).sub(direction)
			controls.update()
		}

		function init() {
			clock = new THREE.Clock()
			// renderer
			renderer = new THREE.WebGLRenderer({
				antialias: true
			})
			renderer.setPixelRatio(window.devicePixelRatio)
			renderer.setSize(width, height)
			el.appendChild(renderer.domElement)

			labelRenderer = new CSS2DRenderer()
			labelRenderer.setSize(width, height)
			labelRenderer.domElement.style.position = 'absolute'
			labelRenderer.domElement.style.top = '0px'
			el.appendChild(labelRenderer.domElement)

			// scene
			scene = new THREE.Scene()
			scene.background = new THREE.Color('#F6F1E5')
			camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000)

			camera.position.set(0, 0, 1)

			controls = new OrbitControls(camera, renderer.domElement)
			controls.enabled = false
			scene.add(new THREE.AmbientLight(0x999999, 1.0))

			const sun = new THREE.Mesh(
				new THREE.SphereGeometry(40, 32, 16),
				new THREE.MeshBasicMaterial({ color: '#FFE600' })
			)

			sun.name = 'sun'
			const div = document.createElement('div')
			div.className = 'label'
			div.innerHTML = `
					<div class="planet-title">SUN</div>
			`

			const label = new CSS2DObject(div)
			label.position.copy(sun.position)
			label.visible = false
			sun.add(label)

			label.layers.set(0)
			sun.add(new THREE.PointLight(0xdddddd, 1.0, 400, 0.7))
			planets = {
				mercury: {
					size: 1,
					orbitRadius: 50,
					speed: 100,
					color: '#C2D0FF',
					distance: '43.291 million mi'
				},
				venus: {
					size: 2,
					orbitRadius: 60,
					speed: 73,
					color: '#FF9900',
					distance: '66.822 million mi'
				},
				earth: {
					size: 1.5,
					orbitRadius: 70,
					speed: 62,
					color: '#00A3FF',
					distance: '94.044 million mi'
				},
				mars: {
					size: 3,
					orbitRadius: 80,
					speed: 50,
					color: '#FF5C00',
					distance: '131.56 million mi'
				},
				jupiter: {
					size: 8,
					orbitRadius: 90,
					speed: 27,
					color: '#E59700',
					distance: '460.96 million mi'
				},
				saturn: {
					size: 6,
					orbitRadius: 120,
					speed: 20,
					color: '#FFCF72',
					distance: '915.96 million mi'
				},
				uranus: {
					size: 4,
					orbitRadius: 160,
					speed: 14,
					color: '#61D9FF',
					distance: '1.8297 billion mi'
				},
				neptune: {
					size: 4,
					orbitRadius: 200,
					speed: 11,
					color: '#0047FF',
					distance: '2.78 billion mi'
				}
			}
			mainObj = new THREE.Object3D()

			Object.entries(planets).forEach((p) => {
				const name = p[0]
				const { size, orbitRadius, color, distance } = p[1]
				console.log(name, size, orbitRadius)

				let pts = new THREE.Path()
					.absarc(0, 0, orbitRadius, 0, Math.PI * 2)
					.getPoints(90)

				let g = new THREE.BufferGeometry().setFromPoints(pts)
				g.rotateX(Math.PI * 0.5)
				let m = new THREE.LineBasicMaterial({
					color: '#000000',
					transparent: true,
					opacity: 0.25
				})
				let o = new THREE.Line(g, m)

				scene.add(o)
				mainObj.add(o)

				let pg = new THREE.SphereBufferGeometry(size, 16, 16)
				let pm = new THREE.MeshToonMaterial({ color: color })
				let pmesh = new THREE.Mesh(pg, pm)
				pmesh.name = name
				scene.add(pmesh)
				o.add(pmesh)

				planets[name].mesh = pmesh
				planets[name].line = o

				const div = document.createElement('div')
				div.className = 'label'
				div.innerHTML = `
					<div class="planet-title">${name}</div>
					<div class="planet-distance">${distance}</div>
				`

				const label = new CSS2DObject(div)
				label.position.copy(planets[name].mesh.position)
				label.visible = false
				planets[name].mesh.add(label)
				planets[name].label = label
				label.layers.set(0)
			})

			mainObj.add(sun)

			scene.add(mainObj)

			mainObj.rotation.x = 0.1

			window.addEventListener('resize', () => {
				const { width, height } = el.getBoundingClientRect()
				camera.aspect = width / height
				camera.updateProjectionMatrix()
				fitCameraToSelection(camera, controls, [planets['neptune'].line], 0.6)
				renderer.setSize(width, height)
				labelRenderer.setSize(width, height)
			})

			fitCameraToSelection(camera, controls, [planets['neptune'].line], 0.6)
		}

		function render() {
			renderer.render(scene, camera)
			labelRenderer.render(scene, camera)
		}

		function animate() {
			requestAnimationFrame(animate)
			let t = clock.getElapsedTime() / 50

			Object.entries(planets).forEach((p) => {
				const { orbitRadius, mesh, speed } = p[1]
				if (mesh) {
					mesh.position
						.set(Math.cos(t * speed), 0, -Math.sin(t * speed))
						.multiplyScalar(orbitRadius)
					mesh.rotation.y = t * speed - Math.PI * 0.5
					mesh.rotation.z = Math.PI * 0.5
				}
			})
			if (activePlanet) {
				camera.position.x = activePlanet.position.x
				camera.position.y = -activePlanet.position.z
			} else {
				camera.position.x = 0
				camera.position.y = 0
			}
			render()
}