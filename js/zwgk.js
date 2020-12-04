{
    let lis = document.querySelectorAll('.list .item>ul>li');
    // console.log(lis);
    lis.forEach(item => {
        item.addEventListener('click', function() {
            PageTo('list.html')
        })
    });


    let cards = document.querySelectorAll('.card .grid');
    let zindex;

    cards.forEach((item, index) => {
        item.addEventListener('mouseover', (e) => {
            cardIndex()
            item.style.zIndex = 99;
            item.classList.add('on');
            // console.log(item);
            switch (index) {
                case 0:
                    zindex = 5;
                    for (let i = 1; i < cards.length; i++) {
                        zindex--;
                        cards[i].style.zIndex = zindex;
                    }
                    break;
                case 2:
                    zindex = 3;
                    for (let i = 0; i < 2; i++) {
                        zindex++;
                        cards[i].style.zIndex = zindex;
                    }
                    break;
                case 3:
                    zindex = 3;
                    for (let i = 0; i < 3; i++) {
                        zindex++;
                        cards[i].style.zIndex = zindex;
                    }
                    break;
                case 4:
                    zindex = 1;
                    for (let i = 0; i < cards.length - 1; i++) {
                        zindex++;
                        cards[i].style.zIndex = zindex;
                    }
                    break;
            }
        });
        item.addEventListener('mouseout', () => {
            cardIndex();
            cards[0].classList.add('on');
        })
    })

    function cardIndex() {
        cards[0].style.zIndex = 6;
        cards[1].style.zIndex = 5;
        cards[2].style.zIndex = 4;
        cards[3].style.zIndex = 3;
        cards[4].style.zIndex = 2;
        cards.forEach(item => {
            item.classList.remove('on');
        });
    }

}