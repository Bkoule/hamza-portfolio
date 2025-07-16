import { ref, onMounted, onUnmounted } from 'vue'

export function useScrollAnimation() {
  const isVisible = ref(false)
  const element = ref(null)

  const observerCallback = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        isVisible.value = true
        entry.target.classList.add('visible')
      }
    })
  }

  const observer = new IntersectionObserver(observerCallback, {
    threshold: 0.1,
    rootMargin: '50px 0px -50px 0px'
  })

  onMounted(() => {
    if (element.value) {
      observer.observe(element.value)
    }
  })

  onUnmounted(() => {
    if (element.value) {
      observer.unobserve(element.value)
    }
  })

  return {
    isVisible,
    element
  }
}

export function useStaggeredAnimation() {
  const elements = ref([])
  const visibleElements = ref(new Set())

  const observerCallback = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const index = Array.from(entry.target.parentNode.children).indexOf(entry.target)
        visibleElements.value.add(index)
        
        setTimeout(() => {
          entry.target.classList.add('visible')
        }, index * 100)
      }
    })
  }

  const observer = new IntersectionObserver(observerCallback, {
    threshold: 0.1,
    rootMargin: '50px 0px -50px 0px'
  })

  const observeElements = (containerRef) => {
    if (containerRef.value) {
      const children = containerRef.value.querySelectorAll('.stagger-item')
      children.forEach(child => {
        observer.observe(child)
      })
    }
  }

  onUnmounted(() => {
    observer.disconnect()
  })

  return {
    elements,
    visibleElements,
    observeElements
  }
}

export function useParallax() {
  const parallaxElements = ref([])
  
  const updateParallax = () => {
    const scrolled = window.pageYOffset
    const rate = scrolled * -0.5
    
    parallaxElements.value.forEach(element => {
      if (element) {
        element.style.transform = `translateY(${rate}px)`
      }
    })
  }

  onMounted(() => {
    window.addEventListener('scroll', updateParallax)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', updateParallax)
  })

  return {
    parallaxElements
  }
}

export function useTypewriter(text, speed = 50) {
  const displayText = ref('')
  const isComplete = ref(false)
  const currentIndex = ref(0)

  const startTypewriter = () => {
    if (currentIndex.value < text.length) {
      displayText.value += text[currentIndex.value]
      currentIndex.value++
      
      setTimeout(() => {
        startTypewriter()
      }, speed)
    } else {
      isComplete.value = true
    }
  }

  const reset = () => {
    displayText.value = ''
    currentIndex.value = 0
    isComplete.value = false
  }

  return {
    displayText,
    isComplete,
    startTypewriter,
    reset
  }
}

export function useMouseTracker() {
  const mousePosition = ref({ x: 0, y: 0 })
  const isMouseMoving = ref(false)
  let timeoutId = null

  const updateMousePosition = (event) => {
    mousePosition.value = {
      x: event.clientX,
      y: event.clientY
    }
    
    isMouseMoving.value = true
    
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
      isMouseMoving.value = false
    }, 100)
  }

  onMounted(() => {
    window.addEventListener('mousemove', updateMousePosition)
  })

  onUnmounted(() => {
    window.removeEventListener('mousemove', updateMousePosition)
    clearTimeout(timeoutId)
  })

  return {
    mousePosition,
    isMouseMoving
  }
}

export function useScrollProgress() {
  const scrollProgress = ref(0)
  
  const updateScrollProgress = () => {
    const scrollTop = window.pageYOffset
    const docHeight = document.documentElement.scrollHeight - window.innerHeight
    const scrollPercent = (scrollTop / docHeight) * 100
    scrollProgress.value = Math.min(100, Math.max(0, scrollPercent))
  }

  onMounted(() => {
    window.addEventListener('scroll', updateScrollProgress)
    updateScrollProgress()
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', updateScrollProgress)
  })

  return {
    scrollProgress
  }
}

export function usePageTransition() {
  const isTransitioning = ref(false)
  const transitionName = ref('fade')

  const startTransition = (name = 'fade') => {
    isTransitioning.value = true
    transitionName.value = name
    
    setTimeout(() => {
      isTransitioning.value = false
    }, 300)
  }

  return {
    isTransitioning,
    transitionName,
    startTransition
  }
}