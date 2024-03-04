let countries = ["أفغانستان",
    "جزر آلاند",
    "ألبانيا",
    "الجزائر",
    "ساموا الأمريكية",
    "أندورا",
    "أنغولا",
    "أنغيلا",
    "القارة القطبية الجنوبية",
    "أنتيغوا وبربودا",
    "الأرجنتين",
    "أرمينيا",
    "أروبا",
    "جزيرة الصعود",
    "أستراليا",
    "النمسا",
    "أذربيجان",
    "جزر البهاما",
    "البحرين",
    "بنغلاديش",
    "بربادوس",
    "بيلاروسيا",
    "بلجيكا",
    "بليز",
    "بنين",
    "برمودا",
    "بوتان",
    "بوليفيا",
    "البوسنة والهرسك",
    "بوتسوانا",
    "البرازيل",
    "إقليم المحيط البريطاني الهندي",
    "بروناي دار السلام",
    "بلغاريا",
    "بوركينا فاسو",
    "بوروندي",
    "كمبوديا",
    "الكاميرون",
    "كندا",
    "الرأس الأخضر",
    "جزر كايمان",
    "جمهورية افريقيا الوسطى",
    "تشاد",
    "تشيلي",
    "الصين",
    "جزيرة عيد الميلاد",
    "جزر كوكوس (كيلينغ),",
    "كولومبيا",
    "جزر القمر",
    "الكونغو",
    "جزر كوك",
    "كوستا ريكا",
    "كرواتيا",
    "كوبا",
    "قبرص",
    "الجمهورية التشيكية",
    "جمهورية الكونغو الديموقراطية",
    "الدنمارك",
    "جيبوتي",
    "دومينيكا",
    "جمهورية الدومينيكان",
    "الإكوادور",
    "مصر",
    "السلفادور",
    "غينيا الإستوائية",
    "إريتريا",
    "إستونيا",
    "إيسواتيني",
    "أثيوبيا",
    "جزر فوكلاند (مالفيناس)",
    "جزر فاروس",
    "فيجي",
    "فنلندا",
    "فرنسا",
    "غيانا الفرنسية",
    "بولينيزيا الفرنسية",
    "الجابون",
    "غامبيا",
    "جورجيا",
    "ألمانيا",
    "غانا",
    "جبل طارق",
    "اليونان",
    "الأرض الخضراء",
    "غرينادا",
    "جوادلوب",
    "غوام",
    "غواتيمالا",
    "غيرنسي",
    "غينيا",
    "غينيا بيساو",
    "غيانا",
    "هايتي",
    "الكرسي الرسولي (دولة الفاتيكان)",
    "هندوراس",
    "هونج كونج",
    "هنغاريا",
    "أيسلندا",
    "الهند",
    "إندونيسيا",
    "ايران",
    "العراق",
    "أيرلندا",
    "جزيرة آيل أوف مان",
    "إسرائيل",
    "إيطاليا",
    "ساحل العاج / كوت ديفوار",
    "جامايكا",
    "اليابان",
    "جيرسي",
    "الأردن",
    "كازاخستان",
    "كينيا",
    "كيريباتي",
    "كوريا, جمهورية كوريا الشعبية الديمقراطية",
    "كوريا, جمهورية كوريا الجنوبية",
    "كوسوفو",
    "الكويت",
    "قيرغيزستان",
    "لاوس",
    "لاتفيا",
    "لبنان",
    "ليسوتو",
    "ليبيريا",
    "ليبيا",
    "ليختنشتاين",
    "ليتوانيا",
    "لوكسمبورغ",
    "ماكاو",
    "مدغشقر",
    "ملاوي",
    "ماليزيا",
    "جزر المالديف",
    "مالي",
    "مالطا",
    "جزر مارشال",
    "مارتينيك",
    "موريتانيا",
    "موريشيوس",
    "مايوت",
    "المكسيك",
    "ميكرونيزيا, ولايات ميكرونيزيا الموحدة",
    "مولدوفا",
    "موناكو",
    "منغوليا",
    "الجبل الأسود",
    "مونتسيرات",
    "المغرب",
    "موزمبيق",
    "ميانمار",
    "ناميبيا",
    "ناورو",
    "نيبال",
    "هولندا",
    "كاليدونيا الجديدة",
    "نيوزيلندا",
    "نيكاراغوا",
    "النيجر",
    "نيجيريا",
    "نيوي",
    "جزيرة نورفولك",
    "مقدونيا الشمالية",
    "جزر مريانا الشمالية",
    "النرويج",
    "سلطنة عمان",
    "باكستان",
    "بالاو",
    "فلسطين",
    "بنما",
    "بابوا غينيا الجديدة",
    "باراجواي",
    "بيرو",
    "فيلبيني",
    "بيتكيرن",
    "بولندا",
    "البرتغال",
    "بورتوريكو",
    "دولة قطر",
    "جمع شمل",
    "رومانيا",
    "روسيا",
    "رواندا",
    "سانت بارتيليمي",
    "سانت هيلانة وأسنشن وتريستان دا كونها",
    "سانت كيتس ونيفيس",
    "القديسة لوسيا",
    "القديس مارتن",
    "سانت بيير وميكلون",
    "سانت فنسنت وجزر غرينادين",
    "ساموا",
    "سان مارينو",
    "ساو تومي وبرينسيبي",
    "المملكة العربية السعودية",
    "السنغال",
    "صربيا",
    "سيشيل",
    "سيرا ليون",
    "سنغافورة",
    "سينت مارتن",
    "سلوفاكيا",
    "سلوفينيا",
    "جزر سليمان",
    "الصومال",
    "جنوب أفريقيا",
    "جورجيا الجنوبية وجزر ساندويتش الجنوبية",
    "جنوب السودان",
    "إسبانيا",
    "سيريلانكا",
    "السودان",
    "سورينام",
    "سفالبارد وجان ماين",
    "السويد",
    "سويسرا",
    "الجمهورية العربية السورية",
    "تايوان",
    "طاجيكستان",
    "تنزانيا, جمهورية تنزانيا المتحدة",
    "تايلاند",
    "تيمور الشرقية",
    "توجو",
    "توكيلاو",
    "تونغا",
    "ترينداد وتوباغو",
    "تونس",
    "ديك رومى",
    "تركمانستان",
    "جزر تركس وكايكوس",
    "توفالو",
    "أوغندا",
    "أوكرانيا",
    "الإمارات العربية المتحدة",
    "المملكة المتحدة",
    "الولايات المتحدة",
    "أوروغواي",
    "أوزبكستان",
    "فانواتو",
    "فنزويلا, جمهورية فنزويلا البوليفارية",
    "فيتنام",
    "جزر العذراء البريطانية",
    "جزر فيرجن, الولايات المتحدة",
    "واليس وفوتونا",
    "اليمن",
    "زامبيا",
    "زيمبابوي"];


