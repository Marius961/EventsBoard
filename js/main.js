$(".topic-content").mouseover(function () {
    let infoDiv = $(this).find(".row").eq(1);
    let dateDiv = $(this).find(".content-box").eq(1);
    $(dateDiv).css("box-shadow", "0 0 4mm 0 #c0c0c0");
    $(infoDiv).slideDown(150);
});


$(".topic-content").mouseleave(function () {
    let info = $(this);
    let dateDiv = $(this).find(".content-box").eq(1);
    setTimeout(function () {
        let infoDiv = $(info).find('.row').eq(1);
        $(infoDiv).slideToggle(150);
        $(dateDiv).css("box-shadow", "0 0 0 0 #c0c0c0")
    }, 150);
});


$(".topic").click(function () {
    if ($(this).css("background-color") === "rgba(0, 0, 0, 0)") {
        $(this).css("background-color", "#ff841b");
        $(this).css("color", "snow");
    } else {
        $(this).css("background-color", "rgba(0, 0, 0, 0)");
        $(this).css("color", "black");
    }
    setTimeout(function () {
        loadEvents();
    }, 200);
});

$(document).ready(function () {
   loadEvents();
});

let itEvents = [
    {
        'html': '                <div class="row topic-content mb-3">\n' +
            '                    <div class="col-12 content-box">\n' +
            '                        <div class="row align-items-center" style="border-bottom: 0.3mm solid #d6d6d6">\n' +
            '                            <div class="col-1 text-center" style="background-color: #4194d6; color: snow">\n' +
            '                                <h1>IT</h1>\n' +
            '                            </div>\n' +
            '                            <div class="col-11">\n' +
            '                                <h3>ITEM</h3>\n' +
            '                                <h6 style="color: #b6b6b6">4 хвилини тому | 15487 переглядів</h6>\n' +
            '                            </div>\n' +
            '                        </div>\n' +
            '                        <div class="row p-2" style="display: none">\n' +
            '                            <h4 class="m-2">2 Days. 6 Tracks.</h4>\n' +
            '                            <a>\n' +
            '                                ITEM\'s goal is to give you tools and practices for software development, teamwork and organization structure to incorporate into your project, product and company culture, so we can launch a new era of software development in Ukraine.\n' +
            '                            </a>\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '                    <div class="col p-3 content-box" style="font-size: 6mm;">\n' +
            '                        <div class="row">\n' +
            '                            <div class="col-sm-auto pr-1">25</div>\n' +
            '                            <div class="col-sm-auto">червня</div>\n' +
            '                            <div class="col-sm-auto pl-4">2018</div>\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '                </div>'
    },
    {
        'html': '                <div class="row topic-content mb-3">\n' +
            '                    <div class="col-12 content-box">\n' +
            '                        <div class="row align-items-center">\n' +
            '                            <div class="col-1 text-center" style="background-color: #4194d6; color: snow">\n' +
            '                                <h1>IT</h1>\n' +
            '                            </div>\n' +
            '                            <div class="col-11">\n' +
            '                                <h3>Mobile Beach Conference</h3>\n' +
            '                                <h6 style="color: #b6b6b6">4 хвилини тому | 15487 переглядів</h6>\n' +
            '                            </div>\n' +
            '                        </div>\n' +
            '                        <div class="row p-2" style="display: none">\n' +
            '                            <a>\n' +
            '                                Каждый год Mobile Beach Conference собирает в Одессе лидеров отрасли: предпринимателей, маркетологов, техно-гиков, основателей стартапов и инвесторов.\n' +
            '\n' +
            '                                В 2018 году конференция становится еще больше и открывает двери для лидеров из таких инновационных сфер, как видео, виртуальная реальность, дополненная реальность и искусственный интеллект.\n' +
            '                            </a>\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '                    <div class="col p-3 content-box" style="font-size: 6mm;">\n' +
            '                        <div class="row">\n' +
            '                            <div class="col-sm-auto pr-1">14</div>\n' +
            '                            <div class="col-sm-auto">вересня</div>\n' +
            '                            <div class="col-sm-auto pl-4">2018</div>\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '                </div>'
    }
];

