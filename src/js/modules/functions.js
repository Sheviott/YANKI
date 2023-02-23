export function scroll() {
    const header = document.querySelector('.header');
    const headerCatalog = document.querySelector('.__white-header.header');
    let lastScroll = 0;
    const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;

    // position:sticky для оформления заказа + высота header'a
    const sticky = document.querySelector('.order-info__wrap');
    if(sticky) {
        sticky.style.top = header.clientHeight + 20 + 'px' //(20 - отступ)
    }
// хедер на главной странице
    if (header && !headerCatalog) {
          const fullScreenScroll = document.documentElement.clientHeight - header.clientHeight;
          const containHide = () => header.classList.contains('__scroll-on');

          window.addEventListener('scroll', () => {
              if(scrollPosition() > lastScroll && !containHide() && scrollPosition() > fullScreenScroll) {
                  header.classList.add('__scroll-on');
              }
              else if(scrollPosition() < lastScroll && containHide() && scrollPosition() < fullScreenScroll){
                  header.classList.remove('__scroll-on');
              }
              lastScroll = scrollPosition();
          })
    }
    // белый хедер
    if (headerCatalog) {
          const scroll = 1;
          const containHide = () => headerCatalog.classList.contains('__scroll-on-catalog');

          window.addEventListener('scroll', () => {
              if(scrollPosition() > lastScroll && !containHide() && scrollPosition() > scroll) {
                headerCatalog.classList.add('__scroll-on-catalog');
              }
              else if(scrollPosition() < lastScroll && containHide() && scrollPosition() < scroll){
                headerCatalog.classList.remove('__scroll-on-catalog');
              }
              lastScroll = scrollPosition();
          })
    }
}
