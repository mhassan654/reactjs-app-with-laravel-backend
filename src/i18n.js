// * @Author: Muwonge Hassan Saava

// * @Email: hassansaava@gmail.com

// * @LinkedIn: https://www.linkedin.com/in/hassan-muwonge-4a4592144/

// * @Github: https://github.com/mhassan654

// * @GitLab: https://gitlab.com/hmuwonge

// * @Tel: +256-783-828977 / +256-704-348792
// * Web: https://muwongehassan.com

import i18next from 'i18next';
import Cookies from 'js-cookie'
import common_br from "./translations/br/common.json";
import common_en from "./translations/en/common.json";

i18next.init({
    interpolation: {escapeValue: false},  // React already does escaping
    lng: Cookies.get('lang') || 'en',                              // language to use
    resources: {
        en: {
            common: common_en               // 'common' is our custom namespace
        },
        br: {
            common: common_br
        },
    },
});