import PlayerTable from "../components/PlayerTable"
import { classic } from "../mock/DummyPlayers"
import { columns } from "../components/Columns"

export default function Classic() {
  return (
    <div className="container mx-auto py-10">
      <PlayerTable columns={columns} data={classic} />
    </div>
  )
}