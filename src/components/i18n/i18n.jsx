"use client"
import { useTranslation } from "react-i18next"

import Flag from "./flag";
import { BrasilFlag, EuaFlag } from "../../assets";

//import as imagens da bandeiras

export default function I18n() {
    const { i18n } = useTranslation();

    const handlerChangeLanguage = (language) => {
        console.log("select language", language)
        i18n.changeLanguage(language);
    }

    const selectedLanguage = i18n.language;

    return (
        <div className="flex">
            <Flag
                className="ml-3 hover:cursor-pointer"
                image={BrasilFlag}
                isSelected={selectedLanguage === 'pt-BR'}
                onClick={() => handlerChangeLanguage('pt-BR')}
            />
            <Flag
                className="ml-3 hover:cursor-pointer"
                image={EuaFlag}
                isSelected={selectedLanguage === 'en-US'}
                onClick={() => handlerChangeLanguage('en-US')}
            />
        </div>
    )
}