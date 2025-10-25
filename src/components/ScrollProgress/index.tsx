import React, { useState, useEffect } from 'react'
import './ScrollProgress.scss'

const ScrollProgress: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = (scrollTop / docHeight) * 100
      setScrollProgress(scrollPercent)
    }

    window.addEventListener('scroll', updateScrollProgress)
    return () => window.removeEventListener('scroll', updateScrollProgress)
  }, [])

  return (
    <div 
      className="scroll-progress" 
      role="progressbar" 
      aria-valuenow={Math.round(scrollProgress)} 
      aria-valuemin={0} 
      aria-valuemax={100}
      aria-label={`Progresso de rolagem: ${Math.round(scrollProgress)}%`}
    >
      <div 
        className="scroll-progress-bar" 
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  )
}

export default ScrollProgress
