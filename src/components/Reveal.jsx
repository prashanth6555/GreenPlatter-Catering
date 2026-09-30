import { useInView } from '../hooks/useInView'

export default function Reveal({ children, className = '', variant = 'reveal', delay = '' }) {
  const [ref, isVisible] = useInView()
  return (
    <div ref={ref} className={`${variant} ${delay} ${isVisible ? 'is-visible' : ''} ${className}`}>
      {children}
    </div>
  )
}
