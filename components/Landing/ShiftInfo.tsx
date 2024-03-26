import React from 'react'
import { Badge } from '../ui/badge'
import { MoonStar } from 'lucide-react'

type Props = {}

function ShiftInfo({}: Props) {
  return (
    <div className="flex flex-col pl-4">
          <h1 className="text-xl font-bold">Jorge Orantes Mira</h1>
          <h2 className="text-xs font-semibold pb-1">Packaging Engineer</h2>
          <h2 className="text-sm ">SKU: 
          <span className="text-sm font-semibold"> PILSENER 330ML - LLN2</span>
          </h2>
          <div className="pb-1">
            <Badge variant="active">
              Turno - Nocturno
              <MoonStar className="w-4 h-4 ml-2" />
            </Badge>
          </div>
        </div>
  )
}

export default ShiftInfo