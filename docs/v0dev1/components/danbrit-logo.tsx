import Image from "next/image"
import { cn } from "@/lib/utils"

interface DanbritLogoProps {
  variant?: "full" | "icon"
  className?: string
  inverted?: boolean
}

export function DanbritLogo({ variant = "full", className, inverted = false }: DanbritLogoProps) {
  if (variant === "icon") {
    return (
      <div className={cn("relative", className)}>
        <Image src="/danbrit-battery-company-d-logo-orange-icon.jpg" alt="Danbrit" width={40} height={40} className="object-contain" />
      </div>
    )
  }

  return (
    <div className={cn("relative", className)}>
      <Image
        src="/danbrit-direct-battery-company-logo-professional-o.jpg"
        alt="Danbrit Direct"
        width={160}
        height={40}
        className={cn("object-contain", inverted && "brightness-0 invert")}
      />
    </div>
  )
}
