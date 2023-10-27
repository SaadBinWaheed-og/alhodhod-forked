"use client";
import { Row, Col } from "antd";
import { ArabesqueIcon } from "../common/customIcons";
import * as Styled from "./HomePageContent.styled";
import { Advertisement } from "../common/components/Advertisement";
export const HomePageContent: React.FC = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Styled.HomePageContainer>
          <Row justify={"center"} style={{ paddingTop: "120px" }}>
            <Styled.ArabesqueContainer span={24}>
              <ArabesqueIcon />
            </Styled.ArabesqueContainer>
            <Col span={24}>
              <Styled.HadeesSection>
                <Styled.HadeesSectionTitle>
                  The Prophet of Islam (peace be upon him) says:
                </Styled.HadeesSectionTitle>
                <Styled.HadeesSectionDescription>
                  {` “Dream are three fold, sometimes is divine guidance and glory
                  from God, sometimes is sorrow from the devil, and sometimes
                  are conflicts of daily living or past events"`}
                </Styled.HadeesSectionDescription>
              </Styled.HadeesSection>
            </Col>
          </Row>
          <Row>
            <Col>
              <Advertisement />
            </Col>
          </Row>
        </Styled.HomePageContainer>
      </div>
    </>
  );
};
