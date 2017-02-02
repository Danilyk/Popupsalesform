function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var cityList = ['Абакан', 'Абан', 'Абатский', 'Абрамовский маяк', 'Агата', 'Агаякан', 'Агзу', 'Агинское', 'Агинское', 'Айхал', 'Акша', 'Акьяр', 'Алапаевск', 'Алатырь', 'Алдан', 'Алейская', 'Александров', 'Александров-Гай', 'Александровск-Сахалинский', 'Александровский Шлюз', 'Александровский з-д', 'Александровское', 'Александровское', 'Аллах-Юнь', 'Алтай', 'Алыгджер', 'Амазар', 'Амга', 'Амдерма', 'Анабар', 'Анадырь', 'Анапа', 'Андрея', 'Андрюшкино', 'Анна', 'Антипаюта', 'Анучино', 'Апатиты', 'Апука', 'Аргаяш', 'Арзгир', 'Арка', 'Армавир', 'Армань', 'Арсеньев', 'Артезиан', 'Артем', 'Артемовск', 'Артемовский', 'Архангельск', 'Архара', 'Аршан', 'Аскиз', 'Астраханка', 'Астрахань', 'Ахты', 'Ачинск', 'Аян', 'Бабаево', 'Бабушкин', 'Баган', 'Багдарин', 'Баево', 'Байдуков', 'Байкальск', 'Байкит', 'Бакалы', 'Бактор', 'Бакчар', 'Балаганск', 'Баладек', 'Балаково', 'Балахта', 'Балашов', 'Балей', 'Балтийск', 'Балыгычан', 'Барабаш', 'Барабинск', 'Бараниха', 'Баргузин', 'Баргузинский Заповедник    \t', 'Барзас', 'Барнаул', 'Батагай', 'Батагай-Алыта', 'Батамай', 'Батомга', 'Батурино', 'Бахта', 'Баяндай', 'Беклемишево', 'Белая Гора', 'Белая глина', 'Белгород', 'Белово', 'Белогорка', 'Белогорск', 'Белозерск', 'Белый Яр', 'Белый', 'Беля', 'Бердигестях', 'Березники', 'Березняки', 'Березовка', 'Березово', 'Березово', 'Бестяхск', 'Бея', 'Бийск', 'Бийск-Зональная', 'Бикин', 'Билибино', 'Биробиджан', 'Бирск', 'Бисер', 'Бисер', 'Бисерть', 'Бичевая', 'Бичура', 'Благовещенск', 'Благодарный', 'Богородское', 'Боготол', 'Богучаны', 'Бодайбо', 'Боковская', 'Бологое', 'Болотное', 'Болхов', 'Большая Глушица', 'Большая Лепринда', 'Большая Мурта', 'Большерецк', 'Большеречье', 'Большие Кайбицы', 'Большие Уки', 'Большое Голоустное', 'Большой Он', 'Большой Порог', 'Большой Улуй', 'Бомнак', 'Бор', 'Борзя', 'Борисоглебск', 'Борогонцы', 'Бохан', 'Бохапча', 'Братолюбовка', 'Братск', 'Братск', 'Бреды', 'Бродокалмак', 'Брохово', 'Брянск', 'Бугрино', 'Бугульма', 'Бугуруслан', 'Буденновск', 'Бузулук', 'Буй', 'Буйнакск', 'Букукун', 'Бурукан', 'Бухта Амбарчик', 'Бухта Провидения', 'Буяга', 'Быково', 'Бысса', 'Вайда Губа', 'Вал', 'Валькаркай', 'Ванавара', 'Ванжиль-Кынак', 'Ваховск', 'Великие Луки', 'Великий Новгород', 'Великий Устюг', 'Вельмо', 'Вельск', 'Венгерово', 'Верещагино', 'Верещагино', 'Верхневилюйск', 'Верхнее Дуброво', 'Верхнее Пенжино', 'Верхнеимбатск', 'Верхний Амыл', 'Верхний Баскунчак', 'Верхний Уфалей', 'Верхняя Гутара', 'Верхняя Тойма', 'Верхняя Томь', 'Верховье Умри', 'Верховье р. Лотты', 'Верховье', 'Верхотурье', 'Верхоянск', 'Верхоянский Перевоз', 'Веселая Горка', 'Весляна', 'Ветлуга', 'Викулово', 'Вилюйск', 'Винницы', 'Висим', 'Витим', 'Владивосток', 'Владикавказ', 'Владимир', 'Внуково', 'Водопадная', 'Вожега', 'Вознесенье', 'Волгоград', 'Волжская ГМО', 'Волово', 'Вологда', 'Волоколамск', 'Волосово', 'Волчиха', 'Воньеган', 'Воркута', 'Ворогово', 'Воронеж', 'Воскресенское', 'Восток', 'Восточная', 'Воткинск', 'Вохма', 'Вуктыл', 'Выборг', 'Выкса', 'Вытегра', 'Вышний Волочек', 'Вяземская', 'Вязники', 'Вязьма', 'Вятские Поляны', 'ГМО им. Е.К.Федорова', 'ГМО им. Е.Т.Кренкеля', 'Гагарин', 'Гайны', 'Гамов', 'Гари', 'Гвасюги', 'Гдов', 'Геленджик', 'Георгиевка', 'Гигант', 'Гижига', 'Глазов', 'Глубинное', 'Голышманово', 'Горекацан', 'Горин', 'Горно-Алтайск', 'Городище', 'Городовиковск', 'Горячий Ключ', 'Горячинск', 'Готня', 'Гоуджекит', 'Гридино', 'Грозный', 'Губа Дроздовка', 'Губаха', 'Гуга', 'Гусь-Хрустальный', 'Гыдоямо', 'Далматово', 'Дальнереченск', 'Даниловка', 'Дарасун', 'Даровское', 'Двинский Березняк', 'Дебессы', 'Делянкир', 'Демьянское', 'Депутатский', 'Дербент', 'Джалинда', 'Джалинда', 'Джана', 'Джарджан', 'Джека Лондона', 'Джикимда', 'Джубга', 'Дзержинское', 'Дивное', 'Дмитров', 'Дмитровск-Орловский', 'Дно', 'Довольное', 'Должанская', 'Долиновка', 'Домодедово', 'Доно', 'Дорожный', 'Дуван', 'Дудинка', 'Егорьевск', 'Ейск', 'Екатеринбург', 'Екатерино-Никольское', 'Елабуга', 'Елань', 'Елатьма', 'Елец', 'Емеск', 'Енисейск', 'Ербогачен', 'Ермаковское', 'Ерофей Павлович', 'Ершов', 'Ессей', 'Ефимовская', 'Ефремов', 'Железнодорожный', 'Жердевка', 'Жигалово', 'Жиганск', 'Жижгин', 'Жиздра', 'Жуковка', 'Забайкальск', 'Завитая', 'Залари', 'Замакта', 'Заметчино', 'Зареченск', 'Заринск', 'Зашеек', 'Заярск', 'Звериноголовское', 'Здвинск', 'Зерноград', 'Зея', 'Зилаир', 'Зима', 'Зимовники', 'Златоуст', 'Змеиногорск', 'Золотой', 'Зырянка', 'Иваново', 'Ивдель', 'Игарка', 'Игнашино', 'Игрим', 'Идринское', 'Ижевск', 'Ижма', 'Ика', 'Илирней', 'Иловля', 'Ильинский', 'Им. М.В. Попова', 'Им. Полины Осипенко', 'Им.Е.К.Федорова', 'Инга', 'Индига', 'Индигирская', 'Инза', 'Инсар', 'Иоли', 'Ирбейское', 'Ирбит-Фомино', 'Иркутск', 'Исилькуль', 'Исить', 'Искитим', 'Ича', 'Ишим', 'Иэма', 'Йошкар-Ола', 'Кабанск', 'Кавалерово', 'Казань', 'Казачинское', 'Казачинское', 'Казым', 'Казыр', 'Кайластуй', 'Калакан', 'Калач', 'Калачинск', 'Калгачиха', 'Калевала', 'Калининград', 'Калининск', 'Калуга', 'Каменск-Уральский', 'Каменск-Шахтинский', 'Каменское', 'Камень-на-Оби', 'Камышлов', 'Канадей', 'Канаш', 'Кандалакша', 'Каневка', 'Каневская', 'Канин Нос', 'Канку', 'Канск', 'Кантегир', 'Каньон', 'Карасук', 'Каратузское', 'Карафтит', 'Карачев', 'Каргасок', 'Каргат', 'Каргополь', 'Карпогоры', 'Карталы', 'Карымская', 'Катав-Ивановск', 'Катанда', 'Катугино', 'Кача', 'Качуг', 'Кашин', 'Кашира', 'Кашкаранцы', 'Кегали', 'Кедва-Вом', 'Кедон', 'Келлог', 'Кемерово', 'Кемчуг', 'Кемь-Порт', 'Кербо', 'Кизильское', 'Кизляр', 'Килеер', 'Кильмезь', 'Кингисепп', 'Кинешма', 'Киренск', 'Кириши', 'Киров', 'Кировский', 'Кирс', 'Кирсанов', 'Киселевск', 'Клин', 'Клухорский перевал', 'Ключи', 'Ключи', 'Ковда', 'Ковдор', 'Когалым', 'Кожевниково', 'Козыревск', 'Козьмодемьянск', 'Койнас', 'Колба', 'Колгуев Северный', 'Колежма', 'Колмъявр', 'Кологрив', 'Коломна', 'Колпашево', 'Колывань', 'Кольцово', 'Комака', 'Коммунар', 'Комрво', 'Комсомольск-на-Амуре', 'Комсомольский', 'Кондома', 'Кондопога', 'Конево', 'Константиновск', 'Конь-Колодезь', 'Коркодон', 'Корсаков', 'Корф', 'Коса', 'Кослан', 'Кострома', 'Котельнич', 'Коткино', 'Котлас', 'Кочево', 'Коченёво', 'Кочки', 'Кочубей', 'Кош-Агач', 'Крапивино', 'Красная Гора', 'Красногвардейское', 'Краснодар', 'Красное поселение', 'Красное', 'Красноозерск', 'Красноселькупск', 'Краснослободск', 'Красноуфимск', 'Краснощеково', 'Краснощелье', 'Красноярск', 'Красные Баки', 'Красный Кут', 'Красный Холм', 'Красный Чикой', 'Красный Яр', 'Красный Яр', 'Крест-Хальджай', 'Кресты Таймырские', 'Крестях', 'Крещенка', 'Кроноки', 'Кропоткин', 'Крымск', 'Ксеньевская', 'Кубанская', 'Куганаволок', 'Кудымкар', 'Кузедеево', 'Кузьмовка', 'Култук', 'Кулу', 'Кумены', 'Куминская', 'Кунгур', 'Купино', 'Кур', 'Курагино', 'Курган', 'Курейка', 'Курильск', 'Курск', 'Куртамыш', 'Курумкан', 'Курун-Урях', 'Кушва', 'Кущевская', 'Кызыл', 'Кызыл-Озек', 'Кыкер', 'Кыра', 'Кырен', 'Кытлым', 'Кыштовка', 'Кюсюр', 'Кяхта', 'Лабазная', 'Лаган', 'Лазо', 'Лаишево', 'Лальск', 'Ларьяк', 'Лебяжье', 'Лебяжье', 'Лев Толстой', 'Ленинское', 'Ленск', 'Лермонтовка', 'Лесозаводск', 'Леуши', 'Лешуконское', 'Ливны', 'Липецк', 'Лиски', 'Литке', 'Ловозеро', 'Лодейное поле', 'Локшак', 'Лопча', 'Лосиноборское', 'Лукоянов', 'Лысково', 'Лысьва', 'Льгов', 'М. Лопатка', 'Магадан', 'Магдагачи', 'Магнитогорск', 'Мадаун', 'Мазаново', 'Майкоп', 'Майск', 'Максатиха', 'Макушино', 'Малая кема', 'Малиново', 'Малоярославец', 'Малые Дербеты', 'Малые Кармакулы', 'Мама', 'Мангут', 'Маргаритово', 'Мариинск', 'Марково', 'Марресаля', 'Маслянино', 'Матвеев Курган', 'Махачкала', 'Мача', 'Маячный', 'Медвежьегорск', 'Междуреченск', 'Мезень', 'Мелеуз', 'Мельничное', 'Менза', 'Миасс', 'Миллерово', 'Мильково', 'Минеральные воды', 'Минусинск', 'Мирный', 'Михайловск', 'Мичуринск', 'Могзон', 'Могоча', 'Можайск', 'Можга', 'Моздок', 'Молодежная', 'Молчаново', 'Монды', 'Монерон', 'Мончегорск', 'Мопау', 'Моржовая', 'Моржовец', 'Морки', 'Морозовск', 'Моршанск', 'Мосальск', 'Мосеево', 'Москва', 'Мотыгино', 'Мошково', 'Мугур-Аксы', 'Мудьюг', 'Мужи', 'Мурманск', 'Мурмаши', 'Муслюмово', 'Мутный Материк', 'Мухоршибирь', 'Мценск', 'Мыс Алевина', 'Мыс Африка', 'Мыс Белый Нос', 'Мыс Биллингса', 'Мыс Братьев', 'Мыс Кигилях', 'Мыс Костантиновский', 'Мыс Микулкин', 'Мыс Озерный', 'Мыс Салаурова', 'Мыс Стерлигова', 'Мыс Терпения', 'Мыс Уэлен', 'Мыс Шмидта', 'Нагорный', 'Нагорское', 'Надым', 'Назарово', 'Назимово', 'Называевск', 'Нальчик', 'Намцы', 'Напас', 'Наро-Фоминск', 'Нарьян-Мар', 'Находка', 'Начики', 'Невельск', 'Невинномыск', 'Невьянск', 'Нелькан', 'Немчиновка', 'Ненастная', 'Неожиданный', 'Нера', 'Нерой', 'Нерчинск', 'Нерчинский Завод', 'Несь', 'Нефтеюганск', 'Ниванкуль', 'Нижне-Тамбовское', 'Нижне-Усинское', 'Нижнеангарск', 'Нижневартовск', 'Нижнесортымск', 'Нижнеудинск', 'Нижнеянск', 'Нижний Новгород', 'Нижний Тагил', 'Нижний Цасучей', 'Нижний Чир', 'Нижняя Пеша', 'Никель', 'Николаевск-на-Амуре', 'Николаевская', 'Николо-Полома', 'Никольск', 'Никольское', 'Ничатка', 'Новая Ладога', 'Новиково', 'Ново-Александровск', 'Ново-Иерусалим', 'Ново-Касторное', 'Новобирилюссы', 'Новокузнецк', 'Новолазаревская', 'Новороссийск', 'Новоселенгинск', 'Новосибирск', 'Новочунка', 'Новый Васюган', 'Новый Оскол', 'Новый Порт', 'Новый Торьял', 'Новый Уренгой', 'Ноглики', 'Ножовка', 'Нолинск', 'Нора', 'Норильск', 'Норск', 'Ноябрьск', 'Ныврово', 'Ныда', 'Нюрба', 'Нюя', 'Нязепетровск', 'Няксимволь', 'Няндома', 'Обловка', 'Облучье', 'Обоянь', 'Обская ГМО', 'Обьячево', 'Огурцово', 'Одесское', 'Озерки', 'Озерная', 'Озеро Таймыр', 'Озинки', 'Оймякон', 'Октябрьская', 'Октябрьское', 'Окунев Нос', 'Ола', 'Олекминск', 'Оленек', 'Оленья Речка', 'Оловянная', 'Олонец', 'Ольга', 'Омолон', 'Омск', 'Омсукчан', 'Онгудай', 'Онега', 'Опарино', 'Опочка', 'Орджоникидзевская', 'Ордынское', 'Орел', 'Оренбург', 'Орлик', 'Орлинга', 'Оса', 'Оссора', 'Осташков', 'Остров  Айон', 'Остров  Валаам', 'Остров  Вилькицкого', 'Остров  Голомянный', 'Остров  Русский', 'Остров  Спафарьева', 'Остров  Харлов', 'Остров Большой Ушканий', 'Остров Большой Шантар', 'Остров Визе', 'Остров Врангеля', 'Остров Диксон', 'Остров Котельный', 'Остров Преображения', 'Остров Тюлений', 'Острова Дунай', 'Острова Известий', 'Острова Челно-Вершины', 'Оха', 'Оханск', 'Охотничий', 'Охотск', 'Охотский Перевоз', 'Павелец', 'Павлово', 'Павловск', 'Павловский Посад', 'Павловское', 'Павлоградка', 'Паданы', 'Падун', 'Палана', 'Палатка', 'Памятная', 'Пангоды', 'Парабель', 'Партизанск', 'Пачелма', 'Певек', 'Пенза', 'Первомайское', 'Первомайское', 'Перелюб', 'Переславль-Залесский', 'Пермь', 'Петровск', 'Петровский Завод', 'Петрозаводск', 'Петрокрепость', 'Петропавловка', 'Петропавловск-Камчатский', 'Петропавловский Маяк', 'Петрунь', 'Петухово', 'Петушки', 'Печора', 'Пильво', 'Пинега', 'Пионерский', 'Пировское', 'Питляр', 'Погиби', 'Пограничное', 'Пограничный', 'Подгорное', 'Покровка', 'Покровская', 'Полигус', 'Половинное', 'Полтавка', 'Полтавка', 'Полуй', 'Полярный', 'Полярный', 'Помоздино', 'Понил', 'Поныри', 'Поронайск', 'Посевная', 'Поспелиха', 'Посьет', 'Пошехонье-Володарск', 'Поярково', 'Преображение', 'Приаргунск', 'Приволжск', 'Приморско-Ахтарск', 'Пролив Санникова', 'Промышленная', 'Прохладная', 'Прохоркино', 'Псков', 'Пугачев', 'Пудино', 'Пудож', 'Пустошь', 'Пушкинские Горы', 'Пущино', 'Пыщуг', 'Пялица', 'Пятигорск', 'Ра-Из', 'Радужный', 'Разнаволок', 'Реболы', 'Ребриха', 'Ревда', 'Ремонтное', 'Ржев', 'Родино', 'Родниковая', 'Романовка', 'Рославль', 'Ростов', 'Ростов-на-Дону', 'Рощино', 'Рощиной', 'Ртищево', 'Рубцовск', 'Рудная Пристань', 'Русская Поляна', 'Рыбинск', 'Рыльск', 'Ряжск', 'Рязань', 'Салемал', 'Салехард', 'Самара', 'Самарка', 'Санага', 'Сангары', 'Санкт-Петербург', 'Саныяхтат', 'Саранпауль', 'Саранск', 'Сарапул', 'Саратов', 'Саргатское', 'Саров', 'Сарыг-Сеп', 'Саскылах', 'Сасово', 'Светлоград', 'Светлолобово', 'Светлый', 'Свиягино', 'Свободный', 'Святой Нос', 'Северное', 'Северо-Енисейск', 'Северо-Курильск', 'Северодвинск', 'Североуральск', 'Сегежа', 'Сеген-Кюель', 'Сегжема', 'Сеймчан', 'Сектагли', 'Селты', 'Семячик', 'Сенгейский Шар', 'Сергач', 'Сергеевка', 'Сергокала', 'Серов', 'Серов', 'Серпухов', 'Сеяха', 'Сидоровск', 'Симушир', 'Сковородино', 'Славгород', 'Славянск-на-Кубани', 'Сладково', 'Слаутное', 'Смидович', 'Смоленск', 'Советск', 'Советская Гавань', 'Советская Речка', 'Совхоз Эльген', 'Совхоз им.Ленина', 'Сого-Хая', 'Солекуль', 'Солнечная', 'Соловьевск', 'Солонешное', 'Сопочная карга', 'Сортавала', 'Сосновка', 'Сосновка', 'Сосново', 'Сосново-Озерское', 'Сосуново', 'Сосьва', 'Софийский Прииск', 'Сочи (Адлер)', 'Спас-Деменск', 'Среднеколымск', 'Средний Васюган', 'Средний Калар', 'Средникан', 'Средняя Олекма', 'Сретенск', 'Ставрополь', 'Старица', 'Старица', 'Старый Оскол', 'Степановка', 'Стерлитамак', 'Столб', 'Стрелка', 'Сузун', 'Сукпай', 'Сунтар', 'Суон-Тит', 'Суоярви', 'Сура', 'Сургут', 'Сусуман', 'Сухана', 'Сухиничи', 'Сухобузимское', 'Сызрань', 'Сыктывкар', 'Сым', 'Сысерть', 'Сытомино', 'Таборы', 'Тавда', 'Таганрог', 'Таежная', 'Тазовский', 'Тайга', 'Тайгонос', 'Таймылыр', 'Тайшет', 'Таксимо', 'Талая', 'Талон', 'Тальменка', 'Тамбей', 'Тамбов', 'Тангуй', 'Танхой', 'Танюрер', 'Тара', 'Тарко-Сале', 'Тасеево', 'Тасса', 'Татарск', 'Таурово', 'Таштып', 'Тверь', 'Теви', 'Тевриз', 'Тегульдет', 'Тегультя', 'Телемба', 'Темников', 'Теплый Ключ', 'Тереховка', 'Териберка', 'Терней', 'Тетюши', 'Тивяку', 'Тигиль', 'Тикси', 'Тилишма', 'Тим', 'Тимирязевский', 'Тисуль', 'Тихвин', 'Тихорецк', 'Тобольск', 'Тогул', 'Тогучин', 'Токо', 'Толмачево', 'Толька', 'Тольятти', 'Томмот', 'Томпа', 'Томпо', 'Томск', 'Тонгулах', 'Тоора-Хем', 'Топки', 'Торбеево', 'Торжок', 'Торопец', 'Тотьма', 'Третьяково', 'Троицк', 'Троицко-Печорское', 'Троицкое', 'Троицкое', 'Трубчевск', 'Туапсе', 'Тугулым', 'Тула', 'Тулун', 'Тума', 'Туманная', 'Тумнин', 'Тунгокочен', 'Тунка', 'Туой-Хая', 'Тупик', 'Тура', 'Турий Рог', 'Туринск', 'Турочак', 'Туруханск', 'Турчасово', 'Тутончаны', 'Тында', 'Тырка', 'Тюкалинск', 'Тюмень', 'Тюмети', 'Тюхтет', 'Тяжин', 'Тяня', 'Уакит', 'Убинское', 'Угино', 'Углегорск', 'Угловское', 'Угут', 'Удское', 'Уега', 'Ужаниха', 'Ужур', 'Улан-Удэ', 'Улеты', 'Улья', 'Ульяновск', 'Умба', 'Унеча', 'Уни', 'Ура-Губа', 'Урми', 'Уруп', 'Урюпинск', 'Усолье-Сибирское', 'Усть-Антосе', 'Усть-Баргузин', 'Усть-Воямполка', 'Усть-Заза', 'Усть-Илимск', 'Усть-Ишим', 'Усть-Кабырза', 'Усть-Камо', 'Усть-Камчатск', 'Усть-Кан', 'Усть-Кара', 'Усть-Кара', 'Усть-Каренга', 'Усть-Кокса', 'Усть-Кулом', 'Усть-Кут', 'Усть-Лабинск', 'Усть-Мая', 'Усть-Миль', 'Усть-Мома', 'Усть-Нюкжа', 'Усть-Озерное', 'Усть-Олой', 'Усть-Омчуг', 'Усть-Ордынский', 'Усть-Тарка', 'Усть-Уда', 'Усть-Умальта', 'Усть-Уса', 'Усть-Уса', 'Усть-Хайрюзово', 'Усть-Цильма', 'Усть-Чаркы', 'Усть-Юдома', 'Усугли', 'Уфа', 'Ухта', 'Учами', 'Учур', 'Ушки', 'Уяр', 'Фролово', 'Хабардино', 'Хабаровск', 'Хабары', 'Хакасская', 'Хамар-Дабан', 'Ханты-Мансийск', 'Харабали', 'Хасавюрт', 'Хатанга', 'Хатырык-Хомо', 'Хвалынск', 'Хейджан', 'Хилок', 'Хову-Аксы', 'Ходовариха', 'Холмогоры', 'Холмск', 'Хорей-Вер', 'Хоринск', 'Хороль', 'Хоседа-Хард', 'Хуларин', 'Хулугли', 'Цакир', 'Целина', 'Целинное', 'Целинное', 'Центральный рудник', 'Цимлянск', 'Циммермановка', 'Цып-Наволок', 'Чаваньга', 'Чадан', 'Чаингда', 'Чайковский', 'Чаны', 'Чара', 'Чарышское', 'Чаун', 'Чебоксары', 'Чекунда', 'Челябинск', 'Чемал', 'Чемдальск', 'Чемурнаут', 'Червянка', 'Чердынь', 'Черемушки', 'Черемхово', 'Черемхово', 'Череповец', 'Черкесск', 'Черлак', 'Чермоз', 'Чернушка', 'Чернышевский', 'Черняево', 'Черняховск', 'Черский', 'Чертково', 'Черусти', 'Чистоозерное', 'Чистополь', 'Чита', 'Чокурдах', 'Чугуевка', 'Чулпаново', 'Чулым', 'Чульман', 'Чумикан', 'Чумпурук', 'Чурапча', 'Чюльбю', 'Шабалино', 'Шадринск', 'Шаим', 'Шалинское', 'Шамары', 'Шангалы', 'Шарыпово', 'Шарья', 'Шатрово', 'Шахты', 'Шахунья', 'Шебалино', 'Шевли', 'Шелаболиха', 'Шелагонцы', 'Шелехова', 'Шелопугино', 'Шенкурск', 'Шербакуль', 'Шереметьево', 'Шилка', 'Шимановск', 'Шира', 'Шойна', 'Шумиха', 'Шумиха', 'Щетинкино', 'Ыныкчан', 'Ытык-Кель', 'Эгвекинот', 'Эйк', 'Экимчан', 'Элиста', 'Эльтон', 'Энгозеро', 'Энкан', 'Эньмувеем', 'Эрзин', 'Эссо', 'Югоренок', 'Южно-Курильск', 'Южно-Сахалинск', 'Южно-Сухокумск', 'Южноуральск', 'Юильск', 'Юмурчен', 'Юрга', 'Юрты', 'Юрьев-Польский', 'Юрьевец', 'Юста', 'Юшкозеро', 'Ягодное', 'Яйлю', 'Яковлевка', 'Якутск', 'Якша', 'Ялуторовск', 'Ямкун', 'Янаул', 'Янискоски', 'Янов Стан', 'Янск', 'Яранск', 'Яренск', 'Ярольин', 'Ярославль', 'Ярцево', 'Яшкуль', 'Яя'];
var peoples = [{
    "fio": "И. Надежда",
    "image": "/img/women/women1.jpg",
    "sex": 0
}, {
    "fio": "Т. Регина",
    "image": "/img/women/women2.jpg",
    "sex": 0
}, {
    "fio": "К. Эмилия",
    "image": "/img/women/women3.jpg",
    "sex": 0
}, {
    "fio": "С. Анна",
    "image": "/img/women/women4.jpg",
    "sex": 0
}, {
    "fio": "Ч. Анастасия",
    "image": "/img/women/women5.jpg",
    "sex": 0
}, {
    "fio": "Ш. Евгения",
    "image": "/img/women/women6.jpg",
    "sex": 0
}, {
    "fio": "А. Нина",
    "image": "/img/women/women7.jpg",
    "sex": 0
}, {
    "fio": "К. Анфиса",
    "image": "/img/women/women8.jpg",
    "sex": 0
}, {
    "fio": "Г. Анна",
    "image": "/img/women/women9.jpg",
    "sex": 0
}, {
    "fio": "Ч. Екатерина",
    "image": "/img/women/women10.jpg",
    "sex": 0
}, {
    "fio": "Х. Виктория",
    "image": "/img/women/women11.jpg",
    "sex": 0
}, {
    "fio": "К. Мария",
    "image": "/img/women/women12.jpg",
    "sex": 0
}, {
    "fio": "П. Кристина",
    "image": "/img/women/women13.jpg",
    "sex": 0
}, {
    "fio": "П. Диана",
    "image": "/img/women/women14.jpg",
    "sex": 0
}, {
    "fio": "Б. Яна",
    "image": "/img/women/women15.jpg",
    "sex": 0
}, {
    "fio": "Ц. Мария",
    "image": "/img/women/women16.jpg",
    "sex": 0
}, {
    "fio": "Щ. Светлана",
    "image": "/img/women/women17.jpg",
    "sex": 0
}, {
    "fio": "Я. Алина",
    "image": "/img/women/women18.jpg",
    "sex": 0
}, {
    "fio": "Якушевич Наталья",
    "image": "/img/women/women19.jpg",
    "sex": 0
}, {
    "fio": "Ф. Диана",
    "image": "/img/women/women20.jpg",
    "sex": 0
}, {
    "fio": "П. Виктория",
    "image": "/img/women/women21.jpg",
    "sex": 0
}, {
    "fio": "Я. Василиса",
    "image": "/img/women/women22.jpg",
    "sex": 0
}, {
    "fio": "Р. Дарья",
    "image": "/img/women/women23.jpg",
    "sex": 0
}, {
    "fio": "Д. Юлия",
    "image": "/img/women/women24.jpg",
    "sex": 0
}, {
    "fio": "М. Татьяна",
    "image": "/img/women/women25.jpg",
    "sex": 0
}, {
    "fio": "Ш. Анна",
    "image": "/img/women/women26.jpg",
    "sex": 0
}, {
    "fio": "П. Евгения",
    "image": "/img/women/women27.jpg",
    "sex": 0
}, {
    "fio": "М. Алиса",
    "image": "/img/women/women28.jpg",
    "sex": 0
}, {
    "fio": "К. Ксения",
    "image": "/img/women/women29.jpg",
    "sex": 0
}, {
    "fio": "К. Вероника",
    "image": "/img/women/women30.jpg",
    "sex": 0
}, {
    "fio": "С. Алиса",
    "image": "/img/women/women31.jpg",
    "sex": 0
}, {
    "fio": "П. ﻿Агата",
    "image": "/img/women/women32.jpg",
    "sex": 0
}, {
    "fio": "К. Ольга",
    "image": "/img/women/women33.jpg",
    "sex": 0
}, {
    "fio": "Ё. Вероника",
    "image": "/img/women/women34.jpg",
    "sex": 0
}, {
    "fio": "А. Валентина",
    "image": "/img/women/women35.jpg",
    "sex": 0
}, {
    "fio": "К. Наталья",
    "image": "/img/women/women36.jpg",
    "sex": 0
}, {
    "fio": "П. Александра",
    "image": "/img/women/women37.jpg",
    "sex": 0
}, {
    "fio": "Т. Юлия",
    "image": "/img/women/women38.jpg",
    "sex": 0
}, {
    "fio": "Т. Варвара",
    "image": "/img/women/women39.jpg",
    "sex": 0
}, {
    "fio": "Б. Марина",
    "image": "/img/women/women40.jpg",
    "sex": 0
}, {
    "fio": "В. Нина",
    "image": "/img/women/women41.jpg",
    "sex": 0
}, {
    "fio": "П. Надежда",
    "image": "/img/women/women42.jpg",
    "sex": 0
}, {
    "fio": "Р. Любовь",
    "image": "/img/women/women43.jpg",
    "sex": 0
}, {
    "fio": "М. Татьяна",
    "image": "/img/women/women44.jpg",
    "sex": 0
}, {
    "fio": "Н. Анастасия",
    "image": "/img/women/women45.jpg",
    "sex": 0
}, {
    "fio": "Т. Юнона",
    "image": "/img/women/women46.jpg",
    "sex": 0
}, {
    "fio": "К. Инесса",
    "image": "/img/women/women47.jpg",
    "sex": 0
}, {
    "fio": "Я. Анна",
    "image": "/img/women/women48.jpg",
    "sex": 0
}, {
    "fio": "Л. Евгения",
    "image": "/img/women/women49.jpg",
    "sex": 0
}, {
    "fio": "А. Виктория",
    "image": "/img/women/women50.jpg",
    "sex": 0
}, {
    "fio": "Д. Антонина",
    "image": "/img/women/women51.jpg",
    "sex": 0
}, {
    "fio": "И. Мария",
    "image": "/img/women/women52.jpg",
    "sex": 0
}, {
    "fio": "З. Светлана",
    "image": "/img/women/women53.jpg",
    "sex": 0
}, {
    "fio": "Х. Елена",
    "image": "/img/women/women54.jpg",
    "sex": 0
}, {
    "fio": "С. Изабелла",
    "image": "/img/women/women55.jpg",
    "sex": 0
}, {
    "fio": "Д. Марфа",
    "image": "/img/women/women56.jpg",
    "sex": 0
}, {
    "fio": "М. Изабелла",
    "image": "/img/women/women57.jpg",
    "sex": 0
}, {
    "fio": "Г. Ангелина",
    "image": "/img/women/women58.jpg",
    "sex": 0
}, {
    "fio": "Д. Вячеслав",
    "image": "/img/men/men1.jpg",
    "sex": 1
}, {
    "fio": "Л. Руслан",
    "image": "/img/men/men2.jpg",
    "sex": 1
}, {
    "fio": "С. Радислав",
    "image": "/img/men/men3.jpg",
    "sex": 1
}, {
    "fio": "П. Ростислав",
    "image": "/img/men/men4.jpg",
    "sex": 1
}, {
    "fio": "К. Платон",
    "image": "/img/men/men5.jpg",
    "sex": 1
}, {
    "fio": "К. Игнатий",
    "image": "/img/men/men6.jpg",
    "sex": 1
}, {
    "fio": "Ч. Николай",
    "image": "/img/men/men7.jpg",
    "sex": 1
}, {
    "fio": "К. Изяслав",
    "image": "/img/men/men8.jpg",
    "sex": 1
}, {
    "fio": "С. Евгений",
    "image": "/img/men/men9.jpg",
    "sex": 1
}, {
    "fio": "Б. Максим",
    "image": "/img/men/men10.jpg",
    "sex": 1
}, {
    "fio": "А. Сергей",
    "image": "/img/men/men11.jpg",
    "sex": 1
}, {
    "fio": "Д. Самсон",
    "image": "/img/men/men12.jpg",
    "sex": 1
}, {
    "fio": "С. Владилен",
    "image": "/img/men/men13.jpg",
    "sex": 1
}, {
    "fio": "Л. Владислав",
    "image": "/img/men/men14.jpg",
    "sex": 1
}, {
    "fio": "Я. Аристарх",
    "image": "/img/men/men15.jpg",
    "sex": 1
}, {
    "fio": "Ф. Владимир",
    "image": "/img/men/men16.jpg",
    "sex": 1
}, {
    "fio": "К. Дмитрий",
    "image": "/img/men/men17.jpg",
    "sex": 1
}, {
    "fio": "Я. Вадим",
    "image": "/img/men/men18.jpg",
    "sex": 1
}, {
    "fio": "Г. Самсон",
    "image": "/img/men/men19.jpg",
    "sex": 1
}, {
    "fio": "П. Семён",
    "image": "/img/men/men20.jpg",
    "sex": 1
}, {
    "fio": "Я. Павел",
    "image": "/img/men/men21.jpg",
    "sex": 1
}, {
    "fio": "Т. Глеб",
    "image": "/img/men/men22.jpg",
    "sex": 1
}, {
    "fio": "Ш. Николай",
    "image": "/img/men/men23.jpg",
    "sex": 1
}, {
    "fio": "К. Илья",
    "image": "/img/men/men24.jpg",
    "sex": 1
}, {
    "fio": "А. Максим",
    "image": "/img/men/men25.jpg",
    "sex": 1
}, {
    "fio": "П. Ефим",
    "image": "/img/men/men26.jpg",
    "sex": 1
}, {
    "fio": "К. Герман",
    "image": "/img/men/men27.jpg",
    "sex": 1
}, {
    "fio": "С. Николай",
    "image": "/img/men/men28.jpg",
    "sex": 1
}, {
    "fio": "С. Степан",
    "image": "/img/men/men29.jpg",
    "sex": 1
}, {
    "fio": "Б. Владимир",
    "image": "/img/men/men30.jpg",
    "sex": 1
}, {
    "fio": "О. Вячеслав",
    "image": "/img/men/men31.jpg",
    "sex": 1
}, {
    "fio": "Т. Тимофей",
    "image": "/img/men/men32.jpg",
    "sex": 1
}, {
    "fio": "Я. Андрей",
    "image": "/img/men/men33.jpg",
    "sex": 1
}, {
    "fio": "М. Владислав",
    "image": "/img/men/men34.jpg",
    "sex": 1
}, {
    "fio": "Г. Ростислав",
    "image": "/img/men/men35.jpg",
    "sex": 1
}, {
    "fio": "К. Леонид",
    "image": "/img/men/men36.jpg",
    "sex": 1
}, {
    "fio": "Я. Серафим",
    "image": "/img/men/men37.jpg",
    "sex": 1
}, {
    "fio": "Ц. Всеволод",
    "image": "/img/men/men38.jpg",
    "sex": 1
}, {
    "fio": "В. Артём",
    "image": "/img/men/men39.jpg",
    "sex": 1
}, {
    "fio": "Б. Александр",
    "image": "/img/men/men40.jpg",
    "sex": 1
}, {
    "fio": "К. Кирилл",
    "image": "/img/men/men41.jpg",
    "sex": 1
}, {
    "fio": "К. Клавдий",
    "image": "/img/men/men42.jpg",
    "sex": 1
}, {
    "fio": "В. Зиновий",
    "image": "/img/men/men43.jpg",
    "sex": 1
}, {
    "fio": "У. Иван",
    "image": "/img/men/men44.jpg",
    "sex": 1
}, {
    "fio": "С. Кирилл",
    "image": "/img/men/men45.jpg",
    "sex": 1
}, {
    "fio": "Т. Лев",
    "image": "/img/men/men46.jpg",
    "sex": 1
}, {
    "fio": "Я. Ефим",
    "image": "/img/men/men47.jpg",
    "sex": 1
}, {
    "fio": "М. ﻿Артем",
    "image": "/img/men/men48.jpg",
    "sex": 1
}, {
    "fio": "И. Герман",
    "image": "/img/men/men49.jpg",
    "sex": 1
}, {
    "fio": "Ц. Егор",
    "image": "/img/men/men50.jpg",
    "sex": 1
}, {
    "fio": "Г. Дмитрий",
    "image": "/img/men/men51.jpg",
    "sex": 1
}, {
    "fio": "А. Кирилл",
    "image": "/img/men/men52.jpg",
    "sex": 1
}, {
    "fio": "К. Степан",
    "image": "/img/men/men53.jpg",
    "sex": 1
}, {
    "fio": "К. Дмитрий",
    "image": "/img/men/men54.jpg",
    "sex": 1
}, {
    "fio": "К. Анатолий",
    "image": "/img/men/men55.jpg",
    "sex": 1
}, {
    "fio": "Ц. Леонид",
    "image": "/img/men/men56.jpg",
    "sex": 1
}, {
    "fio": "М. Ефим",
    "image": "/img/men/men57.jpg",
    "sex": 1
}, {
    "fio": "Б. Митрофан",
    "image": "/img/men/men58.jpg",
    "sex": 1
}];

