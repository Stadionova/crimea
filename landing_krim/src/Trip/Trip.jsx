import React from 'react';
import classes from './Trip.module.css';
import Navigation from '../Navigation/Navigation';
import EachDay from '../EachDay/EachDay';

const dayDescriptions = {
    1: 'Наш путь начался с Судака, куда мы ехали 2 часа на такси от аэропорта Симферополя.',
    2: `Второй день начался с того, что от нас ушёл Джошуа. 
    А закончился первым, но не последним (спойлер) разведением костра.`,
    3: 'Целый день шли через густой туман, посетили памятник партизанам ВОВ.',
    4: `Шли через ущелье с кучей поваленных деревьев, видели косулю. 
    Нашли бивуак, но больше он был похож на цыганский табор - первые постирушки.`,
    5: `Мы в горах, воды толком нет, пришлось бежать вниз 1км. 
    Заночевали на самой вершине, где даже снег ещё лежал, спать было очень холодно.`,
    6: 'День маминого ностальжи, сопки кругом.',
    7: 'Не сделала ни одного фота, телефон весь день разряжен, солнца, чтоб зарядить паурбэнки нет - девайсный детокс.',
    8: `Лазаем по скалам, впереди вертикальный спуск вниз до посёлка, там закупка еды и первая помывка головы. 
    Ночёвка и табун лошадей на бивуаке, покушавшихся ночью на нашу жизнь. Сделала всего 1 фото.`,
    9: 'Не сделала ни одного фото.',
    10: 'Попали в егерьский лес, видели целую кучу косуль, что под конец пути уже перестали им удивляться.',
    11: `Очередной посёлок на нашем пути, мороженка и долгий путь по полям, жара, нервы сдают. 
    Впереди ждёт Бахчисарай, бахчикэмп, душ и полноценный качественный сон.`
}

const additionalBeforeHoverHideText = {
    1: 'Старт в Судаке! Пройден: 21км',
    2: 'Новый друг! Пройдено: 18.7км',
    3: 'Ой туманы мои растуманы! Пройдено: 23.5км',
    4: 'Хорошая новость! Пройдено: 15км',
    5: 'Все выше и выше! Пройдено: 15.5км',
    6: 'Спасательное одеяло! Пройдено: 18.5км',
    7: 'Седьмой день! Пройдено: 19км',
    8: 'Восьмой день! Пройдено: 13.5км',
    9: 'Девятый день! Пройдено: 19.5км',
    10: 'Десятый день! Пройдено: 27.5км',
    11: 'Одиннадцатый день! Пройдено: 28.5км'
}

const Trip = () => {
    return (
        <div className={classes.trip}>
            <Navigation changeColor='black' />
            <div>
                <p>Наш поход длился 11 дней.
                <br />Шли мы от Судака до Бахчисарая по Крымской тропе.
                <br />Затем сошли с тропы и провели по 2 дня в каждом из городов: Бахчисарай, Севастополь и Симферополь.
            </p>
            </div>
            <div className={classes.day}>
                <EachDay day={1} desc={dayDescriptions[1]} addHideText={additionalBeforeHoverHideText[1]} />
                <EachDay day={2} desc={dayDescriptions[2]} addHideText={additionalBeforeHoverHideText[2]} />
            </div>
            <div className={classes.day}>
                <EachDay day={3} desc={dayDescriptions[3]} addHideText={additionalBeforeHoverHideText[3]} />
                <EachDay day={4} desc={dayDescriptions[4]} addHideText={additionalBeforeHoverHideText[4]} />
            </div>
            <div className={classes.day}>
                <EachDay day={5} desc={dayDescriptions[5]} addHideText={additionalBeforeHoverHideText[5]} />
                <EachDay day={6} desc={dayDescriptions[6]} addHideText={additionalBeforeHoverHideText[6]} />
            </div>
            <div className={classes.day}>
                <EachDay day={7} desc={dayDescriptions[7]} addHideText={additionalBeforeHoverHideText[7]} />
                <EachDay day={8} desc={dayDescriptions[8]} addHideText={additionalBeforeHoverHideText[8]} />
            </div>
            <div className={classes.day}>
                <EachDay day={9} desc={dayDescriptions[9]} addHideText={additionalBeforeHoverHideText[9]} />
                <EachDay day={10} desc={dayDescriptions[10]} addHideText={additionalBeforeHoverHideText[10]} />
            </div>
            <div className={classes.day}>
                <EachDay day={11} desc={dayDescriptions[11]} addHideText={additionalBeforeHoverHideText[11]} />
            </div>
        </div>
    )
}

export default Trip;