let musicEvents = [
    {
        'html': '                <div class="row topic-content mb-3">\n' +
            '                    <div class="col-12 content-box">\n' +
            '                        <div class="row align-items-center">\n' +
            '                            <div class="col-1 text-center" style="background-color: #d65e26; color: snow">\n' +
            '                                <h1>M</h1>\n' +
            '                            </div>\n' +
            '                            <div class="col-11">\n' +
            '                                <h6 style="color: #b6b6b6">4 хвилини тому | 15487 переглядів</h6>\n' +
            '                            </div>\n' +
            '                        </div>\n' +
            '                        <div class="row p-2" style="display: none">\n' +
            '                            <h4 class="m-2">2 Days. 6 Tracks.</h4>\n' +
            '                            <a>\n' +
            '                                Популярний американський рок-гурт вперше відіграє концерт в Україні. Раніше Evanescence вже виходили на українську сцену – під час фестивалю The Best City.UA у 2012-му. Тепер же вони порадують своїх українських фанів повноцінним сольним концертом.\n' +
            '\n' +
            '                                Неймовірний вокал Емі Лі, гітарні рифи та потужний драйв принесли Evanescence мільйони фанатів по всьому світу. На їхньому рахунку 3 альбоми, "Греммі", місце у топ-50 Best Selling Singles.\n' +
            '                            </a>\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '                    <div class="col p-3 content-box" style="font-size: 6mm;">\n' +
            '                        <div class="row">\n' +
            '                            <div class="col-sm-auto pr-1">30</div>\n' +
            '                            <div class="col-sm-auto">серпня</div>\n' +
            '                            <div class="col-sm-auto pl-4">2018</div>\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '                </div>'
    },
    {
        'html': '                <div class="row topic-content  mb-3">\n' +
            '                    <div class="col-12 content-box">\n' +
            '                        <div class="row align-items-center">\n' +
            '                            <div class="col-1 text-center" style="background-color: #d65e26; color: snow">\n' +
            '                                <h1>M</h1>\n' +
            '                            </div>\n' +
            '                            <div class="col-11">\n' +
            '                                <h3>Depeche Mode 19 липня</h3>\n' +
            '                                <h6 style="color: #b6b6b6">4 хвилини тому | 15487 переглядів</h6>\n' +
            '                            </div>\n' +
            '                        </div>\n' +
            '                        <div class="row p-2" style="display: none">\n' +
            '                            <a>\n' +
            '                                Легендарні британці завітають до Києва вже втретє. Цього літа вони знову збирають "Олімпійський", де відіграють концерт на підтримку свого нового альбому Global Spirit.\n' +
            '\n' +
            '                                За свою історію Depeche Mode продали понад 100 млн. записів і відіграли концерти для понад 30 млн. фанів по всьому світу. В їхньому арсеналі – 13 студійних альбомів, 44 сингли і велика кількість збірок. Їхня музика вплинула та надихнула багатьох музикантів, а критики вважають Depeche Mode вічними новаторами і трендсеттерами.\n' +
            '                            </a>\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '                    <div class="col p-3 content-box" style="font-size: 6mm;">\n' +
            '                        <div class="row">\n' +
            '                            <div class="col-sm-auto pr-1">29</div>\n' +
            '                            <div class="col-sm-auto">червня</div>\n' +
            '                            <div class="col-sm-auto pl-4">2018</div>\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '                </div>'
    }
];

let filmsEvents = [
    {
        'html': '                <div class="row topic-content mb-3">\n' +
            '                    <div class="col-12 content-box">\n' +
            '                        <div class="row align-items-center">\n' +
            '                            <div class="col-1 text-center" style="background-color: #463ad6; color: snow">\n' +
            '                                <h1>F</h1>\n' +
            '                            </div>\n' +
            '                            <div class="col-11">\n' +
            '                                <h3>Агент Джонні Інгліш: Нова місія</h3>\n' +
            '                                <h6 style="color: #b6b6b6">4 хвилини тому | 15487 переглядів</h6>\n' +
            '                            </div>\n' +
            '                        </div>\n' +
            '                        <div class="row p-2" style="display: none">\n' +
            '                            <a>\n' +
            '                                Коли все агенти секретної служби Її Величності раптово виходять з ладу, в гру вступає запасний варіант. Зразок англійського стилю і улюбленець фатальних красунь; король безвихідних ситуацій і хранитель аналогових традицій в цифровому світі, агент Джонні Інгліш - біль і гордість британської розвідки. Цьому хлопцю є що збовтувати, і він сколотить не по-дитячому.\n' +
            '                            </a>\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '                    <div class="col p-3 content-box" style="font-size: 6mm;">\n' +
            '                        <div class="row">\n' +
            '                            <div class="col-sm-auto pr-1">5</div>\n' +
            '                            <div class="col-sm-auto">лютого</div>\n' +
            '                            <div class="col-sm-auto pl-4">2018</div>\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '                </div>'
    },
    {
        'html': '                <div class="row topic-content mb-3">\n' +
            '                    <div class="col-12 content-box">\n' +
            '                        <div class="row align-items-center">\n' +
            '                            <div class="col-1 text-center" style="background-color: #463ad6; color: snow">\n' +
            '                                <h1>F</h1>\n' +
            '                            </div>\n' +
            '                            <div class="col-11">\n' +
            '                                <h3>Хижак</h3>\n' +
            '                                <h6 style="color: #b6b6b6">4 хвилини тому | 15487 переглядів</h6>\n' +
            '                            </div>\n' +
            '                        </div>\n' +
            '                        <div class="row p-2" style="display: none">\n' +
            '                            <a>\n' +
            '                                Тремблей\n' +
            '                                Полювання ніколи не було таким небезпечним для жертв... З далеких куточків космосу на Землю прибули інопланетні монстри, які вміють тільки вбивати. Їх звуть Хижаки, і про мирні договори вони ніколи не чули. Вони не збираються просто існувати - їм треба завойовувати космос. Далеко не всі знають про них. Куїнн МакКенна один з тих, хто виявив Хижаків на Землі, але йому ніхто не хоче вірити. Та й те, що він знає, краще тримати в таємниці від всієї планети. Але за цей час тварі еволюціонували - тепер у них є ідеальний Хижак, який перевершує попередніх в рази. Доля планети лежить на плечах маленького сина Куїнна на ім\'я Рорі, який розуміє мову прибульців.\n' +
            '                            </a>\n' +
            '                        </div>\n' +
            '\n' +
            '                    </div>\n' +
            '                    <div class="col p-3 content-box" style="font-size: 6mm;">\n' +
            '                        <div class="row">\n' +
            '                            <div class="col-sm-auto pr-1">6</div>\n' +
            '                            <div class="col-sm-auto">лютого</div>\n' +
            '                            <div class="col-sm-auto pl-4">2018</div>\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '                </div>'
    }
];

