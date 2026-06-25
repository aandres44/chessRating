import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"

import { Outlet, Link } from "react-router-dom"

export default function Navbar() {
    return (
        <div className="flex min-h-screen flex-col">
            <div className="w-full max-w-281.5 mx-auto px-4 p-5 flex items-center justify-between border-b border-border">
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Ratings</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                    <Link to="/rating/clasico">Clasico</Link>
                                </NavigationMenuLink>
                                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                    <Link to="/rating/rapido">Rapido</Link>
                                </NavigationMenuLink>
                                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                    <Link to="/rating/blitz">Blitz</Link>
                                </NavigationMenuLink>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>

                {/* Optional: Clean flex containers to hold right-aligned actions like Login buttons */}
                <div className="flex items-center space-x-2">
                    {/* Auth links could go here cleanly */}
                    {/*<NavigationMenuItem>
                            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                <Link to="/docs">Iniciar sesion</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                <Link to="/docs">Crear Cuenta</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>*/}
                </div>
            </div>
             {/* max-w-[1126px] is perfectly restored here to anchor your layout bounds */}
            <main className="w-full max-w-281.5 mx-auto px-4 flex-1">
                {/* Outlet acts as a dynamic target placeholder for your active child views */}
                <Outlet /> 
            </main>
        </div>
    )
}