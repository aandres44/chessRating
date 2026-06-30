import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import { type PlayerDetail } from "@/types/Player"

export function RatingMetricsGrid(
  { title, rating }: { title: string, rating: PlayerDetail } 
) {
  return (
    <div className="mt-5">
      <span className="text-2xl">{title}</span>

      {/* Reemplaza con grid-cols-1 md:grid-cols-3 en pantallas pequeñas para que sea responsivo*/}
      <div className="grid grid-cols-3 gap-4 w-full">
        
        {/* Tarjeta 1: Rating Actual */}
        <Card className="bg-[#fcfcfa] border border-[#e6e4dc] shadow-none rounded-sm">
          <CardHeader className="p-4 pb-0">
            <CardTitle className="text-[10px] uppercase tracking-wider text-[#9ca3af] font-mono">
              Rating Actual
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 pt-1">
            {/* Se usa font-serif para igualar la tipografía elegante de los números */}
            <span className="text-3xl font-serif font-medium text-[#08060d]">
              {rating.rating}
            </span>
            <p className="text-xs text-green-600 font-mono mt-1">
              +0 este mes
            </p>
          </CardContent>
        </Card>

        {/* Tarjeta 2: Mejor Histórico */}
        <Card className="bg-[#f5f6fa] border border-[#dbe0f0] shadow-none rounded-sm">
          <CardHeader className="p-4 pb-0">
            <CardTitle className="text-[10px] uppercase tracking-wider text-[#9ca3af] font-mono">
              Mejor Histórico
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 pt-1">
            <span className="text-3xl font-serif font-medium text-[#2b4c7e]">
              1934
            </span>
            <p className="text-xs text-muted-foreground font-mono mt-1">
              May 24
            </p>
          </CardContent>
        </Card>

        {/* Tarjeta 3: Posición Nacional */}
        <Card className="bg-[#fcfcfa] border border-[#e6e4dc] shadow-none rounded-sm">
          <CardHeader className="p-4 pb-0">
            <CardTitle className="text-[10px] uppercase tracking-wider text-[#9ca3af] font-mono">
              Posición Nacional
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 pt-1">
            <span className="text-3xl font-serif font-medium text-[#08060d]">
              #{rating.id}
            </span>
            <p className="text-xs text-red-600 font-mono mt-1">
              ↓ 5 vs mes anterior
            </p>
          </CardContent>
        </Card>

      </div>
    </div>
    
  )
}