let gamesEvents = [
    {
        'html': '                <div class="row topic-content mb-3">\n' +
            '                    <div class="col-12 content-box">\n' +
            '                        <div class="row align-items-center">\n' +
            '                            <div class="col-1 text-center" style="background-color: #333333; color: snow">\n' +
            '                                <h1>G</h1>\n' +
            '                            </div>\n' +
            '                            <div class="col-11">\n' +
            '                                <h3>Call of Duty: Black Ops 4</h3>\n' +
            '                                <h6 style="color: #b6b6b6">4 хвилини тому | 15487 переглядів</h6>\n' +
            '                            </div>\n' +
            '                        </div>\n' +
            '                        <div class="row p-2" style="display: none">\n' +
            '                            <a>\n' +
            '                                Call of Duty: Black Ops 4 — это шутер от первого лица, разрабатываемый студией Treyarch.\n' +
            '                            </a>\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '                    <div class="col p-3 content-box" style="font-size: 6mm;">\n' +
            '                        <div class="row">\n' +
            '                            <div class="col-sm-auto pr-1">18</div>\n' +
            '                            <div class="col-sm-auto">жовтня</div>\n' +
            '                            <div class="col-sm-auto pl-4">2018</div>\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '                </div>'
    },
    {
        'html': '                <div class="row topic-content mb-3">\n' +
            '                    <div class="col-12 content-box">\n' +
            '                        <div class="row align-items-center">\n' +
            '                            <div class="col-1 text-center" style="background-color: #333333; color: snow">\n' +
            '                                <h1>G</h1>\n' +
            '                            </div>\n' +
            '                            <div class="col-11">\n' +
            '                                <h3>Deliver Us the Moon</h3>\n' +
            '                                <h6 style="color: #b6b6b6">4 хвилини тому | 15487 переглядів</h6>\n' +
            '                            </div>\n' +
            '                        </div>\n' +
            '                        <div class="row p-2" style="display: none">\n' +
            '                            <a>\n' +
            '                                Deliver Us the Moon — приключенческая игра от третьего лица. Действие Deliver Us the Moon разворачивается в далеком будущем. Ресурсы планеты почти исчерпаны, что толкает людей объединиться для создания всемирной космической ассоциации, под управлением которой астронавты начинают исследование лунной поверхности. Но из-за многочисленных разногласий, программа заходит в тупик.\n' +
            '\n' +
            '                                Сюжет рассказывает об астронавте, который должен найти выход из сложившейся ситуации и спасти человечество. Герой вместе со своим роботом-помощником исследует заброшенные лунные лаборатории, решает головоломки и находит секретные документы, проливающие свет на многие события.\n' +
            '                            </a>\n' +
            '                        </div>\n' +
            '\n' +
            '                    </div>\n' +
            '                    <div class="col p-3 content-box" style="font-size: 6mm;">\n' +
            '                        <div class="row">\n' +
            '                            <div class="col-sm-auto pr-1">1</div>\n' +
            '                            <div class="col-sm-auto">січня</div>\n' +
            '                            <div class="col-sm-auto pl-4">2018</div>\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '                </div>'
    }
];

let topicsList = [
    {
        'name': 'it',
        'color': '',
        'events': itEvents
    },
    {
        'name': 'music',
        'color': '',
        'events': musicEvents
    },
    {
        'name': 'films',
        'color': '',
        'events': filmsEvents
    },
    {
        'name': 'games',
        'color': '',
        'events': gamesEvents
    }
];

let events = $("#events");

function loadEvents() {
    $(events).fadeOut(150);
    setTimeout(function () {
        $(events).html("");
        let activeTopics = [];
        let filters = $(".topic");
        for (let i = 0; i< $(filters).length; i++) {
            if ($(filters[i]).css("background-color") === "rgb(255, 132, 27)") {
                activeTopics.push($(filters[i]).attr("id"));
            }
        }
        for (let i2 = 0; i2< activeTopics.length; i2++) {
            for (let i3 = 0; i3<topicsList.length; i3++) {
                if (topicsList[i3].name === activeTopics[i2]) {
                    for (let i4 = 0; i4 < topicsList[i3].events.length; i4++) {
                        addEventRecord(topicsList[i3].events[i4]);
                    }
                }
            }
        }
    }, 150);
    $(events).fadeIn(150);
}

function addEventRecord(event) {
    $("#events").append(event.html)
}