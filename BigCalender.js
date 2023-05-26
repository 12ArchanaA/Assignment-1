import React from 'react'
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";


const BigCalender = () => {
  return (
    <div>
      <Fullcalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={"dayGridMonth"}
        headerToolbar={{
           start: "", // will normally be on the left. if RTL, will be on the right
           center: "title",
           end: "", // will normally be on the right. if RTL, will be on the left
        }}
        height={"73vh"}
      />
    </div>
  )
}

export default BigCalender