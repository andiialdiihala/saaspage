import { favicon, logo } from "@/assets";

type LogoProps = {
    variant?: "default" | "icon"
}

export const Logo = ({ variant = "default" }: LogoProps) => {
    return (
        <a href="" className="flex items-center gap-2">
            {
                variant === "default" && (
                    <img
                        src={logo}
                        alt="logo" 
                        width={150}
                        height={31}/>
                )
            }
            {
                variant === "icon" && (
                    <img
                        src={favicon}
                        alt="favicon"
                        width={32}
                        height={32}/>
                )
            }
            <span className="font-bold">SaaS</span>
        </a>
    )
}    
