export const scrollTarget = (section) => {
    
    if(!section) return;

    const offsetTop = section.offsetTop-80;

    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth',
    });
  }

export const handleScroll = (e, active, sections) => {

    const scrollPosition = window.scrollY;

    for(let index = 0; index<5; index++) {
        if(index == 0){
            if (scrollPosition < sections[1].offsetTop) 
            {
              active.value = 'active1';
            } 
        } 
        else 
        {
            if( index < 4)
            {
              if (scrollPosition+80 >= sections[index].offsetTop && scrollPosition+80 < sections[index + 1].offsetTop) 
              {
                active.value = `active${index+1}`;
              }
            } 
            else 
            {
              if (scrollPosition+80 >= sections[4].offsetTop) 
              {
                active.value = 'active5';
              } 
            }
        }
    }
};