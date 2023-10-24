import React from "react";
import Image from "next/image";
import hadees from "../../public/images/hadees.svg";
import { Row, Col } from "antd";
export default function Home() {
  return (
    <div>
      <Row justify="center">
        <Col>
          <Image src={hadees} alt="Picture of the author" />
        </Col>
      </Row>
      <Row justify="center">
        <Col>
          <div
            style={{
              width: "1500",
              padding: "65px 120px 120px 65px",
              borderRadius: "21px",
              backgroundColor: "#fff",
            }}
          >
            <h1>The Prophet of Islam (peace be upon him) says:</h1>
            <p>
              “Dream are three fold, sometimes is divine guidance and glory from
              God, sometimes is sorrow from the devil, and sometimes are
              conflicts of daily living or . past events
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
}