peoples = shuffleArray(peoples);
var cityName = '';



function showTips(bill, bill2) {
    this.bill = bill;
    this.bill2 = bill2;
    this.showItem = 0;
    this.generateHTML = function (image, fio, city, bill, bill2, sex) {
        var top = 50;
        // if ($('.freezing-info').length) {
        //     top = 229;
        // }
        var nowMoney = bill;
        if(getRandomInt(0,1)){
            nowMoney = bill2;
        }
        return (
        '<div class="notify" style="font-family: \'Roboto\', sans-serif; z-index:991000;display: none;opacity:0.1;background: rgb(93,126,50);border: 1px solid white;padding:15px;width:330px;height:70px;position:fixed;top:' + top + 'px;right:20px;box-sizing: border-box;color: white;">' +
        // '<img src="' + image + '" width="50" height="50" style="width:50px;box-sizing:content-box; height: 50px; padding-right:20px; float: left;">' +
        '<div class="notify-text" style="font-size: 14px;line-height:normal;">' + fio + ', г. ' + city + ', сделал' + (sex ? '' : 'а') + ' заказ на ' + nowMoney + ', кол-во 1шт</div>' +
        '</div>'
        );
    };
    this.addItem = function (html) {
        $(html).appendTo($(document.body));
        $('.notify').css('display', 'block');
        $('.notify').animate({
            opacity: 1.0
        }, 'slow');
    };
    this.bindEvent = function () {
        setTimeout(function () {
            $('.notify').animate({
                opacity: 0.1
            }, 'slow', function () {
                $('.notify').css('display', 'none');
                $('.notify').remove();
            });
        }, 10000);
    };
    this.getIntervalAction = function () {
        var self = this;
        return function () {
            var item = peoples[self.showItem];
            if (!item) {
                self.showItem = -1;
                var item = peoples[0];
            }
            self.showItem++;
            var city = cityName;

            if (getRandomInt(0, 1)) {
                city = cityList[getRandomInt(0, 1306)];
            }
            var html = self.generateHTML('images/yico.png', item.fio, city, self.bill, self.bill2, item.sex);
            self.addItem(html);
            self.bindEvent();
        }
    };

    setInterval(this.getIntervalAction(), 25000);
}
function addDeliveryPopup() {
    this.generateHTML = function (city) {
        return (
        '<div class="delivery-notify" style="font-family: Arial; z-index: 991000;background: #5D7E32;border: 1px solid white;padding:10px;padding-top: 10px;width:270px;height:60px;position:fixed;bottom:0px;left:0px;box-sizing: border-box;color: white;">' +
        '<div class="close-delivery-notify" style="width:15px;height:15px;cursor: pointer;position:absolute;right:0;top:0;border:1px solid #fff; font-size: 22px;line-height: 0.6;text-align: center;">&times;</div>' +
        '<div class="notify-text" style="color: white !important;">Действует быстрая доставка в г.' + city + '</div>' +
        '</div>'
        );
    };
    this.bindEvents = function () {
        $('.close-delivery-notify').on('click', function () {
            $('.delivery-notify').remove();
        });
        $(document).on('wheel', function () {
            if ($(document).scrollTop() + $(window).height() == $(document).height()) {
                if ($('.delivery-notify').length) {
                    $('.delivery-notify').remove();
                }
            }
        });
    };
    this.getShowAction = function () {
        var self = this;
        return function () {
            var html = self.generateHTML(cityName);
            $(html).appendTo($(document.body));
            self.bindEvents();
        };
    };

    setTimeout(this.getShowAction(), 5000);
}


