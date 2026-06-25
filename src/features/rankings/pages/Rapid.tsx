import PlayerTable from "../components/PlayerTable"
import { rapid } from "../mock/DummyPlayers"
import { columns } from "../components/Columns"

export default function Rapid() {
  return (
    <div className="container mx-auto py-10">
      <PlayerTable columns={columns} data={rapid} />
    </div>
  )
}