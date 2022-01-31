import React from 'react'
import { Accordion } from 'react-bootstrap'

function Questions({ title, desc }) {
  return (
    <div>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>{title}</Accordion.Header>
          <Accordion.Body>{desc}</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  )
}

export default Questions
