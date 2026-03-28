const counters = document.querySelectorAll('.counter-number');
  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    let count = 0;

    const updateCount = () => {
      const increment = target / 100;

      if (count < target) {
        count += increment;
        counter.innerText = Math.ceil(count);
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = target + "+";
      }
    };

    updateCount();
  });