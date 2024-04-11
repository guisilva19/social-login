// @ts-expect-error
import React from "react";
import {
  ContainerFormWeb,
  ContainerImageWeb,
  ImageWeb,
  ScreenWeb,
} from "./signIn-web-styles";
import {
  ContainerFormMobile,
  ContainerImageMobile,
  ImageMobile,
  ScreenMobile,
} from "./signIn-mobile.styles";
import backgroundLogin from "../../assets/background.png";
import logo from "../../assets/logo.png";
import logoBlack from "../../assets/logo-black.png";
import { Button, Input } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function SignIn() {
  const { t } = useTranslation();

  return (
    <>
      <ScreenWeb>
        <ContainerFormWeb>
          <img className="logo" src={logoBlack} alt="logo" />
          <form>
            <fieldset>
              <Input type="email" label={t("email")} className="input" />
            </fieldset>
            <fieldset>
              <Input type="password" label={t("password")} className="input" />
            </fieldset>
            <Button className="button">{t("signIn")}</Button>
          </form>
          <span>
            {t("dontHaveAcccount")} <Link to="/signup">{t("signUp")}</Link>
          </span>
        </ContainerFormWeb>
        <ContainerImageWeb>
          <ImageWeb src={backgroundLogin} alt="background" />
        </ContainerImageWeb>
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
            <Button className="button">{t("signIn")}</Button>
          </form>
          <span>
            {t("dontHaveAcccount")} <Link to="/signup">{t("signUp")}</Link>
          </span>
        </ContainerFormMobile>
        <ContainerImageMobile>
          <ImageMobile src={backgroundLogin} alt="background" />
        </ContainerImageMobile>
      </ScreenMobile>
    </>
  );
}
