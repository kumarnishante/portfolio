
import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    // Initial check using matchMedia which is more efficient
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    
    // Update function to set isMobile state
    const updateIsMobile = () => {
      setIsMobile(mql.matches)
    }

    // Set initial value
    updateIsMobile()
    
    // Add event listener
    mql.addEventListener("change", updateIsMobile)
    
    // Cleanup
    return () => mql.removeEventListener("change", updateIsMobile)
  }, [])

  return !!isMobile
}
