// @ts-expect-error
import React from 'react';
import {
	ContainerFormWeb,
	ContainerImageWeb,
	ImageWeb,
	ScreenWeb,
} from './signUp-web-styles';
import {
  ContainerFormMobile,
  ContainerImageMobile,
  ImageMobile,
  ScreenMobile,
} from "./signUp-mobile-styles";
import backgroundRegister from "../../assets/background-register.png";
import logo from "../../assets/logo.png";
import logoBlack from "../../assets/logo-black.png";
import { Button, Input } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function SignUp() {
  const { t } = useTranslation();

  return (
    <>
      <ScreenWeb>
        <ContainerImageWeb>
          <ImageWeb src={backgroundRegister} alt="background" />
        </ContainerImageWeb>
        <ContainerFormWeb>
          <img className="logo" src={logoBlack} alt="logo" />
          <form>
            <fieldset>
              <Input type="email" label={t("email")} className="input" />
            </fieldset>
            <fieldset>
              <Input type="password" label={t("password")} className="input" />
            </fieldset>
            <Button className="button">{t("signUp")}</Button>
          </form>
          <span>
            {t("alreadyRegisted")} <Link to="/">{t("signIn")}</Link>
          </span>
        </ContainerFormWeb>
      </ScreenWeb>

      <ScreenMobile>
        <ContainerFormMobile>
          <img className="logo" src={logo} alt="logo" />
          <form>
            <fieldset>
              <Input type="email" label={t("email")} className="input" />
            </fieldset>
            <fieldset>
              <Input type="password" label={t("password")} className="input" />
            </fieldset>
            <Button className="button">{t("signUp")}</Button>
          </form>
          <span>
            {t("alreadyRegisted")} <Link to="/">{t("signIn")}</Link>
          </span>
        </ContainerFormMobile>
        <ContainerImageMobile>
          <ImageMobile src={backgroundRegister} alt="background" />
        </ContainerImageMobile>
      </ScreenMobile>
    </>
  );
}