const phoneCodes = [
    {
        "name_en": "Afghanistan",
        "code": "+93",
        "iso": "AF",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/af.svg",
        "mask": "##-###-####",
        "name_ru": "Афганистан"
    },
    {
        "name_en": "Aland Islands",
        "code": "+358",
        "iso": "AX",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/ax.svg",
        "mask": "(###)###-##-##",
        "name_ru": "Аландские острова"
    },
    {
        "name_en": "Albania",
        "code": "+355",
        "iso": "AL",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/al.svg",
        "mask": "(###)###-###",
        "name_ru": "Албания"
    },
    {
        "name_en": "Algeria",
        "code": "+213",
        "iso": "DZ",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/dz.svg",
        "mask": "##-###-####",
        "name_ru": "Алжир"
    },
    {
        "name_en": "American Samoa",
        "code": "+1",
        "iso": "AS",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/as.svg",
        "mask": "(684)###-####",
        "name_ru": "Американское Самоа"
    },
    {
        "name_en": "Andorra",
        "code": "+376",
        "iso": "AD",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/ad.svg",
        "mask": "###-###",
        "name_ru": "Андорра"
    },
    {
        "name_en": "Angola",
        "code": "+244",
        "iso": "AO",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/ao.svg",
        "mask": "(###)###-###",
        "name_ru": "Ангола"
    },
    {
        "name_en": "Anguilla",
        "code": "+1",
        "iso": "AI",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/ai.svg",
        "mask": "(264)###-####",
        "name_ru": "Ангилья"
    },
    {
        "name_en": "Antarctica",
        "code": "+672",
        "iso": "AQ",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/aq.svg",
        "mask": "1##-###",
        "name_ru": "Антарктида"
    },
    {
        "name_en": "Antigua and Barbuda",
        "code": "+1",
        "iso": "AG",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/ag.svg",
        "mask": "(268)###-####",
        "name_ru": "Антигуа и Барбуда"
    },
    {
        "name_en": "Argentina",
        "code": "+54",
        "iso": "AR",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/ar.svg",
        "mask": "(###)###-####",
        "name_ru": "Аргентина"
    },
    {
        "name_en": "Armenia",
        "code": "+374",
        "iso": "AM",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/am.svg",
        "mask": "##-###-###",
        "name_ru": "Армения"
    },
    {
        "name_en": "Aruba",
        "code": "+297",
        "iso": "AW",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/aw.svg",
        "mask": "###-####",
        "name_ru": "Аруба"
    },
    {
        "name_en": "Ascension Island",
        "code": "+247",
        "iso": "AC",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/sh.svg",
        "mask": "####",
        "name_ru": "Остров Вознесения"
    },
    {
        "name_en": "Australia",
        "code": "+61",
        "iso": "AU",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/au.svg",
        "mask": "#-####-####",
        "name_ru": "Австралия"
    },
    {
        "name_en": "Austria",
        "code": "+43",
        "iso": "AT",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/at.svg",
        "mask": "(###)###-####",
        "name_ru": "Австрия"
    },
    {
        "name_en": "Azerbaijan",
        "code": "+994",
        "iso": "AZ",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/az.svg",
        "mask": "##-###-##-##",
        "name_ru": "Азербайджан"
    },
    {
        "name_en": "Bahamas",
        "code": "+1",
        "iso": "BS",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/bs.svg",
        "mask": "(242)###-####",
        "name_ru": "Багамы"
    },
    {
        "name_en": "Bahrain",
        "code": "+973",
        "iso": "BH",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/bh.svg",
        "mask": "####-####",
        "name_ru": "Бахрейн"
    },
    {
        "name_en": "Bangladesh",
        "code": "+880",
        "iso": "BD",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/bd.svg",
        "mask": "1###-######",
        "name_ru": "Бангладеш"
    },
    {
        "name_en": "Barbados",
        "code": "+1",
        "iso": "BB",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/bb.svg",
        "mask": "(246)###-####",
        "name_ru": "Барбадос"
    },
    {
        "name_en": "Belarus",
        "code": "+375",
        "iso": "BY",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/by.svg",
        "mask": "(##)###-##-##",
        "name_ru": "Беларусь"
    },
    {
        "name_en": "Belgium",
        "code": "+32",
        "iso": "BE",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/be.svg",
        "mask": "(###)###-###",
        "name_ru": "Бельгия"
    },
    {
        "name_en": "Belize",
        "code": "+501",
        "iso": "BZ",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/bz.svg",
        "mask": "###-####",
        "name_ru": "Белиз"
    },
    {
        "name_en": "Benin",
        "code": "+229",
        "iso": "BJ",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/bj.svg",
        "mask": "##-##-####",
        "name_ru": "Бенин"
    },
    {
        "name_en": "Bermuda",
        "code": "+1",
        "iso": "BM",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/bm.svg",
        "mask": "(441)###-####",
        "name_ru": "Бермудские острова"
    },
    {
        "name_en": "Bhutan",
        "code": "+975",
        "iso": "BT",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/bt.svg",
        "mask": ["17-###-###", "77-###-###", "#-###-###"],
        "name_ru": "Бутан"
    },
    {
        "name_en": "Bolivia",
        "code": "+591",
        "iso": "BO",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/bo.svg",
        "mask": "#-###-####",
        "name_ru": "Боливия"
    },
    {
        "name_en": "Bosnia and Herzegovina",
        "code": "+387",
        "iso": "BA",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/ba.svg",
        "mask": ["##-####", "##-#####"],
        "name_ru": "Босния и Герцеговина"
    },
    {
        "name_en": "Botswana",
        "code": "+267",
        "iso": "BW",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/bw.svg",
        "mask": "##-###-###",
        "name_ru": "Ботсвана"
    },
    {
        "name_en": "Brazil",
        "code": "+55",
        "iso": "BR",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/br.svg",
        "mask": ["(##)####-####", "(##)#####-####"],
        "name_ru": "Бразилия"
    },
    {
        "name_en": "British Indian Ocean Territory",
        "code": "+246",
        "iso": "IO",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/io.svg",
        "mask": "###-####",
        "name_ru": "Британская территория Индийского океана"
    },
    {
        "name_en": "Brunei Darussalam",
        "code": "+673",
        "iso": "BN",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/bn.svg",
        "mask": "###-####",
        "name_ru": "Бруней-Даруссалам"
    },
    {
        "name_en": "Bulgaria",
        "code": "+359",
        "iso": "BG",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/bg.svg",
        "mask": "(###)###-###",
        "name_ru": "Болгария"
    },
    {
        "name_en": "Burkina Faso",
        "code": "+226",
        "iso": "BF",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/bf.svg",
        "mask": "##-##-####",
        "name_ru": "Буркина-Фасо"
    },
    {
        "name_en": "Burundi",
        "code": "+257",
        "iso": "BI",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/bi.svg",
        "mask": "##-##-####",
        "name_ru": "Бурунди"
    },
    {
        "name_en": "Cambodia",
        "code": "+855",
        "iso": "KH",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/kh.svg",
        "mask": "##-###-###",
        "name_ru": "Камбоджа"
    },
    {
        "name_en": "Cameroon",
        "code": "+237",
        "iso": "CM",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/cm.svg",
        "mask": "####-####",
        "name_ru": "Камерун"
    },
    {
        "name_en": "Canada",
        "code": "+1",
        "iso": "CA",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/ca.svg",
        "mask": "(###)###-####",
        "name_ru": "Канада"
    },
    {
        "name_en": "Cape Verde",
        "code": "+238",
        "iso": "CV",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/cv.svg",
        "mask": "(###)##-##",
        "name_ru": "Кабо-Верде"
    },
    {
        "name_en": "Cayman Islands",
        "code": "+1",
        "iso": "KY",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/ky.svg",
        "mask": "(345)###-####",
        "name_ru": "Каймановы острова"
    },
    {
        "name_en": "Central African Republic",
        "code": "+236",
        "iso": "CF",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/cf.svg",
        "mask": "##-##-####",
        "name_ru": "Центрально-Африканская Республика"
    },
    {
        "name_en": "Chad",
        "code": "+235",
        "iso": "TD",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/td.svg",
        "mask": "##-##-##-##",
        "name_ru": "Чад"
    },
    {
        "name_en": "Chile",
        "code": "+56",
        "iso": "CL",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/cl.svg",
        "mask": "#-####-####",
        "name_ru": "Чили"
    },
    {
        "name_en": "China",
        "code": "+86",
        "iso": "CN",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/cn.svg",
        "mask": ["(###)####-###", "(###)####-####", "##-#####-#####"],
        "name_ru": "Китай"
    },
    {
        "name_en": "Christmas Island",
        "code": "+61",
        "iso": "CX",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/cx.svg",
        "mask": "#-####-####",
        "name_ru": "Остров Рождества"
    },
    {
        "name_en": "Cocos (Keeling) Islands",
        "code": "+61",
        "iso": "CC",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/cc.svg",
        "mask": "#-####-####",
        "name_ru": "Кокосовые (Килинг) острова"
    },
    {
        "name_en": "Colombia",
        "code": "+57",
        "iso": "CO",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/co.svg",
        "mask": "(###)###-####",
        "name_ru": "Колумбия"
    },
    {
        "name_en": "Comoros",
        "code": "+269",
        "iso": "KM",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/km.svg",
        "mask": "##-#####",
        "name_ru": "Коморские острова"
    },
    {
        "name_en": "Congo",
        "code": "+242",
        "iso": "CG",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/cg.svg",
        "mask": "##-#####",
        "name_ru": "Конго"
    },
    {
        "name_en": "Cook Islands",
        "code": "+682",
        "iso": "CK",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/ck.svg",
        "mask": "##-###",
        "name_ru": "Острова Кука"
    },
    {
        "name_en": "Costa Rica",
        "code": "+506",
        "iso": "CR",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/cr.svg",
        "mask": "####-####",
        "name_ru": "Коста-Рика"
    },
    {
        "name_en": "Croatia",
        "code": "+385",
        "iso": "HR",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/hr.svg",
        "mask": "##-###-###",
        "name_ru": "Хорватия"
    },
    {
        "name_en": "Cuba",
        "code": "+53",
        "iso": "CU",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/cu.svg",
        "mask": "#-###-####",
        "name_ru": "Куба"
    },
    {
        "name_en": "Cyprus",
        "code": "+357",
        "iso": "CY",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/cy.svg",
        "mask": "##-###-###",
        "name_ru": "Кипр"
    },
    {
        "name_en": "Czech Republic",
        "code": "+420",
        "iso": "CZ",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/cz.svg",
        "mask": "(###)###-###",
        "name_ru": "Чешская Республика"
    },
    {
        "name_en": "Democratic Republic of the Congo",
        "code": "+243",
        "iso": "CD",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/cd.svg",
        "mask": "(###)###-###",
        "name_ru": "Демократическая Республика Конго"
    },
    {
        "name_en": "Denmark",
        "code": "+45",
        "iso": "DK",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/dk.svg",
        "mask": "##-##-##-##",
        "name_ru": "Дания"
    },
    {
        "name_en": "Djibouti",
        "code": "+253",
        "iso": "DJ",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/dj.svg",
        "mask": "##-##-##-##",
        "name_ru": "Джибути"
    },
    {
        "name_en": "Dominica",
        "code": "+1",
        "iso": "DM",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/dm.svg",
        "mask": "(767)###-####",
        "name_ru": "Доминика"
    },
    {
        "name_en": "Dominican Republic",
        "code": "+1",
        "iso": "DO",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/do.svg",
        "mask": ["(809)###-####", "(829)###-####", "(849)###-####"],
        "name_ru": "Доминиканская Республика"
    },
    {
        "name_en": "Ecuador",
        "code": "+593",
        "iso": "EC",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/ec.svg",
        "mask": ["#-###-####", "##-###-####"],
        "name_ru": "Эквадор"
    },
    {
        "name_en": "Egypt",
        "code": "+20",
        "iso": "EG",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/eg.svg",
        "mask": "(###)###-####",
        "name_ru": "Египет"
    },
    {
        "name_en": "El Salvador",
        "code": "+503",
        "iso": "SV",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/sv.svg",
        "mask": "##-##-####",
        "name_ru": "Сальвадор"
    },
    {
        "name_en": "Equatorial Guinea",
        "code": "+240",
        "iso": "GQ",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/gq.svg",
        "mask": "##-###-####",
        "name_ru": "Экваториальная Гвинея"
    },
    {
        "name_en": "Eritrea",
        "code": "+291",
        "iso": "ER",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/er.svg",
        "mask": "#-###-###",
        "name_ru": "Эритрея"
    },
    {
        "name_en": "Estonia",
        "code": "+372",
        "iso": "EE",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/ee.svg",
        "mask": ["###-####", "####-####"],
        "name_ru": "Эстония"
    },
    {
        "name_en": "Eswatini",
        "code": "+268",
        "iso": "SZ",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/sz.svg",
        "mask": "##-##-####",
        "name_ru": "Эсватини"
    },
    {
        "name_en": "Ethiopia",
        "code": "+251",
        "iso": "ET",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/et.svg",
        "mask": "##-###-####",
        "name_ru": "Эфиопия"
    },
    {
        "name_en": "Falkland Islands (Malvinas)",
        "code": "+500",
        "iso": "FK",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/fk.svg",
        "mask": "#####",
        "name_ru": "Фолклендские (Мальвинские) острова"
    },
    {
        "name_en": "Faroe Islands",
        "code": "+298",
        "iso": "FO",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/fo.svg",
        "mask": "###-###",
        "name_ru": "Фарерские острова"
    },
    {
        "name_en": "Fiji",
        "code": "+679",
        "iso": "FJ",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/fj.svg",
        "mask": "##-#####",
        "name_ru": "Фиджи"
    },
    {
        "name_en": "Finland",
        "code": "+358",
        "iso": "FI",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/fi.svg",
        "mask": "(###)###-##-##",
        "name_ru": "Финляндия"
    },
    {
        "name_en": "France",
        "code": "+33",
        "iso": "FR",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/fr.svg",
        "mask": "(###)###-###",
        "name_ru": "Франция"
    },
    {
        "name_en": "French Guiana",
        "code": "+594",
        "iso": "GF",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/gf.svg",
        "mask": "#####-####",
        "name_ru": "Французская Гвиана"
    },
    {
        "name_en": "French Polynesia",
        "code": "+689",
        "iso": "PF",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/pf.svg",
        "mask": "##-##-##",
        "name_ru": "Французская Полинезия"
    },
    {
        "name_en": "Gabon",
        "code": "+241",
        "iso": "GA",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/ga.svg",
        "mask": "#-##-##-##",
        "name_ru": "Габон"
    },
    {
        "name_en": "Gambia",
        "code": "+220",
        "iso": "GM",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/gm.svg",
        "mask": "(###)##-##",
        "name_ru": "Гамбия"
    },
    {
        "name_en": "Georgia",
        "code": "+995",
        "iso": "GE",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/ge.svg",
        "mask": "(###)###-###",
        "name_ru": "Грузия"
    },
    {
        "name_en": "Germany",
        "code": "+49",
        "iso": "DE",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/de.svg",
        "mask": ["###-###", "(###)##-##", "(###)##-###", "(###)##-####", "(###)###-####", "(####)###-####"],
        "name_ru": "Германия"
    },
    {
        "name_en": "Ghana",
        "code": "+233",
        "iso": "GH",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/gh.svg",
        "mask": "(###)###-###",
        "name_ru": "Гана"
    },
    {
        "name_en": "Gibraltar",
        "code": "+350",
        "iso": "GI",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/gi.svg",
        "mask": "###-#####",
        "name_ru": "Гибралтар"
    },
    {
        "name_en": "Greece",
        "code": "+30",
        "iso": "GR",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/gr.svg",
        "mask": "(###)###-####",
        "name_ru": "Греция"
    },
    {
        "name_en": "Greenland",
        "code": "+299",
        "iso": "GL",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/gl.svg",
        "mask": "##-##-##",
        "name_ru": "Гренландия"
    },
    {
        "name_en": "Grenada",
        "code": "+1",
        "iso": "GD",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/gd.svg",
        "mask": "(473)###-####",
        "name_ru": "Гренада"
    },
    {
        "name_en": "Guadeloupe",
        "code": "+590",
        "iso": "GP",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/gp.svg",
        "mask": "(###)###-###",
        "name_ru": "Гваделупа"
    },
    {
        "name_en": "Guam",
        "code": "+1",
        "iso": "GU",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/gu.svg",
        "mask": "(671)###-####",
        "name_ru": "Гуам"
    },
    {
        "name_en": "Guatemala",
        "code": "+502",
        "iso": "GT",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/gt.svg",
        "mask": "#-###-####",
        "name_ru": "Гватемала"
    },
    {
        "name_en": "Guernsey",
        "code": "+44",
        "iso": "GG",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/gg.svg",
        "mask": "(####)######",
        "name_ru": "Гернси"
    },
    {
        "name_en": "Guinea",
        "code": "+224",
        "iso": "GN",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/gn.svg",
        "mask": "##-###-###",
        "name_ru": "Гвинея"
    },
    {
        "name_en": "Guinea-Bissau",
        "code": "+245",
        "iso": "GW",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/gw.svg",
        "mask": "#-######",
        "name_ru": "Гвинея-Бисау"
    },
    {
        "name_en": "Guyana",
        "code": "+592",
        "iso": "GY",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/gy.svg",
        "mask": "###-####",
        "name_ru": "Гайана"
    },
    {
        "name_en": "Haiti",
        "code": "+509",
        "iso": "HT",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/ht.svg",
        "mask": "##-##-####",
        "name_ru": "Гаити"
    },
    {
        "name_en": "Holy See (Vatican City State)",
        "code": "+39",
        "iso": "VA",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/va.svg",
        "mask": "06 698#####",
        "name_ru": "Святой Престол (государство Ватикан)"
    },
    {
        "name_en": "Honduras",
        "code": "+504",
        "iso": "HN",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/hn.svg",
        "mask": "####-####",
        "name_ru": "Гондурас"
    },
    {
        "name_en": "Hong Kong",
        "code": "+852",
        "iso": "HK",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/hk.svg",
        "mask": "####-####",
        "name_ru": "Гонконг"
    },
    {
        "name_en": "Hungary",
        "code": "+36",
        "iso": "HU",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/hu.svg",
        "mask": "(###)###-###",
        "name_ru": "Венгрия"
    },
    {
        "name_en": "Iceland",
        "code": "+354",
        "iso": "IS",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/is.svg",
        "mask": "###-####",
        "name_ru": "Исландия"
    },
    {
        "name_en": "India",
        "code": "+91",
        "iso": "IN",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/in.svg",
        "mask": "(####)###-###",
        "name_ru": "Индия"
    },
    {
        "name_en": "Indonesia",
        "code": "+62",
        "iso": "ID",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/id.svg",
        "mask": ["##-###-##", "##-###-###", "##-###-####", "(8##)###-###", "(8##)###-##-###"],
        "name_ru": "Индонезия"
    },
    {
        "name_en": "Iran",
        "code": "+98",
        "iso": "IR",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/ir.svg",
        "mask": "(###)###-####",
        "name_ru": "Иран"
    },
    {
        "name_en": "Iraq",
        "code": "+964",
        "iso": "IQ",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/iq.svg",
        "mask": "(###)###-####",
        "name_ru": "Ирак"
    },
    {
        "name_en": "Ireland",
        "code": "+353",
        "iso": "IE",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/ie.svg",
        "mask": "(###)###-###",
        "name_ru": "Ирландия"
    },
    {
        "name_en": "Isle of Man",
        "code": "+44",
        "iso": "IM",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/im.svg",
        "mask": "(####)######",
        "name_ru": "Остров Мэн"
    },
    {
        "name_en": "Israel",
        "code": "+972",
        "iso": "IL",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/il.svg",
        "mask": ["#-###-####", "5#-###-####"],
        "name_ru": "Израиль"
    },
    {
        "name_en": "Italy",
        "code": "+39",
        "iso": "IT",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/it.svg",
        "mask": "(###)####-###",
        "name_ru": "Италия"
    },
    {
        "name_en": "Ivory Coast / Cote d'Ivoire",
        "code": "+225",
        "iso": "CI",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/ci.svg",
        "mask": "##-###-###",
        "name_ru": "Берег Слоновой Кости/Кот-д'Ивуар"
    },
    {
        "name_en": "Jamaica",
        "code": "+1",
        "iso": "JM",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/jm.svg",
        "mask": "(876)###-####",
        "name_ru": "Ямайка"
    },
    {
        "name_en": "Japan",
        "code": "+81",
        "iso": "JP",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/jp.svg",
        "mask": ["(###)###-###", "##-####-####"],
        "name_ru": "Япония"
    },
    {
        "name_en": "Jersey",
        "code": "+44",
        "iso": "JE",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/je.svg",
        "mask": "(####)####-######",
        "name_ru": "Джерси"
    },
    {
        "name_en": "Jordan",
        "code": "+962",
        "iso": "JO",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/jo.svg",
        "mask": "#-####-####",
        "name_ru": "Иордания"
    },
    {
        "name_en": "Kazakhstan",
        "code": "+77",
        "iso": "KZ",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/kz.svg",
        "mask": ["(6##)###-##-##", "(7##)###-##-##"],
        "name_ru": "Казахстан"
    },
    {
        "name_en": "Kenya",
        "code": "+254",
        "iso": "KE",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/ke.svg",
        "mask": "###-######",
        "name_ru": "Кения"
    },
    {
        "name_en": "Kiribati",
        "code": "+686",
        "iso": "KI",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/ki.svg",
        "mask": "##-###",
        "name_ru": "Кирибати"
    },
    {
        "name_en": "Korea, Democratic People's Republic of Korea",
        "code": "+850",
        "iso": "KP",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/kp.svg",
        "mask": ["###-###", "####-####", "##-###-###", "###-####-###", "191-###-####", "####-#############"],
        "name_ru": "Корея, Корейская Народно-Демократическая Республика"
    },
    {
        "name_en": "Korea, Republic of South Korea",
        "code": "+82",
        "iso": "KR",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/kr.svg",
        "mask": "##-###-####",
        "name_ru": "Корея, Республика Южная Корея"
    },
    {
        "name_en": "Kosovo",
        "code": "+383",
        "iso": "XK",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/xk.svg",
        "mask": ["##-###-###", "###-###-###"],
        "name_ru": "Косово"
    },
    {
        "name_en": "Kuwait",
        "code": "+965",
        "iso": "KW",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/kw.svg",
        "mask": "####-####",
        "name_ru": "Кувейт"
    },
    {
        "name_en": "Kyrgyzstan",
        "code": "+996",
        "iso": "KG",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/kg.svg",
        "mask": "(###)###-###",
        "name_ru": "Кыргызстан"
    },
    {
        "name_en": "Laos",
        "code": "+856",
        "iso": "LA",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/la.svg",
        "mask": ["##-###-###", "(20##)###-###"],
        "name_ru": "Лаос"
    },
    {
        "name_en": "Latvia",
        "code": "+371",
        "iso": "LV",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/lv.svg",
        "mask": "##-###-###",
        "name_ru": "Латвия"
    },
    {
        "name_en": "Lebanon",
        "code": "+961",
        "iso": "LB",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/lb.svg",
        "mask": ["#-###-###", "##-###-###"],
        "name_ru": "Ливан"
    },
    {
        "name_en": "Lesotho",
        "code": "+266",
        "iso": "LS",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/ls.svg",
        "mask": "#-###-####",
        "name_ru": "Лесото"
    },
    {
        "name_en": "Liberia",
        "code": "+231",
        "iso": "LR",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/lr.svg",
        "mask": "##-###-###",
        "name_ru": "Либерия"
    },
    {
        "name_en": "Libya",
        "code": "+218",
        "iso": "LY",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/ly.svg",
        "mask": ["##-###-###", "21-###-####"],
        "name_ru": "Ливия"
    },
    {
        "name_en": "Liechtenstein",
        "code": "+423",
        "iso": "LI",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/li.svg",
        "mask": "(###)###-####",
        "name_ru": "Лихтенштейн"
    },
    {
        "name_en": "Lithuania",
        "code": "+370",
        "iso": "LT",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/lt.svg",
        "mask": "(###)##-###",
        "name_ru": "Литва"
    },
    {
        "name_en": "Luxembourg",
        "code": "+352",
        "iso": "LU",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/lu.svg",
        "mask": "(###)###-###",
        "name_ru": "Люксембург"
    },
    {
        "name_en": "Macau",
        "code": "+853",
        "iso": "MO",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/mo.svg",
        "mask": "####-####",
        "name_ru": "Макао"
    },
    {
        "name_en": "Madagascar",
        "code": "+261",
        "iso": "MG",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/mg.svg",
        "mask": "##-##-#####",
        "name_ru": "Мадагаскар"
    },
    {
        "name_en": "Malawi",
        "code": "+265",
        "iso": "MW",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/mw.svg",
        "mask": ["1-###-###", "#-####-####"],
        "name_ru": "Малави"
    },
    {
        "name_en": "Malaysia",
        "code": "+60",
        "iso": "MY",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/my.svg",
        "mask": ["#-###-###", "##-###-###", "(###)###-###", "##-###-####"],
        "name_ru": "Малайзия"
    },
    {
        "name_en": "Maldives",
        "code": "+960",
        "iso": "MV",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/mv.svg",
        "mask": "###-####",
        "name_ru": "Мальдивы"
    },
    {
        "name_en": "Mali",
        "code": "+223",
        "iso": "ML",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/ml.svg",
        "mask": "##-##-####",
        "name_ru": "Мали"
    },
    {
        "name_en": "Malta",
        "code": "+356",
        "iso": "MT",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/mt.svg",
        "mask": "####-####",
        "name_ru": "Мальта"
    },
    {
        "name_en": "Marshall Islands",
        "code": "+692",
        "iso": "MH",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/mh.svg",
        "mask": "###-####",
        "name_ru": "Маршалловы острова"
    },
    {
        "name_en": "Martinique",
        "code": "+596",
        "iso": "MQ",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/mq.svg",
        "mask": "(###)##-##-##",
        "name_ru": "Мартиника"
    },
    {
        "name_en": "Mauritania",
        "code": "+222",
        "iso": "MR",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/mr.svg",
        "mask": "##-##-####",
        "name_ru": "Мавритания"
    },
    {
        "name_en": "Mauritius",
        "code": "+230",
        "iso": "MU",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/mu.svg",
        "mask": "###-####",
        "name_ru": "Маврикий"
    },
    {
        "name_en": "Mayotte",
        "code": "+262",
        "iso": "YT",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/yt.svg",
        "mask": "#####-####",
        "name_ru": "Майотта"
    },
    {
        "name_en": "Mexico",
        "code": "+52",
        "iso": "MX",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/mx.svg",
        "mask": ["##-##-####", "(###)###-####"],
        "name_ru": "Мексика"
    },
    {
        "name_en": "Micronesia, Federated States of Micronesia",
        "code": "+691",
        "iso": "FM",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/fm.svg",
        "mask": "###-####",
        "name_ru": "Микронезия, Федеративные Штаты Микронезии"
    },
    {
        "name_en": "Moldova",
        "code": "+373",
        "iso": "MD",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/md.svg",
        "mask": "####-####",
        "name_ru": "Молдова"
    },
    {
        "name_en": "Monaco",
        "code": "+377",
        "iso": "MC",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/mc.svg",
        "mask": ["##-###-###", "(###)###-###"],
        "name_ru": "Монако"
    },
    {
        "name_en": "Mongolia",
        "code": "+976",
        "iso": "MN",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/mn.svg",
        "mask": "##-##-####",
        "name_ru": "Монголия"
    },
    {
        "name_en": "Montenegro",
        "code": "+382",
        "iso": "ME",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/me.svg",
        "mask": "##-###-###",
        "name_ru": "Черногория"
    },
    {
        "name_en": "Montserrat",
        "code": "+1",
        "iso": "MS",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/ms.svg",
        "mask": "(664)###-####",
        "name_ru": "Монсеррат"
    },
    {
        "name_en": "Morocco",
        "code": "+212",
        "iso": "MA",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/ma.svg",
        "mask": "##-####-###",
        "name_ru": "Марокко"
    },
    {
        "name_en": "Mozambique",
        "code": "+258",
        "iso": "MZ",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/mz.svg",
        "mask": "##-###-###",
        "name_ru": "Мозамбик"
    },
    {
        "name_en": "Myanmar",
        "code": "+95",
        "iso": "MM",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/mm.svg",
        "mask": ["###-###", "#-###-###", "##-###-###"],
        "name_ru": "Мьянма"
    },
    {
        "name_en": "Namibia",
        "code": "+264",
        "iso": "NA",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/na.svg",
        "mask": "##-###-####",
        "name_ru": "Намибия"
    },
    {
        "name_en": "Nauru",
        "code": "+674",
        "iso": "NR",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/nr.svg",
        "mask": "###-####",
        "name_ru": "Науру"
    },
    {
        "name_en": "Nepal",
        "code": "+977",
        "iso": "NP",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/np.svg",
        "mask": "##-###-###",
        "name_ru": "Непал"
    },
    {
        "name_en": "Netherlands",
        "code": "+31",
        "iso": "NL",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/nl.svg",
        "mask": "##-###-####",
        "name_ru": "Нидерланды"
    },
    {
        "name_en": "New Caledonia",
        "code": "+687",
        "iso": "NC",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/nc.svg",
        "mask": "##-####",
        "name_ru": "Новая Каледония"
    },
    {
        "name_en": "New Zealand",
        "code": "+64",
        "iso": "NZ",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/nz.svg",
        "mask": ["#-###-###", "(###)###-###", "(###)###-####"],
        "name_ru": "Новая Зеландия"
    },
    {
        "name_en": "Nicaragua",
        "code": "+505",
        "iso": "NI",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/ni.svg",
        "mask": "####-####",
        "name_ru": "Никарагуа"
    },
    {
        "name_en": "Niger",
        "code": "+227",
        "iso": "NE",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/ne.svg",
        "mask": "##-##-####",
        "name_ru": "Нигер"
    },
    {
        "name_en": "Nigeria",
        "code": "+234",
        "iso": "NG",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/ng.svg",
        "mask": ["##-###-##", "##-###-###", "(###)###-####"],
        "name_ru": "Нигерия"
    },
    {
        "name_en": "Niue",
        "code": "+683",
        "iso": "NU",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/nu.svg",
        "mask": "####",
        "name_ru": "Ниуэ"
    },
    {
        "name_en": "Norfolk Island",
        "code": "+672",
        "iso": "NF",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/nf.svg",
        "mask": "3##-###",
        "name_ru": "Остров Норфолк"
    },
    {
        "name_en": "North Macedonia",
        "code": "+389",
        "iso": "MK",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/mk.svg",
        "mask": "##-###-###",
        "name_ru": "Северная Македония"
    },
    {
        "name_en": "Northern Mariana Islands",
        "code": "+1",
        "iso": "MP",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/mp.svg",
        "mask": "(670)###-####",
        "name_ru": "Северные Марианские острова"
    },
    {
        "name_en": "Norway",
        "code": "+47",
        "iso": "NO",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/no.svg",
        "mask": "(###)##-###",
        "name_ru": "Норвегия"
    },
    {
        "name_en": "Oman",
        "code": "+968",
        "iso": "OM",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/om.svg",
        "mask": "##-###-###",
        "name_ru": "Оман"
    },
    {
        "name_en": "Pakistan",
        "code": "+92",
        "iso": "PK",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/pk.svg",
        "mask": "(###)###-####",
        "name_ru": "Пакистан"
    },
    {
        "name_en": "Palau",
        "code": "+680",
        "iso": "PW",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/pw.svg",
        "mask": "###-####",
        "name_ru": "Палау"
    },
    {
        "name_en": "Palestine",
        "code": "+970",
        "iso": "PS",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/ps.svg",
        "mask": "##-###-####",
        "name_ru": "Палестина"
    },
    {
        "name_en": "Panama",
        "code": "+507",
        "iso": "PA",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/pa.svg",
        "mask": "###-####",
        "name_ru": "Панама"
    },
    {
        "name_en": "Papua New Guinea",
        "code": "+675",
        "iso": "PG",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/pg.svg",
        "mask": "(###)##-###",
        "name_ru": "Папуа - Новая Гвинея"
    },
    {
        "name_en": "Paraguay",
        "code": "+595",
        "iso": "PY",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/py.svg",
        "mask": "(###)###-###",
        "name_ru": "Парагвай"
    },
    {
        "name_en": "Peru",
        "code": "+51",
        "iso": "PE",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/pe.svg",
        "mask": "(###)###-###",
        "name_ru": "Перу"
    },
    {
        "name_en": "Philippines",
        "code": "+63",
        "iso": "PH",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/ph.svg",
        "mask": "(###)###-####",
        "name_ru": "Филиппины"
    },
    {
        "name_en": "Pitcairn",
        "code": "+870",
        "iso": "PN",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/pn.svg",
        "mask": "###-###-###",
        "name_ru": "Питкэрн"
    },
    {
        "name_en": "Poland",
        "code": "+48",
        "iso": "PL",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/pl.svg",
        "mask": "(###)###-###",
        "name_ru": "Польша"
    },
    {
        "name_en": "Portugal",
        "code": "+351",
        "iso": "PT",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/pt.svg",
        "mask": "##-###-####",
        "name_ru": "Португалия"
    },
    {
        "name_en": "Puerto Rico",
        "code": "+1",
        "iso": "PR",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/pr.svg",
        "mask": ["(787) ### ####", "(939) ### ####"],
        "name_ru": "Пуэрто-Рико"
    },
    {
        "name_en": "Qatar",
        "code": "+974",
        "iso": "QA",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/qa.svg",
        "mask": "####-####",
        "name_ru": "Катар"
    },
    {
        "name_en": "Reunion",
        "code": "+262",
        "iso": "RE",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/re.svg",
        "mask": "#####-####",
        "name_ru": "Воссоединение"
    },
    {
        "name_en": "Romania",
        "code": "+40",
        "iso": "RO",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/ro.svg",
        "mask": "##-###-####",
        "name_ru": "Румыния"
    },
    {
        "name_en": "Russia",
        "code": "+7",
        "iso": "RU",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/ru.svg",
        "mask": "(###)###-##-##",
        "name_ru": "Россия"
    },
    {
        "name_en": "Rwanda",
        "code": "+250",
        "iso": "RW",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/rw.svg",
        "mask": "(###)###-###",
        "name_ru": "Руанда"
    },
    {
        "name_en": "Saint Barthelemy",
        "code": "+590",
        "iso": "BL",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/bl.svg",
        "mask": "###-##-##-##",
        "name_ru": "Сен-Бартелеми"
    },
    {
        "name_en": "Saint Helena, Ascension and Tristan Da Cunha",
        "code": "+290",
        "iso": "SH",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/sh.svg",
        "mask": "####",
        "name_ru": "Святая Елена, Вознесение и Тристан-да-Кунья"
    },
    {
        "name_en": "Saint Kitts and Nevis",
        "code": "+1",
        "iso": "KN",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/kn.svg",
        "mask": "(869)###-####",
        "name_ru": "Сент-Китс и Невис"
    },
    {
        "name_en": "Saint Lucia",
        "code": "+1",
        "iso": "LC",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/lc.svg",
        "mask": "(758)###-####",
        "name_ru": "Санкт-Люсия"
    },
    {
        "name_en": "Saint Martin",
        "code": "+590",
        "iso": "MF",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/mf.svg",
        "mask": "(###)###-###",
        "name_ru": "Святой Мартин"
    },
    {
        "name_en": "Saint Pierre and Miquelon",
        "code": "+508",
        "iso": "PM",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/pm.svg",
        "mask": "##-####",
        "name_ru": "Сен-Пьер и Микелон"
    },
    {
        "name_en": "Saint Vincent and the Grenadines",
        "code": "+1",
        "iso": "VC",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/vc.svg",
        "mask": "(784)###-####",
        "name_ru": "Святой Винсент и Гренадины"
    },
    {
        "name_en": "Samoa",
        "code": "+685",
        "iso": "WS",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/ws.svg",
        "mask": "##-####",
        "name_ru": "Самоа"
    },
    {
        "name_en": "San Marino",
        "code": "+378",
        "iso": "SM",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/sm.svg",
        "mask": "####-######",
        "name_ru": "Сан-Марино"
    },
    {
        "name_en": "Sao Tome and Principe",
        "code": "+239",
        "iso": "ST",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/st.svg",
        "mask": "##-#####",
        "name_ru": "Сан-Томе и Принсипи"
    },
    {
        "name_en": "Saudi Arabia",
        "code": "+966",
        "iso": "SA",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/sa.svg",
        "mask": ["#-###-####", "5#-####-####"],
        "name_ru": "Саудовская Аравия"
    },
    {
        "name_en": "Senegal",
        "code": "+221",
        "iso": "SN",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/sn.svg",
        "mask": "##-###-####",
        "name_ru": "Сенегал"
    },
    {
        "name_en": "Serbia",
        "code": "+381",
        "iso": "RS",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/rs.svg",
        "mask": "##-###-####",
        "name_ru": "Сербия"
    },
    {
        "name_en": "Seychelles",
        "code": "+248",
        "iso": "SC",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/sc.svg",
        "mask": "#-###-###",
        "name_ru": "Сейшелы"
    },
    {
        "name_en": "Sierra Leone",
        "code": "+232",
        "iso": "SL",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/sl.svg",
        "mask": "##-######",
        "name_ru": "Сьерра-Леоне"
    },
    {
        "name_en": "Singapore",
        "code": "+65",
        "iso": "SG",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/sg.svg",
        "mask": "####-####",
        "name_ru": "Сингапур"
    },
    {
        "name_en": "Sint Maarten",
        "code": "+1",
        "iso": "SX",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/sx.svg",
        "mask": "(721)###-####",
        "name_ru": "Синт-Мартен"
    },
    {
        "name_en": "Slovakia",
        "code": "+421",
        "iso": "SK",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/sk.svg",
        "mask": "(###)###-###",
        "name_ru": "Словакия"
    },
    {
        "name_en": "Slovenia",
        "code": "+386",
        "iso": "SI",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/si.svg",
        "mask": "##-###-###",
        "name_ru": "Словения"
    },
    {
        "name_en": "Solomon Islands",
        "code": "+677",
        "iso": "SB",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/sb.svg",
        "mask": ["#####", "###-####"],
        "name_ru": "Соломоновы острова"
    },
    {
        "name_en": "Somalia",
        "code": "+252",
        "iso": "SO",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/so.svg",
        "mask": ["#-###-###", "##-###-###"],
        "name_ru": "Сомали"
    },
    {
        "name_en": "South Africa",
        "code": "+27",
        "iso": "ZA",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/za.svg",
        "mask": "##-###-####",
        "name_ru": "Южная Африка"
    },
    {
        "name_en": "South Georgia and the South Sandwich Islands",
        "code": "+500",
        "iso": "GS",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/gs.svg",
        "mask": "#####",
        "name_ru": "Южная Георгия и Южные Сандвичевы острова"
    },
    {
        "name_en": "South Sudan",
        "code": "+211",
        "iso": "SS",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/ss.svg",
        "mask": "##-###-####",
        "name_ru": "Южный Судан"
    },
    {
        "name_en": "Spain",
        "code": "+34",
        "iso": "ES",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/es.svg",
        "mask": "(###)###-###",
        "name_ru": "Испания"
    },
    {
        "name_en": "Sri Lanka",
        "code": "+94",
        "iso": "LK",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/lk.svg",
        "mask": "##-###-####",
        "name_ru": "Шри-Ланка"
    },
    {
        "name_en": "Sudan",
        "code": "+249",
        "iso": "SD",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/sd.svg",
        "mask": "##-###-####",
        "name_ru": "Судан"
    },
    {
        "name_en": "Suriname",
        "code": "+597",
        "iso": "SR",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/sr.svg",
        "mask": ["###-###", "###-####"],
        "name_ru": "Суринам"
    },
    {
        "name_en": "Svalbard and Jan Mayen",
        "code": "+47",
        "iso": "SJ",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/sj.svg",
        "mask": "(###)##-###",
        "name_ru": "Шпицберген и Ян-Майен"
    },
    {
        "name_en": "Sweden",
        "code": "+46",
        "iso": "SE",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/se.svg",
        "mask": "##-###-####",
        "name_ru": "Швеция"
    },
    {
        "name_en": "Switzerland",
        "code": "+41",
        "iso": "CH",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/ch.svg",
        "mask": "##-###-####",
        "name_ru": "Швейцария"
    },
    {
        "name_en": "Syrian Arab Republic",
        "code": "+963",
        "iso": "SY",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/sy.svg",
        "mask": "##-####-###",
        "name_ru": "Сирийская Арабская Республика"
    },
    {
        "name_en": "Taiwan",
        "code": "+886",
        "iso": "TW",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/tw.svg",
        "mask": ["####-####", "#-####-####"],
        "name_ru": "Тайвань"
    },
    {
        "name_en": "Tajikistan",
        "code": "+992",
        "iso": "TJ",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/tj.svg",
        "mask": "##-###-####",
        "name_ru": "Таджикистан"
    },
    {
        "name_en": "Tanzania, United Republic of Tanzania",
        "code": "+255",
        "iso": "TZ",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/tz.svg",
        "mask": "##-###-####",
        "name_ru": "Танзания, Объединенная Республика Танзания"
    },
    {
        "name_en": "Thailand",
        "code": "+66",
        "iso": "TH",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/th.svg",
        "mask": ["##-###-###", "##-###-####"],
        "name_ru": "Таиланд"
    },
    {
        "name_en": "Timor-Leste",
        "code": "+670",
        "iso": "TL",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/tl.svg",
        "mask": ["###-####", "77#-#####", "78#-#####"],
        "name_ru": "Тимор-Лешти"
    },
    {
        "name_en": "Togo",
        "code": "+228",
        "iso": "TG",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/tg.svg",
        "mask": "##-###-###",
        "name_ru": "Идти"
    },
    {
        "name_en": "Tokelau",
        "code": "+690",
        "iso": "TK",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/tk.svg",
        "mask": "####",
        "name_ru": "Токелау"
    },
    {
        "name_en": "Tonga",
        "code": "+676",
        "iso": "TO",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/to.svg",
        "mask": "#####",
        "name_ru": "Тонга"
    },
    {
        "name_en": "Trinidad and Tobago",
        "code": "+1",
        "iso": "TT",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/tt.svg",
        "mask": "(868)###-####",
        "name_ru": "Тринидад и Тобаго"
    },
    {
        "name_en": "Tunisia",
        "code": "+216",
        "iso": "TN",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/tn.svg",
        "mask": "##-###-###",
        "name_ru": "Тунис"
    },
    {
        "name_en": "Turkey",
        "code": "+90",
        "iso": "TR",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/tr.svg",
        "mask": "(###)###-####",
        "name_ru": "Турция"
    },
    {
        "name_en": "Turkmenistan",
        "code": "+993",
        "iso": "TM",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/tm.svg",
        "mask": "#-###-####",
        "name_ru": "Туркменистан"
    },
    {
        "name_en": "Turks and Caicos Islands",
        "code": "+1",
        "iso": "TC",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/tc.svg",
        "mask": "(249)###-###",
        "name_ru": "Острова Тёркс и Кайкос"
    },
    {
        "name_en": "Tuvalu",
        "code": "+688",
        "iso": "TV",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/tv.svg",
        "mask": ["2####", "90####"],
        "name_ru": "Тувалу"
    },
    {
        "name_en": "Uganda",
        "code": "+256",
        "iso": "UG",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/ug.svg",
        "mask": "(###)###-###",
        "name_ru": "Уганда"
    },
    {
        "name_en": "Ukraine",
        "code": "+380",
        "iso": "UA",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/ua.svg",
        "mask": "(##)###-##-##",
        "name_ru": "Украина"
    },
    {
        "name_en": "United Arab Emirates",
        "code": "+971",
        "iso": "AE",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/ae.svg",
        "mask": ["#-###-####", "5#-###-####"],
        "name_ru": "Объединенные Арабские Эмираты"
    },
    {
        "name_en": "United Kingdom",
        "code": "+44",
        "iso": "GB",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/gb.svg",
        "mask": "##-####-####",
        "name_ru": "Великобритания"
    },
    {
        "name_en": "United States",
        "code": "+1",
        "iso": "US",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/us.svg",
        "mask": "(###)###-####",
        "name_ru": "Соединенные Штаты"
    },
    {
        "name_en": "Uruguay",
        "code": "+598",
        "iso": "UY",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/uy.svg",
        "mask": "#-###-##-##",
        "name_ru": "Уругвай"
    },
    {
        "name_en": "Uzbekistan",
        "code": "+998",
        "iso": "UZ",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/uz.svg",
        "mask": "##-###-####",
        "name_ru": "Узбекистан"
    },
    {
        "name_en": "Vanuatu",
        "code": "+678",
        "iso": "VU",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/vu.svg",
        "mask": ["#####", "##-#####"],
        "name_ru": "Вануату"
    },
    {
        "name_en": "Venezuela, Bolivarian Republic of Venezuela",
        "code": "+58",
        "iso": "VE",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/ve.svg",
        "mask": "(###)###-####",
        "name_ru": "Венесуэла, Боливарианская Республика Венесуэла"
    },
    {
        "name_en": "Vietnam",
        "code": "+84",
        "iso": "VN",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/vn.svg",
        "mask": ["##-####-###", "(###)####-###"],
        "name_ru": "Вьетнам"
    },
    {
        "name_en": "Virgin Islands, British",
        "code": "+1",
        "iso": "VG",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/vg.svg",
        "mask": "(284)###-####",
        "name_ru": "Виргинские острова, Британские"
    },
    {
        "name_en": "Virgin Islands, U.S.",
        "code": "+1",
        "iso": "VI",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/vi.svg",
        "mask": "(340)###-####",
        "name_ru": "Виргинские острова, США"
    },
    {
        "name_en": "Wallis and Futuna",
        "code": "+681",
        "iso": "WF",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/wf.svg",
        "mask": "##-####",
        "name_ru": "Уолис и Футуна"
    },
    {
        "name_en": "Yemen",
        "code": "+967",
        "iso": "YE",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/ye.svg",
        "mask": ["#-###-###", "##-###-###", "###-###-###"],
        "name_ru": "Йемен"
    },
    {
        "name_en": "Zambia",
        "code": "+260",
        "iso": "ZM",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/zm.svg",
        "mask": "##-###-####",
        "name_ru": "Замбия"
    },
    {
        "name_en": "Zimbabwe",
        "code": "+263",
        "iso": "ZW",
        "flag": "https://cdn.kcak11.com/CountryFlags/countries/zw.svg",
        "mask": "#-######",
        "name_ru": "Зимбабве"
    },
];


let fs = require('fs');

fs.writeFile(
    'file.txt',
    phoneCodes.map((it, idx) => ({
        ...it,
        name_ar: countries[idx]
    })).reduce((it, acc) => it += JSON.stringify(acc).toString() + ',\n', ""),
    function (error) {
        if (error) throw error; // ошибка чтения файла, если есть
        console.log('Данные успешно записаны записать файл');
    });

