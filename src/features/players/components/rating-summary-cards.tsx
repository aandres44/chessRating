import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { RatingMetricsGrid } from "./rating-metrics-grid"
import { type PlayerDetail } from "@/types/Player"

interface ProfileHistoryProps {
  player: {
    name: string
    classic: PlayerDetail | undefined
    rapid: PlayerDetail | undefined
    blitz: PlayerDetail | undefined
  }
}

export function RatingSummary({ player }: ProfileHistoryProps) {
    return (
        <div className="m-5">
            <Card>
                <CardHeader>
                    <CardTitle className="">
                        <span className="font-semibold">
                            Resumen de rating estatal
                        </span>
                    </CardTitle>
                    <CardDescription>Actual</CardDescription>
                    <CardAction>"Fecha de nacimiento"</CardAction>
                </CardHeader>
                <CardContent>
                    <RatingMetricsGrid title="Estandard" rating={player.classic!} />
                    <RatingMetricsGrid title="Rapid" rating={player.rapid!} />
                    <RatingMetricsGrid title="Blitz" rating={player.blitz!} />
                </CardContent>
                <CardFooter>
                    <p>Historial mensual proximamente!</p>
                </CardFooter>
            </Card>
        </div>
    )
}