import { Separator } from "@/components/ui/separator"
import { ProfileHero } from "../components/profile-hero"
import { RatingSummary } from "../components/rating-summary-cards"
import { useParams } from "react-router-dom"
import { classic, rapid, blitz } from "@/features/rankings/mock/DummyPlayers"

export default function Profile() {
    const { id } = useParams<{ id: string }>()
    const player = {
        name: classic.find(p => p.id === Number(id))?.name || "",
        classic: classic.find(p => p.id === Number(id)),
        rapid: rapid.find(p => p.id === Number(id)),
        blitz: blitz.find(p => p.id === Number(id)),
    };

    // 2. Safety check: Ensure they exist in at least one format
    if (!player.classic && !player.rapid && !player.blitz) {
        return <div className="p-6 text-center text-red-500">Jugador no encontrado.</div>
    }

    return (
        <div className="mt-5">
            <ProfileHero player={player} />
            <Separator />
            <RatingSummary player={player} />
        </div>
    )
}