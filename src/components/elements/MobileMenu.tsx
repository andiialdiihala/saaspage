import type { MenuItem } from "@/types"
import { Button } from "@/components/ui/button"
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { ChevronsDown } from "lucide-react"
import { Separator } from "@radix-ui/react-separator"

type MobileMenuProps = {
    navMenu: MenuItem[]
}

export const MobileMenu = ({ navMenu }: MobileMenuProps) => {
    return (
        <div>
            <ul className="mb-3">
                {navMenu.map(({ href, label, submenu }, index) => (
                    <li key={index}>
                        {submenu ? (
                            <Collapsible>
                                <CollapsibleTrigger asChild>
                                    <Button
                                        variant="ghost"
                                        className="w-full justify-between">
                                            {label}

                                        <ChevronsDown />
                                    </Button>
                                </CollapsibleTrigger>

                                <CollapsibleContent className="ps-2">
                                    <ul className="border-l border-muted-foreground/20">
                                        {submenu.map(
                                            ({ href, label }, index) => (
                                                <li key={index}>
                                                    <Button
                                                        asChild
                                                        variant="ghost"
                                                        className="w-full justify-start">
                                                        <a href={href}>
                                                            {label}
                                                        </a>
                                                    </Button>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </CollapsibleContent>
                            </Collapsible>
                        ) : (
                            <Button
                                asChild
                                variant="ghost"
                                className="w-full justify-start">
                                <a href={href}>{label}</a>
                            </Button>
                        )}
                    </li>
                ))
                }
            </ul >
            <Separator className="bg-muted-foreground/20"/>

            <div className="flex mt-2 gap-2 items-center">
                <Button
                    variant="ghost"
                    className="justify-start">
                        Sign in
                </Button>

                <Button
                    className="bg-foreground text-background hover:bg-foreground/80">
                        Free trial
                </Button>
            </div>
        </div >
    )
}