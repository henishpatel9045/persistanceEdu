import React, { useContext, useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useMedia } from 'use-media'
import { AchievementsContext } from '../../context/SiteContext'
import { AchievementsData } from '../../data/data'
import SectionHeading from '../SectionHeading'

import ACard from './ACard'

function AchieveHeader() {
  const { aData: data } = useContext(AchievementsContext);

  const isSM = useMedia({ maxWidth: "768px" })
  const isGAPSupported = CSS.supports("gap: 1rem");

  return (
    <Row className='pt-5'>
      <Col xs={12} className="">
        <SectionHeading title="Achievements" />
      </Col>
      <Col xs={12}>
        <Row className={`d-flex align-items-center justify-content-center p-${isSM ? "3" : "5"}`}
          style={{
            rowGap: "1rem",

          }}>
          {data?.map((item, index) => {
            return (
              <Col key={index} xs={12} sm={6} lg={4} style={{
                marginRight: isGAPSupported ? "0rem" : "1rem",
                marginBottom: isGAPSupported ? "0rem" : "1rem",
              }}>
                <ACard desc={item.title} />
              </Col>
            )
          })}
        </Row>
      </Col>
    </Row>
  )
}

export default AchieveHeader