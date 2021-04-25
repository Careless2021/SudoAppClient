import { withTranslation } from "react-i18next";
import Fade from "react-reveal/Fade";
import { Row, Col } from "antd";

import SvgIcon from "../../common/SvgIcon";

import * as S from "./styles";

const tiers = [
  {
    title: 'Google',
    icon: 'google.svg',
    href:'/google'
  },
  {
    title: 'Facebook',
    icon: 'icons8-facebook.svg',
    href:'/facebook'
  },
  {
    title: 'Github',
    icon: 'icons8-github.svg',
    href:'/github'
  },
  {
    title: 'Email/Pasword',
    icon: 'email2.svg',
    href:'/signin'
  }
];

const linkTo = (href) => {
  window.location.href = href;
}

const Accounts = ({ title, id, t }) => {
  return (
    <S.Container id={id}>
      <Fade left>
        <h6 style={{ textAlign: 'center', padding: '0 0 2rem 0'}}>{t(title) || "Invest with us by Signing in with"}</h6>
        <S.Cards>
          <Row type="flex" justify="space-between" align="middle">
            {tiers.map((item, i) => {
              return (
                <Col key={i} xs={24} sm={12} md={8} lg={6}>
                  <S.Card onClick={() => linkTo(item.href)} >
                    <SvgIcon src={item.icon} width="120px" height="120px" />
                    <p><i>{item.title}</i></p>
                  </S.Card>
                </Col>
              )
            })}
          </Row>
        </S.Cards>

      </Fade>
    </S.Container>
  );
};

export default withTranslation()(Accounts);