import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import type { PlayerDetail } from "@/types/Player"

import { Separator } from "@/components/ui/separator"

interface ProfileHeroProps {
  player: {
    name: string
    classic: PlayerDetail | undefined
    rapid: PlayerDetail | undefined
    blitz: PlayerDetail | undefined
  }
}

export function ProfileHero(
    { player }: ProfileHeroProps
) {
    return (
        <div className="m-5">
            <Card>
                <CardHeader>
                    <CardTitle className="">
                        <span className="font-bold text-red-800">
                            { player.rapid?.title }
                        </span> { player.name }
                    </CardTitle>
                    <CardDescription>Resumen de Jugador</CardDescription>
                    <CardAction>{ player.rapid?.birthday }</CardAction>
                </CardHeader>
                <CardContent>
                    {/* 1. Parent container: columns on mobile, row on desktop, gap in between */}
                    <div className="flex flex-col md:flex-row w-full justify-between gap-8">
                        
                        {/* Left Column: Your existing profile metadata list */}
                        <div className="flex w-full flex-col gap-2 text-sm">
                            <dl className="flex items-center justify-between">
                                <dt>Categoria</dt>
                                <dd className="text-muted-foreground">{player.rapid?.category}</dd>
                            </dl>
                            <Separator />
                            <dl className="flex items-center justify-between">
                                <dt>Club</dt>
                                <dd className="text-muted-foreground">{player.rapid?.club || "N/A"}</dd>
                            </dl>
                            <Separator />
                            <dl className="flex items-center justify-between">
                                <dt>Factor K</dt>
                                <dd className="text-muted-foreground">{player.rapid?.k}</dd>
                            </dl>
                        </div>

                        {/* 2. Right Column: Your new element that stays on the right on large viewports */}
                        <div className="flex-1 min-w-70 bg-muted/30 border border-border p-4 rounded-md flex flex-col justify-center items-center">
                            {/* Example content: A neat little fast summary or user avatar placeholder */}
                            <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                                Estatus del Jugador
                            </span>
                            <span className="text-2xl font-bold text-green-600 mt-1">
                                Activo
                            </span>
                            <p className="text-xs text-muted-foreground text-center mt-2 max-w-60">
                                Federado listo para competir en torneos estatales oficiales.
                            </p>
                        </div>

                    </div>
                </CardContent>
            </Card>
        </div>
    )
}